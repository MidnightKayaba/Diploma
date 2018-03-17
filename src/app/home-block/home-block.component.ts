import {Component, DoCheck} from '@angular/core';
import {LangService} from '../shared/lang.service';

@Component({
  selector: 'app-home-block',
  templateUrl: './home-block.component.html',
  styleUrls: ['./home-block.component.sass']
})
export class HomeBlockComponent implements DoCheck {

    constructor (private langService: LangService) {}
    lang;
    ngDoCheck() {
        this.lang = this.langService.getLang();
    }

}
