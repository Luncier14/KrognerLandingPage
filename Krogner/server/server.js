require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Configuración SMTP con variables de entorno
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    },
    // tls: {
    //     rejectUnauthorized: false 
    // }
});

// Verificación SMTP
transporter.verify((error, success) => {
    if (error) {
        console.error('Error verificando conexión SMTP:', error);
    } else {
        console.log('Servidor SMTP configurado correctamente');
    }
});

// Ruta para enviar correos (arreglada aquí la URL)
app.post('/send', async (req, res) => {
    const { firstName, lastName, company, email, phone, message } = req.body;

    if (!firstName || !lastName || !email || !message) {
        return res.status(400).json({
            error: 'Faltan campos requeridos: nombre, apellido, email o mensaje'
        });
    }

    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: '✉ Nuevo mensaje del formulario de contacto',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <title>Nuevo mensaje de contacto</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background-color: #4f46e5; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0;">Nuevo mensaje de contacto</h1>
            </div>
            
            <div style="padding: 20px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
              <div style="margin-bottom: 15px;">
                <span style="font-weight: 600; color: #4f46e5; display: inline-block; width: 100px;">Nombre:</span>
                ${firstName} ${lastName}
              </div>
              
              <div style="margin-bottom: 15px;">
                <span style="font-weight: 600; color: #4f46e5; display: inline-block; width: 100px;">Empresa:</span>
                ${company || 'No especificada'}
              </div>
              
              <div style="margin-bottom: 15px;">
                <span style="font-weight: 600; color: #4f46e5; display: inline-block; width: 100px;">Email:</span>
                <a href="mailto:${email}" style="color: #4f46e5; text-decoration: none;">${email}</a>
              </div>
              
              <div style="margin-bottom: 15px;">
                <span style="font-weight: 600; color: #4f46e5; display: inline-block; width: 100px;">Teléfono:</span>
                <a href="tel:${phone}" style="color: #4f46e5; text-decoration: none;">${phone || 'No proporcionado'}</a>
              </div>
              
              <div style="background-color: #f9fafb; padding: 15px; border-left: 4px solid #4f46e5; margin-top: 20px;">
                <h3 style="margin-top: 0; color: #4f46e5;">Mensaje:</h3>
                <p>${(message || '').replace(/\n/g, '<br>')}</p>
              </div>
            </div>
            
            <div style="margin-top: 30px; text-align: center; font-size: 12px; color: #6b7280;">
              <p>Este mensaje fue enviado desde el formulario de contacto de tu sitio web.</p>
              <p>Fecha: ${new Date().toLocaleString()}</p>
            </div>
          </body>
          </html>
        `,
        text: `
          NUEVO MENSAJE DE CONTACTO KROGNER
          ==================================
          
          Nombre: ${firstName} ${lastName}
          Empresa: ${company || 'No especificada'}
          Email: ${email}
          Teléfono: ${phone || 'No proporcionado'}
          
          MENSAJE:
          ${message}
          
          ---
          Enviado el ${new Date().toLocaleString()} desde el formulario de contacto
        `
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        res.status(200).json({
            success: true,
            message: 'Correo enviado correctamente'
        });
    } catch (error) {
        console.error('Error al enviar correo:', error);
        res.status(500).json({
            success: false,
            error: 'Error al enviar el correo'
        });
    }
});

// Ruta raíz para prueba
app.get('/', (req, res) => {
    res.send('Servidor funcionando');
});

// Inicio del servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
