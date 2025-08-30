import { fetchNoteById } from '@/lib/api';
import { Note } from '@/types/note';
import NoteModalClient from './NoteModalClient';

interface Props {
  params: { id: string };
}

export default async function NotePage({ params }: Props) {
  const id = params.id;

  const note: Note = await fetchNoteById(id);

  return <NoteModalClient note={note} />;
}
