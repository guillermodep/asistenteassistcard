'use client';

import React from 'react';

const LatiSalesWidget = () => {
  return (
    <iframe
      src="https://app.contactship.ai/widgets/bb61f811-b9df-4042-a096-c3b85ac52187/embed"
      style={{
        height: '600px',
        width: '400px',
        maxHeight: '600px',
        maxWidth: '400px',
        border: 'none',
        zIndex: 1000,
        margin: '0 16px',
      }}
      allow="microphone"
      title="Lati, agente de ventas"
    />
  );
};

export default LatiSalesWidget; 