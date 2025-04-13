import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';
import { getContacts } from './contacts/utils/storage';

export default function ContactDetails() {
  const router = useRouter();
  const { id } = router.query;

  const contact = (() => {
    if (typeof window === 'undefined' || !id) return null;
    const contacts = getContacts();
    return contacts.find((c) => c.id.toString() === id) || null;
  })();

  const [currentContact] = useState(contact);

  if (!currentContact) return <p className="container py-5">Loading contact...</p>;

  return (
    <div className="container py-5">
      <h1 className="mb-4">{currentContact.name}</h1>
      <image
        src={currentContact.image_url}
        alt={currentContact.name}
        style={{ width: '200px', borderRadius: '50%', objectFit: 'cover' }}
        className="mb-3"
      />
      <p><strong>Email:</strong> {currentContact.email}</p>
      <p><strong>Phone:</strong> {currentContact.phone_number}</p>
      <div className="d-flex gap-2">
        <Link href="/contacts" className="btn btn-secondary">Back</Link>
        <Link href={`/contacts/${currentContact.id}/edit`} className="btn btn-primary">Edit</Link>
      </div>
    </div>
  );
}
