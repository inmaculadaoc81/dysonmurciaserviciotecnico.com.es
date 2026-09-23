/* Restituye la franja de clientes y sustituye los símbolos tipográficos de servicios y beneficios por SVG lineales. */
(function () {
  'use strict';
  function icon(paths) {
    return '<svg class="ic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + paths + '</svg>';
  }
  var icons = {
    approval: icon('<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h3m-3 5 2.5 2 5-5"/>'),
    integration: icon('<rect x="2" y="8" width="6" height="8" rx="1.5"/><rect x="16" y="8" width="6" height="8" rx="1.5"/><path d="M8 12h8M11 9l-3 3 3 3m2-6 3 3-3 3"/>'),
    documents: icon('<path d="M7 3h7l5 5v12a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M14 3v6h5M9 13h6M9 17h6"/>'),
    notifications: icon('<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4"/><circle cx="18.5" cy="5.5" r="2.5"/>'),
    workflows: icon('<rect x="2" y="3" width="7" height="6" rx="1"/><rect x="15" y="3" width="7" height="6" rx="1"/><rect x="8.5" y="16" width="7" height="6" rx="1"/><path d="M9 6h6m3 3v4h-6v3M5.5 9v4H12"/>'),
    time: icon('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>'),
    connected: icon('<circle cx="5" cy="12" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><path d="M7 11l10-5M7 13l10 5"/>'),
    shield: icon('<path d="M12 2 20 5v6c0 5-3 8.2-8 11-5-2.8-8-6-8-11V5l8-3Z"/><path d="m9 12 2 2 4-4"/>'),
    growth: icon('<path d="m3 17 6-6 4 4 8-9m-6 0h6v6"/>')
  };
  function init() {
    var trusted = document.querySelector('.trusted .container');
    if (trusted) {
      var label = trusted.querySelector('.trusted-label');
      if (label) label.textContent = 'Empresas que ya confían en nosotros';
      var sub = trusted.querySelector('.trusted-sub');
      if (sub) sub.remove();
      if (!trusted.querySelector('.trusted-logos')) {
        var logos = document.createElement('div');
        logos.className = 'trusted-logos';
        [
          ['logo-kelatos.webp', 'Kelatos'],
          ['logo-gamefix.webp', 'Gamefix'],
          ['logo-startmonitor.webp', 'Start Monitor'],
          ['logo-surfacelabs.webp', 'Surface Labs'],
          ['logo-delltech.webp', 'DellTech'],
          ['logo-videoconvert.webp', 'Video Convert'],
          ['logo-alquilerordenadoresmadrid.webp', 'Alquiler Ordenadores Madrid']
        ].forEach(function (entry) {
          var img = document.createElement('img');
          img.className = 'trusted-logo-img';
          img.src = 'img/clientes/' + entry[0];
          img.alt = entry[1];
          img.loading = 'lazy';
          logos.appendChild(img);
        });
        trusted.appendChild(logos);
      }
    }
    var services = ['approval', 'integration', 'documents', 'notifications', 'workflows'];
    document.querySelectorAll('.solutions-grid .sol-card .sol-icon').forEach(function (element, index) {
      if (icons[services[index]]) element.innerHTML = icons[services[index]];
    });
    var benefits = ['time', 'connected', 'shield', 'growth'];
    document.querySelectorAll('.why-list .why-item .why-icon').forEach(function (element, index) {
      if (icons[benefits[index]]) element.innerHTML = icons[benefits[index]];
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
