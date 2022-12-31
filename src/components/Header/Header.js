import React from "react";

const Header = () => {
    return ( 
        <div className="container_header">
            <div className="header">
                <h1>Основні завдання</h1>
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

     );
}
 
export default Header;
