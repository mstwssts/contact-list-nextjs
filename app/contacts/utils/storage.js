export const getContacts = () => {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem('contacts');
  return stored ? JSON.parse(stored) : [];
};

export const saveContacts = (contacts) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }
};
