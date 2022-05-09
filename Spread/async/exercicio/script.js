const Botao = document.getElementById('botao')
const imagens = document.getElementById('imagens')
const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

const getCats = async () => {
	try {
		const data = await fetch(BASE_URL);
		const json = await data.json();
		return json.webpurl;
	} catch (e) {
		console.log(e.message);
	}
};

const loadImg = async () => {
	imagens.src = await getCats();
};

loadImg();


Botao.addEventListener('click',loadImg)