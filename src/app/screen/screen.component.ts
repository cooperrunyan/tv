import { Component, OnInit } from '@angular/core';
import { MediaControllerService } from '../media-controller.service';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss'],
})
export class ScreenComponent implements OnInit {
  constructor(private mediaController: MediaControllerService) {}

  public allSongs = this.mediaController.setList;
  public currentSong = this.mediaController.getCurrentSong();

  ngOnInit() {
    this.mediaController.updater.subscribe((currentSong) => {
      this.currentSong = currentSong;
    });
  }
}
