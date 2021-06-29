const express = require('express')
const { PrismaClient } = require('@prisma/client')

const app = express();
const port = 8000;
const prisma = new PrismaClient()

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }))

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.listen(port, () => {
  console.log(`Duck Backend Server Running on ${port}!`)
});

//API END POINT - Saves the Duck Info into the database
app.post('/saveDuckInfo', async (req, res) => {
  console.log(req.body.payload);
  const data = req.body.payload;
  await prisma.duck_submissions.create({
    data:{
      time: new Date(data.time),
      foodType: data.foodType,
      location: data.location,
      numberOfDucks: data.numberOfDucks,
      quantityOfFood: data.quantityOfFood,
    }
  })
  res.send('DataSaved!')
});

//API END POINT - returns all the duck info in the database.
app.get('/getDuckInfo', async (req, res) => {
  const allData= await prisma.duck_submissions.findMany({});
  res.send(allData);
});
