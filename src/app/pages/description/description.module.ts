import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponenteModule } from 'src/app/components/components.module';

import { IonicModule } from '@ionic/angular';

import { DescriptionPageRoutingModule } from './description-routing.module';

import { DescriptionPage } from './description.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescriptionPageRoutingModule,
    ComponenteModule
  ],
  declarations: [DescriptionPage]
})
export class DescriptionPageModule {}
