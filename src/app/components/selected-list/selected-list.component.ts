import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../../services/player.service';

@Component({
  selector: 'app-selected-list',
  templateUrl: './selected-list.component.html',
  styleUrls: ['./selected-list.component.css']
})
export class SelectedListComponent implements OnInit {

  newPlayers = [];
  hasValidPlayers = false;
  private readonly CONTRACT = 'контракт';

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.bridge.subscribe(
      (response: any) => {
        if (response && response.direction === 'right') {
          this.newPlayers.push(response.value);
          this.hasValidPlayers = this.playerService.hasValidPlayers(this.newPlayers);
          this.newPlayers.sort((a, b) => a.getId() - b.getId());
        }
      }
    );
  }

  movePlayerToList(current: any) {
    this.newPlayers = this.newPlayers.filter(player => player.getId() !== current.getId());
    this.playerService.bridge.next({direction: 'left', value: current})
    this.hasValidPlayers = this.playerService.hasValidPlayers(this.newPlayers);
  }

  completeFormation() {
    this.newPlayers.forEach(player => {
      player.setStatus(this.CONTRACT);
    });

    this.playerService.bridge.next({direction: 'formation', value: this.newPlayers});
    this.newPlayers = [];
  }

}
