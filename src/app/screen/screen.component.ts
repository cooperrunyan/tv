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

  onEnd() {
    console.log('end');
  }

  ngAfterViewInit() {
    const blocker = document.querySelector('.blocker .after') as HTMLDivElement;
    blocker.style.opacity = '0';
    setTimeout(() => {
      blocker.style.opacity = '';
    }, 800);

    const video = document.querySelector('.video') as HTMLVideoElement;

    video.autoplay = true;

    // video.play();
    video.pause();
    // video.play();
    video.pause();
  }

  ngOnInit() {
    this.media.updater.subscribe((currentSong) => {
      this.currentSong = currentSong;
    });

    this.remote.updater.subscribe((state) => {
      const video = document.querySelector('.video') as HTMLVideoElement;

      if (!state.power) video.pause();
      if (state.pause) video.pause();
      if (!state.pause) video.play();

      this.state = state;
    });
  }
}
