// Define image paths
const projects = document.querySelectorAll('.proj');

const imagePaths = [
  'image/pokemon/home page pokemon.jpg',
  'image/landing/land-home-page.png',
  'image/personal por/home page.jpg',
];

const secondImagePaths = [
  'image/phone number validation tool/phone home page.jpg',
  'image/roman/roman only page.jpg',
  'image/cash rigister/home page.png',
];

let showFirstSet = true;

const modalContainer = document.querySelector('.modal');

// Popup window
const projectCard = [
  {
    id: '0',
    image: 'image/pokemon/home page pokemon.jpg',
    image1: 'image/pokemon/detail-pokemon image.png',
    image2: 'image/pokemon/third-pokmeon.jpg',
    title: 'Pokémon Search App',
    descriptionShort:
      'Pokémon Search App 🕵️‍♂️✨ is a comprehensive tool for discovering detailed information about your favorite Pokémon! 🐾🔍',
    descriptionLong1:
      'Easily search for Pokémon by name, type, or abilities to access their stats,  moves, and evolutions. 📊💪',
    language1: 'JavaScript',
    language2: 'HTML',
    language3: 'CSS',
    buttonLive: '//shogof.github.io/Build-a-Pok-mon-Search-App/',
    buttonSource: '//github.com/shogof/Build-a-Pok-mon-Search-App',
  },
  {
    id: '1',
    image: 'image/landing/land-home-page.png',
    image1: 'image/landing/landing.pag2.png',
    image2: 'image/landing/third.jpg',
    title: 'Landing page project',
    descriptionShort: '🍔 Welcome to our Hamburger Landing Page!',
    descriptionLong1:
      'Crafted with passion and precision, it s a feast for the eyes and a treat for your taste buds. Delve into the artistry of HTML/CSS as we serve up a delectable array of web development essentials.🍔💻🎉',
    language1: 'languages',
    language2: 'CSS',
    language3: 'JavaScript',
    buttonLive: '//shogof.github.io/Landing-page-project/',
    buttonSource: '//github.com/shogof/Landing-page-project',
  },
  {
    id: '5',
    image: 'image/cash rigister/11.jpg',
    image1: 'image/cash rigister/cash-second.png',
    image2: 'image/cash rigister/third.jpg',
    title: 'Cash Register App',
    descriptionShort:
      'Create an easy-to-use cash register with basic features for managing sales. Features:',
    descriptionLong1:
      '💵 Handles Transactions: Processes sales and gives change.🔄 Simple to Use: Easy setup and intuitive interface.',
    language1: 'JavaScript',
    language2: 'HTML',
    language3: 'CSS',
    buttonLive: 'https://shogof.github.io/build-a-cash-register/',
    buttonSource: 'https://github.com/shogof/build-a-cash-register',
  },
  {
    id: '3',
    image: 'image/phone number validation tool/phone home page.jpg',
    image1: 'image/phone number validation tool/phone second page.jpg',
    image2: 'image/phone number validation tool/phone third page.jpg',
    title: 'Phone number validation tool',
    descriptionShort: '📞Welcome to our Global Phone Number Validator project!',
    descriptionLong1:
      'Dive into meticulous validation across Iran, Afghanistan, and the USA. Our regex patterns and modern JavaScript techniques ensure robust validation.',
    language1: 'HTML',
    language2: 'CSS',
    language3: 'JavaScript',
    buttonLive: 'https://shogof.github.io/phone-number-validattion/',
    buttonSource: 'https://github.com/shogof/phone-number-validattion',
  },
  {
    id: '4',
    image: 'image/roman/roman only page.jpg',
    image1: 'image/roman/pv roman.jpg',
    image2: 'image/roman/third.jpg',
    title: 'Roman Numeral Converter',
    descriptionShort: 'Welcome to our Build-a-Roman-Numeral-Converter project!',
    descriptionLong1:
      'Crafted with historical intrigue and coding finesse, Embark on a voyage through JavaScript, where ancient symbols blend seamlessly with modern web techniques.',
    language1: 'Languages',
    language2: 'HTML',
    language3: 'CSS',
    buttonLive: 'https://shogof.github.io/Build-a-Roman-Numeral-Converter/',
    buttonSource: '//github.com/shogof/Build-a-Roman-Numeral-Converter',
  },
  {
    id: '2',
    image: 'image/personal por/about page.jpg',
    image1: 'image/personal por/project page.jpg',
    image2: 'image/personal por/contact page.jpg',
    title: 'Personal Portfolio',
    descriptionShort:
      ' Embark on a journey through the realm of web development with me, Shogofa Developer.',
    descriptionLong1:
      '🚀 As a diligent web development enthusiast, Ive dedicated numerous hours to refining my skills in remote development.',
    language1: 'HTML',
    language2: 'CSS',
    language3: 'JavaScript',
    buttonLive: 'https://shogof.github.io/portfolio/',
    buttonSource: 'https://github.com/shogof/portfolio',
  },
];

