import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SuiModule } from 'ng2-semantic-ui';
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
    SuiModule,
    CommonModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
