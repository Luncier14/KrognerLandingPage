const nodemailer = require('nodemailer');

// Aquí pones los datos que tu hosting te dio
const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com', // Host SMTP que tu hosting te da
  port: 465,                  // Puerto 587 para TLS o 465 para SSL
  secure: true,               // false para 587 (TLS), true para 465 (SSL)
  auth: {
    user: 'info@krogner.co.cr', // Usuario SMTP (tu correo completo)
    pass: 'It4iI~y^gy|{HWT' // Contraseña del correo
  }
});

// Para comprobar si la conexión SMTP funciona
transporter.verify(function(error, success) {
  if (error) {
    console.log('Error conectando SMTP:', error);
  } else {
    console.log('Servidor SMTP listo para enviar correos');
  }
});

module.exports = transporter;
