import {Component, DoCheck} from '@angular/core';
import {LangService} from '../shared/lang.service';

@Component({
  selector: 'app-catalog-block',
  templateUrl: './catalog-block.component.html',
  styleUrls: ['./catalog-block.component.sass']
})
export class CatalogBlockComponent implements DoCheck {

    constructor (private langService: LangService) {}
    lang;
    ngDoCheck() {
        this.lang = this.langService.getLang();
    }

}
