import { Component, OnInit } from '@angular/core';
import { RemoteService } from '../remote.service';

@Component({
  selector: 'app-scan-lines',
  templateUrl: './scan-lines.component.html',
  styleUrls: ['./scan-lines.component.scss'],
})
export class ScanLinesComponent implements OnInit {
  constructor(private remote: RemoteService) {}

  state = this.remote.state;

  ngOnInit(): void {
    this.remote.updater.subscribe((state) => {
      this.state = state;
    });
  }
}
