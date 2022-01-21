import React from "react";
import { useState } from "react";

const ToDosManager = () => {
	const [myList, setMyList] = useState([]);
	const [task, setTask] = useState("");

	const AddTask = () => {
		const auxList = myList.concat({ title: task, id: myList.length + 1 });
		setMyList(auxList);
	};
	const DeleteTask = id => {
		const auxList = myList.filter(todo => todo.id !== id);
		setMyList(auxList);
	};

	return (
		<div className="todo-list">
			<h1 className="header">
				Everything I need to do before have a lazy Netflix and pizza
				night 🍕
			</h1>
			<input
				type="text"
				value={task}
				onChange={e => {
					setTask(e.target.value);
				}}
				required //if it's not required we can add empty tasks
			/>
			<button className="add" required onClick={AddTask}>
				Add a new task!
			</button>

			<ul>
				{myList.map(task => {
					return (
						<li key={task.id}>
							{task.title}
							<button
								className="delete"
								onClick={() => DeleteTask(task.id)}>
								Done!
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
export default ToDosManager;
