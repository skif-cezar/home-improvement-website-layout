const iframe = document.querySelector('.application__map'),
	btnNext = document.querySelector('.reviews__btn-next'),
	btnPrev = document.querySelector('.reviews__btn-prev'),
	slides = document.querySelectorAll('.reviews__slide');

let index = 0;

const activeSlide = (n) => {
	for (slide of slides) {
		slide.classList.remove('active');
	}
	slides[n].classList.add('active');
}

const prepareCurrentSlide = (ind) => {
	activeSlide(ind);
}

const nextSlide = () => {
	if (index === slides.length - 1) {
		index = 0;
		prepareCurrentSlide(index);
	} else {
		index++;
		prepareCurrentSlide(index);
	}
}

const prevSlide = () => {
	if (index === 0) {
		index = slides.length - 1;
		prepareCurrentSlide(index);
	} else {
		index--;
		prepareCurrentSlide(index);
	}
}

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);

iframe.onload = () => {
	if (!iframe.classList.contains('load')) {
		iframe.classList.add('load');
	}
	return;
};
