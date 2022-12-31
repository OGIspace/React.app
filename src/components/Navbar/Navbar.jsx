import { useEffect, useState } from "react";
import { getTopNav } from "./../data/navbars"
import ToDoForm from "../ToDo/ToDoForm";
import ToDo from "../ToDo/ToDo";


const Navbar = () => {
  const [navItems, setNavItems] = useState([]);
  const [collapse, setCollapse] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("toggler__icon");
  const [todos, setTodos] = useState([])

  const addTask = (userInput) => {
    if(userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2,9),
        task: userInput,
        complete: false
      }
      setTodos([...todos, newItem])
    }
  }
  
  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) => 
        todo.id === id ? { ...todo, complete: !todo.complete } : {...todo }
      )
    ])
  }

  useEffect(() => {
    setNavItems(getTopNav());
  }, []);

  const onToggle = () => {
    collapse === "nav__menu"
      ? setCollapse("nav__menu nav__collapse")
      : setCollapse("nav__menu");

    toggleIcon === "toggler__icon"
      ? setToggleIcon("toggler__icon toggle")
      : setToggleIcon("toggler__icon");
  };

  return (
    <>
    <div className="nav__wrapper">
      <div className="container">
        <nav className="nav">
          <a href="#" className="nav__brand">
          </a>
          <button className="btn_1" id="myBtn">+</button>
          <div id="myModal" class="modal">
            <div class="modal-content">
              <span class="close">&times;</span>
                <p>Що мудруємо???</p>
                <ToDoForm addTask={addTask} />
            </div>
          </div>
          <ul className={collapse}>
            {navItems.map((item) => (
              <li key={item.id} className="nav__item">
                <a href={item.href} className="nav__link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className={toggleIcon} onClick={onToggle}>
            <div className="line__1"></div>
            <div className="line__2"></div>
            <div className="line__3"></div>
          </div>
        </nav>

      </div>
    </div>
    <div className="container_header">
            <div className="header">
                <h1 className="text_content">Основні завдання</h1>
                {todos.map((todo) => {
                    return (
                        <ToDo
                            todo={todo}
                            key={todo.id}
                            toggleTask={handleToggle}
                            removeTask={removeTask}
                            />
                        )
                    })}

            </div>
        </div>
      
    </>
  );
};

export default Navbar;
