import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm ring-1 ring-zinc-200 p-6 sm:p-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900">
          Welcome to <span className="text-zinc-500">AI Flashcards</span>
        </h1>
        <p className="mt-3 text-base sm:text-lg text-zinc-600 leading-relaxed">
          The ultimate study space for mastering your Japanese and English vocabulary.
          Transform your word lists into interactive learning sessions.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/flashcards"
            className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 w-full sm:w-auto"
          >
            Start Flashcards
          </Link>
          <Link
            href="/upload"
            className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-medium text-zinc-900 ring-1 ring-zinc-300 transition hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 w-full sm:w-auto"
          >
            Upload Words
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;