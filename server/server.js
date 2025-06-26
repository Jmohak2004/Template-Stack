import express from 'express';
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.post('/api/form', (req, res) =>{
  console.log(req.body)
})


app.get('/api/dashboard',(re,res)=>{
  // here we will get the data from the server side
})


app.listen(port,()=>{
  console.log(`Server is runnning on port ${port}`);
})