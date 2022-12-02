import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  private static _newInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Ranger._newInstances += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return this._newInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}