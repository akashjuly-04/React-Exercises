import { useState, useEffect } from "react";

function App() {
    const [expenses, setExpenses] = useState([]);
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");

    // Load expenses from localStorage
    useEffect(() => {
        const storedExpenses = JSON.parse(localStorage.getItem("expenses"));
        if (storedExpenses) {
            setExpenses(storedExpenses);
        }
    }, []);

    // Save expenses to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }, [expenses]);

    const addExpense = () => {
        if (!name || !amount) return;
        setExpenses([...expenses, { id: Date.now(), name, amount }]);
        setName("");
        setAmount("");
    };

    const deleteExpense = (id) => {
        setExpenses(expenses.filter(expense => expense.id !== id));
    };

    return (
        <div className="p-4 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">Expense Tracker</h1>
            <div className="mb-4">
                <input
                    type="text"
                    className="border p-2 mr-2"
                    placeholder="Expense Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="number"
                    className="border p-2 mr-2"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <button className="bg-blue-500 text-white p-2" onClick={addExpense}>Add</button>
            </div>
            <ul>
                {expenses.map(expense => (
                    <li key={expense.id} className="flex justify-between border-b p-2">
                        <span>{expense.name} - ₹{expense.amount}</span>
                        <button className="text-red-500" onClick={() => deleteExpense(expense.id)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
