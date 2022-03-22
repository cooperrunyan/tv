import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { StorageService } from './storage.service';
import set from './setList';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  constructor(private storage: StorageService) {}

  public setList = set;
  public current = this.storage.get('media').current;
  public updater = new Subject<typeof this.setList[number]>();

  getCurrentSong() {
    return this.setList[this.current];
  }

  next() {
    if (this.setList[this.current + 1]) this.current += 1;
    else this.current = 0;
    this.storage.set('media', {
      current: this.current,
    });

    this.updater.next(this.setList[this.current]);
  }

  last() {
    if (this.setList[this.current - 1]) this.current -= 1;
    else this.current = this.setList.length - 1;
    this.storage.set('media', {
      current: this.current,
    });

    this.updater.next(this.setList[this.current]);
  }
}
