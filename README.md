# NestJS Blog API with Prisma

This is a simple blog API built with NestJS, Prisma, and PostgreSQL. It provides a set of RESTful endpoints to manage users and posts in a blog application.

## Features

- User registration and authentication
- CRUD operations for posts
- Protected routes with JWT-based authentication
- Pagination and filtering support for fetching posts

## Technologies

- [NestJS](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [JWT](https://jwt.io/)

## Getting Started

### Prerequisites

- Node.js 12.x or higher
- npm or yarn
- PostgreSQL 10.x or higher

### Installation

- Clone the repository:

git clone https://github.com/yourusername/nestjs-blog-api.git
cd nestjs-blog-api

- Install the dependencies:

_or_

yarn

- Set up your PostgreSQL database and create a `.env` file in the project root. Add the following content to the file, replacing the placeholders with your actual database credentials:

DATABASE_URL=postgresql://user:password@localhost:5432/your_database_name
JWT_SECRET=your_jwt_secret


- Apply the Prisma migration to create the database schema:

npx prisma migrate dev


### Running the Application

- Start the development server:

npm run start:dev

_or_

yarn start:dev


The application will be available at `http://localhost:3000`.

- Build and run the application in production mode:

npm run build
npm run start:prod


_or_

yarn build
yarn start:prod


## API Endpoints

### Users

- POST `/users`: Register a new user
- GET `/users/:id`: Get a user by ID
- GET `/users/profile`: Get the profile of the authenticated user
- PUT `/users/profile`: Update the profile of the authenticated user

### Posts

- POST `/posts`: Create a new post
- GET `/posts`: Get all posts
- GET `/posts/:id`: Get a post by ID
- PUT `/posts/:id`: Update a post
- DELETE `/posts/:id`: Delete a post

## License

This project is licensed under the MIT License.
