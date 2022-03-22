import { Component } from '@angular/core';
import { MediaService } from '../media.service';
import { RemoteService } from '../remote.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent {
  constructor(private media: MediaService, private remote: RemoteService) {}

  next() {
    if (this.remote.state.power) this.media.next();
  }

  last() {
    if (this.remote.state.power) this.media.last();
  }
}
