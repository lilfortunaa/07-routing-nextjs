import { fetchNoteById } from '@/lib/api';
import { Note } from '@/types/note';
import NoteDetailsClient from './NoteDetails.client';
import Modal from '../../../components/Modal/Modal';

export default async function NotePage({ params }: { params: { id: string } }) {
  const { id } = params;

 
  const note: Note = await fetchNoteById(id);

  return (
    <Modal onClose={() => window.history.back()}>
      <NoteDetailsClient note={note} />
    </Modal>
  );
}
