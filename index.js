const express = require("express");

// 3.1 from the flowchart of 3.0 'my-phone-client-side', now in this server side from the documentation import the cors using require

const cors = require("cors");

const app = express();
const port = 5000;

// 2.0 i have a data my requirement is find my specific phone as usual do the upper thing normally to find the phone
const phones = require("./phones.json"); // this is one kind of export

// 3.2 then call the cors by following method from documentation then reload the server 'http://localhost:5173/phones'. Now see the rest of the steps 3.3 in  my phone client side

app.use(cors());

// 1.0 in previously my first server we show the update by running the server every time by manually typing in the url. Now we are going to connect the server side with client side by update dynamically.

app.get("/", (req, res) => {
  res.send("My Phone information is coming soon toon");
  //   to check its working or not type in browser url 'http://localhost:5000/
});

app.listen(port, () => {
  console.log(`My Phone server in running in port ${port}`);
});

// 1.1 install nodemon with existing terminal first cancel by Ctrl + c then  install nodemon according to nodemon documentation npm install -g nodemon then to run type nodemon index.js. Now if u change anything if reload u get the changed data

// 2.1 get all the phones

app.get("/phones", (req, res) => {
  res.send(phones);
});

// 2.2 now make a dynamic path  from react router to get specific phones by id
app.get("/phones/:id", (req, res) => {
  // 2.3 we use req here. req has a property name params.
  const id = req.params.id;
  const phone = phones.find((phone) => phone.id === parseInt(id));
  //   2.4 now send the phone to res
  res.send(phone);
  //  2.5  Now in browser url type http://localhost:5000/phones/1 and find that specific phone
});

app.listen(port, () => {
  console.log(`My Phones json data is running in port ${port}`);
});

// 2.6 Now without closing that server create a react router project in another terminal named my-phone-client-side
