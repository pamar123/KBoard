# Kanban Board Project

A full-stack Kanban board application with JWT authentication, built using React, TypeScript, Node.js, and PostgreSQL.

## Features

- Secure user authentication using JWT tokens
- Create, read, update, and delete tickets
- Organize tickets by status (Todo, In Progress, Done)
- Responsive design for desktop and mobile devices
- Protected routes requiring authentication

## Technologies Used

### Frontend
- React
- TypeScript
- React Router DOM
- Tailwind CSS

### Backend
- Node.js
- Express
- PostgreSQL
- Sequelize ORM
- JSON Web Tokens (JWT)
- bcrypt for password hashing

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/pamar123/KBoard.git
cd KBoard
```

2. Install server dependencies:
```bash
cd server
npm install
```

3. Install client dependencies:
```bash
cd ../client
npm install
```

4. Create a `.env` file in the server directory:
```env
DB_NAME=kanban_db
DB_USER=your_postgres_username
DB_PASSWORD=your_postgres_password
JWT_SECRET=your_jwt_secret
PORT=3001
```

5. Set up the database:
```bash
cd server
npm run seed
```

### Running the Application

1. Start the server:
```bash
cd server
npm run dev
```

2. In a new terminal, start the client:
```bash
cd client
npm run dev
```

3. Access the application at `http://localhost:5173`

## Usage

1. Register or login with your credentials
2. Create new tickets using the "New Ticket" button
3. Drag and drop tickets between status columns
4. Edit or delete tickets as needed
5. Logout when finished

## Demo Users

For testing purposes, you can use these credentials:
- Username: JollyGuru
- Password: password

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Create a Pull Request

## License

This project is licensed under the MIT License.

