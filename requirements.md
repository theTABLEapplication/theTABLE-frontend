# Software Requirements

## Vision

<!-- Minimum Length: 3-5 sentences -->

### What is the vision of this product?

- _theTABLE_ is an app that is designed for individuals, couples, or groups of friends, who need a little inspiration on where to dine at any given time of day. _theTABLE_ is for those who are trying to narrow down their restuarant destination, where the user can filter through their previously visited restaurants and see what dishes they favorited.

- _theTABLE_ is an app that allows you to track the restaurants you have gone to and your recommended items. You will also be able to see your friend’s recommended dishes and restaurants on your feed and personal map. The app will track your most frequented restaurants as well as offer recommendations from friends for other restaurants and food items. It is a social media, info feed for foodies and hungry people who need some inspiration on where to go tonight.

### What pain point does this project solve?

- TABLE alleviates the stress of going back and forth of where to eat without any tangible reasoning. Now, you can have your experiences choose for you! Come join us at _*theTABLE*_!!

### Why should we care about your product?

- We all have experienced times where we simply cannot come to a consensus of where we want to eat. _theTABLE_ is focused on solving those times. Whether you want to explore previously visited establishments and what dishes you enjoyed there, or get inspiration from your friends list, we will make your next eating adventure an easy decision to make.

## Scope (In/Out)

### IN - What will your product do

- Describe the individual features that your product will do.

- High overview of each. Only need to list 4-5

#### _theTABLE:_

- Utilizes Autho0 to authenticate users and authorizes them to gain access to their stored lists as well as their friends lists. _theTABLE_ is a NPI (non-public information) site.

- Allows users to add a previous restaurant experience with the option to include photos and names of dishes they have ordered.

- Provides information to the logged in user about their previously visited restaurants, a tally of how many times they have visited each restaurant, photos uploaded, and what dishes they have ordered.

- Allows the user to interact with a map that displays uniquely colored and sized pins of the user's previously visited restaurants.

- Displays friend's visited restuarants with uniquely colored pins.

- Displays nearby restuarants for the user to explore with information listed.

- Allows the user to toggle different views on the map such as their restaurant pins, friend's pins, and nearby restuarants.

### OUT - What will your product not do

<!-- - These should be features that you will make very clear from the beginning that you will not do during development. These should be limited and very few. Pick your battles wisely. This should only be 1 or 2 things. Example: My website will never turn into an IOS or Android app. -->

- _theTABLE_ will not make a users information public without authorization. Only to be shared amongst friends.

- _theTABLE_ will never turn into an online ordering app.

### Minimum Viable Product vs

#### What will your MVP functionality be?

- Create an app that allows a user to see a stored list of restuarants they have visited with relevant information for each visit. MVP is reached by implementing the following features:

  - Login feature
  - Check-in to a restaurant button (will add a tally to rest count)
  - Add a recommended item with a photo
  - The map displays pins of previously visited restaurants within a certain search radius.

#### What are your stretch goals?

- Having the user's map display pins of their users friends's visited restaurant.
- Including functionality on the user's map that shows nearby restaurants in their current area or in their search area.

### Stretch

#### What stretch goals are you going to aim for?

- Utilize Google Maps API to track geolocation and/or geocoding services.

## Functional Requirements

<!-- List the functionality of your product. This will consist of tasks such as the following: -->

1. An admin can create and delete user accounts
2. A user can update their profile information
3. A user can search all of the products in the inventory

4. User creates a profile
5. User explores map showing nearby

### Data Flow

<!-- Describe the flow of data in your application. Write out what happens from the time the user begins using the app to the time the user is done with the app. Think about the “Happy Path” of the application. Describe through visuals and text what requests are made, and what data is processed, in addition to any other details about how the user moves through the site. -->

1. User prompted to sign up/log in
2. User prompted to log first entry
3. User now has option to log more entries, and search and explore the app's map feature showing nearby restaurants.
4. User can log out and log back in as needed.

## Non-Functional Requirements (301 & 401 only)

<!-- Non-functional requirements are requirements that are not directly related to the functionality of the application but still important to the app. -->

1. Security

- _theTABLE_ uses Autho0 for a secure authenticaiton prcoess we use for our clients. By utilizing Auth0, we create a safe space for our clients to search, log, and explore their activity. theTABLE is a NPI (non-public information) type website that takes our client's privacy as a top concern.

2. Usability

- _theTABLE_ is a client-facing app designed to appeal to a diverse group of endclients, have a structred dataflow, and allow for flexibility. Each client will have a similar initial setup that will gradually evolve into a customized experience. The app is being designed specifically for lap/desktop usage but will eventually be developed into a mobile phone app.
