import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {
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
    lang = this.navRu;
    onChanged(model) {
        this.lang = model === 'En' ? this.navEn : this.navRu;
    }
}
