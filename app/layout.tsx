import './globals.css';
import React from 'react';
export const metadata = { title: 'English Course', description: '6-month fast-track English course' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ maxWidth: 900, margin: '0 auto', padding: 16 }}>
        <header style={{ display:'flex', gap:12, alignItems:'center', margin:'12px 0' }}>
          <b>English Course</b>
          <nav style={{ display:'flex', gap:12 }}>
            <a href="/">Home</a>
            <a href="/dashboard">Dashboard</a>
            <a href="/lessons">Lessons</a>
            <a href="/practice">Practice</a>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
