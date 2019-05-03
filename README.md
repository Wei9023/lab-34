![CF](http://i.imgur.com/7v5ASc8.png) LAB-34
=================================================

## Remote CRUD

### Author: Vanessa

### Links and Resources
* [repo](https://github.com/Wei9023/lab-34)
* [sand box](https://codesandbox.io/s/github/Wei9023/lab-34/tree/master/)

## Assignment
Conver the forms lab into using remote APIs to source the schema and save the record data

### Requirements
* Remove the code that requires the `.json` file in  your react app for the schema and adds it to state
* Pull the schema from the remote server via the resource path `/api/v1/players/schema` (or whichever model you choose)
* On your first pull from the server of the database records, save them in the store for faster retrieval
* Instead of saving straight to the Redux Store, use an async action creator function to send data to the server (using post or put) and then update the local store
* When rendering the forms and lists, use the store as a cache, and update it after you save to the server.

### Testing
* tests that ensure the list module functions correctly with error-check parameters
### Setup
#### `.env` requirements
* `npm i` install dependencies

#### Running the app
* open sandbox link

### Components
```
├── LAB.md
├── README.md
├── package.json
├── public
│   └── index.html
└── src
    ├── __tests__
    │   └── components
    │       └── app.test.js
    ├── components
    │   ├── api.js
    │   ├── app.js
    │   └── record
    │       ├── actions.js
    │       ├── if.js
    │       ├── list.js
    │       ├── record.js
    │       ├── record.module.scss
    │       └── reducers.js
    ├── index.js
    ├── setupTests.js
    └── store
        ├── index.js
        └── middleware
            └── reporter.js
```


#### UML
![Data flow](./uml.jpg)
