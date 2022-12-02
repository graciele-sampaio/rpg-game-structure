import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _newInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._newInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._newInstances;
  }
}

export default Dwarf;