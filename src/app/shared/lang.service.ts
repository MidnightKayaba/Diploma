export class LangService {
    langRu = {
        'home': 'Главная',
        'aboutUs': 'О нас',
        'ourExperience': 'Наш опыт',
        'catalog': 'Каталог',
        'ourClients': 'Наши клиенты',
        'contacts': 'Контакты',
        'signIn': 'Вход',
        'signUp': 'Регистрация',
        'technologyGrope': 'Группа технология',
        'welcome' : 'Добро пожаловать на наш сайт!'
    };
    langEn = {
        'home': 'Home',
        'aboutUs': 'About us',
        'ourExperience': 'Our experience',
        'catalog': 'Catalog',
        'ourClients': 'Our clients',
        'contacts': 'Contacts',
        'signIn': 'Sign in',
        'signUp': 'Sign up',
        'technologyGrope': 'Technology Grope',
        'welcome' : 'Welcome to our site!'
    };
    lang = this.langRu;

    getLang() {
        return this.lang;
    }

    swapLang(langNow) {
        this.lang = langNow === 'En' ? this.langEn : this.langRu;
    }
}
