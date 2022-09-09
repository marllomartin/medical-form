require('dotenv').config();
const app = require('./app');

const {
  findAllDoctors,
  findByIdDoctor,
  createDoctor,
  updateDoctor,
  deleteDoctor
} = require('./controllers/doctor')
const validateDoctor = require('./middlewares/validateDoctor')

const port = process.env.PORT;

app.get('/doctors', findAllDoctors);
app.get('/doctors/:id', findByIdDoctor);
app.post('/doctors', validateDoctor, createDoctor);
app.patch('/doctors/:id', updateDoctor);
app.delete('/doctors/:id', deleteDoctor);

app.listen(port, () => console.log('Ouvindo porta', port));
