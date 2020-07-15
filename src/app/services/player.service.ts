import { Injectable } from '@angular/core';
import {Player} from '../modules/Player';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private readonly AVAILABLE = 'свободен';
  private readonly CONTRACT = 'контракт';
  private readonly BUDGET = 100000000;
  private readonly MIN_VALID_AGE = 23;

  public bridge = new BehaviorSubject<any>(null);

  constructor() { }

  public hasValidPlayers(players: any) {
    return this.hasEnoughPlayers(players) && this.hasValidBudget(players) && this.hasMinimumValidAges(players);
  }

  private hasMinimumValidAges(players: any[]): boolean {
    let count = 0;
    for (let i = 0; i < players.length; i++) {
      if (players[i].getAge() <= this.MIN_VALID_AGE && ++count >= 2) {
        return true;
      }
    }
    return false;
  }

  private hasEnoughPlayers(players: any): boolean {
    return players.length >= 9;
  }

  private hasValidBudget(players: any) {
    let totalPrice = 0;

    for (let i = 0; i < players.length; i++) {
      totalPrice += players[i].getPrice();
    }

    return (totalPrice <= this.BUDGET);
  }

  public generatePlayers() {
    const players = [];

    players.push(new Player(1, 'Sample One', 23, 10000000, this.AVAILABLE));
    players.push(new Player(2, 'Sample Two', 35, 5000000, this.AVAILABLE));
    players.push(new Player(3, 'Sample Three', 29, 2500000, this.AVAILABLE));
    players.push(new Player(4, 'Sample Four', 32, 1200000, this.AVAILABLE));
    players.push(new Player(5, 'Sample Five', 37, 1200000, this.AVAILABLE));
    players.push(new Player(6, 'Sample Six', 23, 1000000, this.AVAILABLE));
    players.push(new Player(7, 'Sample Seven', 40, 3000000, this.AVAILABLE));
    players.push(new Player(8, 'Sample Eight', 19, 150000, this.AVAILABLE));
    players.push(new Player(9, 'Sample Nine', 35, 1200000, this.AVAILABLE));
    players.push(new Player(10, 'Sample Ten', 32, 160000, this.AVAILABLE));
    players.push(new Player(11, 'Sample Eleven', 30, 1400000, this.AVAILABLE));
    players.push(new Player(12, 'Sample Twelve', 38, 120000, this.AVAILABLE));
    players.push(new Player(13, 'Sample Thirteen', 29, 1240000, this.AVAILABLE));
    players.push(new Player(14, 'Sample Fourteen', 27, 1250000, this.AVAILABLE));
    players.push(new Player(15, 'Sample Fifteen', 32, 3000000, this.AVAILABLE));
    players.push(new Player(16, 'Sample Sixteen', 34, 1300000, this.AVAILABLE));
    players.push(new Player(17, 'Sample Seventeen', 19, 1250000, this.CONTRACT));
    players.push(new Player(18, 'Sample Eighteen', 25, 1540000, this.AVAILABLE));
    players.push(new Player(19, 'Sample Nineteen', 27, 100000000, this.AVAILABLE));
    players.push(new Player(20, 'Sample Twenty', 28, 100000000, this.CONTRACT));

    return players;
  }
}
