// Write your code here
import {NoteItem, NoteTitle, NoteDescription} from './styledComponents'

const NoteListItem = ({note}) => {
  const {id, title, description} = note

  return (
    <li key={id}>
      <NoteItem>
        <NoteTitle>{title}</NoteTitle>
        <NoteDescription>{description}</NoteDescription>
      </NoteItem>
    </li>
  )
}

export default NoteListItem
