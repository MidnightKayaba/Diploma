import {Component, DoCheck} from '@angular/core';
import {LangService} from '../shared/lang.service';

@Component({
  selector: 'app-our-experience-block',
  templateUrl: './our-experience-block.component.html',
  styleUrls: ['./our-experience-block.component.sass']
})
export class OurExperienceBlockComponent implements DoCheck {

    constructor (private langService: LangService) {}
    lang;
    ngDoCheck() {
        this.lang = this.langService.getLang();
    }

}
