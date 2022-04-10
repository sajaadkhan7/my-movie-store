import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import movieRoutes from './routes/movies.js'; //router



const app = express();

//it says every route inside movieRoutes is going to be reached using /movies.



//general setup of the app

//bodyparser
//In order to get access to the post data we have to use body-parser.
//Basically what the body - parser is which allows express to read the body and/
// then parse that into a Json object that we can understand

// cors...
// What is the purpose of CORS?
// “CORS” stands for Cross - Origin Resource Sharing.
// It allows you to make requests from one website to another website in the browser,
// which is normally prohibited by another browser policy called the Same - Origin Policy(SOP)

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/movies', movieRoutes);    // express middleware to connect it to our application

const connection_url = 'mongodb+srv://sajaad6399:HTMLu135dx@cluster0.ut8a7.mongodb.net/myMovies?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;


mongoose.connect(connection_url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));



