import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class RemoteService {
  constructor(private storage: StorageService) {}

  state = this.storage.get('remote')

  updater = new Subject<typeof this.state>();

  pause() {
    this.toggle('pause');
    this.update();
  }

  power() {
    this.toggle('power');
    if (!this.state.power) this.state.pause = true;
    this.update();
  }

  private toggle(field: keyof typeof this.state) {
    this.state[field] = !this.state[field];
  }

  private update() {
    this.storage.set('remote', {
      ...this.state,
    });
    this.updater.next(this.state);
  }
}
