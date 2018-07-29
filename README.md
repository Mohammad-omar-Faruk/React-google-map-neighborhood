# Hamburg City

**Neighborhood Map** — original project name customized into personal graphics theme.

Student Project #8 (Final) during Google Front-End Development Nanodegree Program at Udacity made with React.




## Table of Contents

* [Project Overview](#project-overview)
* [How to Run Application](#how-to-run-application)
* [About the project](#about-the-project)
* [Contributing](#contributing)

## Project Overview

This is **Final** student project made for Udacity classroom on Front-End Web Developer track. Project made with React and bootstraped from [`create-react-app`](https://github.com/facebook/create-react-app).


#### Main React Components Structure
```
<App />
  <Header />

  <SidePanel />
    <Hamburger />
    <DebounceInput />
    <Item />

  <Map />
    <DetailsPage />
    <GoogleMapReact />
      <Marker />

```



## How to Run Application


****. run it on your local machine:
* download or clone the repository
* next follow these [instructions](#instructions)



### Instructions
**Running application on local machine**

To get started:

* `cd` _must-visit-iceland_ folder
* install all project dependencies with `npm install`
* start the development server with `npm start`
* with your server running, visit the site: `http://localhost:3000` if not open automatically

#### Please note that the service worker is only implemented during production build. To check it run `npm run serve` and then visit `localhost:5000`.

## About the project

**Hamburg City** is the Neighborhood Map application, final project at Udacity and Google Scholarship program at FEND Track.
Google Maps component is used for displaying a list of places worth to Tourist place in Hamburg - the beautiful city in Germany.

#### Graphics and design resources

Application, UI/UX, graphics are designed by the **Author**. Images powered by [Flickr]('https://www.flickr.com/').

#### Dependencies & used APIs

* Google Map React - [`google-map-react`](https://www.npmjs.com/package/google-map-react)
* Prop-Types [`prop-types`](https://www.npmjs.com/package/prop-types)
* Debounce Input [`react-debounce-input`](https://www.npmjs.com/package/react-debounce-input)
* Escape RegExp [`escape-string-regexp`](https://www.npmjs.com/package/escape-string-regexp)
* Fetched data with [MediaWikiAPI](https://www.mediawiki.org/wiki/API:Main_page)
* Images fetched with [Flickr API](https://www.flickr.com/services/api/flickr.photos.search.html)



## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
