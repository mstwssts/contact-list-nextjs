'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ContactForm from '../../components/ContactForm'; 
import { getContacts, saveContacts } from '../utils/storage';

const generateId = () => Math.round(Math.random() * 100000000);

export default function NewContactPage() {
  const router = useRouter();
  const [contacts, setContacts] = useState(() => {
    if (typeof window === 'undefined') return [];
    return getContacts();
  });

  const handleSave = (newContact) => {
    const updated = [...contacts, { ...newContact, id: generateId() }];
    saveContacts(updated);
    setContacts(updated);
    router.push('/');
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4">Add New Contact</h1>
      <ContactForm onSave={handleSave} />
    </div>
  );
}
