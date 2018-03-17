import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {TopMenuComponent} from './top-menu/top-menu.component';
import {LangService} from './shared/lang.service';
import { HomeBlockComponent } from './home-block/home-block.component';

@NgModule({
    declarations: [
        AppComponent,
        TopMenuComponent,
        HomeBlockComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [LangService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
