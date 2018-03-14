import {Component, EventEmitter, Output} from '@angular/core';


@Component({
    selector: 'app-top-menu',
    templateUrl: './top-menu.component.html',
    styleUrls: ['./top-menu.component.sass']
})
export class TopMenuComponent {
    @Output () langSwap  = new EventEmitter<string>();
    languageList: string[] = ['Ru', 'En'];
    navRu = {
        'home': 'Главная',
        'aboutUs': 'О нас',
        'ourExperience': 'Наш опыт',
        'catalog': 'Каталог',
        'ourClients': 'Наши клиенты',
        'contacts': 'Контакты',
        'signIn' : 'Вход',
        'signUp' : 'Регистрация'
    };
    navEn = {
        'home': 'Home',
        'aboutUs': 'About us',
        'ourExperience': 'Our experience',
        'catalog': 'Catalog',
        'ourClients': 'Our clients',
        'contacts': 'Contacts',
        'signIn' : 'Sign in',
        'signUp' : 'Sign up'
    };
    languageDefault = 'Ru';
    lang = this.navRu;
    onChange(model) {
        this.lang = model === 'En' ? this.navEn : this.navRu;
        this.langSwap.emit(model);
    }
}
