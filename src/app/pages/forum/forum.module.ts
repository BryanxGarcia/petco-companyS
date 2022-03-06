import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForumPageRoutingModule } from './forum-routing.module';
import { ComponenteModule } from 'src/app/components/components.module';

import { ForumPage } from './forum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForumPageRoutingModule,
    ComponenteModule
  ],
  declarations: [ForumPage]
})
export class ForumPageModule {}
