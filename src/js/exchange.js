export class Rate {
  constructor(USD) {
    this.USD = USD;
  }
}
export class Exchange extends Rate {
  constructor(USD) {
    super(USD);
    
  }
}