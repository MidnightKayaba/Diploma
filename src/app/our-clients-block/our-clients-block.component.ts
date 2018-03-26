import {Component, DoCheck, OnInit} from '@angular/core';
import {LangService} from '../shared/lang.service';

@Component({
    selector: 'app-our-clients-block',
    templateUrl: './our-clients-block.component.html',
    styleUrls: ['./our-clients-block.component.sass']
})
export class OurClientsBlockComponent implements DoCheck {

    constructor(private langService: LangService) {
    }

    lang;

    ngDoCheck() {
        this.lang = this.langService.getLang();
    }
}
