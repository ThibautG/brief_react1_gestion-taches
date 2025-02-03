import './App.css';
import {useState} from "react";

function App() {
    // on stocke ce que tape l'utilisateur dans champ (string)
    const [newNotes, SetNewNotes] = useState('');
    // on stocke la liste de tâches (tableau de strings)
    const [notes, SetNotes] = useState([]);

    function handleClick() {
        // on va utiliser cette fonction sur le bouton ajouter la tâche
        // on modifie un copie du tableau notes en lui ajoutant newNotes
        // newNotes correspond à ce qui est entré par l'utilisateur dans le champ
        SetNotes([...notes, newNotes]);
    }

    function deleteId(index) {
        // on va utiliser cette fonction sur le bouton supprimer
        // on crée une copie dynamique du tableau notes
        const liste = [...notes];
        // on supprime la ligne de ce tableau ayant pour index ce qu'on a rentré en argument
        liste.splice(index, 1);
        // on réaffecte ce nouveau tableau à la variable notes via SetNotes
        SetNotes(liste);
    }

    return (
    <div className="App">
        <header className="App-header">
            <h1>Gestion de tâches</h1>
            <label htmlFor="task">Rentrez une tâche</label>
            <input onChange={e => SetNewNotes(e.target.value)}/>
            <button onClick={handleClick}>Ajouter</button>
            <ul>
                {notes.map((produit, id) => (
                <li key={id}>
                    {produit} <button onClick={() => deleteId(id)}>Supprimer</button>
                </li>
                ))}
            </ul>
        </header>
    </div>


  );
}

export default App;
