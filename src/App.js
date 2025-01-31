import './App.css';
import {useState} from "react";

function App() {
    const [notes, SetNotes] = useState([]);
    const [newNotes, SetNewNotes] = useState('');

    function handleClick() {
        SetNotes([...notes, newNotes]);
    }

    console.log(newNotes);
    console.log(notes);

    return (
    <div className="App">
        <header className="App-header">
            <h1>Gestion de tâches</h1>
            <label htmlFor="task">Rentrez une tâche</label>
            <input onChange={e => SetNewNotes(e.target.value)}/>
            <button onClick={handleClick}>Ajouter</button>
            <p>Vous avez ajouté la tache : {newNotes}</p>
            <div id={"taskList"}></div>
        </header>
    </div>


  );
}

export default App;
