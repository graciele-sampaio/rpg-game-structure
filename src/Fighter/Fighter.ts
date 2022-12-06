import IEnergy from '../Energy';
import SimpleFighter from './SimpleFighter';

export default interface IFighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: IEnergy;
  
  attack(enemy: SimpleFighter): void;
  special?(enemy: IFighter): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): number;
}