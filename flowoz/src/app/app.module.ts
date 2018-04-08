import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgSemanticModule } from "ng-semantic";
import { OrderModule } from 'ngx-order-pipe';

import { AppComponent } from './app.component';
import { AnalysisComponent } from './analysis/analysis.component';


@NgModule({
  declarations: [
    AppComponent,
    AnalysisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgSemanticModule,
    CommonModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
