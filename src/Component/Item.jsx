function Item({ item , setTodos}) {
    const completeTodo = () => {
        setTodos((prevTodos) => 
            prevTodos.map((todo) => 
                todo.id === item.id
                    ? { ...todo, is_completed: !todo.is_completed } : todo 
                )
            );
    };

    return (
        <li id={item?.id} className="todo_item" onClick={completeTodo}> 
            <button className="todo_items_left">
                <svg>
                    <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998" />
                </svg>
                <p>{item?.title}</p>
            </button>
            <div className="todo_items_right">
                <button>
                    <span className="visually-hidden">Edit</span>
                    <svg>
                        <path d="" />
                    </svg>
                </button>
                <button>
                    <span className="visually-hidden">Delete</span>
                    <svg>
                        <path d="" />
                    </svg>
                </button>
            </div>
        </li>
    );
}

export default Item;