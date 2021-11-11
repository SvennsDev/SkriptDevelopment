const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("---------------------------")
  console.log("SkriptDevelopment WebPage")
  console.log("")
  console.log("Made by VolgendeWeek")
  console.log("https://localhost:3000")
  console.log("---------------------------")  
});

// server your css as static
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/contact.html");
});  

app.get("/service", (req, res) => {
  res.sendFile(__dirname + "/service.html");
});  

app.get("/team", (req, res) => {
  res.sendFile(__dirname + "/team.html");
});

app.get("/portfolio", (req, res) => {
  res.sendFile(__dirname + "/portfolio.html");
});


app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/404.html");
})

app.post("/", (req, res) => {
  res.send("Thank you for subscribing");
});