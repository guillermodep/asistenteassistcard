'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Importa dinámicamente ChatWidget solo en el cliente
const ChatWidget = dynamic(() => import('@/components/ChatWidget'), {
  ssr: false,
});

const DynamicChatWrapper = () => {
  return <ChatWidget />;
};

export default DynamicChatWrapper; 