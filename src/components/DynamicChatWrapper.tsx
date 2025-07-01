'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import LatiSalesWidget from '@/components/LatiSalesWidget';

// Importa dinámicamente ChatWidget solo en el cliente
const ChatWidget = dynamic(() => import('@/components/ChatWidget'), {
  ssr: false,
});

const DynamicChatWrapper = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: '32px' }}>
      <ChatWidget />
      <LatiSalesWidget />
    </div>
  );
};

export default DynamicChatWrapper; 