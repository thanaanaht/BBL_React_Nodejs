const express = require('express');
const app = express();
const cors = require('cors');
const Logincontrol = require('./views/Logincontrol');
const Membercontrol = require('./views/Membercontrol');
const Education1101 = require('./views/Education1101control')
const EducationMilk1103 = require('./views/EducationMilk1103')
const PORT =3300;
app.use(cors());
app.use(express.json());
app.use(Logincontrol);
app.use(Membercontrol);
app.use(Education1101);
app.use(EducationMilk1103)

// Set the port to 0 to dynamically assign an available port
// const server = app.listen(0, () => {
//     const port = server.address().port;
//     console.log('Server is running on port:', port);
// });
app.listen(PORT, () => {
    console.log('Server is running on port:', PORT);
});