/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';


export default function ContactItem({ contact, onEdit, onDelete }) {
  return (
    <div className="border rounded p-3 shadow-sm d-flex justify-content-between align-items-start">
      <div className="d-flex gap-3 align-items-center">
      <img
        src={contact.image_url}
        alt={contact.name}
        style={{
        width: '60px',
        height: '60px',
        objectFit: 'cover',
        borderRadius: '50%',
  }}
/>


        <div>
          <p className="fw-bold mb-1">
            <Link href={`/contacts/${contact.id}`}>{contact.name}</Link>
          </p>
          <p className="mb-1">{contact.email}</p>
          <p className="mb-0">{contact.phone_number}</p>
        </div>
      </div>
      <div className="d-flex gap-2">
        {onEdit && (
          <button className="btn btn-sm btn-primary" onClick={() => onEdit(contact)}>
            Edit
          </button>
        )}
        <button className="btn btn-sm btn-danger" onClick={() => onDelete(contact.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone_number: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func.isRequired,
};
