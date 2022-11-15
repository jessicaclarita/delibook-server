const mongoose = require('mongoose');
const db = process.env.MONGODB_URI;
// by default is mongodb+srv://<username>:<password>@cluster0.xb9iacy.mongodb.net/?retryWrites=true&w=majority

// connect to mongo db
mongoose.connect(db)
.then(() => {console.log('Connected to Database')})
.catch(error => console.log(error))