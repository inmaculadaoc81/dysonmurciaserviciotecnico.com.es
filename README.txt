POWERFLOW | SERVICIO DE AUTOMATIZACIÓN POWER AUTOMATE
====================================================

Sitio web: https://desarrolladorpowerautomate.com/
Repositorio: https://github.com/inmaculadaoc81/PowerFlow
Marca: PowerFlow, parte del Grupo N8nLabs.

DISEÑO
- index.html contiene los textos y secciones redactados para Power Automate.
- style.css conserva la estructura de la plantilla original; powerflow.css aplica la identidad visual nueva (azul y magenta) y un hero diferenciado.
- img/logo-1ok-PowerFlow-Automatizacion-Power-Automate.webp es el logotipo; img/icono.jpg se utiliza como favicon.
- img/hero1-powerflow-automatizacion-hero-50.webp e img/hero2-powerflow-automatizacion-hero2-50.webp son las imágenes laterales del hero.
- img/powerflow-hero-pattern.svg añade líneas, nodos y círculos decorativos.
- El botón de WhatsApp mantiene el verde habitual.
- powerflow.js gestiona el menú móvil, el envío del formulario y el banner de preferencias.

DATOS DE CONTACTO
- Teléfono: +34 910 05 40 12.
- WhatsApp: +34 638 61 95 88.
- Dirección: C. Joaquín María López, 26, Madrid.
- Horario: lunes a viernes, 09:30–18:00.
- Reserva de reuniones: https://cal.com/n8n-automatizaciones/30min.
- Google Maps: https://maps.app.goo.gl/SYNnhm98rdRtmCYv6.
- Política de privacidad: https://kelatos.com/privacy-policy/.

FORMULARIO / VERCEL
El formulario envía POST a /api/contacto y requiere en Vercel las variables
SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER y SMTP_PASS. CONTACT_EMAIL es
opcional; si no se indica, se usa SMTP_USER como destinatario. No subir
contraseñas ni secretos al repositorio. Comprobar una entrega real después del
despliegue.

CHATBOT
La integración de n8n usa el webhook compartido del Grupo N8nLabs
(powerflow-n8n-chat.js), el mismo que usan FlujoPro y DataLabs — confirmado
intencional por el cliente. (Esta nota sustituye una advertencia anterior sobre
un marcador PENDIENTE_URL_WEBHOOK_N8N_POWERFLOW que ya no existe en el código;
el README no se había actualizado tras el cambio.)

CALENDARIO
Es HTML estático, no WordPress: el shortcode [cal_custom] no se ejecuta aquí.
Se usa el iframe de la misma agenda con vista mensual y tema claro.

SEO
El título, la descripción, la URL canónica, Open Graph, datos estructurados,
robots.txt y sitemap.xml utilizan el dominio de PowerFlow.

────────────────────────────────────────────────────────────
REVISIÓN COMPLETA (a petición del cliente: "revisa este repositorio",
mismo alcance que en FlujoPro y DataLabs)
────────────────────────────────────────────────────────────

BUG REAL — el enlace "Nosotros" del menú principal apuntaba a
"#nosotros", pero la sección real tiene id="sobre-powerflow" (el
footer ya usaba el enlace correcto, "#sobre-powerflow", para el mismo
destino). El del menú principal no llevaba a ningún sitio. Corregido.

BUG REAL — package.json tenía el nombre de otro repositorio
("smartsheets-automatizaciones-excel"). Corregido a
"powerflow-automatizacion-power-automate". El resto del backend
(api/contacto.js) ya estaba bien escrito específicamente para
PowerFlow.

BUG REAL — 6 archivos JS/CSS existían en el repositorio pero no
estaban enlazados ni cargados por ningún otro archivo (mismo patrón
que en FlujoPro): powerflow-activate.js, powerflow-chat.js,
editorial-enhancements.js, site-enhancements.js, hero-buttons.css,
typography-layout.css. Todo lo que aportaban ya estaba cubierto por
los archivos realmente activos (los botones "Agendar cita"/"Atención
telefónica" ya tienen su propio degradado en powerflow.css, la
tarjeta "Sobre PowerFlow" ya tiene su estilo en powerflow.css +
powerflow-restoration.css). Eliminados.

Corregido también un comentario obsoleto en cal-booking.css que
seguía mencionando "SmartSheets".

VERIFICADO (todo correcto, sin más cambios necesarios): title/meta/
canonical/og, JSON-LD, teléfono y WhatsApp (consistentes en todas sus
apariciones), enlace de Google Maps y el iframe embebido (usa el
place_id correcto de PowerFlow, no el de otro repositorio),
robots.txt/sitemap.xml, resto de anclas internas, formulario (los
campos coinciden exactamente con lo que espera api/contacto.js).
