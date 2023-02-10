const INTERACTION_IMGS = {
  rotating_presence: 'rotating_presence.svg',
  rotating_position: 'rotating_position.svg',
  rotating_rotation: 'rotating_rotation.svg',

  sliding_presence: 'sliding_presence.svg',
  sliding_position: 'sliding_position.svg',

  pressing_presence_blur: 'pressing_presence_blur.svg',
  pressing_presence_block: 'pressing_presence_block.svg',

  identifying_object_coin: 'identifying_object_coin.svg',
  identifying_object_block: 'identifying_object_block.svg',

  tilting_presence: 'tilting_presence.svg',
  tilting_position: 'tilting_position.svg',

  shaking_position: 'shaking_position.svg',
  flipping_presence: 'flipping_presence.svg',
  pinching_presence: 'pinching_presence.svg',
  detecting_light_presence: 'detecting_light_presence.svg',
};

const PROJECT_DATA = [
  // studio 1: 0, 1, 2, 3, 4, 5, 6
  {
    listID: 0, // 1, 2, 3, 4, 5, 6
    id: 'project1A',
    name: '1A: Aru-Controls',
    images: ['P1A_1.png', 'P1A_2.png'],
    studio: ['studio1'],
    studioName: 'Studio 1: DIY CV Interfaces Studio',
    authors: '',
    video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/bPs5HvU2muo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    interactions: ['rotating_rotation', 'pressing_presence_blur', 'pressing_presence_block', 'identifying_object_block', 'sliding_position'],
    description: 'AruControls is a desktop software application that maps DIY controller modules to computer keyboard events. For example, users can map detecting a CV marker to a specific keypress (e.g., delete). The team demonstrated a number of physical inputs with different interactions, and used their application to control video games or digital audio workstations on the computer.',
    tags: ['studio1', 'rotating_rotation', 'pressing_presence_blur', 'pressing_presence_block', 'identifying_object_block', 'sliding_position'],
  },

  {
    listID: 1,
    id: 'project1B',
    name: '1B: Elucidate',
    images: ['P1B_1.png', 'P1B_2.png'],
    studio: ['studio1'],
    studioName: 'Studio 1: DIY CV Interfaces Studio',
    authors: '',
    video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/eZYtfVv-Avw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    interactions: ['detecting_light_presence'],
    description: 'Elucidate is a box-like ambient interface that translates changes in light and wind to sound. Slits and flaps are placed at the opening. As light or wind interact with these slits and flaps, shadows shift around in the inside of the box hiding and revealing CV markers on the inside. A smartphone observes these CV markers and maps the change in detected CV markers to different sound samples.',
    tags: ['studio1', 'detecting_light_presence'],
  },

  {
    listID: 2,
    id: 'project1C',
    name: '1C: FunFund',
    images: ['P1C_1.JPG', 'P1C_2.jpg'],
    studio: ['studio1'],
    studioName: 'Studio 1: DIY CV Interfaces Studio',
    authors: '',
    video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/p_64bcvwSKY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    interactions: ['identifying_object_coin'],
    description: 'FunFund is a cardboard coin bank designed to help children learn about tangible and digital money. Children can deposit coins into the coin bank, and a cardboard mechanism will sort the coins into their specific denominations. This is logged in real time into a digital "savings" application by a smartphone placed on top.',
    tags: ['studio1', 'identifying_object_coin'],
  },

  {
    listID: 3,
    id: 'project1D',
    name: '1D: HEXBOX',
    images: ['P1D_1.jpg', 'P1D_2.jpg'],
    studio: ['studio1'],
    studioName: 'Studio 1: DIY CV Interfaces Studio',
    authors: '',
    video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/DR_D42L1854" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    interactions: ['rotating_rotation', 'pressing_presence_blur', 'sliding_position', 'pinching_presence'],
    description: 'HEXBOX is an alternative video game platform with interchangeable inputs designed with cardboard and household materials like elastic bands. Each input offers a different action (pressing, sliding, squeezing) and provides haptic feedback. CV markers are positioned at the base of each input, and the game makes use of marker presence, position, and rotation to control game actions.',
    tags: ['studio1', 'rotating_rotation', 'pressing_presence_blur', 'sliding_position', 'pinching_presence'],
  },

  {
    listID: 4,
    id: 'project1E',
    name: '1E: Stickibeats',
    images: ['P1E_1.jpg', 'P1E_2.jpg'],
    studio: ['studio1'],
    studioName: 'Studio 1: DIY CV Interfaces Studio',
    authors: '',
    video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/UPQCz1A8ijM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    interactions: ['rotating_presence'],
    description: 'Stickibeats is a cardboard robot designed to help children learn about musical rhythm. This robot has a single large wheel with four different tracks on which CV marker stickers can be placed. The wheel turns as children move the robot across the floor, and the smartphone on top plays the corresponding sound sample for each marker that appears.',
    tags: ['studio1', 'rotating_presence'],
  },

  {
    listID: 5,
    id: 'project1F',
    name: '1F: TILT',
    images: ['P1F_1.jpg', 'P1F_2.png'],
    studio: ['studio1'],
    studioName: 'Studio 1: DIY CV Interfaces Studio',
    authors: '',
    video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/10a7YKW5U90" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    interactions: ['rotating_rotation', 'flipping_presence'],
    description: 'TILT is a simple cardboard controller that takes the form of a see-saw. Design students developed three cooperative games that make use of this controller. The see-saw controller facilitates tangible interactions that require two people. CV markers are placed around the controller and are used to determine the orientation of the controller.',
    tags: ['studio1', 'rotating_rotation', 'flipping_presence'],
  },

  {
    listID: 6,
    id: 'project1G',
    name: '1G: TRACK',
    images: ['P1G_1.jpg', 'P1G_2.png'],
    studio: ['studio1'],
    studioName: 'Studio 1: DIY CV Interfaces Studio',
    authors: '',
    video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/fsdDTJigsaU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    interactions: ['sliding_presence'],
    description: 'TRACK is an occupational therapy device to exercise the shoulders. It comprises of a pulley system connected to a railtrack lined with CV markers. As the exercise progresses, a white background shifts back and forth, revealing the CV markers one at a time. This system connects to a simple video game designed to motivate elderly physical therapy patients.',
    tags: ['studio1', 'sliding_presence'],
  },

  // studio 2 // 8, 9, 10
  {
    listID: 7, 
    id: 'project2A',
    name: '2A: Lightcycles',
    images: ['P2A_1.jpg', 'P2A_2.jpg'],
    studio: ['studio2'],
    studioName: 'Studio 2: Tinycade',
    authors: '',
    video: '<iframe title="vimeo-player" src="https://player.vimeo.com/video/653129186?h=1126150f4b" width="640" height="360" frameborder="0"    allowfullscreen></iframe>',
    interactions: ['pressing_presence_block', 'tilting_presence'],
    description: 'Lightcycles is a 4 player competitive area control game inspired by classic arcade racing machines and TRON. The controller features a D-pad and toggle switch which control the player movement toggle a trail on and off which can be used to cause competing players to crash.',
    tags: ['studio2', 'pressing_presence_block', 'tilting_presence'],
  },

  {
    listID: 8, 
    id: 'project2B',
    name: '2B: Cyber Hockey',
    images: ['P2B_1.jpg', 'P2B_2.jpg'],
    studio: ['studio2'],
    studioName: 'Studio 2: Tinycade',
    authors: '',
    video: '<iframe title="vimeo-player" src="https://player.vimeo.com/video/653129186?h=1126150f4b" width="640" height="360" frameborder="0"    allowfullscreen></iframe>',
    interactions: ['rotating_rotation', 'tilting_position'],
    description: 'Cyber Hockey is a two player abstract sport game played with a single Tinycade where the goal is to score 10 points first. Each player character is comprised of a goal and a paddle which can be rotated to protect the goal and launched to hit the ball. The input uses a single marker on a spoke and works as a knob, joystick, and button all at once.',
    tags: ['studio2', 'rotating_rotation', 'tilting_position'],
  },

  {
    listID: 9, 
    id: 'project2C',
    name: '2C: CLAW',
    images: ['P2C_1.jpg', 'P2C_2.jpg'],
    studio: ['studio2'],
    studioName: 'Studio 2: Tinycade',
    authors: '',
    video: '<iframe title="vimeo-player" src="https://player.vimeo.com/video/653129186?h=1126150f4b" width="640" height="360" frameborder="0"    allowfullscreen></iframe>',
    interactions: ['sliding_position', 'pinching_presence'],
    description: 'CLAW is a single player arcade shooter where the player must survive waves of enemies flying down the screen. The controller is a claw mounted on a slider. By moving the slider they player sets the position of the ship on the screen, and pinching the input causes the in-game claw to launch out and grab an enemy.',
    tags: ['studio2', 'sliding_position', 'pinching_presence'],
  },

  {
    listID: 10, 
    id: 'project2D',
    name: '2D: Data Is Yours',
    images: ['P2D_1.png', 'P2D_2.png'],
    studio: ['studio2'],
    studioName: 'Studio 2: Tinycade',
    authors: '',
    video: 'placeholder',
    interactions: ['rotating_position', 'sliding_position'],
    description: 'Data Is Yours is a set of interchangeable visualization panels designed to help teach data visualization literacy to children ages 5--11. Each visualization panel consists of a single chart (bar, line, and pie) which have CV markers on the back. Children use the chart panels to enter their own data and author visualizations. When the chart is adjusted, the changes are reflected on a phone app.',
    tags: ['studio2', 'rotating_position', 'sliding_position'],
  },

  // studio 3
  {
    listID: 11, // 12, 13, 14
    id: 'project3A',
    name: '3A: Aru-scan',
    images: ['P3A_1.png', 'P3A_2.png'],
    studio: ['studio3'],
    studioName: 'Studio 3: CV Games Studio',
    authors: '',
    video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/gGzo28IsXnU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    interactions: ['identifying_object_block'],
    description: 'Aru-scan is a CV marker scanner smartphone app built for preschool children. Inspired by observing young children playfully interacting with barcode scanners at the grocery store, Aru-scan enables caregivers to map CV markers to specific images and sound files. The media is played back when the app scans the correct corresponding marker. Aru-scan includes a 3D printed case for the smartphone with a mechanical shutter for the camera lens.',
    tags: ['studio3', 'identifying_object_block'],
  },

  {
    listID: 12, // 12, 13, 14
    id: 'project3B',
    name: '3B: Leapfrog',
    images: ['P3B_1.png', 'P3B_2.PNG'],
    studio: ['studio3'],
    studioName: 'Studio 3: CV Games Studio',
    authors: '',
    video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/BP0Fz1fzeA0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    interactions: ['pressing_presence_block'],
    description: 'Leapfrog is a DIY paper diorama of a pond scene with paper animals. This diorama transforms into a mobile game with the frog as the protagonist. The characters in the game are controlled by their corresponding paper animals. Each paper animal is instrumented with CV markers at their base, and interactions with the animal are identified up by the smartphone. This game was inspired by hobbyists who craft and display their own work, and designed this game for papercraft enthusiasts.',
    tags: ['studio3', 'pressing_presence_block'],
  },

  {
    listID: 13, // 12, 13, 14
    id: 'project3C',
    name: '3C: CADE Cafe',
    images: ['P3C_1.png', 'P3C_2.png'],
    studio: ['studio3'],
    studioName: 'Studio 3: CV Games Studio',
    authors: '',
    video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/H4bGfadnvy8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    interactions: ['rotating_rotation', 'sliding_position', 'flipping_presence'],
    description: 'CADE Cafe is a game platform that facilitates full- body interactions inspired by commercial game platforms like the Kinect and Wii. The controller consists of two clothing jackets with velcro patches placed at different locations (e.g., shoulders, forearm, chest), as well as a series of large fabric patches with CV markers printed on them. The platform offers a series of minigames where players compete against each other. Games are controlled by manipulating the CV markers placed on the body.',
    tags: ['studio3', 'rotating_rotation', 'sliding_position', 'flipping_presence'],
  },

  {
    listID: 14, // 12, 13, 14
    id: 'project3D',
    name: '3D: Munchcade',
    images: ['P3D_1.png', 'P3D_2.png'],
    studio: ['studio3'],
    studioName: 'Studio 3: CV Games Studio',
    authors: '',
    video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/yFTYjKSJyFQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    interactions: ['rotating_rotation', 'pressing_presence_block', 'shaking_position'],
    description: 'Munchcade is a miniature cardboard kitchen that controls a video game where players run a food truck. The kitchen offers a variety of tangible interactions that mimic cooking scenarios (e.g., chopping vegetables, controlling oven temperature, and stirring a pot). The set-up for this controller resembles the Tinycade platform (studio 2), and each input is detected via CV markers placed on the interior of the controller.',
    tags: ['studio3', 'rotating_rotation', 'pressing_presence_block', 'shaking_position'],
  },
];