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
        'technologyGrope': 'Группа Технология',
        'welcome' : 'Добро пожаловать на наш сайт!',
        'AUdescription' : 'Основным направлением деятельности производственно-инжиниринговой компании "Группа Технология" является разработка и производство технологического промышленного оборудования, разработка и внедрение систем автоматизации технологическиx процессов.'
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
        'technologyGrope': 'Grope Technology',
        'welcome' : 'Welcome to our site!',
        'AUdescription' : 'The main direction of the production and engineering company "Group Technology" is the development and production of technological industrial equipment, development and implementation of automation systems for technological processes.'
    };
    lang = this.langRu;

    getLang() {
        return this.lang;
    }

    swapLang(langNow) {
        this.lang = langNow === 'En' ? this.langEn : this.langRu;
    }
}