const showModal = (event) => {
  const clickedButton = event.target.id;

  const findCardInfo = projectCard.find((card) => card.id === clickedButton);

  if (!findCardInfo) {
    return;
  }

  modalContainer.classList.remove('hidden');

  const createModalCard = document.createElement('article');
  createModalCard.classList.add('modal-card');

  createModalCard.innerHTML = `
    <div class='popup'>
      <h2>${findCardInfo.title}</h2>
      <i class='fas fa-times' id='close-button'></i>
      <a href='${findCardInfo.buttonLive}'>
        <button class='go-live'>
          See Live &nbsp; <img src='image/v1.png' alt='' />
        </button>
      </a>
      <div class='image-div'>
      <input type='radio' name='slide' id='one' checked>
      <input type='radio' name='slide' id='two'>
      <input type='radio' name='slide' id='three'>
      
      <div class='img img-1'>
      <img src='${findCardInfo.image}' alt='${findCardInfo.title}' />
      </div>
      <div class='img img-2'>
      <img src='${findCardInfo.image1}' alt='${findCardInfo.title}' />
      </div>
      <div class='img img-3'>
      <img src='${findCardInfo.image2}' alt='${findCardInfo.title}' />
      </div>
  
      <div class='sliders'>
        <label for='one' class='one'></label>
        <label for='two' class='two'></label>    
        <label for='three' class='three'></label>
      </div>
      </div>
      <a href='${findCardInfo.buttonSource}'>
        <button class='go-demo'>
          See Source &nbsp; <img src='image/Vector (8).png' alt='' />
        </button>
      </a>
      <div class='detail-div'>
      <div class='lang'>
        <p id='html-btn'>${findCardInfo.language1}</p>
        <div class='cj'>
          <p id='css'>${findCardInfo.language2}</p>
          <p id='js'>${findCardInfo.language3}</p>
        </div>
      </div>
        <p id='detail'>
          ${findCardInfo.descriptionShort} ${findCardInfo.descriptionLong1}
        </p>
      </div>
    </div>
  `;

  const modalIsShown = modalContainer.querySelector('.modal-card');
  if (modalIsShown) {
    modalContainer.removeChild(modalIsShown);
  }

  modalContainer.appendChild(createModalCard);

  // Close Modal
  const closeButton = createModalCard.querySelector('#close-button');

  if (closeButton) {
    closeButton.addEventListener('click', () => {
      modalContainer.classList.add('hidden');
    });
  }
};

// Function to toggle images and show popup
const toggleImages = () => {
  projects.forEach((projElement, index) => {
    while (projElement.firstChild) {
      projElement.removeChild(projElement.firstChild);
    }

    const imgElement = document.createElement('img');
    imgElement.classList.add('g');
    if (showFirstSet) {
      imgElement.src = imagePaths[index];
      imgElement.addEventListener('click', () => {
        showModal({ target: { id: index.toString() } });
      });
    } else {
      imgElement.src = secondImagePaths[index];
      imgElement.addEventListener('click', () => {
        showModal({ target: { id: (index + 3).toString() } });
      });
    }
    imgElement.alt = `Project Image ${index + 1}`;
    projElement.appendChild(imgElement);
  });
  showFirstSet = !showFirstSet;
};

// Initial image setup
projects.forEach((projElement, index) => {
  const imgElement = document.createElement('img');
  imgElement.classList.add('g');
  imgElement.src = imagePaths[index];
  imgElement.alt = `Project Image ${index + 1}`;
  projElement.appendChild(imgElement);

  // Make project images clickable to show modal
  imgElement.addEventListener('click', () => {
    showModal({ target: { id: index.toString() } });
  });
});

// Event listener for clicking on #vic
const vic = document.getElementById('vic');
vic.addEventListener('click', toggleImages);

// Array of image data
const images = [
  'image/pokemon/home page pokemon.jpg',
  'image/landing/land-home-page.png',
  'image/personal por/home page.jpg',
  'image/phone number validation tool/phone home page.jpg',
  'image/roman/roman only page.jpg',
  'image/cash rigister/home page.png',
];

// Container for the slider
const sliderContainer = document.getElementById('slider-container');
const sliderDiv = document.createElement('div');
sliderDiv.classList.add('slider');

// Create and append spans with images
images.forEach((src, index) => {
  const span = document.createElement('span');
  span.style.setProperty('--i', index + 1);
  const img = document.createElement('img');
  img.src = src;
  img.classList.add('img');
  span.appendChild(img);
  sliderDiv.appendChild(span);
  img.addEventListener('click', () => {
    showModal({ target: { id: index.toString() } });
  });
});

// Append the sliderDiv to the container
sliderContainer.appendChild(sliderDiv);
