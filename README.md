## Starwars-JsonAPI
Create a REST API with full CRUD operations using MongoDb, Mongoose and Express.js.




**Quick Start Guide**
Clone the repository by running git clone https://github.com/SharnellGraham/Starwars-JsonAPI.git on your local machine terminal.
Run npm install in the root folder of cloned directory to install all the dependencies.

Use postman to run requests as needed.
Optionally, run npm run test to verify that the endpoints are working.

 **Install dependencies**
    `` npm install express ``
    ``npm install i mongoose ``
   `` npm install nodemon ``

 **Seed the data**
    - Navigate to seed.js file 
        `` node seed.js `` 

 **Start server**
    - Navigate to index.js located in lib folder

        `` nodemon index.js``
     

 **Open browser**
    - > http://localhost:3000/



**Endpoints**

##Characters##
HTTP     Method	Endpoint	         Description
GET	    /character	            Returns list of all Star Wars characters in the database.
GET	    /character/:name     	Retrieves character by name from the database.
POST	/character	            Creates a new character document in the database
PATCH	/character/:id	        Updates a character document in the database with given Id.
DELETE	/character/:id	        Deletes specified character document from the database.

##Starships##
Endpoint	    HTTP Method	    CRUD Operation	Description
/starships	     GET/Read	     Get all starships
/starships/:name GET/Read	     Get a specific starship by name
/starships	     POST	         Create	Add a new starship
/starships/:id	 PATCH/Update	 Update an existing starship by ID
/starships/:id	 DELETE	         Delete

Testing
Testing is done through Mocha, Chai and Supertest frameworks. You can see the results of the tests by running npm run tests after following the quickstart steps.

You can view Swagger documentation on http://localhost:3000/api-docs after following quick start steps.




**Contributing**
If you'd like to contribute to this project, you are more than welcome to! Please follow these guidelines:

Submit an issue describing the change you'd like to make.
Fork the repository and create a new branch with the changes you'd like to make (git checkout -b feature/my-new-feature).
Make your changes, test them thoroughly, and commit them (git commit -am "Add some feature").

Push your changes to your forked version of the repository (git push origin feature/my-new-feature).

Create a pull request to merge your changes into the main branch of this repository. Your pull request will be reviewed, and changes may need to be made before it can be merged.






Author
Created by Sharnell Graham . Feel free to contact me!

