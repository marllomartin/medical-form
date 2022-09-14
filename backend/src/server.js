require('dotenv').config();
const app = require('./app');

const {
  findAllDoctors,
  createDoctor,
  updateDoctor,
  deleteDoctor
} = require('./controllers/doctor');
const validateDoctor = require('./middlewares/validateDoctor');

const { findAllExpertises } = require('./controllers/expertise');

const port = process.env.PORT;

// Doctors
app.get('/doctors', findAllDoctors);
app.post('/doctors', validateDoctor, createDoctor);
app.patch('/doctors/:id', updateDoctor);
app.delete('/doctors/:id', deleteDoctor);

// Expertises
app.get('/expertises', findAllExpertises);

app.listen(port, () => console.log('Ouvindo porta', port));
