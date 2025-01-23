# Movie Information Hub

### Overview:

A Single Page Application (SPA) using AngularJS that allows users to search for movies using the OMDb API. Users can view movie details such as posters, plots, actors, and ratings, as well as create personalized watchlists.

### Technology:

- HTML
- CSS
- JavaScript
- AngularJS
- OMDb API [Documentation Link](http://www.omdbapi.com/)

### User Story:

- As a user, I want to register or create an account, so I can securely store and manage my personalized watchlist.
- As a user, I want to search for movies by title so I can find specific films easily.
- As a user, I want to view detailed information (poster, plot, actors, and ratings) about a movie to learn more about it.
- As a user, I want to add movies to a watchlist so I can keep track of films I plan to watch.
- As a user, I want to remove movies from my watchlist to manage my list effectively.
- As a user, I want to view my watchlist in a dedicated section to easily access saved movies.
- As a user, I want the app to display a user-friendly error message if the movie is not found.
- As a user, I want to filter search results by year to narrow down movie options.

### Development Environment Setup:

#### 1. Install Node.js

- Download and install Node.js from https://nodejs.org/.

- Use the latest LTS (Long Term Support) version for better stability and compatibility with most projects.

#### 2. Install Angular CLI

- Open your terminal or command prompt and run:

```bash
    npm install -g @angular/cli
```

- This installs the Angular CLI globally, allowing you to use Angular commands anywhere on your system.

#### 3. Clone the Repository

- Clone the repository to your local machine using the following command:

```bash
   https://github.com/2164-ServiceNow/sumasree-haritha-Movie-Information-Hub
```

#### 4. Navigate to the Project Directory

- Move into the project folder using:

```bash
   cd sumasree-haritha-Movie-Information-Hub
```

#### 5. Install Project Dependencies

- Install all the required dependencies by running:

```bash
   npm install
```

- This will download and set up all the dependencies listed in the package.json file.

#### 6. Run the Development Server

- Start the Angular development server using the following command:

```bash
  ng serve
```

- By default, the application will be available at http://localhost:4200/. Open this link in your browser to view your application.

### Contributors:

- Haritha Yerukondu - [haritha75](https://github.com/haritha75)
- SumaSree Guruvu - [SumaGuruvu](https://github.com/SumaGuruvu)

"I chose to work with a movie API because I hadn't worked on a movie-related application before, and I wanted to challenge myself with something new. Additionally, I have always been interested in movies, which made the project both exciting and engaging for me."

s the Model-View-Controller (MVC) design pattern, which helps organize the code and makes it maintainable and scalable.
Modules

    Modules are containers for the different parts of an AngularJS application (controllers, services, directives, etc.).
    A module is created using the angular.module() method.

Controllers

    Controllers are responsible for managing the data and logic of the application. They act as the bridge between the View (HTML) and the Model (data).

Views (HTML)

    Views are the HTML templates that display the data and user interface.

app/
├── index.html // Entry point of the application
├── app.js // Main module definition and configuration
├── controllers/
│ └── MyController.js
├── services/
│ └── MyService.js
├── views/
│ ├── home.html
│ ├── about.html
├── directives/
│ └── MyDirective.js
├── filters/
│ └── MyFilter.js
├── css/
│ └── styles.css
├── js/
│ └── scripts.js
