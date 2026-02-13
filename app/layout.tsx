import './globals.css';
import React from 'react';
export const metadata = { title: 'English Course', description: '6-month fast-track English course' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-zinc-200 dark:border-zinc-800">
          <div className="container flex items-center justify-between h-14">
            <a href="/" className="font-semibold">English Course</a>
            <nav className="nav">
              <a href="/">Home</a>
              <a href="/dashboard">Dashboard</a>
              <a href="/lessons">Lessons</a>
              <a href="/practice">Practice</a>
            </nav>
          </div>
        </header>
        <main className="container py-6">{children}</main>
        <footer className="mt-10 border-t border-zinc-200 dark:border-zinc-800">
          <div className="container py-6 text-sm text-zinc-500">© {new Date().getFullYear()} English Course · Built with Next.js</div>
        </footer>
      </body>
    </html>
  );
}
