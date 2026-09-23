import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

// Chat real de n8n: conservar las demás preferencias de almacenamiento del sitio.
const SESSION_KEY = 'sessionId';
const INACTIVITY_MS = 5 * 60 * 1000;
const webhookUrl = 'https://sswebhookss.affirmatechnology.com/webhook/be1293ae-db62-4ab3-8204-d2ae42505d63/chat';
const target = document.querySelector('#n8n-chat');

if (target && !target.dataset.powerflowChatInitialized) {
  target.dataset.powerflowChatInitialized = 'true';
  createChat({
    webhookUrl,
    webhookConfig: { method: 'POST', headers: {} },
    target: '#n8n-chat',
    mode: 'window',
    chatInputKey: 'chatInput',
    chatSessionKey: SESSION_KEY,
    metadata: {},
    showWelcomeScreen: true,
    defaultLanguage: 'es',
    initialMessages: [
      'Buenas tardes 👋 Soy Fátima, tu asistente de PowerFlow. ¿Qué proceso te gustaría automatizar con Power Automate?'
    ],
    i18n: {
      es: {
        title: 'PowerFlow',
        subtitle: '🟢 Asistente Virtual',
        footer: '',
        getStarted: 'INICIAR CONVERSACIÓN',
        inputPlaceholder: 'Escribe tu mensaje...'
      }
    }
  });

  // Reiniciar sólo la sesión del chat al volver tras cinco minutos de inactividad;
  // no borrar el consentimiento de cookies ni el almacenamiento de otras aplicaciones.
  let lastActivity = Date.now();
  let expired = false;
  const markActivity = () => {
    if (Date.now() - lastActivity >= INACTIVITY_MS) expired = true;
    lastActivity = Date.now();
  };
  ['pointerdown', 'keydown', 'touchstart', 'scroll'].forEach(event =>
    window.addEventListener(event, markActivity, { passive: true })
  );
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && Date.now() - lastActivity >= INACTIVITY_MS) expired = true;
  });
  // La siguiente apertura tras inactividad comienza una sesión nueva.
  target.addEventListener('click', event => {
    if (!expired || !event.target.closest('.chat-window-toggle')) return;
    try { localStorage.removeItem(SESSION_KEY); } catch (_) { /* almacenamiento bloqueado */ }
    expired = false;
    window.location.reload();
  }, true);
}
