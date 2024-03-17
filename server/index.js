const express = require('express');
const app = express();
const cors = require('cors');
const Logincontrol = require('./views/Logincontrol');
const Membercontrol = require('./views/Membercontrol');


app.use(cors());
app.use(express.json());
app.use(Logincontrol);
app.use(Membercontrol);




app.listen('3003', () => {
    console.log('Server is running on port 3001');
});
