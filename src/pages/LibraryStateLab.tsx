import { useState } from "react";
import type { Book } from "../types/Book";
import { books } from "../data/books";

interface SearchControlsProps {
  search: string;
  availableOnly: boolean;
  onSearchChange: (value: string) => void;
  onAvailableChange: (value: boolean) => void;
}

function SearchControls({
  search,
  availableOnly,
  onSearchChange,
  onAvailableChange
}: SearchControlsProps) {
  return (
    <div className="state-controls">
      <h3> Search Controls</h3>
      <input
        type="search"
        placeholder="search books..."
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={availableOnly}
          onChange={(event) => onAvailableChange(event.target.checked)}
        />
        Available books only!
      </label>
    </div>
  );
}

function BookItem({ book }: { book: Book }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <article className="state-book">
      <h4> {book.title}</h4>
      <p> {book.available ? "Available" : "Borrowed"}</p>
      <button
        type="button"
        onClick={() => setShowDetails((previous) => !previous)}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

      {showDetails && (
        <div>
          <p> Author: {book.author}</p>
          <p> Category: {book.category}</p>
          <p> Year: {book.year}</p>
        </div>
      )}
    </article>
  );
}

function BookResults({ filteredBooks }: { filteredBooks: Book[] }) {
  return (
    <section className="state-results">
      <h3> Book Results</h3>

      <p> Books Found: {filteredBooks.length}</p>

      {filteredBooks.length === 0 && <p> No Matching Books</p>}
      <div>
        {filteredBooks.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}

export default function LibraryStateLab() {
  const [search, setSearch] = useState("");
  const [availableOnly, setAvailableOnly] = useState(false);

  const filteredBooks = books.filter((book) => {
    const matchSearch =
      book.title.toLowerCase().includes(search.trim().toLowerCase()) ||
      book.author.toLowerCase().includes(search.trim().toLowerCase());
    const matchAvailability = !availableOnly || book.available;

    return matchSearch && matchAvailability;
  });

  return (
    <section className="state-lab">
      <h2> Thinking in React </h2>
      <p> Learn How Shared State And Props Work</p>

      <SearchControls
        search={search}
        availableOnly={availableOnly}
        onSearchChange={setSearch}
        onAvailableChange={setAvailableOnly}
      />
      <BookResults filteredBooks={filteredBooks} />

      <div className="state-explanation ">
        <h3> State LOcation</h3>
        <p> Shared State : LibraryStateLab</p>
        <p> Local State : BookItem</p>
        <p> Calculted value: FilteredBooks</p>
      </div>
    </section>
  );
}
