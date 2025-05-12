// hooks/useContactForm.js
import { useState, useEffect } from 'react';

const initialForm = {
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  phone: '',
  message: '',
  acceptPolicies: false
};

export default function useContactForm() {
  const [formData, setFormData] = useState(initialForm);
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState({ phone: false, email: false });

  useEffect(() => {
    if (formStatus) {
      const timer = setTimeout(() => setFormStatus(''), 30000);
      return () => clearTimeout(timer);
    }
  }, [formStatus]);

  useEffect(() => {
    if (copied.phone || copied.email) {
      const timer = setTimeout(() => setCopied({ phone: false, email: false }), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const handleChange = ({ target: { name, value, type, checked } }) => {
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.acceptPolicies) return setFormStatus('Debes aceptar las políticas de privacidad.');
    if (isSubmitting) return;

    setIsSubmitting(true);
    setFormStatus('Enviando mensaje...');
    try {
      const res = await fetch('/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setFormStatus('¡Mensaje enviado con éxito!');
        setFormData(initialForm);
      } else {
        setFormStatus('Error al enviar el mensaje.');
      }
    } catch {
      setFormStatus('Error inesperado al enviar el mensaje.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(prev => ({ ...prev, [type]: true }));
  };

  return {
    formData,
    formStatus,
    isSubmitting,
    copied,
    handleChange,
    handleSubmit,
    copyToClipboard
  };
}
