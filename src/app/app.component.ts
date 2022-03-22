import { Component } from '@angular/core';
import { MediaService } from './media.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private media: MediaService) {}

  ngOnInit() {
    for (const song of this.media.setList) {
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
