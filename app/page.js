'use client';

import Link from 'next/link';
import { useState } from 'react';
import ContactList from './components/ContactList';
import { getContacts, saveContacts } from './contacts/utils/storage';

export default function ContactsIndex() {
  const [contacts, setContacts] = useState(() => {
    if (typeof window === 'undefined') return [];
    return getContacts();
  });

  const handleDelete = (id) => {
    const updated = contacts.filter((c) => c.id !== id);
    saveContacts(updated);
    setContacts(updated);
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4">All Contacts</h1>
      <Link href="/contacts/new" className="btn btn-primary mb-3">
        Add Contact
      </Link>
      <ContactList contacts={contacts} onDelete={handleDelete} />
    </div>
  );
}
