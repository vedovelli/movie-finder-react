# Fabio Vedovelli Movie Finder

Search for movies to read additional information about them!

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

**GIT**

You'll need GIT in order to clone this project. Head to [GIT's website](https://git-scm.com/) to get download and installation instructions to your operating system.

**Node.js and NPM**

In order to install project's dependencies, start development server and build for production, you'll need Node and NPM. Head to [Node.js website](https://nodejs.org/en/) to get download and installation instructions to your operating system.

### Installing

First you have to use your Terminal to get to the directory you want to store the project. Then you run:

```
git clone git@github.com:vedovelli/movie-finder-react.git
```

Access the created directory and you'll be in the project's root directory:

```
cd movie-finder-react
```

Install project's dependencies:

```
npm install
````

Finally run the development server and the application should be available in the following URL: http://localhost:8000

```
npm run dev
```

## Deployment

To build the application for production, just run **npm run prod** and the compiled assets will be saved in the `dist/` directory:

```
npm run prod
```

## Screenshots

![Screenshot 1](http://tremendous-station.surge.sh/movie-finder-screenshot-1.png)
![Screenshot 2](http://tremendous-station.surge.sh/movie-finder-screenshot-2.png)

## Project's Details

![Application Diagram](http://tremendous-station.surge.sh/FabioVedovelliMovieFinder.png)

It is a Single Page Application that consumes data from the TheMovieDB.org's API.

There are 2 routes available: `/movies` for the search form and the results list and `/movie/:id` for the movie details screen.

On the first access user will be automatically redirected from the main route `/` to the `/movies` route. This allows the movie feature to be sitting in its final URL, leaving the main one ready to receive a new feature, such as a Dashboard, for instance.

When a search is performed, the search term is also included in the URL, in a query string. This allows the search results to be shared with others and also ensure that during navigation the feature states doesn't get lost.

## Development decisions

**Single Source of Truth**

Despite being highly desirable to abstract application main state to a Single Source of Truth, I thought including Redux or Mobx in such a small project would be an overkill, so I'd like to mention it crossed my mind but I've made the decision to keep it out.

For the record if I was to include it I'd go for [Redux Zero](https://matheusml1.gitbooks.io/redux-zero-docs/content/) which I consider a very good solution for small a project.

## Built With

* [React](https://reactjs.org/) - The web framework used
* [The MovieDB API](https://www.themoviedb.org/documentation/api) - The data source
