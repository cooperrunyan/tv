import { Component } from '@angular/core';
import { MediaControllerService } from '../media-controller.service';
import { RemoteService } from '../remote.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent {
  constructor(private mediaController: MediaControllerService, private remote: RemoteService) {}

  next() {
    if (this.remote.state.power) this.mediaController.next();
  }

  last() {
    if (this.remote.state.power) this.mediaController.last();
  }
}
