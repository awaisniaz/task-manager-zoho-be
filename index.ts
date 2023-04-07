import express from 'express';

// *********************************************************

import userrouters from './routers/users.router'
// *********************************************************

const app = express()
const PORT = process.env.PORT || 3000


app.use('/user', userrouters)
app.use((req, res, next) => {
    res.status(200).send({ message: 'Api is not found in system' });
});

app.listen(PORT, () => {
    console.log(`Hello World ❤️❤️❤️❤️❤️❤️❤️❤️}`)
})
