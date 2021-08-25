# 							Know Us  

Our project is called Know Us which is dedicated  to communicate between user and professionals to share experience and knowledge which makes very helpfull to a normal user to find any kind of information regarding to his topic(Video Consoling, Gardening, Fitness etc.) with the help of our wide community on Know Us.  This project is full responsive for the mobile version.

![](C:\Users\manhs\OneDrive\Escritorio\foto.PNG)





## User Stories 



#### Before Login: 

- As a visitor, I can see the number of last posts when I access the Home (Landing Page).
- As a visitor, I can see profiles of popularizing users where their answers appear.
- As a visitor, I can register in KnowUS to participate in the know Us community.
-  As a visitor, I can see the profile of other users.



#### After Login:

- As a logged user, i can create my own profile.
- As a logged user, i can visit the profile of other users.
- As a logged user, i can visit the profile of professionals.
- As a logged user, i can public a question.
- As a logged user, i can answer a question.
- As a logged user, i can send direct message to a professional.
- As a logged user, i can have a full  benefit of Know Us App.





## Fronend End-Points:



| Path               | Component                    | Permissions                | Behavior                                                    |
| ------------------ | ---------------------------- | -------------------------- | ----------------------------------------------------------- |
| /                  | Home Page                    | public<Route>              | Landing Page                                                |
| /home/lastones     | To read recent posts         | public<Route>              | without login, only read posts                              |
| /auth/signup       | Signup Page                  | anon only `<AnonRoute>`    | Signup form, link to login, navigate to homepage or profile |
| /auth/login        | Login Page                   | anon only `<AnonRoute>`    | Login form, link to login, navigate to homepage             |
| /home/putProfile   | User's Admin Page            | user only `<PrivateRoute>` | show user's  info, edit info                                |
| /home/search       | Search page                  | public<Route>              | Search results for any post or user                         |
| /home/user/:userId | Get User                     | user only `<PrivateRoute>` | get user by name and information                            |
| /home/randomuser   | Get get user randomly        | user only `<PrivateRoute>` | get random user and information                             |
| /message/inbox     | Get messages in user's inbox | user only `<PrivateRoute>` | get public and private messages                             |
| /user/question     | Show users questions         | user only `<PrivateRoute>` | get questions by other users, answer these questions        |
| /profile/cards     | Get various users            | public<Route>              | get cards of users, see their info                          |





## Components



- Home
- Search
- TopNavbar
- BottomNavbar
- AsideUserInfo
- CollapseCards
- Questions
- Logout
- Signup
- EditProfile
- MyProfileCards
- ProfileImage
- ButtonOnOff
- LogOut







## Backend / Server Side



### Services

- Auth Service
- Pool Service



### Database

![](C:\Users\manhs\OneDrive\Escritorio\db.PNG)





### API Endpoints (backend routes)



| HTTP Method | URL              | Request Body                       | Success Status | Error Status | Description                               |
| ----------- | ---------------- | ---------------------------------- | -------------- | ------------ | ----------------------------------------- |
| GET         | /home            | {text}                             | 200            | 401          | recieve posts by text field               |
| POST        | /signup          | {name,email,password}              | 201            | 404          | check if all the camps are validated      |
| POST        | /login           | {email, password}                  | 200            | 401          | check if the fields are validated         |
| POST        | /user            | {user id}                          | 200            | 404          | to create a new user                      |
| GET         | /publicQuestions | {text, from_userID, category}      | 201            | 401          | to public a post                          |
| GET         | /profile         | {userId}                           | 200            | 400          | to get user profile by his id             |
| POST        | /directMessages  | {id, text, from_userID, to_userID} | 200            | 400          | to chat directly between users            |
| GET         | /message         | {text, from_userID, to_userID}     | 201            | 401          | to get all the messages                   |
| GET         | /lastones        | {text}                             | 201            | 400          | to get recent published messages          |
| GET         | /search          | {word}                             | 200            | 401          | to search something by text               |
| GET         | /user/:userID    | {userId}                           | 201            | 400          | to get user by user_id                    |
| GET         | /randomuser      | {userID or user_name}              | 200            | 400          | to get random user by userId or user_name |
| PUT         | /put Profile     | {country, city}                    | 200            | 400          | to update profile of a user               |
| POST        | /question        | {text, to_userId, category}        | 201            | 401          | to post a new question                    |
| GET         | /question        | {text, from_userId}                | 200            | 401          | to get questions                          |
| POST        | /answer          | {question_id, text}                | 200            | 401          | to post a new message                     |
| GET         | /logout          | Saved Session                      | 204            | 400          | check if the user is logged or not        |
| DELETE      | /user/userID     | {userID}                           | 200            | 400          | to delete a user.                         |









## Technologies we used:



- Html
- CSS
- JavaScript
- React JS
- Node JS and Express
- Database(Postgres)
- Heroku





## Links



##### Trello :  

https://trello.com/b/LkXQTyXj/team-1-knowus



##### Wireframes Desktop :  

https://www.figma.com/file/gI1oU9sxVMooabtVwvdJ0U/Wireframing-(Copy)?node-id=366405%3A439



##### WireFrames Mobile : 

https://www.figma.com/file/UUD7p9jsrAsqUY9Rkx5LV4/Untitled?node-id=0%3A1



##### Github :

https://github.com/leoncan122/KnowUs-App



##### Presentation Link : 

https://docs.google.com/presentation/d/12eLxqj2xvHbydYdxxk6z0YP42XNuQyNdPy327pN3tW4/edit#slide=id.gc6f80d1ff_0_0
