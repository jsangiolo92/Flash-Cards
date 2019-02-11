# Flash-Cards

An application to create and review flash cards organized by subject names.

## Getting Started
### Running the application locally
Start your mongod server and then from the root directory

```
# install dependencies
npm install

# run webpack to build client bundle
npm run react-dev

# run the server locally
npm run start

```
Access the application at http://localhost:4000
Cards will be saved to a local database called 'flashcards'

## API
### GET Requests
When the application loads, a GET request to the /categories endpoint will run to return all categories in the local database.

```
# Example Reponse for GET http://localhost:4000/categories
[
    "Console Logs",
    "HTTP",
    "React"
]
```

When a subject is selected a GET request to the /cards endpoint will run to return all cards for that category.
```
# Example Response for GET http://localhost:4000/cards?subject=Console Logs 
[
    {
        "links": [
            "https://mdn.io/settimeout"
        ],
        "_id": "5c606075c4801e3c6c6d38c6",
        "title": "What does setTimeout return?",
        "subject": "Console Logs",
        "answer": "A timeoutID - a positive integer value which identifies the timer created by the call to setTimeout(). This value can be passed to clearTimeout() to cancel the timeout.  ",
        "author": "JCS",
        "__v": 0
    },
    {
        "links": [],
        "_id": "5c606161c4801e3c6c6d38c7",
        "title": "What does typeof NaN return?",
        "subject": "Console Logs",
        "answer": "\"number\"",
        "author": "JCS",
        "__v": 0
    }
]

```

### POST Request
Clicking the 'Add a Card' button will render a form to be filled out. Submitting the form will send a POST request to the /cards endpoint.
```
# Example Request for POST http://localhost:4000/cards
Request body:
{ 
  title: 'Example Title',
  subject: 'Console Logs',
  answer: 'Example answer.',
  links: [ 'examplelink' ],
  author: 'JCS' 
 }

```

### PUT Request
When viewing the back of a card there is an option to edit the card.  Clicking the edit button will render the form to update the existing information.  Clicking submit after clicking the edit button will send a PUT request to the /cards endpoint.
```
# Example Request for PUT http://localhost:4000/cards
Request body:
{ 
  _id: '5c60e21d4168e739a0f188c5',
  title: 'Example Title Updated',
  subject: 'Console Logs',
  answer: 'Example answer updated.',
  links: [ 'examplelink' ],
  author: 'JCS' 
 }
 ```
 
 ### DELETE Request
 When viewing the back of a card there is an option to delete the card. Clicking this will send a DELETE request to the /cards endpoint.
 ```
 # Example Request for DELETE http://localhost:4000/cards
 Request body:
 { 
  id: '5c60e21d4168e739a0f188c5'
 }
 
