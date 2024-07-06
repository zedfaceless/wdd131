const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
	  templeName: "Salt Lake",
	  location: "Salt Lake City, Utah, United States",
	  dedicated: "1893, April, 6",
	  area: 253015,
	  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg"
	},
	{
	  templeName: "Manila Philippine Temple",
	  location: "Quezon City, Philippines",
	  dedicated: "1984, September, 25",
	  area: 26683,
	  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manila-philippines/400x250/manila-philippines-temple-lds-129585-wallpaper.jpg"
	},
	{
	  templeName: "São Paulo Brazil",
	  location: "São Paulo, Brazil",
	  dedicated: "1978, October, 30",
	  area: 34445,
	  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-lds-187030-wallpaper.jpg"
	}
  ];
  
  // Function to generate temple cards
  function generateTempleCards(temples) {
	const templesGrid = document.getElementById('temples-grid');
	templesGrid.innerHTML = '';
  
	temples.forEach(temple => {
	  const templeCard = document.createElement('div');
	  templeCard.classList.add('temple-card');
  
	  templeCard.innerHTML = `
		<img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
		<div class="temple-info">
		  <h3>${temple.templeName}</h3>
		  <p>${temple.location}</p>
		  <p>Dedicated: ${temple.dedicated}</p>
		  <p>Area: ${temple.area} sq ft</p>
		</div>
	  `;
  
	  templesGrid.appendChild(templeCard);
	});
  }
  
  // Filter functions
  function filterTemples(criteria) {
	let filteredTemples;
	switch (criteria) {
	  case 'old':
		filteredTemples = temples.filter(temple => new Date(temple.dedicated) < new Date(1900, 0, 1));
		break;
	  case 'new':
		filteredTemples = temples.filter(temple => new Date(temple.dedicated) >= new Date(2000, 0, 1));
		break;
	  case 'large':
		filteredTemples = temples.filter(temple => temple.area > 90000);
		break;
	  case 'small':
		filteredTemples = temples.filter(temple => temple.area < 10000);
		break;
	  default:
		filteredTemples = temples;
		break;
	}
	generateTempleCards(filteredTemples);
  }
  
  // Event listeners for navigation menu
  document.querySelectorAll('nav a').forEach(link => {
	link.addEventListener('click', (e) => {
	  e.preventDefault();
	  const filter = e.target.dataset.filter;
	  filterTemples(filter);
	});
  });
  
  // Initialize
  generateTempleCards(temples);
  
  // Current year and last modified
  document.getElementById('currentyear').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;
  
  // Hamburger menu interaction
  const mainnav = document.querySelector('nav');
  const hambutton = document.querySelector('#menu');
  
  hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
  });
  