# SnapBoard

SnapBoard is a Pinterest-style social media web application where users can create accounts, upload images, create posts, and manage their profiles.

## 🚀 Features

* User registration and login
* Session-based authentication using Passport.js
* Protected routes for authenticated users
* User profile management
* Create and manage posts
* Image upload using Multer
* MongoDB database for storing users and posts
* Edit and delete posts
* Responsive UI using Bootstrap

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Authentication

* Passport.js
* Passport Local Mongoose
* Express Session

### Frontend

* EJS
* HTML
* CSS
* Bootstrap

### Other

* Multer for image uploads

## 📂 Project Structure

```text
SnapBoard/
│
│
├── src/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   └── routes/
│
├── views/
│   ├── login.ejs
│   ├── register.ejs
│   ├── profile.ejs
│   └── ...
│
├── app.js
├── package.json
├── .gitignore
└── README.md
```

## 🔐 Authentication Flow

SnapBoard uses Passport.js and Express Session for authentication.


User Registration
       ↓
User stored in MongoDB
       ↓
User Login
       ↓
Passport Authentication
       ↓
Session Created
       ↓
Protected Routes
       ↓
Create / Edit / Delete Posts


## ⚙️ Installation

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Go to the project directory

```bash
cd SnapBoard
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure MongoDB

Create a `.env` file if your project uses environment variables and add your MongoDB connection string and session secret.

Example:

```env
MONGODB_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret
```

### 5. Start the application

```bash
npm start
```

Or, during development:

```bash
npx nodemon app.js
```

The application will run at:

```text
http://localhost:3000
```

## 📝 Main Functionalities

### Authentication

Users can register and log in using Passport.js. Authentication sessions are maintained using Express Session.

### Posts

Authenticated users can:

* Create posts
* Upload images
* Add captions
* Edit posts
* Delete posts

### Profile

Users can access their profile and manage their posts.

## 🔒 Security

* Password authentication handled by Passport Local Mongoose
* Protected routes using authentication middleware
* Session-based authentication
* `.env` and sensitive configuration should not be committed to GitHub

## 🚧 Future Improvements

* Like and comment functionality
* Follow/unfollow users
* Search functionality
* Cloud image storage
* User notifications
* Improved responsive design
* Pagination for posts

## 📸 Screenshots

Add screenshots of your application here.

Example:

```text
Login Page
Register Page
Home/Create Post Page
Profile Page
```

## 👨‍💻 Author

**Chandni Kumari**

Built as a personal full-stack/backend learning project.

