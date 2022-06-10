import express from 'express' ; 
import bodyParser from 'body-parser' ; 
import mongoose from 'mongoose' ; 
import cors from 'cors' ; 

const app = express() ;

app.use(bodyParser.json({limit : "30mb" , extended : true })) ; 
app.use(bodyParser.urlencoded({limit : "30mb" , extended : true })) ; 
app.use(cors()) ; 

const CONNECTION_URl = 'mongodb+srv://javascripting-mastering:bouskoura2018@cluster0.rtztr.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000 ;

mongoose.connect(CONNECTION_URL , { useNewUrlParser : true , useUnifiedTopology : true }) 
    .then( () => app.listen(PORT , () => console.log(`Server running in port ${PORT}`))) 
    .catch( (error) => console.log(error) ) ; 

mongoose.set('useFindAndModify' , false ) ; 


