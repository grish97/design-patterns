/**
 * The Builder interface specifies methods for creating the different parts of
 * the Product objects.
 */
interface Builder {
  productBuilderA(): void;
  productBuilderB(): void;
  productBuilderC(): void;
}

/**
 * The Concrete Builder classes follow the Builder interface and provide
 * specific implementations of the building steps. Your program may have several
 * variations of Builders, implemented differently.
 */

class ConcreteBuilder1 implements Builder {
  /**
   * A fresh builder instance should contain a blank product object, which is
   * used in further assembly.
   */
  constructor(private product: Product1 = new Product1()) {}

  productBuilderA(): void {
    this.product.parts.push("PartA1");
  }

  productBuilderB(): void {
    this.product.parts.push("PartB1");
  }

  productBuilderC(): void {
    this.product.parts.push("PartC1");
  }

  /**
   * Concrete Builders are supposed to provide their own methods for
   * retrieving results. That's because various types of builders may create
   * entirely different products that don't follow the same interface.
   * Therefore, such methods cannot be declared in the base Builder interface
   * (at least in a statically typed programming language).
   *
   * Usually, after returning the end result to the client, a builder instance
   * is expected to be ready to start producing another product. That's why
   * it's a usual practice to call the reset method at the end of the
   * `getProduct` method body. However, this behavior is not mandatory, and
   * you can make your builders wait for an explicit reset call from the
   * client code before disposing of the previous result.
   */
  getProduct(): Product1 {
    return this.product;
  }

  reset(): Product1 {
    this.product = new Product1();
    return this.product;
  }
}

/**
 * It makes sense to use the Builder pattern only when your products are quite
 * complex and require extensive configuration.
 *
 * Unlike in other creational patterns, different concrete builders can produce
 * unrelated products. In other words, results of various builders may not
 * always follow the same interface.
 */
class Product1 {
  public parts: string[] = [];

  public listParts(): void {
    console.log(`Product parts: ${this.parts.join(", ")}\n`);
  }
}

/**
 * The Director is only responsible for executing the building steps in a
 * particular sequence. It is helpful when producing products according to a
 * specific order or configuration. Strictly speaking, the Director class is
 * optional, since the client can control builders directly.
 */
class Director {
  private builder = {} as Builder;

  public setBuilder(builder: Builder) {
    this.builder = builder;
  }

  public buildMinimalViableProduct(): void {
    this.builder.productBuilderA();
  }

  public buildFullFeaturedProduct(): void {
    this.builder.productBuilderA();
    this.builder.productBuilderB();
    this.builder.productBuilderC();
  }
}

function clientCode(director: Director) {
  const builder = new ConcreteBuilder1();
  director.setBuilder(builder);

  director.buildMinimalViableProduct();
  builder.getProduct().listParts();

  director.buildFullFeaturedProduct();
  builder.getProduct().listParts();
}

const director = new Director();
clientCode(director);
