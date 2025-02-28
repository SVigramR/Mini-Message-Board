# Mini Message Board

A simple message board application built with Express.js and EJS templating engine. This project allows users to view existing messages and add new ones to the board.

## Features

- View all messages on the homepage
- Add new messages through a form
- Responsive design with CSS
- Simple and intuitive user interface

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript) for templates
- CSS for styling
- JavaScript

## Live Preview

Check out the live version of the application:
[Mini Message Board Live Demo](https://mini-message-board-production-beb3.up.railway.app/)

## Project Structure

```
Mini-Message-Board/
├── public/
│   └── stylesheets/
│       └── style.css
├── routes/
│   └── index.js
├── views/
│   ├── form.ejs
│   ├── index.ejs
│   └── layout.ejs
├── app.js
├── messages.js
└── package.json
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/SVigramR/Mini-Message-Board.git
   ```

2. Navigate to the project directory:
   ```
   cd Mini-Message-Board
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the server:
   ```
   npm start
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Usage

- Visit the homepage to view all messages
- Click the "New Message" link to add a new message
- Fill out the form with your name and message text
- Submit the form to add your message to the board

## Preview

The application displays messages in a simple format showing the user's name, message text, and the time it was added.

## Learning Outcomes

This project demonstrates basic understanding of:
- Express.js routing
- EJS templating
- Form handling
- Data passing between server and views
- Basic CSS styling

## License

[MIT](https://choosealicense.com/licenses/mit/)
