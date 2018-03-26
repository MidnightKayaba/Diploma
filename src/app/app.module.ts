import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {TopMenuComponent} from './top-menu/top-menu.component';
import {LangService} from './shared/lang.service';
import { HomeBlockComponent } from './home-block/home-block.component';
import { AboutAsBlockComponent } from './about-as-block/about-as-block.component';
import { OurExperienceBlockComponent } from './our-experience-block/our-experience-block.component';
import { CatalogBlockComponent } from './catalog-block/catalog-block.component';
import { OurClientsBlockComponent } from './our-clients-block/our-clients-block.component';
import { ContactsBlockComponent } from './contacts-block/contacts-block.component';

@NgModule({
    declarations: [
        AppComponent,
        TopMenuComponent,
        HomeBlockComponent,
        AboutAsBlockComponent,
        OurExperienceBlockComponent,
        CatalogBlockComponent,
        OurClientsBlockComponent,
        ContactsBlockComponent
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
