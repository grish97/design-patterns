/**
 * The Dependency inversion principle (DIP)
 *
 * The DIP simply states that high-level classes
 * shouldn’t depend on low-level components, but
 * instead depend on an abstraction.
 */

// ** Violation of this principle

class _MemoryStorage {
  private storage: any[];

  constructor() {
    this.storage = [];
  }

  insert(item: any) {
    this.storage.push(item);
  }
}

class _PostService {
  private memory: MemoryStorage = new MemoryStorage();

  createPost(post: any) {
    this.memory.insert(post);
  }
}

// ** Solution to this principle

interface Database {
  insert(item: any): void;
}

class MemoryStorage implements Database {
  private storage: any[];

  constructor() {
    this.storage = [];
  }

  insert(item: any) {
    this.storage.push(item);
  }
}

class PostService {
  private database: Database;

  constructor(database: Database) {
    this.database = database;
  }

  createPost(post: any) {
    this.database.insert(post);
  }
}
