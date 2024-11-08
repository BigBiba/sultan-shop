import img1 from './img1.png';

const promotionSlide = {
    imageSrc: img1,
    add_description: '* АКЦИЯ ДЕЙСТВУЕТ ДО 01.01.1111',
    title: [ <strong>Супер </strong>, 'Скидка'],
    description: 'Получите 0% скидку на все товары.\n Продай все и получи ничего взамен! ',
};

const catalogSlide = {
    imageSrc: img1,
    add_description: '',
    title: 'Новый Категории',
    description: 'Посмотрите наши новые категории товаров.',
};

export const sliderData = [promotionSlide, catalogSlide];