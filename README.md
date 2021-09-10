# theTABLE

## Authors: Sarah Creager, Justin Hamerly, Christopher Burk, Haustin Kimbrough

## Version: 1.1.0

## Description

theTABLE is an app that allows you to track the restaurants you have gone to and your recommended items. You will also be able restaurants on your favorites feed and personal map. The app will track your most frequented restaurants as well as offer reminders of your favorite food items. It is an info feed for foodies and hungry people who need some inspiration on where to go tonight.

## Resources

- _[ReactJS](https://reactjs.org/)_
- _[React Bootstrap](https://react-bootstrap.github.io/)_
- _[mapbox](https://docs.mapbox.com/)_
- _[NodeJS](https://nodejs.org/en/)_
- _[Yelp API](https://www.yelp.com/developers/documentation/v3)_
- _[Miro](https://miro.com/)_
- _[Trello](https://trello.com/)_
- _[Unsplash](https://unsplash.com/)_
- _[W3Schools](https://www.w3schools.com/)_
- _[MDN Web Docs](https://developer.mozilla.org/en-US/)_
- _[Stack Overflow](https://stackoverflow.com/)_

## Contributions

- _[JB Tellez](https://www.linkedin.com/in/jb-tellez/)_
- _[Hexx King](https://www.linkedin.com/in/hexx-king/)_
- _[Chance Harmon](https://www.linkedin.com/in/chance-harmon/)_
- _[Kristian Esvelt](https://www.linkedin.com/in/kristianesvelt/)_
- _[Audrey Patterson](https://www.linkedin.com/in/audrey-patterson31/)_
- _[JP Jones](https://www.linkedin.com/in/jp-jones/)_
- _[Joe Pennock](https://www.linkedin.com/in/joepennock/)_
- And all the other TAs who helped us along the way

## Domain Model

![domainmodel](./img/DomainModel.png)

## Wireframe

![wireframe](./img/wireframe.png)

## Database Schema Diagram

![Database Schema Diagram](./img/Database-Schema-Diagram.png)

## User Stories

### LOGIN FEATURE

As a restaurant goer, I need to easily access the application so I can successfully decide on a restaurant that fits my taste.

Feature Tasks:

- User clicks a login button to enter credentials through Auth0

- Once user logs in successfully a logout button will appear.

Acceptance:

- When user clicks login button, Auth0 form will render.

- Once user successfully logs in, profile information will appear.

- Logout button will conditionally render once user is logged in.

### ADD A RESTAURANTE FEATURE

As a user, I want to input previous restaurant experiences so I can track what restaurants I’ve been to and what dish was my favorite.

Feature Tasks:

- User clicks a check in button to track the restaurants they've visited.

- User can add a name of favorite dish at the restaurant.

Acceptance:

- When user clicks the check-in button, the tally for visits to that current restaurant increases.

- User is able to add name of their favorite dish which saves to their favorites page.

### ADD A MAP THAT DISPLAYS PREVIOUSLY VISITED RESTAURANTS

As a user, I want to view the restaurants I’ve already visited so I can easily make a selection if I don’t want to eat somewhere new.

Feature Tasks:

- Map will display pins of user’s previously visited restaurants.

- Pin will be a unique color.

- Map is dynamic, allowing user to scroll and see all their pins around the world.

Acceptance:

- When user clicks the map it will show the pins of all the restaurants they have previously visited.

- The pins will display in a unique color for user’s selections.

- The map will be scrollable, zooming in and out.

### FUTURE FEATURE: ADD A MAP THAT DISPLAYS FRIEND'S VISITED RESTAURANTS

As a user, I want to view the restaurants my friends have already visited so I can easily make a selection if I want to eat somewhere new recommended from a trusted source.

Feature Tasks:

- Map will display pins of friend's previously visited restaurants.

- Pin will be a unique color.

Acceptance:

- When user clicks the map it will show the pins of all the restaurants friends have previously visited.

- The pins will display in a unique color for friend's selections.

### FUTURE FEATURE: ADD A MAP THAT DISPLAYS NEARBY RESTAURANTS

As a user, I want to view all the restaurants nearby so I can easily make a selection if I want to explore somewhere new.

Feature Tasks:

- Map will display pins of all nearby restaurants.

- Pin will be a unique color.

Acceptance:

- When user clicks the map it will show the pins of all the nearby restaurants in the area.

- The pins will display in a unique color.

### FUTURE FEATURE: MAP TOGGLES BETWEEN VIEWS

As a user, I want to toggle between my restaurant pins, my friend's pins, and all other nearby restaurant pins on the map so I can easily make a selection based off of each filtered view.

Feature Tasks:

- User can selected a toggle option on map to view their restaurant pins, their friend's pins, or all other restaurants in the area.

Acceptance:

- When user clicks the toggle button on the map, it will filter the pins on the map to their selection.
