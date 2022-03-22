import { Component } from '@angular/core';
import { MediaControllerService } from '../media-controller.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent {
  constructor(private mediaController: MediaControllerService) {}

  next() {
    this.mediaController.next();
  }

  last() {
    this.mediaController.last();
  }
}
