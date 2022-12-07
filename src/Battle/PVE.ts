import IFighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private _monsters: (SimpleFighter | Monster)[];

  constructor(
    player: IFighter,
    monsters: (SimpleFighter | Monster)[],
  ) {
    super(player);
    this._monsters = monsters;
  }

  attacksMonster(monster: SimpleFighter) {
    if (this.player.lifePoints > 0) {
      this.player.attack(monster);
    }
  }

  attacksPlayer(monster: SimpleFighter) {
    if (monster.lifePoints > 0) {
      monster.attack(this.player);
    }
  }

  fight(): number {
    this._monsters.forEach((monster) => {
      while (this.player.lifePoints > 0 && monster.lifePoints > 0) {
        this.attacksMonster(monster);
        this.attacksPlayer(monster);
      }
    });
    return super.fight();
  }
}