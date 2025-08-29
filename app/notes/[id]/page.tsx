import { fetchNoteById } from '@/lib/api';
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from '@tanstack/react-query';
import NoteDetailsClient from './NoteDetails.client';

interface NotePageProps {
  params: { id: string };
}

export default async function NotePage(props: NotePageProps) {
  const params = await Promise.resolve(props.params);
  const id = params.id;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsClient id={id} />
    </HydrationBoundary>
  );
}
