class Course {
  constructor(
    public readonly nr: number,
    public readonly name: string,
    public readonly participants: Student[]
  ) {}
}

class Student {
  constructor(
    public readonly nr: number,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly satScore: number
  ) {}
}

class CourseView {
  constructor(public readonly course: Course) {}

  public printParticipants(): void {
    console.log(`\n\n==== ${this.course.name.toUpperCase()} ====`);
    console.log(`Nr\tFirst Name\tLast Name\tSAT Score`);

    this.course.participants.forEach((p) => {
      console.log(`${p.nr}\t${p.firstName}\t\t${p.lastName}\t\t${p.satScore}`);
    });
  }
}
