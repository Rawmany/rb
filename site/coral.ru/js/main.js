import {
	hostReactAppReady
} from "../../common/js/utils";

hostReactAppReady().then(() => {
	const gridItems = document.querySelectorAll('.grid_item');

	if (window.innerWidth <= 768) {
		gridItems.forEach(gridItem => {
			const triggerBtn = gridItem.querySelector(".actions button");
			const animatedElement = gridItem.querySelector('.animated');
			const imgs = gridItem.querySelectorAll("img");

			triggerBtn.addEventListener('click', () => {
				if (animatedElement) {
					// Переключаем класс true
					animatedElement.classList.toggle('true');

					// Переключаем класс filter для всех изображений
					imgs.forEach(img => img.classList.toggle('filter'));
				}
			});
		});
	} else {
		gridItems.forEach(gridItem => {
			gridItem.addEventListener('mouseover', () => {
				const animatedElement = gridItem.querySelector('.animated');
				if (animatedElement) {
					animatedElement.classList.add('true');
					const imgs = gridItem.querySelectorAll("img");
					imgs.forEach((img) => {
						img.classList.add("filter");
					})

				}
			});

			gridItem.addEventListener('mouseout', () => {
				const animatedElement = gridItem.querySelector('.animated');
				if (animatedElement) {
					animatedElement.classList.remove('true');
					const imgs = gridItem.querySelectorAll("img");
					imgs.forEach((img) => {
						img.classList.remove("filter");
					})
				}
			});
		});
	}




});
