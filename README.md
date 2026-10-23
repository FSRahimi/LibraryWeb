# 📚 Kabul Community Library

A community library website built with **React, TypeScript, Vite, and CSS**.

This is a classroom project designed to help students learn React step by step through practical examples.

## 📖 About the Project

Kabul Community Library is a React application where users can:

- View a collection of books.
- Search books by title or author.
- Filter available books.
- See whether a book is available or borrowed.
- View a live library clock.
- Start, pause, and reset a study timer.
- Search for books online using the Open Library API.
- Fill out an Add New Book form with real-time validation.

**Note:** The Add New Book form currently validates and displays submitted information in the browser console. It does not yet save books to the library collection.

## 🛠️ Technologies Used

- React — building reusable UI components
- TypeScript — adding type safety
- Vite — development and build tooling
- CSS — styling and responsive design
- Open Library API — fetching online book information

## 🚀 Getting Started

### Prerequisites

Install a recent Node.js LTS version, which includes npm.

Check your installation:

```bash
node -v
npm -v
```

### Installation

**Step 1: Open the project folder**

```bash
cd kabul-community-library
```

**Step 2: Install dependencies**

```bash
npm install
```

**Step 3: Start the development server**

```bash
npm run dev
```

**Step 4: Open the website**

Vite will display a local URL, usually:

`http://localhost:5173`

### Production Build

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```text
kabul-community-library/
├── public/
│   └── book.svg
│
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── BookCard.tsx
│   │   ├── BookList.tsx
│   │   ├── SearchBar.tsx
│   │   ├── LibraryClock.tsx
│   │   ├── StudyTimer.tsx
│   │   └── Footer.tsx
│   │
│   ├── pages/
│   │   ├── OnlineBookExplorer.tsx
│   │   └── AddBookPage.tsx
│   │
│   ├── data/
│   │   └── books.ts
│   │
│   ├── types/
│   │   └── Book.ts
│   │
│   ├── App.tsx
│   ├── App.css
│   ├── OnlineBookExplorer.css
│   ├── index.css
│   └── main.tsx
│
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── .gitignore
└── README.md
```

## 🎓 Learning Objectives

Students learn React concepts by completing the following project steps.

| Step | Topic | What Students Build |
|---|---|---|
| 1 | React, Vite & JSX | Main library page |
| 2 | Components & Typed Props | Reusable book cards |
| 3 | useState & Typed Events | Interactive book search |
| 4 | useEffect & Side Effects | Live clock and study timer |
| 5 | Lists & Conditional Rendering | Book lists, filters, and empty states |
| 6 | Fetching Data from APIs | Online Book Explorer |
| 7 | React Forms & Validation | Add New Book form |

## 🧩 React Concepts

### 1. Components

The application is divided into reusable components such as `Header`, `BookCard`, and `Footer`.

### 2. Props

Props pass information from a parent component to a child component.

### 3. useState

`useState` manages changing values such as search text, selected filters, and form fields.

### 4. useEffect

`useEffect` synchronizes components with external systems, including timers, browser events, and API requests.

### 5. Lists and Conditional Rendering

- `.map()` renders book lists.
- `key` provides stable identities for list items.
- `&&` conditionally displays elements.
- `? :` selects between two UI alternatives.
- Early returns display empty or error states.

### 6. API Fetching

The Online Book Explorer teaches:

- `fetch()`
- `async / await`
- TypeScript interfaces
- Loading, error, and success states
- Effect dependencies
- Cleanup flags to ignore outdated responses

### 7. Forms and Validation

The Add New Book page teaches:

- Controlled inputs
- `ChangeEvent<HTMLInputElement>`
- `FormEvent<HTMLFormElement>`
- Managing multiple fields in one state object
- Updating objects with spread syntax
- Real-time validation
- Calculated validation errors
- `event.preventDefault()`

## 🌐 Open Library API

The Online Book Explorer uses the public Open Library Search API.

**Example endpoint:**

```text
https://openlibrary.org/search.json?q=react&limit=8
```

API documentation:

https://openlibrary.org/dev/docs/api/search

The API provides book metadata such as titles, authors, and publication years.

An internet connection is required for online searches.

## 🗂️ Application Pages

### Our Library

Displays locally defined books from `src/data/books.ts`.

Users can search by title or author and filter available books.

### Online Book Explorer

Retrieves books from the Open Library API.

Displays loading messages, errors, empty results, and successfully fetched books.

### Add New Book

Contains a controlled form with:

- Book title
- Author name
- Publication year

Form errors are calculated from the current input values.

At this stage, successful submission validates the information but does not permanently store the book.

## 📝 Student Exercises

- Add more books to `books.ts`.
- Add a category filter.
- Improve the design of BookCard.
- Add new validation rules.
- Display book cover images from API data.
- Add a Clear Form button.
- Connect the Add New Book form to the library's React state.
- Save added books with localStorage.

## 🔮 Future Improvements

- Add and delete books.
- Edit book information.
- Save library data in localStorage.
- Add React Router for URL-based navigation.
- Create a book details page.
- Connect the application to a backend and database.
- Add user accounts and book borrowing features.

## 👩‍💻 Classroom Project

**Project:** Kabul Community Library

**Framework:** React

**Language:** TypeScript

**Build Tool:** Vite

**Project Type:** Frontend Web Application

**Purpose:** Learning modern React development through practical classroom exercises.

---

Built for learning, practicing, and exploring React development.      

