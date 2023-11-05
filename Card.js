import { useState } from "react";



const Card = ({ item, index, setTodo, todo }) => {
    const [userEdit, setUser] = useState(item);
    const [editNow, setEditNow] = useState(true);
    const changeHandler = (e) => {
        setUser(e.target.value);
    }
    const deleteHandler = (e) => {
        setTodo(todo.filter((item, ind) => ind !== index ));
    }
    const saveHandler = () => {
        if (userEdit.length > 0) {
            const newArray = todo.toSpliced(index, 1, userEdit);
            setTodo(newArray);
            setEditNow(true);
        }
        else {
            deleteHandler();
        }
    }
    return (
        <div className="todo">
            <input type='text'
                value={userEdit}
                onChange={changeHandler}
                readOnly={editNow}
            />
            <button onClick={() => setEditNow(false)}>Edit</button>
            <button onClick={deleteHandler}>Delete</button>
            <button onClick={saveHandler}>Save</button>
        </div>
    );
}
export default Card;