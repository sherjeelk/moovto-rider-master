import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderDetailsPageRoutingModule } from './order-details-routing.module';

import { OrderDetailsPage } from './order-details.page';
import {MatCardModule} from "@angular/material/card";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        OrderDetailsPageRoutingModule,
        MatCardModule,
        MatExpansionModule,
        MatFormFieldModule
    ],
  declarations: [OrderDetailsPage]
})
export class OrderDetailsPageModule {}
