import { useState } from "react";

interface IInputFormTypes {
    handleTaskSubmit: (task: string) => void;
}

const InputForm: React.FC<IInputFormTypes> = ({ handleTaskSubmit }) => {
    const [taskInput, setTaskInput] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (taskInput.trim() === "") {
            alert("Enter a valid task!");
            return;
        }
        handleTaskSubmit(taskInput.trim());
        setTaskInput("");
    };

    return (
        <div className="w-full mt-6">
            <form
                onSubmit={handleSubmit}
                className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700"
            >
                <input
                    value={taskInput}
                    type="text"
                    className="w-full px-4 py-2 text-white bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm md:placeholder:text-md"
                    placeholder="Enter a task..."
                    onChange={(e) => setTaskInput(e.target.value)}
                />
                <button
                    type="submit"
                    className="text-sm px-3 py-1 md:px-4 md:py-2 md:text-lg cursor-pointer bg-green-700 text-white font-medium rounded-lg hover:bg-green-600 transition duration-200"
                >
                    Add Task
                </button>
            </form>
        </div>
    );
};

export default InputForm;
