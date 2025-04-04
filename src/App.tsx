import { useState } from "react";
import "./App.css";
import InputForm from "./Components/InputForm";
import TaskList from "./Components/TaskList";

export interface ITaskType {
    id: number;
    task: string;
    isComplete: boolean;
}

function App() {
    const [tasks, setTask] = useState<ITaskType[]>([]);

    const handleTaskSubmit = (task: string) => {
        const newTask = {
            id: Date.now(),
            task: task,
            isComplete: false,
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

    const handleComplete = (completeTask: ITaskType) => {
        setTask((prev) => {
            const taskIndex = tasks.findIndex(
                (task) => task.id == completeTask.id
            );
            if (taskIndex === -1) return prev;
            const CopyTasks = [...prev];
            CopyTasks[taskIndex] = {
                ...CopyTasks[taskIndex],
                isComplete: !completeTask.isComplete,
            };
            return CopyTasks;
        });
    };
    return (
        <div className="min-h-screen flex items-center flex-col m-4">
            <div className="w-[350px] md:w-[500px]">
                <InputForm handleTaskSubmit={handleTaskSubmit} />
            </div>
            <div className="w-sm md:w-lg">
                <TaskList
                    tasks={tasks}
                    onDelete={handleDelete}
                    onUpdate={handleUpdate}
                    onComplete={handleComplete}
                />
            </div>
        </div>
    );
}

export default App;
