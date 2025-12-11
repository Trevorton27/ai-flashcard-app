# AI Flashcard App

## Overview
The AI Flashcard App is a web application designed to help users drill vocabulary in Japanese and English using AI-supported flashcards. Users can upload new vocabulary words in JSON format and access flashcards to enhance their learning experience.

## Features
- Upload new vocabulary words as JSON files.
- View and study vocabulary flashcards.
- User-friendly interface for easy navigation.

## Project Structure
```
ai-flashcard-app
├── src
│   ├── app
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── api
│   │   │   ├── upload
│   │   │   │   └── route.ts
│   │   │   └── flashcards
│   │   │       └── route.ts
│   │   ├── flashcards
│   │   │   └── page.tsx
│   │   └── upload
│   │       └── page.tsx
│   ├── components
│   │   ├── FlashcardCard.tsx
│   │   ├── UploadForm.tsx
│   │   └── Navigation.tsx
│   ├── lib
│   │   ├── db.ts
│   │   └── utils.ts
│   ├── types
│   │   └── index.ts
│   └── middleware.ts
├── public
├── .env.local
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   cd ai-flashcard-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your environment variables.

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to access the app.

## Usage
- Navigate to the upload page to upload new vocabulary words in JSON format.
- Access the flashcards page to view and study the vocabulary.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.