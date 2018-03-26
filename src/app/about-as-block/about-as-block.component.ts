import {Component, DoCheck} from '@angular/core';
import {LangService} from '../shared/lang.service';

@Component({
  selector: 'app-about-as-block',
  templateUrl: './about-as-block.component.html',
  styleUrls: ['./about-as-block.component.sass']
})
export class AboutAsBlockComponent implements DoCheck {

    constructor (private langService: LangService) {}
    lang;
    ngDoCheck() {
        this.lang = this.langService.getLang();
    }

}
