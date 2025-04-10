import React from 'react';
// Elimina la importación de next/dynamic aquí
import DynamicChatWrapper from '@/components/DynamicChatWrapper'; // Importa el nuevo wrapper

// Ya no necesitamos definir ChatWidget aquí

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1>Bienvenido</h1>
        <p>Interactúa con nuestro agente conversacional.</p>

        {/* Renderiza el wrapper que cargará el widget dinámicamente */}
        <DynamicChatWrapper />
      </div>
    </main>
  );
}
