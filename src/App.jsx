import { useState, useEffect } from 'react';
import Note from './components/Note';
import noteService from './services/note';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    noteService.getAll().then((initalNotes) => {
      setNotes(initalNotes);
    });
  }, []);

  function handleAddNewNote() {
    const newNote = {
      content: newNote,
      important: Math.random() < 0.5,
    };
    noteService.create(newNote).then((res) => {
      setNotes((prevNotes) => [...prevNotes, res.data]);
      setNewNote('');
    });
  }

  function handleUpdateNote(id) {
    const newContent = prompt('Enter new content: ');
    const noteToChange = notes.find((n) => n.id === id);
    const updateNotePayload = {
      ...noteToChange,
      content: newContent,
    };
    noteService.update(id, updateNotePayload).then((res) => {
      setNotes(notes.map((note) => (note.id === id ? res.data : note)));
    });
  }

  function handleDeleteNote(id) {
    noteService
      .deleteData(id)
      .then(setNotes(notes.filter((note) => note.id !== id)))
      .catch((err) => {
        console.error('Error deleting note:', err.message);
      });
  }

  return (
    <>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note
            note={note}
            onDelete={() => handleDeleteNote(note.id)}
            key={note.id}
            onUpdate={() => handleUpdateNote(note.id)}
          />
        ))}
      </ul>
      <div>
        <h2>add note</h2>
        <input value={newNote} onChange={(e) => setNewNote(e.target.value)} />
        <br />
        <br />
        <button onClick={handleAddNewNote}>add new note</button>
      </div>
    </>
  );
}

export default App;
