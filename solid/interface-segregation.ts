/**
 * The Interface Segregation Principle (ISP)
 *
 * The ISP states that we should write a series of smaller and
 * more specific interfaces that are implemented by the class.
 * Each interface provides an single behavior
 */

class Doc {}

interface Machine {
  print(doc: Doc): void;
  scan(doc: Doc): void;
  fax(doc: Doc): void;
}

interface Printer {
  print(doc: Doc): void;
}

interface Coppier {
  copy(doc: Doc): void;
}

class ModernMachine implements Machine {
  print(doc: Doc): void {
    // ...
  }
  scan(doc: Doc): void {
    // ...
  }
  fax(doc: Doc): void {
    // ...
  }
}

class OldFashionedMachine implements Printer {
  print(doc: Doc): void {
    // ...
  }
}

class LaserPrinter implements Printer, Coppier {
  print(doc: Doc): void {
    // ...
  }

  copy(doc: Doc): void {
    // ...
  }
}
