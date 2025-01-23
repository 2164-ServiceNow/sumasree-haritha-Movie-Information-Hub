const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;

let users = [
  {
    user_id: 1,
    username: "John",
    email: "yerukonduharitha@example.com",
    password: "Haritha@123",
  },
  {
    user_id: 2,
    username: "Alex",
    email: "suma@example.com",
    password: "suma@123",
  },
];

app.use(cors());
app.use(bodyParser.json());

// Sign-up route (POST request to register a new user)
app.post("/signup", (req, res) => {
  const { username, email, password } = req.body;

  // Check if user already exists
  const userExists = users.find((user) => user.email === email);

  if (userExists) {
    return res.status(400).send({ message: "User already exists!" });
  }

  // Create new user
  const newUser = {
    user_id: users.length + 1, // auto-increment user_id
    username,
    email,
    password,
  };

  users.push(newUser);

  res.status(200).send({ message: "User registered successfully!" });
});

// Login route (POST request to check user credentials)
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  const user = users.find((user) => user.email === email);

  if (!user) {
    return res.status(404).send({ message: "User not found!" });
  }

  // Check if the password matches
  if (user.password !== password) {
    return res.status(400).send({ message: "Invalid password!" });
  }

  // Return user details (without password) if login is successful
  const { password: _, ...userDetails } = user;
  res.status(200).send({ message: "Login successful!", user: userDetails });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
