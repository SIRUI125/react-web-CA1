# Assignment 1 - ReactJS app.

Name: Sirui Yao

## Overview.

This assignment is based on react-movie-labs and adds a few pages and features to the original. Users can register with firebase authentication and log in to save their changes, and then they can choose to watch the tvshow and cast list.Users can also give their own reviews and ratings for their favourite films.Users can filter the films they want to watch in different languages.

### Features.
+ Add toprated page
+ Add people page 
+ Add people detail page
+ Add all the pages of movies (from 1 to 500)
+ Add language filter 
+ Add pagination function
+ Add tv page
+ Add details in tv page
+ Add tv filter and review
+ Add authentication with firebase
+ Add login and logout page
+ Add login and logout function
+ Write reviews about movies
## Setup requirements.

You need to npm install firebase,npm install react-firebase-hooks and register an account on firebase and add login function.After these steps,users can sign up and login in by using the web application.

## API endpoints.

People Details - /people/:id
Popular people - /movies/people
Login Page - /pages/login
Logout Page - /pages/logout
TV Detail Page - /TV/:id
Top Rated Movies - /movies/topRated
Language Filter - /components/filterMoviesCard
Discover list of upcoming movies - movie/upcoming
## Routing.

[ List the __new routes__ supported by your app and state the associated page.]

+ /movies/topRated - Show a list of top rated movies(public)
+ /movies/people -Show a list of famous actors and their images(public)
+ /people/:id - More detailed information about people,like movies they've acted in and awards they've won(public)
+ /filter/language filter - Add language filter for users to search the movies(public)
+ /login - Allow for a user to login on the page(require authtication)
+ /logout - When users click on the button,it will jump to login page
+ /resister - Allow for a user to sign up on the page(public)
+ /TV/:id - Show the list of details of tv(public)
+ /TV/popular - Show a currently popular list of tv shows(public)
+ /pagination - Allow for a user to choose movies from any pages from 1 to 500(public)

## Independent learning .
I studied the tutorials on the firebase website and added them to my project.With firebase installed,users can log in with their email and password safely.

## Reference.
UI components:"https://mui.com/"
Pagination:" https://mui.com/material-ui/react-pagination/#basic-pagination"
My firebase:" https://console.firebase.google.com/project/react-movies-lab/overview?hl=zh-cn"
Install firebase:"https://firebase.google.com/docs/web/setup?authuser=0&hl=zh"

