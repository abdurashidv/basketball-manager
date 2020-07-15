export class Player {
  private id: number;
  private name: string;
  private age: number;
  private price: number;
  private status: string;

  constructor(id: number, name: string, age: number, price: number, status: string) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.price = price;
    this.status = status;
  }

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getAge(): number {
    return this.age;
  }

  public getPrice(): number {
    return this.price;
  }

  public getStatus(): string {
    return this.status;
  }

  public setStatus(value: string) {
    this.status = value;
  }
}
