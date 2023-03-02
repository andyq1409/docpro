import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PakietComponent } from "./pakiet/pakiet.component";

@NgModule({
    declarations: [
        AppComponent,
        PakietComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        NgbModule, FormsModule, HttpClientModule
    ]
})
export class AppModule { }
