import IFighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _charOne: IFighter;
  private _charTwo: IFighter;

  constructor(charOne: IFighter, charTwo: IFighter) {
    super(charOne);
    this._charOne = charOne;
    this._charTwo = charTwo;
  }

  fight(): number {
    this._charOne.attack(this._charTwo);
    this._charTwo.attack(this._charOne);
    if (this._charOne.lifePoints <= 0) {
      return -1;
    }
    return 1;
  }
}
