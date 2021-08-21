import $ from './lib/lib';

// console.log($('div').eq(2).findElems('.some'));

// console.log($('.some').closestElems('.parent'));

// console.log($('.more').eq(0).siblings());

// $('button').fadeIn(2000);

// $('#first').click(() => {
//     $('div').eq(1).fadeToggle(800);
// });

// $('[data-count="second"]').click(() => {
//     $('div').eq(2).fadeToggle(800);
// });

// $('button').eq(1).click(() => {
//     $('.w-500').fadeIn(800);
// });


// $('.wrapper').html(
//     `<div class="dropdown">
//         <button class="btn btn-warning dropdown__btn" id="dropdownMenuBtn">Dropdown menu</button>
//         <ul class="dropdown__list" data-toggle-id="dropdownMenuBtn">
//             <li class="dropdown__item">
//                 <a href="" class="dropdown__link">Action</a>
//             </li>
//             <li class="dropdown__item">
//                 <a href="" class="dropdown__link">Action#2</a>
//             </li>
//             <li class="dropdown__item">
//                 <a href="" class="dropdown__link">Action#3</a>
//             </li>
//         </ul>
//     </div>`
// );

// $('.dropdown__btn').dropdown();

$('#trigger').click(() => $('#trigger').createModal({
        text: {
            title: 'Modal title#2',
            descr: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit..'
        },
        btns: {
            count: 3,
            settings: [
                [
                    'Close modal',
                    ['btn-danger', 'mr-10'],
                    true
                ],
                [
                    'Save Changes',
                    ['btn-success'],
                    false,
                    () => {
                        alert('Data have saved');
                    }
                ],
                [
                    'Another',
                    ['btn-warning', 'ml-10'],
                    false,
                    () => {
                        alert('What\'re you waiting?'); 
                    }   
                ]
            ]
        }
}));

$('#slider1').createSlider({
    count: 4,
    img: ['https://il-mostro.com/wp-content/uploads/2012/08/fTO1henYeTg.jpg', 
        'https://im0-tub-ru.yandex.net/i?id=85aea42f32633e2f6f9765351815ed09-l&ref=rim&n=13&w=1080&h=1350',
        'https://pbs.twimg.com/media/CQWAF7xUwAAuK_1.jpg',
        'https://i.pinimg.com/originals/b4/b9/64/b4b9649495d7c5c64d9884ffb44575bf.jpg'
    ]
});
