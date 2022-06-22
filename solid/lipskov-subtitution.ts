/**
 * Liskov Substitution Principle
 *
 * Objects must be replaceable by instances
 * of their subtypes without altering the correct
 * functioning of the system.
 */

// ** Violation of this principle

class _Rectangle {
  constructor(public width: number, public height: number) {}

  area(): number {
    return this.width * this.height;
  }
}

class _Square extends _Rectangle {}

// ** Solution to this principle

interface Shape {
  area(): number;
}

class Rectangle {
  constructor(public width: number, public height: number) {}

  area(): number {
    return this.width * this.height;
  }
}

class Square implements Shape {
  constructor(public sideSize: number) {}

  area(): number {
    return Math.pow(this.sideSize, 2);
  }
}
