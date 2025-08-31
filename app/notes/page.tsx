
import NotesPage from '@/components/NotesPage/NotesPage';
import { fetchNotes } from '@/lib/api';

export default async function Page() {

  const { notes } = await fetchNotes({ perPage: 12 });

  return <NotesPage notes={notes} />;
}
