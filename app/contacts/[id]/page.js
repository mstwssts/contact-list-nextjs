'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { getContacts } from '../utils/storage';
import Image from 'next/image';
import Link from 'next/link';


export default function ContactDetailPage() {
  const { id } = useParams();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const contacts = getContacts();
    const found = contacts.find((c) => c.id.toString() === id);
    setContact(found);
  }, [id]);

  if (!contact) return <p className="p-4">Loading...</p>;

  return (
    <div className="container py-5">
      <h1 className="mb-4">{contact.name}</h1>
      <Image
        src={contact.image_url}
        alt={contact.name}
        width="120"
        height="120"
        style={{ objectFit: 'cover', borderRadius: '10px' }}
      />
      <p className="mt-3"><strong>Email:</strong> {contact.email}</p>
      <p><strong>Phone:</strong> {contact.phone_number}</p>
      <Link href="/" className="btn btn-secondary mt-4">Back to Contacts</Link>

    </div>

  );
}
