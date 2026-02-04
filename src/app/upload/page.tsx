'use client';

import React from 'react';
import { EnhancedUploadForm } from '@/components/upload';

const UploadPage = () => {
  const handleComplete = () => {
    // Could redirect to flashcards page or show notification
    console.log('Upload complete!');
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="border-b border-zinc-200 dark:border-zinc-800 pb-6">
        <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">Upload Vocabulary</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mt-1">
          Add new words to your collection using AI-powered processing
        </p>
      </div>

      <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm ring-1 ring-zinc-200 dark:ring-zinc-800 p-6 sm:p-8">
        <EnhancedUploadForm onComplete={handleComplete} />
      </div>

      <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-xl p-6 ring-1 ring-zinc-200 dark:ring-zinc-800">
        <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Supported Formats</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Plain text (.txt)
          </div>
          <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            CSV files (.csv)
          </div>
          <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            JSON files (.json)
          </div>
          <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Images (OCR)
          </div>
          <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            PDF documents
          </div>
          <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Word docs (.docx)
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
          <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-2">AI Features</h4>
          <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
            <li>• Automatic language detection (English/Japanese)</li>
            <li>• Translation between languages</li>
            <li>• Hiragana reading generation for kanji</li>
            <li>• Smart categorization of vocabulary</li>
            <li>• Duplicate detection against existing flashcards</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
