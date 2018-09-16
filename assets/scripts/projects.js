var projects = {

	starwars: {
		languages: 'LANGUAGES <p class="normal">HTML5 &nbsp;&middot;&nbsp; CSS3 &nbsp;&middot;&nbsp; JavaScript &nbsp;&middot;&nbsp; jQuery</p>',
		emphases: 'EMPHASES <p class="normal">jQuery DOM Manipulation &nbsp;&middot;&nbsp; CSS Transitions &nbsp;&middot;&nbsp; Game/App Status Tracking &nbsp;&middot;&nbsp; JS Object Tracking</p>',
		src: 'images/portfolio/starwars.jpg',
		title: 'Star Wars <span>RPG</span>',
		p1: 'Star Wars RPG<span>allows you to select 1 of 10 available characters. Out of the remaining characters, 3 are chosen randomly for you to combat. Your goal is to defeat all 3 and advance to the next round where 3 more opponents are randomly selected from those remaining.  Defeat all 9 enemies to win!</span>',
		p2: '<span>Your attacks get stronger each time you attack, while the enemies attack you back for a random amount based upon their "Attack Power".</span>',
		appLink: 'https://cdt12988.github.io/unit-4-game/',
		gitHub: 'https://github.com/cdt12988/unit-4-game/'
	},
	gifTV: {
		src: 'images/portfolio/giftv.PNG',
		title: 'gif<span>&middot;TV</span>',
		languages: 'LANGUAGES <p class="normal">HTML5 &nbsp;&middot;&nbsp; CSS3 &nbsp;&middot;&nbsp; JavaScript &nbsp;&middot;&nbsp; jQuery &nbsp;&middot;&nbsp; GIPHY API</p>',
		emphases: 'EMPHASES <p class="normal">User-Customized Ajax API Calls (JSON Formatting) &nbsp;&middot;&nbsp; Local Storage Data Persistence &nbsp;&middot;&nbsp; Advanced CSS/jQuery Displays &nbsp;&middot;&nbsp; JS Object Tracking &nbsp;&middot;&nbsp; Multiple Features</p>',
		p1: 'gifTV<span>is a multi-featured app that allows the user to surf through channels of gifs much like you would a normal TV.  It uses a fully functional remote to accept a wide variety of user inputs, including built-in guide, help and info menus which can all be navigated through the remote itself, channel/gif surfing with both directional (up/down) and number-pad navigation, as well as several other features you would expect to find on your TV remote.</span>',
		p2: '<span>The app comes loaded with over 50 default gif channels, each containing 10 related gifs.  Users can customize their gifTV by adding more channels, additional gifs, or even favoriting any gif they come across so that it shows up on their "Favorites" channel.  The app is data-persistent so that even when you close the app and come back to it later, it will remember all of your previous settings</span>',
		appLink: 'https://cdt12988.github.io/gifTV/',
		gitHub: 'https://github.com/cdt12988/gifTV/'
	},
	hangman: {
		src: 'images/portfolio/hangman.PNG',
		title: '<span>Hang</span>man',
		languages: 'LANGUAGES <p class="normal">HTML5 &nbsp;&middot;&nbsp; CSS3 &nbsp;&middot;&nbsp; JavaScript</p>',
		emphases: 'EMPHASES <p class="normal">Manipulating the DOM via vanilla JavaScript &nbsp;&middot;&nbsp; HTML Canvas &nbsp:&middot;&nbsp; Handling user event listeners &nbsp;&middot;&nbsp; Game Logic with user customizations</p>',
		p1: 'Hangman<span> functions just as the classic game does originally.  The user guesses letters in a word. A correct guess displays all instances of the guessed letter, but a wrong answer leads the user one step closer to defeat (as illustrated using the HTML Canvas which draws the Hangman illustration for the user to see).  The game continues until the word is guessed or the stickman figure is completely drawn.</span>',
		p2: '<span>The user can pick from various categories of words to play with or have one selected at random.  The game keeps track of wins and losses, as well as the current winning streak.  Dynamic messages appear throughout the game depending on current circumstances.</span>',
		appLink: 'https://cdt12988.github.io/Word-Guess-Game/',
		gitHub: 'https://github.com/cdt12988/Word-Guess-Game'
	},
	rps: {
		src: 'images/portfolio/rps.PNG',
		title: 'Rock Paper Scissors <span>Multiplayer</span>',
		languages: 'LANGUAGES <p class="normal">HTML5 &nbsp;&middot;&nbsp; CSS3 &nbsp;&middot;&nbsp; JS/jQuery &nbsp;&middot;&nbsp; Firebase</p>',
		emphases: 'EMPHASES <p class="normal">Live user input and data handling &nbsp;&middot;&nbsp; Fully functioning chat system &nbsp;&middot;&nbsp; Game Logic/Tracking &nbsp;&middot;&nbsp; Firebase Data Persistence</p>',
		p1: '<span>This classic game of </span>Rock Paper Scissors<span> uses Firebase\'s real time database to allow multiple players to join and play together live.  To get the best experience with this game, have a friend visit the link with you and play against each other in real time (or if you find yourself currently friendless, you can open the link in two different browser tabs and play against yourself)!</span>',
		p2: '<span>Each player will have their own unique display to ensure they don\'t know what the other person has selected, and because no multiplayer game is truly complete without friendly banter, a live chat system is also included where users can chat back and forth with one another!</span>',
		appLink: 'https://cdt12988.github.io/rps-multiplayer/',
		gitHub: 'https://github.com/cdt12988/rps-multiplayer'
	},
	mcu: {
		src: 'images/portfolio/mcu.PNG',
		title: 'Marvel Movie <span>Trivia</span>',
		languages: 'LANGUAGES <p class="normal">HTML5 &nbsp;&middot;&nbsp; CSS3 &nbsp;&middot;&nbsp; JavaScript &nbsp;&middot;&nbsp; jQuery</p>',
		emphases: 'EMPHASES <p class="normal">Setting, clearing and manipulating timeouts in JS &nbsp;&middot;&nbsp; jQuery DOM manipulation &nbsp;&middot;&nbsp; Index tracking for multiple and randomized data arrays &nbsp;&middot;&nbsp; Mobile Responsiveness</p>',
		p1: 'MCU Trivia<span>is a quick trivia game consisting of 10 timed questions about the Marvel Cinematic Universe (spoilers within). Each question is randomly selected from a bank of over 60 questions and offers 4 multiple choice options (whose orders are always randomized).</span>',
		p2: '<span>The app uses timers for both the questions and the result screen which displays briefly after each question before moving on.  The entire game can be reset at the end, allowing the user to start over just as before.  The app displays properly for both larger and mobile screens.</span>',
		appLink: 'https://cdt12988.github.io/TriviaGame/',
		gitHub: 'https://github.com/cdt12988/TriviaGame'
	},
	myJourney: {
		src: 'images/portfolio/journey.jpg',
		title: '<span>My</span> Journey',
		languages: 'LANGUAGES <p class="normal">HTML5 &nbsp;&middot;&nbsp; CSS3 &nbsp;&middot;&nbsp; JS/jQuery &nbsp;&middot;&nbsp; Firebase &nbsp;&middot;&nbsp; JSON API &nbsp;&middot;&nbsp; Moment.JS &nbsp;&middot;&nbsp; Bootstrap</p>',
		emphases: 'EMPHASES <p class="normal">Firebase User Authentication &nbsp;&middot;&nbsp; Firebase Data Storage &nbsp;&middot;&nbsp; Daily User Logs &nbsp;&middot;&nbsp; Ajax API Calls (JSON Formatting) &nbsp;&middot;&nbsp; User Input Validations</p>',
		p1: 'My Journey<span> is a fitness app designed to track daily nutrition intake. It uses Firebase User Authentication to create and track user accounts, allowing the app to be fully capable of supporting hundreds of new users, each tracking their own daily nutrition.  All user data is stored within the Firebase real time database for instant updates.</span>',
		p2: '<span>The app tracks when and how often a user logs in, and even runs a tutorial system the first time it senses that a new user has been created and added to the database.  Users can search the USDA Nutrition API for the nutritional value of their foods, or simply type in their food manually.  Either way, they can log the food to their daily logs or save them to be viewed later.  The app uses Moment.js to keep track of the current and previous days, allowing users to view past information as well.</span>',
		appLink: 'https://cdt12988.github.io/fitness-app/',
		gitHub: 'https://github.com/cdt12988/fitness-app'
	},
	mousehunters: {
		src: 'images/portfolio/mouse-hunters.PNG',
		title: 'Mouse <span>Hunters</span>',
		languages: 'LANGUAGES <p class="normal">Scratch</p>',
		emphases: 'EMPHASES <p class="normal">Basic Programming/Game Logic &nbsp;&middot;&nbsp; Complex data manupulation based on user inputs &nbsp;&middot;&nbsp; Visual/Audio User Queues and Thematics &nbsp;&middot;&nbsp; Custom High Score Display System</p>',
		p1: 'Mouse Hunters<span> is a game developed using MIT\'s Visual Programming Language, Scratch.  The Space Invaders-style game allows the user to play as a cat as they attempt to stop mice, birds, rats, and giant rats from making it to the bottom of the screen by either shooting balls of yarn at them or eating them (but eating too many results in pesky hairballs, so be careful)!</span>',
		p2: '<span>The game tracks levels and increases in difficulty as the game progresses.  It also has various powerups to help the player along their way.  It comes complete with a start menu and a gameover menu.  The game can be paused at any point, completely stopping all action until unpaused.  There is also a built-in high score menu (though the data is not persistent, due to the nature of Scratch).  While not a traditional language, I felt this fun little game demonstrated complex enough logic to warrant a spot on my portfolio page!</span>',
		appLink: 'https://scratch.mit.edu/projects/227415079/',
		gitHub: 'N/A'
	},
	liri: {
		src: 'images/portfolio/liri.jpg',
		title: 'LIRI<span> CLI</span>',
		languages: 'LANGUAGES <p class="normal">Node.js &nbsp;&middot;&nbsp; Moment.js &nbsp;&middot;&nbsp; Inquirer &nbsp;&middot;&nbsp; Request &nbsp;&middot;&nbsp; Node-Spotify-API &nbsp;&middot;&nbsp; DotENV</p>',
		emphases: 'EMPHASES <p class="normal">Using Node.js and NPM Packages to make API calls/requests &nbsp;&middot;&nbsp; Receiving User Inputs via Command Line &nbsp;&middot;&nbsp; Logging Backend Data via file writing and manipulation &nbsp;&middot;&nbsp; Managing Node.js JSON Packages</p>',
		p1: 'LIRI<span> is a Command Line Interface (CLI) app which receives user input in multiple ways in order to return desired information back to the user, such as song information, upcoming band/artist concerts, or movie information.  Each command is written into a separate file that logs all user commands, giving the user the additional option of selecting one of these previous commands at random.</span>',
		p2: '<span>The app accomplishes this by using a variety of NPM packages, including Inquirer for user prompts, Dotenv to exclude local files from the github repository, File-System for reading, writing and updating files, Moment for date manipulation and formatting, Spotify-Node-API for song API calls, and Request for URL-based API calls (the OMDB and BandsInTown APIs).</span>',
		appLink: 'N/A',
		gitHub: 'https://github.com/cdt12988/liri-node-app'
	},
	hangmanCLI: {
		src: 'images/portfolio/hangmanCLI.jpg',
		title: 'Hangman<span> CLI</span>',
		languages: 'LANGUAGES <p class="normal">Node.js &nbsp;&middot;&nbsp; Inquirer NPM</p>',
		emphases: 'EMPHASES <p class="normal">Using JS Object Constructors and a modular approach to build a fully functioning app.  Also uses a built-in custom Interface Display for Command Line.</p>',
		p1: 'Hangman<span> is a Command Line Interface (CLI) game which allows the user to play the classic game of Hangman within their console.  The app has a built-in custom Interface Display allowing the player to easily visualize the state of the game and play in a more natural way than other CLI games.</span>',
		p2: '<span>The app uses the Inquirer NPM package to prompt users for their input letters and is completely modular with individual pieces of the game separated and imported to other files as needed.</span>',
		appLink: 'N/A',
		gitHub: 'https://github.com/cdt12988/node-word-guess-game'
	},
	dmi: {
		src: 'images/portfolio/dmi.jpg',
		title: 'Dunder-Mifflin<span> Infinity</span>',
		languages: 'LANGUAGES <p class="normal">Node.js &nbsp;&middot;&nbsp; MySQL &nbsp;&middot;&nbsp; Inquirer &nbsp;&middot;&nbsp; Moment.js &nbsp;&middot;&nbsp; Terminal-Table</p>',
		emphases: 'EMPHASES <p class="normal">MySQL database queries using Node.js &nbsp;&middot;&nbsp; Custom-Made User Authentication System  &nbsp;&middot;&nbsp; User Permissions to access various content management areas &nbsp;&middot;&nbsp; Command Line user prompts using the Inquirer NPM Package</p>',
		p1: 'Dunder-Mifflin Infinity<span> is a Command Line Interface (CLI) storefront application designed to allow customers to browse various products stored within Dunder-Mifflin\'s database.  Customers can create accounts to have their purchases logged to their account, or they can shop and checkout as a guest.</span>',
		p2: '<span>Additionally, manager and system administrator users can be created to manage products, inventory, and users of the application.  System admins can also view simple financial reports to ensure the health and well-being of the company.<br><br>The app uses BCrypt to hash user passwords, Inquirer for user prompts, Terminal-Table for command line data displays, MySQL for database connections and queries, and Moment.js to keep track of dates and times.</span>',
		appLink: 'N/A',
		gitHub: 'https://github.com/cdt12988/dunder-mifflin-infinity'
	},
	faf: {
		src: 'images/portfolio/faf.jpg',
		title: '<span>Find a </span>Friend',
		languages: 'LANGUAGES <p class="normal">HTML5 &nbsp;&middot;&nbsp; CSS3 &nbsp;&middot;&nbsp; JavaScript/jQuery &nbsp;&middot;&nbsp; Node.js &nbsp;&middot;&nbsp; Express.js</p>',
		emphases: 'EMPHASES <p class="normal">Full-stack application &nbsp;&middot;&nbsp; Custom server &nbsp;&middot;&nbsp; RESTFUL AJAX requests and responses &nbsp;&middot;&nbsp; Front-end access to API data</p>',
		p1: 'Find a Frined<span> is a full-stack application that allows users to fill out a quick questionnaire and match with like-minded individuals based upon their answers to the questions.</span>',
		p2: '<span>The application sends RESTful AJAX requests to the server.  The server, written with Express, processes these requests and sends appropriate responses back to the client, either HTML files or JSON objects.</span>',
		appLink: 'https://floating-journey-91870.herokuapp.com/',
		gitHub: 'https://github.com/cdt12988/FriendFinder'
	}
};


