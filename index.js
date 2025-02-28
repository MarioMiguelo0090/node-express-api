const express = require('express'); 
const app = express(); 
const port = 3000; 

app.use(express.json()); 

app.get('/', (req, res) => { 
    res.send('Bienvenido a la API'); 
}); 

app.get('/saludo/:nombre', (req, res) => { 
    res.send(`Hola, ${req.params.nombre}!`); 
}); 

app.post('/mensaje', (req, res) => { 
    res.json({ mensaje: `Recibido: ${req.body.mensaje}` }); 
}); 

app.listen(port, () => { 
    console.log(`Servidor escuchando en http://localhost:${port}`); 
});

app.get('/usuarios', (req, res) => {
    const usuarios = [
        { id: 1, nombre: 'Juan' },
        { id: 2, nombre: 'María' },
        { id: 3, nombre: 'Carlos' }
    ];
    res.json(usuarios);
});