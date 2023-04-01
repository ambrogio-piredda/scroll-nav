const scrollNav = (() => {

	let prevYPosition = 0;
	let direction = 'up';

	const options = {
		rootMargin: `-${window.innerHeight / 2}px 0px 0px 0px`,
	};

	const setScrollDirection = () => {
		if (window.scrollY > prevYPosition) {
			direction = 'down';
		} else if (window.scrollY < prevYPosition) {
			direction = 'up';
		} 

		prevYPosition = window.scrollY;
	};

	const onIntersect = entries => {
		entries.forEach(entry => {
			setScrollDirection();

			if (direction === 'down' && !entry.isIntersecting) {
				document.querySelector(`[href$="#${entry.target.id}"]`).classList.remove('active');
				if (entry.target.nextElementSibling) {
					document.querySelector(`[href$="#${entry.target.nextElementSibling.id}"]`).classList.add('active');
				}
			} else if (direction === 'up' && entry.isIntersecting) {
				if (entry.target.nextElementSibling) {
					document.querySelector(`[href$="#${entry.target.nextElementSibling.id}"]`).classList.remove('active');
				}
				document.querySelector(`[href$="#${entry.target.id}"]`).classList.add('active');
			}
		});
	};

	const observer = new IntersectionObserver(onIntersect, options)

	return {
		init: sections => {
			sections.forEach(section => {
				observer.observe(section);
			});
		}
	}
})();
