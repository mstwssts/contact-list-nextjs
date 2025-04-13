'use client'

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function ContactForm({ contact, onSave, onCancel }) {
  const [form, setForm] = useState({
    id: null,
    name: '',
    image_url: '',
    email: '',
    phone_number: '',
  });

  useEffect(() => {
    if (contact) setForm(contact);
    else resetForm();
  }, [contact]);

  const resetForm = () => {
    setForm({ id: null, name: '', image_url: '', email: '', phone_number: '' });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto mb-4" style={{ maxWidth: '600px' }}>
      <h4>{form.id ? 'Edit Contact' : 'Add New Contact'}</h4>
      <div className="mb-2">
        <input type="text" name="name" placeholder="Name" className="form-control" value={form.name} onChange={handleChange} required />
      </div>
      <div className="mb-2">
        <input type="text" name="image_url" placeholder="Image URL" className="form-control" value={form.image_url} onChange={handleChange} required />
      </div>
      <div className="mb-2">
        <input type="email" name="email" placeholder="Email" className="form-control" value={form.email} onChange={handleChange} required />
      </div>
      <div className="mb-2">
        <input type="tel" name="phone_number" placeholder="Phone Number" className="form-control" value={form.phone_number} onChange={handleChange} required />
      </div>
      <div className="d-flex gap-2">
        <button type="submit" className="btn btn-success">
          {form.id ? 'Update' : 'Add'} Contact
        </button>
        {form.id && onCancel && (
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

ContactForm.propTypes = {
  contact: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
};
