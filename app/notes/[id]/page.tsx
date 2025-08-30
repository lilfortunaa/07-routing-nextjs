import NoteDetailsClient from '../../../components/NoteDetails/NoteDetails.client';
import Modal from '../../../components/Modal/Modal';

export default async function NotePage({ params }: { params: { id: string } }) {
  const { id } = await Promise.resolve(params);

  const isDirect = true;
  if (isDirect) {
    return (
      <Modal onClose={() => window.history.back()}>
        <NoteDetailsClient id={id} />
      </Modal>
    );
  }

  return <NoteDetailsClient id={id} />;
}
