DYPRO SERVICIO TÉCNICO DYSON EN MURCIA
======================================

Web de una sola página (HTML/CSS/JS estático + función serverless en Vercel)
para DyPro, servicio técnico y reparación de equipos Dyson con recogida
y entrega en Murcia y área metropolitana.

Dominio: https://murciaserviciotecnico.com.es/
Marca: DyPro Servicio Técnico Dyson en Murcia
Ficha de Google: https://maps.app.goo.gl/RQvnjviqLXcNkzia7
Mapa: iframe de Google Maps de la ficha de DyPro, en la sección de contacto (ancho 100% vía CSS).

DATOS DE CONTACTO
- WhatsApp: +34 649 97 01 28.
- Teléfono: +34 910 05 48 17.
- Recogida a domicilio: https://sis.redsys.es/tiendaWeb/item/NDk4OzI=
  (botón "Solicita tu recogida ahora" del hero, siempre en negro).
- Horario: lunes a viernes de 09:30 a 18:00.
- Política de privacidad: https://kelatos.com/privacy-policy/.

DIRECCIÓN: no se muestra dirección postal. La web indica "Murcia y área
metropolitana" y servicio de recogida y entrega; el taller está en Madrid.

ESTRUCTURA
- index.html: toda la página y el JSON-LD.
- style.css, mobile-navigation.css, social-footer.css, cal-booking.css: base.
- dypro.css: identidad visual de la marca. dypro-header-hero.css: cabecera.
- dypro.js: menú móvil, formulario y cookies ("dypro_cookie_preference").
- dypro-n8n-chat.js / .css: chatbot n8n con el webhook compartido del grupo.
- api/contacto.js: envío del formulario por SMTP (variables SMTP_* y CONTACT_EMAIL en Vercel).
- img/: isotipo, patrón e ilustraciones SVG de la marca.

PALETA: se mantiene la identidad actual de la marca, color principal #1E88E5 (azul).
WhatsApp conserva su verde y YouTube su rojo corporativo.
