"use client";
import { useState } from "react";

type Todos = {
	id: number;
	task: string;
	done: boolean;
};
export default function Home() {
	const [task, setTask] = useState<string>("");
	const [todoList, setTodoList] = useState<Todos[]>([]);

	function addTodoList() {
		if (task) {
			const todo = {
				id: todoList.length + 1,
				task,
				done: false,
			};
			setTodoList((prev) => [...prev, todo]);
			setTask("");
		} else alert(" Add a To Do");
	}
// deletion
	const deleteTodoList = (id: number) => {
	  	setTodoList(todoList.filter((todo)=>todo.id !==id));
		console.log(id)
};

// --

	const todoToodle = (id: number) => {
		setTodoList((prev) => prev.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
	};

	return (
		<main className="flex flex-col items-center justify-start p-20  h-screen">
			<h1 className="text-blue-400 text-2xl font-semibold">TO-DO List</h1>

			<div className="flex mt-10 w-3/4 ">
				<input
					type="text"
					className="p-2 text-black w-full rounded-s-lg"
					value={task}
					onChange={(e) => {
						setTask(e.target.value);
					}}
				/>
				<button className="bg-purple-500 px-4 text-xl font-semibold text-white rounded-e-lg  hover:bg-purple-900" onClick={addTodoList}>
					ADD
				</button>
			</div>

			<div className=" flex  flex-col  mt-6 w-3/4 ">
				{todoList ? (
					<div className="bg-[#282727] flex flex-col gap-y-4 px-6 p-2 rounded-lg">
						{todoList.map((todo, index) => (
							<div className="flex   gap-4" key={index}>
								<input type="checkbox" className="w-10" checked={todo.done} onChange={() => todoToodle(todo.id)} />
								<p key={todo.id} className={`bg-slate-600 rounded-lg w-full p-2 text-lg text-center text-white ${todo.done ? "line-through " : ""}`}>
									{todo.task}
								</p>
								<button>{"✏️"}</button>
								<button onClick={()=>deleteTodoList(todo.id)}>{" ❌"}</button>
							</div>
						))}
					</div>
				) : (
					<div>NO</div>
				)}
			</div>
		</main>
	);
}
