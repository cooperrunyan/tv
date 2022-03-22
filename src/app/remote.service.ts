import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RemoteService {
  constructor() {}

  state = {
    power: true,
    pause: false,
  };

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
    this.updater.next(this.state);
  }
}
