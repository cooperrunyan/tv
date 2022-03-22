import { Component, OnInit } from '@angular/core';
import { MediaControllerService } from 'src/app/media-controller.service';
import { RemoteService } from 'src/app/remote.service';

@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.scss'],
})
export class RemoteComponent implements OnInit {
  constructor(private remote: RemoteService, private mediaController: MediaControllerService) {}

  state = this.remote.state;

  ngOnInit(): void {
    this.remote.updater.subscribe((state) => {
      this.state = state;
    });
  }

  pause() {
    if (this.state.power) this.remote.pause();
  }

  power() {
    this.remote.power();
  }

  next() {
    if (this.remote.state.power) this.mediaController.next();
  }

  last() {
    if (this.remote.state.power) this.mediaController.last();
  }
}
