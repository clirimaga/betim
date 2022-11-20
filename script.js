'use strict';
let stand = document.querySelector('.stand');
let values = document.querySelector('.values');
let btn = document.querySelector('.btn');
const showElements = function () {
    values.classList.toggle('hidden')
}
 btn.addEventListener('click', showElements )
