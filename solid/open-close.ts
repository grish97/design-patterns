/**
 * Open-closed Princple (OCP)
 *
 * Software entities should be open for extension but closed for modification.
 */

enum Color {
  green = "green",
  red = "red",
  blue = "blue",
}

enum Size {
  small = "small",
  medium = "medium",
  large = "large",
}

class Product {
  constructor(public name: string, public color: Color, public size: Size) {}
}

class ProductFilter {
  filterByColor(products: Product[], color: Color): Product[] {
    return products.filter((p) => p.color === color);
  }
}

// ** Specifications

interface Specificaton {
  isSatisfied(p: Product): boolean;
}

class AndSpecification implements Specificaton {
  constructor(private specs: Specificaton[]) {}

  isSatisfied(p: Product): boolean {
    return this.specs.every((spec) => spec.isSatisfied(p));
  }
}

class OrSpecification implements Specificaton {
  constructor(private specs: Specificaton[]) {}

  isSatisfied(p: Product): boolean {
    return this.specs.some((spec) => spec.isSatisfied(p));
  }
}

class ColorSpecification implements Specificaton {
  constructor(public color: Color) {}

  isSatisfied(p: Product): boolean {
    return p.color === this.color;
  }
}

class SizeSpecification implements Specificaton {
  constructor(public color: Color) {}

  isSatisfied(p: Product): boolean {
    return p.color === this.color;
  }
}

class BetterFiler {
  filter(items: Product[], spec: any): Product[] {
    return items.filter((p) => spec.isSatisfied(p));
  }
}

const apple = new Product("Apple", Color.green, Size.small);
const tree = new Product("Tree", Color.green, Size.large);
const house = new Product("House", Color.blue, Size.large);

const products = [apple, tree, house];

const bf = new BetterFiler();
const a = bf.filter(products, new ColorSpecification(Color.green));
console.log(a);
