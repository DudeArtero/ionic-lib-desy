import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IDesyButtonModule } from 'ionic-desy';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        IDesyButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
