'use client';
import { useQuery } from '@tanstack/react-query';
import Modal from '@/components/Modal/Modal';
import type { Note } from '@/types/note';
import { fetchNoteById } from '@/lib/api';

interface NotePreviewProps {
  noteId: string;
  onClose: () => void; 
}

export default function NotePreview({ noteId, onClose }: NotePreviewProps) {
  const { data: note, isLoading, isError } = useQuery<Note, Error>({
    queryKey: ['note', noteId],
    queryFn: () => fetchNoteById(noteId),
  });

  return (
    <Modal onClose={onClose}>
      <button onClick={onClose} style={{ float: 'right' }}>
        Close
      </button>

      {isLoading && <p>Loading...</p>}
      {isError && <p>Error loading note.</p>}

      {note && (
        <div>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          <p><strong>Tag:</strong> {note.tag}</p>
          <p><strong>Created At:</strong> {new Date(note.createdAt).toLocaleString()}</p>
        </div>
      )}
    </Modal>
  );
}
