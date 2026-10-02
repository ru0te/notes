function Note({ note, onDelete, onUpdate }) {
  return (
    <>
      <li className='note'>
        {note.content}
        <button onClick={() => onUpdate(note.id)}>update note</button>
        <button onClick={() => onDelete(note.id)}>delete note</button>
      </li>
    </>
  );
}

export default Note;
