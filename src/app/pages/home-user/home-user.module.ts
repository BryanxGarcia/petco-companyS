import { ComponenteModule } from 'src/app/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeUserPageRoutingModule } from './home-user-routing.module';

import { HomeUserPage } from './home-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeUserPageRoutingModule,
    ComponenteModule
  ],
  declarations: [HomeUserPage]
})
export class HomeUserPageModule {}
