const chess_wrap = document.querySelector('.chess-wrapper');
chess_wrap.insertAdjacentHTML('afterbegin', '<div class="chess-inner-wrap"></div>');
const inner_wrap = document.querySelector('.chess-inner-wrap');
for (let chess_count = 1; chess_count <= 8; chess_count++) {
    inner_wrap.insertAdjacentHTML('afterbegin', '<ul class="chess-list"></ul>');
   for (let j = 1; j <= 8; j++) {
    document.querySelector('.chess-list').insertAdjacentHTML('afterbegin', '<li></li>');    
   }
}


