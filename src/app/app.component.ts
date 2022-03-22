import { Component } from '@angular/core';
import { MediaControllerService } from './media-controller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private mediaController: MediaControllerService) {}

  ngOnInit() {
    for (const song of this.mediaController.setList) {
      this.loadLink(song.link);
    }
  }

  loadLink(link: string) {
    let node = document.createElement('link');
    node.href = link;
    node.rel = 'prefetch';

    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
