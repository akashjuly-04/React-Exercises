import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const UpdateUser = () => {
    const { updateUser } = useContext(UserContext); // ✅ Correctly getting the function
    const [newName, setNewName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // ✅ Prevents page reload
        if (newName.trim()) {
            updateUser(newName); // ✅ Correct function name
            setNewName(""); // ✅ Clears input after submission
        }
    };

    return (
        <div>
            <h2>Update User Name</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Enter New Name"
                />
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdateUser; // ✅ Exporting the component correctly
