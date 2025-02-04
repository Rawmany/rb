import {
	hostReactAppReady
} from "../../common/js/utils";

hostReactAppReady().then(() => {

	const items = document.querySelectorAll('.js-item');

	items.forEach(item => {
		const button = item.querySelector('.js-button');
		const block = item.querySelector('.js-animated');
		let isActive = false;

		if (button) {
			button.addEventListener('click', (e) => {
				e.preventDefault();
				item.classList.toggle('is-active');
				block.classList.toggle('is-active');

				if (isActive) {
					button.textContent = 'Подробнее';
					isActive = false;
				} else {
					button.textContent = 'Скрыть';
					isActive = true;
				}
			});
		}

		if (window.innerWidth > 768) {
			item.addEventListener('mouseover', (e) => {
				item.classList.add('is-active');
				block.classList.add('is-active');
			});

			item.addEventListener('mouseleave', (e) => {
				item.classList.remove('is-active');
				block.classList.remove('is-active');
			});
		}
	});

});
