
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponenteModule } from 'src/app/components/components.module';

import { EventsPageRoutingModule } from './events-routing.module';

import { EventsPage } from './events.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsPageRoutingModule,
    ComponenteModule
  ],
  declarations: [EventsPage]
})
export class EventsPageModule {}
