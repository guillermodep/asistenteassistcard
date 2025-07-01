'use client';

import React, { useEffect } from 'react';

const ChatWidget = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
          console.log('Acceso al micrófono concedido.');
          stream.getTracks().forEach(track => track.stop());
        })
        .catch(err => {
          console.error('Error al solicitar acceso al micrófono:', err);
        });
    } else {
      console.warn('getUserMedia no es compatible en este navegador o entorno.');
    }
  }, []);

  return (
    <iframe
      src="https://app.contactship.ai/widgets/193cf0fa-6477-4951-99b5-cf2544c810cf/embed"
      style={{
        height: '600px',
        width: '400px',
        border: 'none',
        zIndex: 1000,
        margin: '0 16px',
      }}
      allow="microphone"
      title="Agente Conversacional"
    >
    </iframe>
  );
};

export default ChatWidget; 