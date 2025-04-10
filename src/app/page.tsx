import React from 'react';
import Image from 'next/image'; // Importar el componente Image
import DynamicChatWrapper from '@/components/DynamicChatWrapper'; // Importa el nuevo wrapper

// Ya no necesitamos definir ChatWidget aquí

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      {/* Encabezado con el logo */}
      <header className="w-full p-4 flex justify-center mb-8">
        <Image
          src="/assistcard-logo.png" // Ruta relativa al directorio public
          alt="Logo Assist Card"
          width={200} // Ajusta el ancho según sea necesario
          height={50} // Ajusta la altura según sea necesario
          priority // Cargar la imagen prioritariamente
        />
      </header>

      {/* Contenido principal */}
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm text-center">
        <h1 className="text-xl font-bold mb-2">Bienvenido</h1>
        <p className="mb-4">Interactúa con nuestro agente conversacional.</p>
        <p className="mb-4">Puedes hacerle consultas y pedirle ayuda con tu asistencia.</p>
      </div>

      {/* Wrapper del widget de chat (que ya lo centra) */}
      <DynamicChatWrapper />
    </main>
  );
}
