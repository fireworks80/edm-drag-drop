import './assets/style.css';

function component() {
	const element = document.createElement('div');
	element.innerHTML = 'hello3';

	return element;
}

// document.body.appendChild(component());

if (module.hot) {
	console.log('hot');
}
