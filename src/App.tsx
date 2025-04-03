import { useState } from "react";
import "./App.css";
import InputForm from "./Components/InputForm";
import TaskList from "./Components/TaskList";

export interface ITaskType {
    id: number;
    task: string;
}

function App() {
    const [tasks, setTask] = useState<ITaskType[]>([]);

    const handleTaskSubmit = (task: string) => {
        const newTask = {
            id: Date.now(),
            task: task,
        };
        setTask((prev) => [...prev, newTask]);
    };

    const handleDelete = (id: number) => {
        setTask((prev) => {
            return prev.filter((task) => task.id !== id);
        });
    };
    const handleUpdate = (id: number, updatedTask: string) => {
        setTask((prevTask) => {
            const taskIndex = tasks.findIndex((task) => task.id == id);
            if (taskIndex === -1) return prevTask;
            const updatedTasks = [...prevTask];
            updatedTasks[taskIndex] = {
                ...updatedTasks[taskIndex],
                task: updatedTask,
            };
            return updatedTasks;
        });
    };
    return (
        <div className="min-h-screen flex items-center flex-col m-4">
            <div className="w-[500px]">
                <InputForm handleTaskSubmit={handleTaskSubmit} />
            </div>
            <div className="w-lg">
                <TaskList
                    tasks={tasks}
                    onDelete={handleDelete}
                    onUpdate={handleUpdate}
                />
            </div>
        </div>
    );
}

export default App;
