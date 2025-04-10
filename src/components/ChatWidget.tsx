'use client';

import React from 'react';

const ChatWidget = () => {
  return (
    <iframe
      src="https://app.contactship.ai/widgets/193cf0fa-6477-4951-99b5-cf2544c810cf/embed"
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: '600px',
        width: '400px',
        border: 'none',
        zIndex: 1000,
      }}
      allow="microphone"
      title="Agente Conversacional"
    >
    </iframe>
  );
};

export default ChatWidget; 