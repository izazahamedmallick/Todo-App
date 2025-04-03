import { useState } from "react";
import { ITaskType } from "../App";

interface ITaskListProps {
    tasks: ITaskType[];
    onDelete: (id: number) => void;
    onUpdate: (id: number, updatedTask: string) => void;
}

const TaskList: React.FC<ITaskListProps> = ({ tasks, onDelete, onUpdate }) => {
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editText, setEditText] = useState<string>("");

    const handleEditClick = (task: ITaskType) => {
        setEditingId(task.id);
        setEditText(task.task);
    };

    const handleUpdate = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        if (editText.trim() === "") {
            alert("Add task or cancel");
            return;
        }
        onUpdate(id, editText.trim());
        setEditingId(null);
    };

    return (
        <div className="w-full mt-6">
            <ul className="space-y-4">
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        className="flex justify-between items-center p-4 bg-gray-800 rounded-lg shadow-md border border-gray-700 transition-transform transform"
                    >
                        {editingId === task.id ? (
                            <form
                                onSubmit={(e) => handleUpdate(e, task.id)}
                                className="flex w-full gap-2"
                            >
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) =>
                                        setEditText(e.target.value)
                                    }
                                    className="w-full px-3 py-2 text-white bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    autoFocus
                                />
                                <button
                                    type="submit"
                                    className="px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 transition duration-200"
                                >
                                    Save
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setEditingId(null)}
                                    className="px-3 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-500 transition duration-200"
                                >
                                    Cancel
                                </button>
                            </form>
                        ) : (
                            <>
                                <span className="text-white text-lg">
                                    {task.task}
                                </span>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleEditClick(task)}
                                        className="px-3 py-1 bg-blue-600 cursor-pointer text-white rounded-md hover:bg-blue-500 transition duration-200"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => onDelete(task.id)}
                                        className="px-3 py-1 bg-red-600 cursor-pointer text-white rounded-md hover:bg-red-500 transition duration-200"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
