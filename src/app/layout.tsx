import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Uriel Ponce | Desarrollador Back-End & Automatización',
  description:
    'Portfolio técnico de backend enfocado en arquitectura de software, validación transaccional, flujos de datos y resiliencia de servicios.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body className="bg-zinc-950 text-zinc-100 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
