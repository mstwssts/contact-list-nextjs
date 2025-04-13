import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

export default function ContactList({ contacts, onEdit, onDelete }) {
  return (
    <div className="mt-4">
      {contacts.length === 0 ? (
        <p className="text-muted">No contacts found.</p>
      ) : (
        <ul className="list-unstyled">
          {contacts.map((contact) => (
            <li key={contact.id} className="mb-3">
              <ContactItem
                contact={contact}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func.isRequired,
};
