require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Inicializar Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Ruta para enviar correos
console.log("Backend cargado y listo para recibir POST en /send");
app.post('/send', async (req, res) => {
  console.log("📩 Recibida solicitud en /send");
  const { firstName, lastName, company, email, phone, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: 'Faltan campos requeridos.' });
  }

  try {
    const response = await resend.emails.send({
      from: process.env.EMAIL_FROM, // Ej: 'Krogner <contacto@tudominio.com>'
      to: process.env.EMAIL_TO,     // Uno o más destinatarios separados por coma
      subject: '✉ Nuevo mensaje del formulario de contacto',
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"></head>
        <body style="font-family: Arial, sans-serif;">
          <div style="background-color: #4f46e5; padding: 20px; color: white;">
            <h2 style="margin: 0;">Nuevo mensaje de contacto</h2>
          </div>
          <div style="padding: 20px;">
            <p><strong>Nombre:</strong> ${firstName} ${lastName}</p>
            <p><strong>Empresa:</strong> ${company || 'No especificada'}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
            <div style="margin-top: 20px; padding: 10px; background-color: #f3f4f6;">
              <strong>Mensaje:</strong>
              <p>${(message || '').replace(/\n/g, '<br>')}</p>
            </div>
            <p style="font-size: 12px; color: gray;">Enviado el ${new Date().toLocaleString()}</p>
          </div>
        </body>
        </html>
      `,
      text: `
        NUEVO MENSAJE DE CONTACTO

        Nombre: ${firstName} ${lastName}
        Empresa: ${company || 'No especificada'}
        Email: ${email}
        Teléfono: ${phone || 'No proporcionado'}

        MENSAJE:
        ${message}

        Enviado el ${new Date().toLocaleString()}
      `
    });

    res.status(200).json({
      success: true,
      id: response.id,
      message: 'Correo enviado correctamente'
    });
  } catch (error) {
    console.error('Error al enviar con Resend:', error);
    res.status(500).json({ success: false, error: 'Error al enviar el correo' });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
app.get('/', (req, res) => {
  res.send('Servidor funcionando');
});
