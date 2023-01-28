const mongoose = require('mongoose')

const database = 'authorsdb'

mongoose.connect(`mongodb://127.0.0.1:27017/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`*******Connection established to database: ${database}`))
.catch((error) => console.log("Something went wrong...THEY'RE EATING HIM", error))