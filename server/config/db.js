const mongoose = require('mongoose');
const connection = mongoose.connect(process.env.MONGO_DB_URI).then(console.log("database connected"))