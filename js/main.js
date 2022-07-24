const modall = document.querySelector('.modal');
const setting = document.querySelector('.setting__btn');
const cancel = document.querySelector('.cancel__link');

setting.addEventListener('click', () => {
	modall.classList.toggle('modal-on');
});

cancel.addEventListener('click', () => {
	modall.classList.remove('modal-on');
});

document.getElementById('myButton').onclick = function () {
	location.href = './list.html';
};

document.getElementById('moreButton').onclick = function () {
	location.href = './list.html';
};
