Project description

This Pokédex application is a simple web app that displays a list of Pokémon fetched from the PokéAPI. Users can click on a Pokémon to see more details about it, including its height and an image. The application is built using HTML, CSS, and JavaScript, and it leverages the Bootstrap framework for styling.



How to get the project running

Prerequisites
Before you begin, ensure you have the following installed on your system:

Node.js and npm (Node Package Manager)
Installation

1. Clone the repository:

git clone https://github.com/your-username/pokedex-app.git
cd pokedex-app

2. Install the dependencies:

npm install

3. Run the application:

Open index.html in your web browser, or use a live server extension (like Live Server for Visual Studio Code) to run the application locally.

Linting
To run ESLint and fix linting issues, use the following commands:

npm run lint
npm run lint -- --fix

Minification
To minify CSS and JavaScript files, use the following commands:

npm run minify-js
npm run minify-css



Project dependencies (e.g., JavaScript version, ESLint rules)

JavaScript Version: ES6
ESLint Rules: Standard ESLint rules with Prettier for code formatting
Bootstrap: For responsive design and styling


Which API the project uses
This project uses the PokéAPI to fetch Pokémon data. The API provides detailed information about each Pokémon, which is displayed in the application.

File Structure

pokedex-app/
├── css/
│   └── styles.css
├── dist/
│   ├── script.min.js
│   └── styles.min.css
├── src/
│   ├── script.js
│   ├── promise-polyfill.js
│   └── fetch-polyfill.js
├── .eslintrc.json
├── index.html
├── package.json
└── README.md


Tools Used
Node.js and npm: For managing dependencies and running scripts
ESLint: For identifying and fixing linting issues in JavaScript code
Prettier: For consistent code formatting
Bootstrap: For responsive design and UI components
UglifyJS: For JavaScript minification
cssnano: For CSS minification




