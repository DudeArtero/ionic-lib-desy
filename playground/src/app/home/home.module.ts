import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { IDesyButtonModule, IDesyBadgeModule } from 'ionic-desy';
import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    IDesyButtonModule,
    IDesyBadgeModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
