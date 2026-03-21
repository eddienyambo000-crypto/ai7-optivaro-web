(function () {
  // ── CONFIG ──────────────────────────────────────────────────
  const CHAT_URL = 'https://bespoke-starship-43c45e.netlify.app/nova-chat.html';
  // ────────────────────────────────────────────────────────────

  const style = document.createElement('style');
  style.textContent = `
    #nova-bubble {
      position: fixed;
      bottom: 28px;
      right: 28px;
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, #0369a1, #0ea5e9);
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0 4px 20px rgba(14,165,233,.5), 0 0 0 0 rgba(14,165,233,.4);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 99998;
      transition: transform .2s, box-shadow .2s;
      animation: novaPulse 2.5s ease-in-out infinite;
    }
    #nova-bubble:hover {
      transform: scale(1.1);
      box-shadow: 0 8px 30px rgba(14,165,233,.6);
    }
    #nova-bubble svg { width: 26px; height: 26px; fill: #fff; }
    #nova-bubble .nova-close-icon { display: none; }
    #nova-bubble.open .nova-chat-icon { display: none; }
    #nova-bubble.open .nova-close-icon { display: block; }

    @keyframes novaPulse {
      0%, 100% { box-shadow: 0 4px 20px rgba(14,165,233,.5), 0 0 0 0 rgba(14,165,233,.4); }
      50%       { box-shadow: 0 4px 20px rgba(14,165,233,.5), 0 0 0 10px rgba(14,165,233,.0); }
    }

    #nova-badge {
      position: fixed;
      bottom: 94px;
      right: 28px;
      background: #0f172a;
      color: #fff;
      font-family: 'Inter', 'Segoe UI', sans-serif;
      font-size: 13px;
      font-weight: 600;
      padding: 8px 14px;
      border-radius: 20px;
      white-space: nowrap;
      z-index: 99997;
      box-shadow: 0 4px 16px rgba(0,0,0,.3);
      cursor: pointer;
      animation: badgeIn .4s cubic-bezier(.16,1,.3,1);
      display: flex;
      align-items: center;
      gap: 7px;
    }
    #nova-badge::before {
      content: '💬';
      font-size: 14px;
    }
    #nova-badge .nova-badge-close {
      margin-left: 4px;
      opacity: .5;
      font-size: 12px;
      cursor: pointer;
      line-height: 1;
    }
    #nova-badge .nova-badge-close:hover { opacity: 1; }
    @keyframes badgeIn {
      from { opacity: 0; transform: translateY(8px) scale(.95); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }

    #nova-frame-wrap {
      position: fixed;
      bottom: 100px;
      right: 28px;
      width: 400px;
      height: 600px;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 20px 60px rgba(0,0,0,.4), 0 0 0 1px rgba(14,165,233,.15);
      z-index: 99999;
      display: none;
      animation: chatIn .35s cubic-bezier(.16,1,.3,1);
    }
    #nova-frame-wrap.open { display: block; }
    @keyframes chatIn {
      from { opacity: 0; transform: translateY(16px) scale(.97); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }
    #nova-frame {
      width: 100%;
      height: 100%;
      border: none;
    }

    @media (max-width: 480px) {
      #nova-frame-wrap {
        bottom: 0; right: 0;
        width: 100vw; height: 100dvh;
        border-radius: 0;
      }
      #nova-bubble { bottom: 20px; right: 20px; }
      #nova-badge  { bottom: 86px; right: 20px; }
    }
  `;
  document.head.appendChild(style);

  // Badge
  const badge = document.createElement('div');
  badge.id = 'nova-badge';
  badge.innerHTML = `Chat with Nova — our AI consultant <span class="nova-badge-close" onclick="event.stopPropagation();this.parentElement.remove()">✕</span>`;
  badge.onclick = openChat;
  document.body.appendChild(badge);

  // Bubble button
  const bubble = document.createElement('div');
  bubble.id = 'nova-bubble';
  bubble.innerHTML = `
    <svg class="nova-chat-icon" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>
    <svg class="nova-close-icon" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
  `;
  bubble.onclick = toggleChat;
  document.body.appendChild(bubble);

  // iframe wrapper
  const wrap = document.createElement('div');
  wrap.id = 'nova-frame-wrap';
  const iframe = document.createElement('iframe');
  iframe.id = 'nova-frame';
  iframe.src = CHAT_URL;
  iframe.allow = 'microphone';
  wrap.appendChild(iframe);
  document.body.appendChild(wrap);

  // Hide badge after 6s
  setTimeout(() => { if (badge.parentElement) badge.remove(); }, 6000);

  function openChat() {
    if (badge.parentElement) badge.remove();
    wrap.classList.add('open');
    bubble.classList.add('open');
  }

  function toggleChat() {
    if (badge.parentElement) badge.remove();
    wrap.classList.toggle('open');
    bubble.classList.toggle('open');
  }
})();
