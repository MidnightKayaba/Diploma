import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {TopMenuComponent} from './top-menu/top-menu.component';
import { HomeBlockComponent } from './home-block/home-block.component';
import { AboutUsBlockComponent } from './about-us-block/about-us-block.component';


@NgModule({
    declarations: [
        AppComponent,
        TopMenuComponent,
        HomeBlockComponent,
        AboutUsBlockComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
