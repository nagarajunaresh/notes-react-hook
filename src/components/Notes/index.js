// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {
  AppContainer,
  NotesContainer,
  InputContainer,
  Title,
  InputTitle,
  Input,
  ButtonContainer,
  Button,
} from './styledComponents'
import NoteListItem from '../NoteItem'

const Notes = () => {
  const [notes, setNotes] = useState([])
  const [newNoteTitle, setNewNoteTitle] = useState('')
  const [newNoteDescription, setNewNoteDescription] = useState('')

  const handleAddNote = () => {
    if (newNoteTitle.trim() !== '' && newNoteDescription.trim() !== '') {
      const newNote = {
        id: uuidv4(),
        title: newNoteTitle,
        description: newNoteDescription,
      }
      setNotes([...notes, newNote])
      setNewNoteTitle('')
      setNewNoteDescription('')
    }
  }

  return (
    <AppContainer>
      <Title>Notes</Title>

      <InputContainer>
        <InputTitle
          type="text"
          placeholder="Title"
          value={newNoteTitle}
          onChange={e => setNewNoteTitle(e.target.value)}
        />
        <Input
          placeholder="Take a Note..."
          value={newNoteDescription}
          onChange={e => setNewNoteDescription(e.target.value)}
        />
        <ButtonContainer>
          <Button onClick={handleAddNote}>Add Note</Button>
        </ButtonContainer>
      </InputContainer>

      {notes.length === 0 ? (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <h3>No Notes Yet</h3>
          <p>Notes you add will appear here</p>
        </div>
      ) : (
        <NotesContainer>
          <ul>
            {notes.map(note => (
              <NoteListItem key={note.id} note={note} />
            ))}
          </ul>
        </NotesContainer>
      )}
    </AppContainer>
  )
}

export default Notes
