import {Component, DoCheck} from '@angular/core';
import {LangService} from '../shared/lang.service';

@Component({
  selector: 'app-contacts-block',
  templateUrl: './contacts-block.component.html',
  styleUrls: ['./contacts-block.component.sass']
})
export class ContactsBlockComponent implements DoCheck {

    constructor (private langService: LangService) {}
    lang;
    ngDoCheck() {
        this.lang = this.langService.getLang();
    }

}
