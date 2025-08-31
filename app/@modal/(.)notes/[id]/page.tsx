import NoteModalClient from './NoteModalClient';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function NoteModalPage({ params }: Props) {
  const { id } = await params;

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NoteModalClient noteId={id} /> 
    </QueryClientProvider>
  );
}
