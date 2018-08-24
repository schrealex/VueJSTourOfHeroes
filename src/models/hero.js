export class Hero {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  toString() {
    return this.id + " " + this.name;
  }

  // and so on, put other methods here
}
