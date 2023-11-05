import { useEffect, useState } from "react";
import Card from "./Card";



const App = () => {

    const [todo, setTodo] = useState(null);
    const [value, setValue] = useState('');
    
    const clickHandler = () => {
        if (value) {
            setTodo(todo?.length > 0 ? [...todo, value] : [value]);
            setValue('');
        }
    }
console.log(todo);
    return (
        <div className="app-container">
        <div id='input'>
            <input type='text'
                name='todo'
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={clickHandler}>Submit</button>
            </div>
            {
                todo && todo.map((item, index) => {
                    return <Card item={item} index={index} setTodo={setTodo} todo={todo} key={index}/>
                })
            }
        </div>
    );
}
export default App;