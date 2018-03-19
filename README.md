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

![Screenshot 1](http://shallow-wood.surge.sh/movie-finder-screenshot-1.png)
![Screenshot 2](http://shallow-wood.surge.sh/movie-finder-screenshot-2.png)


## Built With

* [React](https://reactjs.org/) - The web framework used
* [The MovieDB API](https://www.themoviedb.org/documentation/api) - The data source
