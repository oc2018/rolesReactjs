import express from 'express';
import  { authUser, authRole, setUser }  from './basicAuth.js';


import ROLE from './data.js';

import { router as projectRouter } from './routes/projects.js'


const app = express();

app.use(express.json());

app.use(setUser);
app.use('/projects', projectRouter);

app.get('/', (req, res) => {
    res.send('Home Page.');
});

app.get('/dashboard', authUser, (req, res) => {
    res.send('Dashboard');
});

app.get('/admin', authUser, authRole(ROLE.ADMIN), (req, res) => {
    res.send('Admin Page');
});


app.listen(3001, () => console.log(" server is running on port 3001"));