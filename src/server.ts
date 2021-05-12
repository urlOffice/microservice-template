import express from 'express';
import { Server } from 'http';
import mongoose from 'mongoose';


const server = express();

mongoose.connect('mongodb://localhost:3002/url_office', { useNewUrlParser: true }).then(async () => {
  console.log('Connected to database at 3002');
  server.listen(3002, () => {
    console.log(`Server is running on port 3002`)
  })
})

