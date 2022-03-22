import { Component, OnInit } from '@angular/core';
import { MediaService } from '../media.service';
import { RemoteService } from '../remote.service';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss'],
})
export class ScreenComponent implements OnInit {
  constructor(private media: MediaService, private remote: RemoteService) {}

  public allSongs = this.media.setList;
  public currentSong = this.media.getCurrentSong();
  public state = this.remote.state;

  ngOnInit() {
    this.media.updater.subscribe((currentSong) => {
      this.currentSong = currentSong;
    });

    this.remote.updater.subscribe((state) => {
      const video = document.querySelector('.video') as HTMLVideoElement;

      console.log(state);

      if (!state.power) video.pause();

      if (state.pause) video.pause();
      if (!state.pause) video.play();

      this.state = state;
    });
  }
}
