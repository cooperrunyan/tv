import { Component } from '@angular/core';
import { MediaControllerService } from 'src/app/media-controller.service';
import { RemoteService } from 'src/app/remote.service';

@Component({
  selector: 'app-panel-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss'],
})
export class PanelScreenComponent {
  constructor(private mediaController: MediaControllerService, private remote: RemoteService) {}

  public allSongs = this.mediaController.setList;
  public currentSong = this.mediaController.getCurrentSong();
  current = this.remote.state;

  ngOnInit(): void {
    this.mediaController.updater.subscribe((currentSong) => {
      this.currentSong = currentSong;
      for (const button of Array.from(document.querySelectorAll('.screen ul li button') as NodeListOf<HTMLButtonElement>)) {
        if (button.innerHTML === currentSong.name) button.focus();
      }
    });

    this.remote.updater.subscribe((state) => {
      this.current = state;
    });
  }
}
