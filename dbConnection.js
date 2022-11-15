const mongoose = require('mongoose');
const db = `mongodb+srv://jessicaclarita:jessica123@cluster0.xb9iacy.mongodb.net/DeliBook?retryWrites=true&w=majority`;
// by default is mongodb+srv://<username>:<password>@cluster0.xb9iacy.mongodb.net/?retryWrites=true&w=majority

// connect to mongo db
mongoose.connect(db)
.then(() => {console.log('Connected to Database')})
.catch(error => console.log(error))