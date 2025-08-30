'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import type { Note } from '@/types/note';

interface NotePreviewProps {
  noteId: string;
}

export default function NotePreview({ noteId }: NotePreviewProps) {
  const router = useRouter();
  const [note, setNote] = useState<Note | null>(null);

  useEffect(() => {
    const fetchNote = async () => {
      const res = await fetch(`/api/notes/${noteId}`);
      const data: Note = await res.json();
      setNote(data);
    };
    fetchNote();
  }, [noteId]);

  const closeModal = () => router.back();

  if (!note) return null;

  return (
    <Modal onClose={closeModal}>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </Modal>
  );
}
