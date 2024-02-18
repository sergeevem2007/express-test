import '@/styles/index.scss';
import * as bootstrap from 'bootstrap';
import Swiper from 'swiper';
import 'swiper/css';

window.bootstrap = bootstrap;

const swiper = new Swiper('.swiper', {
	loop: true,
	slidesPerView: 1,
	centeredSlides: true,
	spaceBetween: 30,
	slidesPerGroup: 1,
	autoplay: {
		delay: 5000,
		pauseOnMouseEnter: true,
		disableOnInteraction: false,
	},
	breakpoints: {
		768: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 50,
		},
	},
});
swiper.autoplay;
