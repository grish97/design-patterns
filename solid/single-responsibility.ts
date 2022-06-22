/**
 * Single Responsibility Principle
 *
 * A class should have one, and only one, reason to change.
 *
 * Gather together those things that change for the same reason,
 * and separate those things that change for different reasons.
 */

// ** Violation of the SRP

class _Book {
  constructor(
    private title: string,
    private author: string,
    private price: number
  ) {}

  getTitle(): string {
    return this.title;
  }

  getAuthor(): string {
    return this.author;
  }

  save(): void {}
}

// ** Right way

interface BookRepository<T> {
  save(book: T): void;
}

class Book {
  constructor(
    private title: string,
    private author: string,
    private price: number
  ) {}

  getTitle(): string {
    return this.title;
  }

  getAuthor(): string {
    return this.author;
  }
}

class BookRepository<T extends Book> implements BookRepository<T> {
  save(book: T): void {}
}
