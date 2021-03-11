import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ExperienceComponent } from './experience/experience.component';
import { CitiesComponent } from './cities/cities.component';
import { CommonContentModule } from '../common-content/common-content.module';


@NgModule({
  declarations: [ExperienceComponent, CitiesComponent],
  imports: [
    CommonModule,
    ContentRoutingModule,
    CommonContentModule
  ],
  exports: [
    CitiesComponent,
    ExperienceComponent,
  ]
})
export class ContentModule { }
