const express = require('express');
const app = express();
const cors = require('cors');
const Logincontrol = require('./views/Logincontrol');
const Membercontrol = require('./views/Membercontrol');
const Education1101 = require('./views/Education1101control')
const PORT = 3003; // Corrected variable name

app.use(cors());
app.use(express.json());
app.use(Logincontrol);
app.use(Membercontrol);
app.use(Education1101);

app.listen(PORT, () => { // Corrected variable name
    console.log('Server is running on port:', PORT); // Corrected variable name
});
