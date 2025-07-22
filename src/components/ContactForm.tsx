import { useState, useEffect } from 'react'
import { Contact } from '../types/Contact.tsx'

interface ContactFormProps {
  onSubmit: (contact: Omit<Contact, 'id'>) => void
  editingContact: Contact | null
  onUpdate: (contact: Contact) => void
  onCancelEdit: () => void
}

function ContactForm({ onSubmit, editingContact, onUpdate, onCancelEdit }: ContactFormProps) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    if (editingContact) {
      setName(editingContact.name)
      setPhone(editingContact.phone)
    } else {
      setName('')
      setPhone('')
    }
  }, [editingContact])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !phone.trim()) {
      alert('Por favor complete todos los campos')
      return
    }
    if (editingContact) {
      // Actualizar contacto existente
      onUpdate({ ...editingContact, name: name.trim(), phone: phone.trim() })
      onCancelEdit();
    } else {
      // Agregar nuevo contacto
      onSubmit({ name: name.trim(), phone: phone.trim() })
    }
    setName('')
    setPhone('')
  }
  

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ingrese el nombre"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="phone">Teléfono:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Ingrese el teléfono"
        />
      </div>
      
      <div className="form-actions">
        <button type="submit">
          {editingContact ? 'Actualizar' : 'Agregar'}
        </button>
        {editingContact && (
          <button type="button" onClick={onCancelEdit}>
            Cancelar
          </button>
        )}
      </div>
    </form>
  )
}

export default ContactForm