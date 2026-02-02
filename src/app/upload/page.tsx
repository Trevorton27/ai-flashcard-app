'use client';
import React, { useState } from 'react';
import UploadForm from '@/components/UploadForm';

const UploadPage = () => {
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' | null }>({ text: '', type: null });

  const handleUploadSuccess = () => {
    setMessage({ text: 'Upload successful! Your new flashcards are ready.', type: 'success' });
  };

  const handleUploadError = (error: string) => {
    setMessage({ text: `Upload failed: ${error}`, type: 'error' });
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="border-b border-zinc-200 pb-6">
        <h1 className="text-3xl font-semibold text-zinc-900 tracking-tight">Upload New Vocabulary</h1>
        <p className="text-zinc-500 mt-1">
          Add new words to your collection by uploading a JSON file.
        </p>
      </div>

      {message.text && (
        <div
          className={`rounded-xl p-4 text-sm font-medium ${message.type === 'success'
              ? 'bg-emerald-50 text-emerald-900 ring-1 ring-emerald-200'
              : 'bg-red-50 text-red-900 ring-1 ring-red-200'
            }`}
        >
          {message.text}
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-sm ring-1 ring-zinc-200 p-6 sm:p-10">
        <UploadForm onSuccess={handleUploadSuccess} onError={handleUploadError} />
      </div>

      <div className="bg-zinc-50 rounded-xl p-6 ring-1 ring-zinc-200">
        <h3 className="text-sm font-semibold text-zinc-900 mb-2">JSON Format Tip</h3>
        <p className="text-sm text-zinc-600 leading-relaxed">
          Your file should be an array of objects with <code className="bg-white text-zinc-900 font-medium px-1.5 py-0.5 rounded">front</code>, <code className="bg-white text-zinc-900 font-medium px-1.5 py-0.5 rounded">back</code>, and optional <code className="bg-white text-zinc-900 font-medium px-1.5 py-0.5 rounded">category</code> fields.
        </p>
      </div>
    </div>
  );
};

export default UploadPage;