import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapModule } from './map/map.module';


@NgModule({
	imports: [
		BrowserModule,
		MapModule
	],
	declarations: [
		AppComponent
	],
	bootstrap: [ AppComponent ],
	providers: [ ]
})
export class AppModule { }
