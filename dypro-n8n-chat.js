import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

const SESSION_KEY = 'sessionId';
const INACTIVITY_MS = 5 * 60 * 1000;
const webhookUrl = 'https://sswebhookss.affirmatechnology.com/webhook/be1293ae-db62-4ab3-8204-d2ae42505d63/chat';
const target = document.querySelector('#n8n-chat');

if (target && !target.dataset.dyproChatInitialized) {
  target.dataset.dyproChatInitialized = 'true';

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
      'Buenas tardes 👋 ¿Qué avería tiene tu aspiradora Dyson? Cuéntanos el modelo y el problema para orientarte.'
    ],
    i18n: {
      es: {
        title: 'DyPro',
        subtitle: 'Asistente de servicio técnico',
        footer: '',
        getStarted: 'INICIAR CONVERSACIÓN',
        inputPlaceholder: 'Escribe tu mensaje...'
      }
    }
  });

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

  target.addEventListener('click', event => {
    if (!expired || !event.target.closest('.chat-window-toggle')) return;
    try { localStorage.removeItem(SESSION_KEY); } catch (_) {}
    expired = false;
    window.location.reload();
  }, true);
}