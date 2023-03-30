## Starwars-Json
Create a REST with full CRUD operations using MongoDb, Mongoose and Express.js.




**Quick Start Guide**
Clone the repository by running git clone https://https://github.com/SharnellGraham/Starwars-JsonAPI on your local machine terminal.
Run npm install in the root folder of cloned directory to install all the dependencies.

Use postman to run requests as needed.
Optionally, run npm run test to verify that the endpoints are working.

 **Install dependencies**
     npm install
  

 **Seed the data**
    - Navigate to seed.js file 
         node seed.js 

 **Start server**
    - Navigate to index.js located in lib folder

         nodemon index.js
     

 **Open browser**
    - > http://localhost:3000/



**Endpoints**

| Endpoint                       | HTTP Method | Summary                                             |
|--------------------------------|-------------|-----------------------------------------------------|
| /characters                | GET         | Retrieve list of all characters                     |
| /characters/:id            | GET         | Retrieve details for character with specified ID    |
| /characters/birth_years    | GET         | Retrieve all unique birth years from characters     |
| /characters/names          | GET         | Retrieve an array of all names of characters        |
| /characters/name/:name     | GET         | Retrieve character details by name                  |
| /characters                | POST        | Create new character                                 |
| /characters/:id            | PATCH       | Update existing character                            |
| /characters/:id            | DELETE      | Delete character with specified ID                  |
| /starships/               | GET         | Retrieve list of all starships                      |
| /starships/hyperdrive/:hd  | GET         | Retrieve starship by hyperdrive rating               |
| /starships/:id             | GET         | Retrieve details for starship with specified ID      |
| /starships/:name           | GET         | Retrieve starship details by name                    |
| /starships/               | POST        | Create new starship                                  |
| /starships/:id             | PATCH       | Update existing starship                             |
| /starships/:id             | DELETE      | Delete starship with specified ID                    |




Testing is done through Mocha, Chai and Supertest frameworks. You can see the results of the tests by running npm run tests after following the quickstart steps.

You can view Swagger documentation on http://localhost:3000-docs after following quick start steps.




**_Contribute_**

If you'd like to contribute to this project, you are more than welcome to! Please follow these guidelines:

Submit an issue describing the change you'd like to make.
Fork the repository and create a new branch with the changes you'd like to make (git checkout -b feature/my-new-feature).
Make your changes, test them thoroughly, and commit them (git commit -am "Add some feature").

Push your changes to your forked version of the repository (git push origin feature/my-new-feature).

Create a pull request to merge your changes into the main branch of this repository. Your pull request will be reviewed, and changes may need to be made before it can be merged.






Author
Created by Sharnell Graham . Feel free to contact me!

