const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;

let users = [
  {
    user_id: 1,
    username: "haritha75",
    email: "yerukonduharitha@example.com",
    password: "Haritha@123",
  },
  {
    user_id: 2,
    username: "suma23",
    email: "suma@example.com",
    password: "suma@123",
  },
];

app.use(cors());
app.use(bodyParser.json());

// Sign-up route
app.post("/signup", (req, res) => {
  const { username, email, password } = req.body;
  const userExists = users.find((user) => user.email === email);

  if (userExists) {
    console.log(`Sign-up failed: User with email ${email} already exists.`);
    return res.status(400).send({ message: "User already exists!" });
  }

  const newUser = {
    user_id: users.length + 1,
    username,
    email,
    password,
  };
  users.push(newUser);
  console.log(
    `Sign-up successful: User SignUp with email ${email} registered.`
  );
  res.status(200).send({ message: "User registered successfully!" });
});

// Login route
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((user) => user.email === email);

  if (!user) {
    console.log(`Login failed: User with email ${email} not found.`);
    return res.status(404).send({ message: "User not found!" });
  }

  if (user.password !== password) {
    console.log(`Login failed: Incorrect password for email ${email}.`);
    return res.status(400).send({ message: "Invalid password!" });
  }

  const { password: _, ...userDetails } = user;
  console.log(`Login successful: User Login with email ${email}.`);
  res.status(200).send({ message: "Login successful!", user: userDetails });
});

// Get all users route
app.get("/users", (req, res) => {
  const usersWithoutPasswords = users.map(({ password, ...user }) => user); // Exclude passwords
  res.status(200).send(usersWithoutPasswords);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
