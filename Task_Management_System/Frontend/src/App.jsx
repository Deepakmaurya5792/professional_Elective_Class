import { useState, useEffect } from "react";

const API_URL = "http://localhost:5000/todos";

function App() {
    const [todo, settodo] = useState([]);
    const [title, settitle] = useState("");
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    
    const fetchtodo = async () => {
        const response = await fetch(API_URL);
        const data = await response.json();
        settodo(data);
    };

    useEffect(() => {
        fetchtodo();
    }, []);

    const addtodo = async () => {
        if (!title.trim()) return;

        await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title }),
        });

        settitle("");
        fetchtodo();
    };

    const deletetodo = async (id) => {
        await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
        });
        fetchtodo();
    };

    return (
        <>
            <h1>MY TODO APPLICATION</h1>
            <input
                type="text"
                placeholder="Enter the title"
                value={title}
                onChange={(e) => settitle(e.target.value)}
            />
            
            <button onClick={addtodo}>Submit</button>
            <ul>
                {todo.map((t) => (
                    <li key={t._id}>
                        {t.title}
                        <button onClick={() => deletetodo(t._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default App;