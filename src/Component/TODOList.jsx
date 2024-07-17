import Item from "./Item";

function TODOList({ todos }) {
    return (
        <ol className="todo_list">
            { todos && todos.length > 0 ? (
                todos?.map((item, index) => (
                    <Item key={index} item={item} setTodos={setTodos} />
                ))
            ) : (
                <p>Seems lonely in here, What are you up to?</p>
            )}
        </ol>
    )
}

export default TODOList;