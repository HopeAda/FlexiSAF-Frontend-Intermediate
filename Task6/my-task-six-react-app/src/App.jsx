import { useEffect, useState } from "react";
import "./App.css";
import ListItem from "./ListItem";

function App() {
	const [todoList, setTodoList] = useState([]);
	const [inputValue, setInputValue] = useState("");
	const inputHandler = (event) => {
		setInputValue(event.target.value);
	};
	const submitHandler = (event) => {
		event.preventDefault();
		if (inputValue != "") {
			setTodoList([{todoName: inputValue,
                    todoStatus: false,
                    id: Date.now()
      }, ...todoList]);
		}
		setInputValue("");
	};
	const deleteHandler = (ind) => {
		setTodoList((prev) => prev.filter((itm) => itm.id !== ind));
	};
  const mainCheckHandler = (ind, checked) => {
    setTodoList(todoList.map((itm) => itm.id == ind ? {...itm, todoStatus: checked} : itm))
  }
  const clearAllHandler = () =>{
    setTodoList([])
  }
 
  useEffect(()=>{
    console.log(todoList)
  }, [todoList])

	return (
		<div className="app">
			<h1>TODO LIST</h1>
			<div className="date-info">
				<div className="weekday">
					{new Date().toLocaleString("en-US", { weekday: "long" })}
				</div>
				<div className="rest">
					{new Date().toLocaleString("en-US", {
						month: "short",
						day: "numeric",
						year: "numeric",
					})}
				</div>
			</div>
			<div className="listInfo">{todoList.filter(itm => itm.todoStatus == false).length} tasks left</div>

			<form onSubmit={submitHandler} className="input-area">
				<input
					type="text"
					value={inputValue}
					onChange={inputHandler}
					placeholder="Input a todo..."
				/>
				<button>Add</button>
			</form>
			<div className="list-container">
				{todoList.length == 0 ? (
					<p>No item in list</p>
				) : (
					todoList.map((itm) => (
						<ListItem
							data={itm}
							key={itm.id}
							id={itm.id}
							delHandler={deleteHandler}
              checkFn = {mainCheckHandler}
						></ListItem>
					))
				)}
        <hr />
        <div className="clear" onClick={clearAllHandler}><button>Clear All</button></div>
			</div>
		</div>
	);
}

export default App;
