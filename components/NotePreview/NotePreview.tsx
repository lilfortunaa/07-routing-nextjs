'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';

interface NotePreviewProps {
  noteId: string;
}

export default function NotePreview({ noteId }: NotePreviewProps) {
  const router = useRouter();
  const [note, setNote] = useState<any>(null);

  useEffect(() => {
    const fetchNote = async () => {
      const res = await fetch(`/api/notes/${noteId}`);
      const data = await res.json();
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
