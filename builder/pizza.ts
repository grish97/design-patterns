class PizzaProduct {
  public dough: string = "";
  public sauce: string = "";
  public topping: string = "";

  public teste() {
    console.log(
      "Pizza with " +
        this.dough +
        " dough, " +
        this.sauce +
        " sauce and " +
        this.topping +
        " topping."
    );
  }
}

/**
 * Abstract Builder:
 *
 * The abstract builder is an interface that contains a pizza object.
 * It has a getter that returns the pizza object and a method to instantiate
 * the pizza object. It also declares the three builder methods that will be
 * implemented by the concrete builders further down.
 */
abstract class PizzaBuilder {
  constructor(public pizza: PizzaProduct = new PizzaProduct()) {}

  abstract buildDough(): void;

  abstract buildSauce(): void;

  abstract buildTopping(): void;
}

/**
 * Concrete Builders:
 *  Two examples of concrete builders and two representations of a pizza.
 */

class MargaritaBuilder extends PizzaBuilder {
  buildDough() {
    this.pizza.dough = "cross";
  }

  buildSauce() {
    this.pizza.sauce = "tomato";
  }

  buildTopping() {
    this.pizza.topping = "mozzarela+basil";
  }
}

// Concrete Builder
class SpicyBuilder extends PizzaBuilder {
  buildDough() {
    this.pizza.dough = "pan baked";
  }

  buildSauce() {
    this.pizza.sauce = "tomato+chilli";
  }

  buildTopping() {
    this.pizza.topping = "epperoni+salami";
  }
}

class CookDirector {
  constructor(public builder: PizzaBuilder = new MargaritaBuilder()) {}

  tastePizza() {
    this.builder.pizza.teste();
  }

  makePizza(builder: PizzaBuilder) {
    this.builder = builder;
    this.builder.buildDough();
    this.builder.buildSauce();
    this.builder.buildTopping();

    return this;
  }
}

function main() {
  const cook = new CookDirector();

  cook.makePizza(new MargaritaBuilder()).tastePizza();

  cook.makePizza(new SpicyBuilder()).tastePizza();
}

main();
