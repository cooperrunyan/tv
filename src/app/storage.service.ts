import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  set(item: string, value: {}) {
    localStorage.setItem(item, JSON.stringify(value));
  }

  get(item: string) {
    return JSON.parse(localStorage.getItem(item) || '{}');
  }
}
