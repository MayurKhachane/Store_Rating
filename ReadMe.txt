# Store Rating System

A full-stack web application that allows users to submit ratings for stores. The system supports three user roles: Administrator, Normal User, and Store Owner.

## Tech Stack

### Frontend

* ReactJS
* Bootstrap 5
* Axios
* React Router DOM

### Backend

* NodeJS
* ExpressJS
* JWT Authentication
* bcryptjs

### Database

* MySQL

---

## Features

### Administrator

* Login
* Dashboard with:

  * Total Users
  * Total Stores
  * Total Ratings
* Add Users
* View All Users
* View User Details
* Add Stores
* View Stores

### Normal User

* Registration
* Login
* Search Stores
* View Store List
* Submit Ratings (1–5)
* Update Ratings
* Logout

### Store Owner

* Login
* View Average Store Rating
* View Users Who Submitted Ratings
* Logout

---

## Project Structure

Store-Rating-System

├── Backend

├── Frontend

├── database

│ └── store_rating.sql

└── README.md

---

## Prerequisites

Install the following:

* Node.js
* npm
* MySQL Server
* Git

---

## Database Setup

### Create Database

Open MySQL and create a database:

```sql
CREATE DATABASE store_rating;
```

### Import SQL File

Import the SQL script provided in:

```text
database/store_rating.sql
```

---

## Backend Setup

### Navigate to Backend Folder

```bash
cd Backend
```

### Install Dependencies

```bash
npm install
```

### Create Environment File

Create a file named:

```text
.env
```

Add:

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=store_rating

JWT_SECRET=mysecretkey
```

### Start Backend Server

```bash
npm run dev
```

or

```bash
nodemon server.js
```

Backend runs on:

```text
http://localhost:5000
```

---

## Frontend Setup

### Navigate to Frontend Folder

```bash
cd Frontend
```

### Install Dependencies

```bash
npm install
```

### Start React Application

```bash
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

## Default User Roles

### Admin

```text
Email: mayur@gmail.com
Password: Admin@123
Role: ADMIN
```

### Store Owner

```text
Email: owner@gmail.com
Password: Owner@123
Role: OWNER
```

### Normal User

```text
Email: user@gmail.com
Password: User@123
Role: USER
```

Note: These accounts may vary depending on the database data.

---

## API Endpoints

### Authentication

```text
POST /api/auth/register
POST /api/auth/login
```

### Users

```text
GET    /api/users/all
GET    /api/users/:id
POST   /api/users/add
PUT    /api/users/change-password
```

### Stores

```text
GET    /api/stores/all
GET    /api/stores/search
POST   /api/stores/add
```

### Ratings

```text
POST   /api/ratings/add
```

### Admin

```text
GET    /api/admin/dashboard
```

### Store Owner

```text
GET    /api/owner/dashboard
GET    /api/owner/ratings
```

---

## Screenshots

Add screenshots in the repository:

* Login Page
* Registration Page
* Admin Dashboard
* Store Listing
* Owner Dashboard

---

## Author

Mayur Khachane

Full Stack Developer

GitHub Repository contains complete source code, database script, and setup instructions.
