import {Component, DoCheck} from '@angular/core';

import {LangService} from '../shared/lang.service';


@Component({
    selector: 'app-top-menu',
    templateUrl: './top-menu.component.html',
    styleUrls: ['./top-menu.component.sass']
})
export class TopMenuComponent implements DoCheck {
    constructor (private langService: LangService) {}
    languageList: string[] = ['Ru', 'En'];
    languageDefault = 'Ru';
    lang;
    ngDoCheck() {
        this.lang = this.langService.getLang();
    }
    onChange(lang: string) {
        this.langService.swapLang(lang);
    }
}
