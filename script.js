// GENERATION DES CARTES RESTAURANTS
const cards = document.querySelector(".cards");

const restaurants = [
	{
		name: "Mcdonald",
		picture: "images/hamburger.jpg",
		tags: ["Fast-Food"],
		adress: "Port Autonome, Place de Latule, Bd Alfred Daney, 33300 Bordeaux",
		horaires: "7h30 - 7h00",
		map: "./images/mcdo.png",
	},
	{
		name: "Papadum indian Food",
		picture: "images/indien01.jpg",
		tags: ["Indien"],
		adress: "121 Rue Lucien Faure, 33300 Bordeaux",
		horaires: "11h30 - 14h30 / 18h30 - 22h30",
		map: "./images/papdum.png",
	},
	{
		name: "Awake Restaurant Original et Bio",
		picture: "images/salade01.jpg",
		tags: ["Brasserie"],
		adress: "54 Quai Virginie Hériot, 33300 Bordeaux",
		horaires: "11h45 - 14h00 / 18h45-22h00",
		map: "./images/awake.png",
	},
	{
		name: "Delirium café",
		picture: "images/bar01.jpg",
		tags: ["Brasserie"],
		adress: "30 Quai Virginie Hériot, 33300 Bordeaux",
		horaires: "16h00 - 02h00",
		map: "./images/delirium.png",
	},
	{
		name: "Au bureau",
		picture: "images/brasserie01.jpg",
		tags: ["Brasserie"],
		adress: "12 Quai Virginie Hériot, 33300 Bordeaux",
		horaires: "11h00 - 23h30",
		map: "./images/au-bureau.png",
	},
	{
		name: "Boulangerie B3",
		picture: "images/boulangerie01.jpg",
		tags: ["Boulangerie", "Fast-Food"],
		adress: "282 Cr Balguerie Stuttenberg, 33300 Bordeaux",
		horaires: "7h00 - 19h30",
		map: "./images/boulangerie-b3.png",
	},
	{
		name: "It-Italian Trattoria",
		picture: "images/italien02.jpg",
		tags: ["Italien", "Brasserie"],
		adress: "40 Quai Virginie Hériot Bassins à Flot N°2, 33300 Bordeaux",
		horaires: "12h00 - 14h30 / 19h00 - 22h15",
		map: "./images/it-trattioria.png",
	},
	{
		name: "La Côte et l'Arête Bordeaux",
		picture: "images/italien01.jpg",
		tags: ["Brasserie"],
		adress: "19 Quai Virginie Hériot, 33300 Bordeaux",
		horaires: "12h00 - 14h15 / 19h00 - 22h15",
		map: "./images/la-cote.png",
	},
	{
		name: "On Air café",
		picture: "images/boulangerie02.jpg",
		tags: ["Brasserie", "Fast-Food"],
		adress: "171 Rue Lucien Faure, 33300 Bordeaux",
		horaires: "7h45 - 14h00 / 18h00 - 21h00",
		map: "./images/on-air.png",
	},
	{
		name: "Eat Salad",
		picture: "images/salade02.jpg",
		tags: ["Brasserie", "Fast-Food"],
		adress: "51 Rue Lucien Faure, 33300 Bordeaux",
		horaires: "11h30 - 15h00 / 18h30 - 22h00",
		map: "./images/eat-salad.png",
	},
	{
		name: "My Beers",
		picture: "images/brasserie02.jpg",
		tags: ["Brasserie"],
		adress: "63 Quai Virginie Hériot, 33300 Bordeaux",
		horaires: "11h00 - 22h00",
		map: "./images/my-beers.png",
	},
	{
		name: "SuAndSushi",
		picture: "images/sushi01.jpg",
		tags: ["Sushi"],
		adress: "59 Rue Lucien Faure Building, 33300 Bordeaux",
		horaires: "11h00 - 14h00  /  18h30 - 22h30",
		map: "./images/su-and-sushi.png",
	},
];

function createCard(restaurant) {
	const { name, picture, tags, adress, horaires, map } = restaurant;

	const card = document.createElement("article");
	card.classList.add("articles");
	cards.appendChild(card);

	const cardFront = document.createElement("section");
	cardFront.classList.add("card-front");
	card.appendChild(cardFront);

	const cardImg = document.createElement("img");
	cardImg.src = picture;
	cardImg.alt = name;
	cardImg.style.transition = "transform 0.3s ease";

	// cardImg.classList.add("card-img");
	card.appendChild(cardImg);

	const cardTitle = document.createElement("h2");
	cardTitle.classList.add("card-title");
	cardTitle.textContent = `${name}`;
	card.appendChild(cardTitle);

	const cardTags = document.createElement("p");
	// cardTags.classList.add("card-tags");
	cardTags.textContent = tags.join(", ");
	card.appendChild(cardTags);

	const cardAdress = document.createElement("p");
	cardAdress.classList.add("adresse");
	cardAdress.textContent = `${adress}`;
	card.appendChild(cardAdress);

	const cardBack = document.createElement("section");
	cardBack.classList.add("card-back");
	card.appendChild(cardBack);

	const cardMap = document.createElement("img");
	cardMap.src = map;
	cardBack.appendChild(cardMap);

	const cardBackTitle = document.createElement("h2");
	cardBackTitle.classList.add("card-back-title");
	cardBackTitle.textContent = "Horaires :";
	cardBack.appendChild(cardBackTitle);

	const cardHourly = document.createElement("p");
	cardHourly.classList.add("card-hourly");
	cardHourly.textContent = `${horaires}`;
	cardBack.appendChild(cardHourly);

	cardImg.addEventListener("mouseover", function () {
		cardImg.style.transform = "scale(1.02)";
		cardImg.style.filter = "blur(2px)";
	});

	cardImg.addEventListener("mouseleave", function () {
		cardImg.style.transform = "scale(1)";
		cardImg.style.filter = "none";
	});
}

restaurants.forEach((restaurant) => {
	createCard(restaurant);
});

// Sélectionne toutes les cartes (articles)
const card = document.querySelectorAll("article");

// Pour chaque carte, ajoute un event listener pour détecter le clic
card.forEach((card) => {
	card.addEventListener("click", function () {
		card.classList.toggle("flipped"); // Ajoute/enlève la classe 'flipped'
	});
});

// FILTERS TAGS SYSTEM

const filterCheckboxes = document.querySelectorAll(".filter-checkbox");

filterCheckboxes.forEach((checkbox) => {
	checkbox.addEventListener("change", filterCards);
});

function filterCards() {
	// Gather all checked checkboxes
	const selectedTags = Array.from(
		document.querySelectorAll(".filter-checkbox:checked"),
	).map((checkbox) => checkbox.value);

	cards.innerHTML = "";

	const filteredRestaurants = restaurants.filter((restaurant) =>
		selectedTags.every((tag) => restaurant.tags.includes(tag)),
	);

	filteredRestaurants.forEach((restaurant) => createCard(restaurant));
	const card = document.querySelectorAll("article");
	card.forEach((card) => {
		card.addEventListener("click", function () {
			card.classList.toggle("flipped"); // Ajoute/enlève la classe 'flipped'
		});
	});
}
