import { Component, OnInit } from '@angular/core';
import { MediaService } from 'src/app/media.service';
import { RemoteService } from 'src/app/remote.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
})
export class ControlsComponent implements OnInit {
  constructor(private remote: RemoteService, private media: MediaService) {}

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
    if (this.remote.state.power) this.media.next();
  }

  last() {
    if (this.remote.state.power) this.media.last();
  }
}
