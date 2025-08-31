import NoteModalClient from './NoteModalClient';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { fetchNoteById } from '@/lib/api';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function NoteModalPage({ params }: Props) {
  const { id } = await params;

  const queryClient = new QueryClient();


  await queryClient.prefetchQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <NoteModalClient noteId={id} dehydratedState={dehydratedState} />
  );
}
