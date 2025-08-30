'use client';
import { useRouter } from 'next/navigation';
import Modal from '@/components/Modal/Modal';
import NoteDetailsClient from '@/components/NoteDetails/NoteDetails.client';
import { Note } from '@/types/note';

interface Props {
  note: Note;
}

export default function NoteModalClient({ note }: Props) {
  const router = useRouter();

  return (
    <Modal onClose={() => router.back()}>
      <NoteDetailsClient note={note} />
    </Modal>
  );
}
