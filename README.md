MovieRecommendation System

We are building a Movie Recommendation System that will basically search for content that would be interesting to an individual. Moreover, it involves a number of factors to create personalized lists of useful and interesting content specific to each user/individual. We used ML , Flask & Firebase as backend and ReactJs as frontend


ML Portion

In this step the data (ratings.csv and movies.csv) was analyzed and then the required preprocessing was done over the data. while Preprocessing the Data following process was taken - 
(i)Checking the data types of each column 
(ii)Finding the Unique Values in each column 
(iii)Analyzing the total null values present in each column/Feature of the given Data set
(iv)Describing the Datasets
(v)Checking the Duplicates 
(vi)Adding Average Rating & Total Number of User Rated a Particular Movie as a new feature

Backend
The goal of the flask backend is to create an ML powered REST API to recommend a list of movies. Machine learning models can’t be used in real life applications like mobile  app or websites or desktop clients directly and hence the need of a robust application comes into picture. For this we used: 
● ML Recommendation Model 
● Flask : a web framework in Python that provides you with tools, libraries and technologies that allow you to build a web application. 
● Heroku : PaaS Hosting platform.
● Git : Version control system So implementation and deployment of our ML powered API was done in a few steps as following: 
1) Firstly, import necessary dependencies from Flask. 
2) Load the ML Model from a simple python file. 
3) Then, initialize the Flask Object. 
4) Enable CORS on our application. 
5) Set routes and functions that would build the API The first one is the ‘/’ route path with GET method. The route will make sure that our Server is Up and Running or not. For ensuring server health we introduce this endpoint. The second one is the ‘/movies route path. This route will return the recommendation result from our model. We will use the Query Parameter title to send our movie search text into the API and GET method for fetching the response recommended movies. 
6) Run flask application. 
7) Send requests to our endpoint. 
8) Deploy it to Heroku. Heroku Deployment: In order to host our ML Application and make our Recommendation System available in all kinds of devices at any time, we have hosted our API on Heroku.
● create a virtual enviroment
● create requirements.txt file and mention all requirements of the application. 
● create a runtime.txt and mention python version compatible to the packages and heroku support 
● create Procfile for Heroku 
● install required packages in virtual env by pip install 
● create local git repository and a gitignore file that should contain env file and other bulky files not needed directly. 
● Login to heroku and create app from project directory of Terminal.

Try it out : https://mysterious-meadow-02585.herokuapp.com/movie?title=Logan




![image](https://user-images.githubusercontent.com/63972296/166150548-19014ba0-5b37-4414-b01b-0983508192ee.png)


Frontend: 
Working on the UI Design of the websit our goal is, thinks in user experience as well as the visual presentation. The front-end presents data and provides users the facility to interact with apps and websites. It is an important and integral part of app/web development services.

![image](https://user-images.githubusercontent.com/63972296/166150554-72b71ca1-bb83-424f-b484-a1b75638ff0b.png)
![image](https://user-images.githubusercontent.com/63972296/166150705-619e2299-baca-48d5-ac60-f50f6117b200.png)

![image](https://user-images.githubusercontent.com/63972296/166150524-466aba5d-b419-4483-9a96-45cb02a3c7d6.png)

![image](https://user-images.githubusercontent.com/63972296/166150589-f05ea27d-c3d1-41b2-a8d9-f195676919aa.png)





