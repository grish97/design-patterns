class Person {
  public streetAddress: string = "";
  public postcode: string = "";
  public city: string = "";
  public companyName: string = "";
  public position: string = "";
  public annualIncome: number = 0;

  toString() {
    return (
      `Person lives at ${this.streetAddress}, ${this.city}, ${this.postcode}\n` +
      `and works at ${this.companyName} as a ${this.position} earning ${this.annualIncome}`
    );
  }
}

class PersonBuilder {
  constructor(public person: Person = new Person()) {}

  get lives() {
    return new PersonAddressBuilder(this.person);
  }

  get works() {
    return new PersonJobBuilder(this.person);
  }

  build() {
    return this.person;
  }
}

class PersonJobBuilder extends PersonBuilder {
  constructor(person: Person) {
    super(person);
  }

  at(companyName: string) {
    this.person.companyName = companyName;
    return this;
  }

  asA(position: string) {
    this.person.position = position;
    return this;
  }

  earning(annualIncome: number) {
    this.person.annualIncome = annualIncome;
    return this;
  }
}

class PersonAddressBuilder extends PersonBuilder {
  constructor(person: Person) {
    super(person);
  }

  at(streetAddress: string) {
    this.person.streetAddress = streetAddress;
    return this;
  }

  withPostcode(postcode: string) {
    this.person.postcode = postcode;
    return this;
  }

  in(city: string) {
    this.person.city = city;
    return this;
  }
}

let pb = new PersonBuilder();
let person = pb.lives
  .at("123 London Road")
  .in("London")
  .withPostcode("SW12BC")
  .works.at("Fabrikam")
  .asA("Engineer")
  .earning(123000)
  .build();
console.log(person);
