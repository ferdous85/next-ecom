import mongoose from 'mongoose'

const connectDB = () =>{
    if(mongoose.connection[0].readyState) {
        console.log('Already Connected');

        return;
    } 

    mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify:false,
        useUnifiedTopology:true
    }, err =>{
        if(err) throw err
        console.log('Connected to mongodb');
    })
}

export default connectDB