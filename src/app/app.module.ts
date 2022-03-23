import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BorderComponent } from './border/border.component';
import { ScanLinesComponent } from './filters/scan-lines/scan-lines.component';
import { ScreenComponent } from './screen/screen.component';
import { PanelComponent } from './panel/panel.component';
import { DisplayComponent } from './panel/display/display.component';
import { ControlsComponent } from './panel/controls/controls.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, BorderComponent, ScanLinesComponent, ScreenComponent, PanelComponent, DisplayComponent, ControlsComponent],
  imports: [BrowserModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
