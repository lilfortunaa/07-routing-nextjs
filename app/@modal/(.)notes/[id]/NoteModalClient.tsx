'use client';
import { useQuery } from '@tanstack/react-query';
import { useState, useEffect  } from 'react';
import Modal from '@/components/Modal/Modal';
import NoteDetailsClient from '@/app/notes/[id]/NoteDetails.client';
import { fetchNoteById } from '@/lib/api';
import type { Note } from '@/types/note';

interface Props {
   noteId: string;
}

export default function NoteModalClient({ noteId }: Props) {
  const [isOpen, setIsOpen] = useState(true); 

  useEffect(() => {
    setIsOpen(true);
  }, [noteId]);

  const { data: note, isLoading, isError } = useQuery<Note, Error>({
    queryKey: ['note', noteId],
    queryFn: () => fetchNoteById(noteId),
  });

  const closeModal = () => setIsOpen(false); 

  if (!isOpen) return null; 

  if (isLoading) return null;
  if (isError || !note) return <div>Error loading note</div>;

  return (
    <Modal onClose={closeModal}>
      <button onClick={closeModal} style={{ float: 'right' }}>Close</button>
      <NoteDetailsClient note={note} />
    </Modal>
  );
}
