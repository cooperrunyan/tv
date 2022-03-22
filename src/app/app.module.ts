import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TvSvgComponent } from './tv-svg/tv-svg.component';
import { ScanLinesComponent } from './scan-lines/scan-lines.component';
import { ScreenComponent } from './screen/screen.component';
import { PanelComponent } from './panel/panel.component';
import { PanelScreenComponent } from './panel/screen/screen.component';
import { RemoteComponent } from './panel/remote/remote.component';

@NgModule({
  declarations: [AppComponent, TvSvgComponent, ScanLinesComponent, ScreenComponent, PanelComponent, PanelScreenComponent, RemoteComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
