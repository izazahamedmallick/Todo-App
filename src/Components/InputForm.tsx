import { useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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
                className="flex items-center gap-3 bg-gray-700 p-4 rounded-lg shadow-lg border border-gray-700"
            >
                <TextField
                    autoComplete="off"
                    id="outlined-basic"
                    label="Enter Your task.."
                    variant="outlined"
                    sx={{
                        width: "100%",

                        input: {
                            color: "white",
                        },
                        label: {
                            color: "gray",
                        },
                        fieldset: {
                            color: "white",
                            borderColor: "white",
                        },
                    }}
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                />

                <Button
                    type="submit"
                    variant="contained"
                    sx={{ backgroundColor: "green" }}
                >
                    Add Task
                </Button>
            </form>
        </div>
    );
};

export default InputForm;
