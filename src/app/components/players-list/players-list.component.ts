import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../../services/player.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {

  playersList = [];

  private readonly AVAILABLE = 'свободен';
  private readonly CONTRACT = 'контракт';

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playersList = this.playerService.generatePlayers();
    this.playerService.bridge.subscribe(
      (response: any) => {
        if (response && response.direction === 'left') {
          this.playersList.push(response.value);
          this.playersList.sort((a, b) => a.getId() - b.getId());
        } else if (response && response.direction === 'formation') {
          this.playersList = [...this.playersList, ...response.value];
          this.playersList.sort((a, b) => a.getId() - b.getId());
        }
      }
    );
  }

  addNewPlayer(current: any) {
    this.playersList = this.playersList.filter(player => player.getId() !== current.getId());
    this.playerService.bridge.next({direction: 'right', value: current});
  }
}
