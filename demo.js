const IOS = "https://apps.apple.com/nl/app/arnacon/id6504406464?l=en-GB";
const AND = "https://play.google.com/store/apps/details?id=com.arnacon.app";
const ua = navigator.userAgent || "";
const store = /iPhone|iPad|iPod/i.test(ua) ? IOS : /Android/i.test(ua) ? AND : null;
document.querySelectorAll(".store-link").forEach(a => { if (store) a.href = store; });
const $ = id => document.getElementById(id);
const products = [
  { id: "you@mail.com", kind: "email" },
  { id: "kai.eth", kind: "ens" },
  { id: "work@mail.com", kind: "email" },
  { id: "vigilantviper243266", kind: "handle" },
  { id: "nova.identity", kind: "handle" },
  { id: "lasereclipse110282", kind: "handle" },
  { id: "friends.identity", kind: "handle" }
];
const inboxes = {
  "you@mail.com": {
    "kai.eth": {
      snip: "I am loving Arnacon so much", when: "24 Jun",
      msgs: [
        { k: "chip", t: "24/06/2026" },
        { k: "out", t: "Hey how are you?", at: "14:02" },
        { k: "in", t: "Great, and you?", at: "14:03" },
        { k: "pill", t: "Incoming call", at: "14:05" },
        { k: "pill", t: "Outgoing call", at: "14:05" },
        { k: "out", t: "I am loving Arnacon so much", at: "14:07" },
        { k: "out", t: "Why didn't you tell me about it sooner?", at: "14:07" },
        { k: "in", t: "Because you still thought you needed a number.", at: "14:08" },
        { k: "in", t: "Call me as kai.eth — no number.", at: "14:08" },
        { k: "out", t: "Wait. I called your ENS?", at: "14:09" },
        { k: "in", t: "Encrypted end to end.", at: "14:09" },
        { k: "out", t: "That's actually wild.", at: "14:10" },
        { k: "in", t: "Switch identity whenever the context changes.", at: "14:10" },
        { k: "out", t: "So I don't give out my number?", at: "14:11" },
        { k: "in", t: "No SIM. No number on a bill.", at: "14:11" },
        { k: "out", t: "Ok I'm downloading this for the team.", at: "14:12" },
        { k: "in", t: "The brand is yours. Arnacon only enables it.", at: "14:12" },
        { k: "pill", t: "Outgoing call", at: "14:13" },
        { k: "in", t: "See you on work@mail.com.", at: "14:14" }
      ]
    },
    "luna.eth": {
      snip: "Hi", when: "19 Jun",
      msgs: [
        { k: "chip", t: "19/06/2026" },
        { k: "in", t: "Hi", at: "10:01" },
        { k: "out", t: "Hey", at: "10:02" }
      ]
    }
  },
  "kai.eth": {
    "hello@mail.com": {
      snip: "See you there", when: "24 Jun",
      msgs: [
        { k: "chip", t: "24/06/2026" },
        { k: "in", t: "Hey — trying Arnacon as you@mail.com.", at: "14:02" },
        { k: "out", t: "Call me as kai.eth — no number.", at: "14:03" },
        { k: "pill", t: "Incoming call", at: "14:05" },
        { k: "in", t: "This is amazing.", at: "14:07" },
        { k: "out", t: "Switch identity whenever the context changes.", at: "14:08" },
        { k: "in", t: "See you on work@mail.com.", at: "14:09" },
        { k: "out", t: "See you there", at: "14:09" }
      ]
    },
    "atlas.ops": {
      snip: "Incoming call", when: "19 Jun",
      msgs: [
        { k: "chip", t: "19/06/2026" },
        { k: "pill", t: "Incoming call", at: "12:40" }
      ]
    }
  },
  "work@mail.com": {
    "hello@mail.com": {
      snip: "Done. See you later.", when: "24 Jun",
      msgs: [
        { k: "chip", t: "24/06/2026" },
        { k: "out", t: "Switching to work identity.", at: "14:10" },
        { k: "in", t: "I just picked this handle for work chats.", at: "14:10" },
        { k: "out", t: "Calling you now.", at: "14:11" },
        { k: "pill", t: "Outgoing call", at: "14:11" },
        { k: "in", t: "Want to hop on a call later?", at: "14:11" },
        { k: "in", t: "Done. See you later.", at: "14:12" }
      ]
    },
    "team@company.co": {
      snip: "Incoming call", when: "23 Jun",
      msgs: [
        { k: "chip", t: "23/06/2026" },
        { k: "pill", t: "Incoming call", at: "09:15" },
        { k: "in", t: "Quick sync?", at: "09:20" },
        { k: "out", t: "Sure", at: "09:20" }
      ]
    }
  },
  "vigilantviper243266": {
    "pixel.wave": {
      snip: "Outgoing call", when: "19 Jun",
      msgs: [
        { k: "chip", t: "19/06/2026" },
        { k: "pill", t: "Outgoing call", at: "15:02" }
      ]
    },
    "echo.wave": {
      snip: "Yo", when: "19 Jun",
      msgs: [
        { k: "chip", t: "19/06/2026" },
        { k: "in", t: "Yo", at: "18:22" }
      ]
    }
  },
  "nova.identity": {
    "shop.identity": {
      snip: "Hii", when: "19 Jun",
      msgs: [
        { k: "chip", t: "19/06/2026" },
        { k: "in", t: "Hii", at: "19:01" }
      ]
    }
  },
  "lasereclipse110282": {
    "river.studio": {
      snip: "Outgoing call", when: "22 Jun",
      msgs: [
        { k: "chip", t: "22/06/2026" },
        { k: "pill", t: "Outgoing call", at: "16:20" }
      ]
    }
  },
  "friends.identity": {
    "northline.ops": {
      snip: "Incoming call", when: "19 Jun",
      msgs: [
        { k: "chip", t: "19/06/2026" },
        { k: "pill", t: "Incoming call", at: "16:40" }
      ]
    }
  }
};
const replies = [
  "Call me as you@mail.com — no number.",
  "Encrypted end to end.",
  "Switch identity whenever the context changes.",
  "No SIM. No number on a bill.",
  "I just picked a new identity for this.",
  "You can run your own version too.",
  "The brand is yours. Arnacon only enables it.",
  "Want to hop on a call as the email?",
  "Done. See you on the other identity.",
  "Your email is the number. That's it.",
  "Work identity, friends identity — never mixed.",
  "Download it. This is the real product."
];
let me = products[0].id;
let tab = "chats";
let screen = "chats";
let threadId = null;
let dial = "";
let callFor = null;
let callT = 0, callIv = null, muted = false, speaker = false;
const svg = {
  phone: '<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.7 3.9 5.1 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11 11 0 0 0 3.5.56 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 7a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11 11 0 0 0 .56 3.5 1 1 0 0 1-.24 1z"/></svg>',
  back: '<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>',
  cam: '<svg width="18" height="18" fill="none" stroke="#fff" stroke-width="1.8" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="3"/><circle cx="12" cy="13.5" r="3.2"/><path d="M8 7l1.4-2h5.2L16 7"/></svg>',
  send: '<svg width="16" height="16" fill="#fff" viewBox="0 0 24 24"><path d="M3 11.5 21 3l-7.2 18-2.6-7.2L3 11.5z"/></svg>',
  chat: '<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 18.5 4 22l3.6-1.4A9 9 0 1 0 5 18.5z"/></svg>',
  grid: '<svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><circle cx="6" cy="6" r="1.6"/><circle cx="12" cy="6" r="1.6"/><circle cx="18" cy="6" r="1.6"/><circle cx="6" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="18" cy="12" r="1.6"/><circle cx="6" cy="18" r="1.6"/><circle cx="12" cy="18" r="1.6"/><circle cx="18" cy="18" r="1.6"/></svg>',
  plane: '<svg width="16" height="16" fill="#fff" viewBox="0 0 24 24"><path d="M3 11.5 21 3l-7.2 18-2.6-7.2L3 11.5z"/></svg>',
  bs: '<svg width="20" height="20" fill="none" stroke="#fff" stroke-width="1.8" viewBox="0 0 24 24"><path d="M10 6H20a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H10L4 12l6-6z"/><path d="m13 9 5 6M18 9l-5 6"/></svg>',
  mic: '<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 11a6 6 0 0 0 12 0M12 17v4"/></svg>',
  spk: '<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M4 10v4h4l5 4V6L8 10H4z"/><path d="M16 9a4 4 0 0 1 0 6"/><path d="M18.5 7a7 7 0 0 1 0 10"/></svg>',
  hang: '<svg width="28" height="28" fill="#fff" viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.7 3.9 5.1 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11 11 0 0 0 3.5.56 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 7a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11 11 0 0 0 .56 3.5 1 1 0 0 1-.24 1z"/></svg>',
  copy: '<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M4 16V4h12"/></svg>',
  gear: '<svg width="18" height="18" fill="none" stroke="#fff" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1"/></svg>',
  down: '<svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>'
};
function initial(s){ s=String(s); return /[0-9]/.test(s[0]) ? s[0] : (s[0]==="*" ? "*" : s[0].toUpperCase()); }
function initials(s){ s=String(s); if (/^[0-9]/.test(s)) return s.slice(0,2); return (s[0]||"A").toUpperCase(); }
function now(){ const d=new Date(); return String(d.getHours()).padStart(2,"0")+":"+String(d.getMinutes()).padStart(2,"0"); }
$("clock").textContent = now();
setInterval(()=> $("clock").textContent = now(), 30000);
function tabs(){
  return `<nav class="tabs">
    <button class="tab ${tab==="chats"?"on":""}" data-tab="chats">${svg.chat}<span>Chats</span></button>
    <button class="tab ${tab==="dialer"?"on":""}" data-tab="dialer">${svg.grid}<span>Dialer</span></button>
  </nav>`;
}
function idbar(){
  return `<div class="idbar"><button class="ham" id="ham" aria-label="Identities"><span></span></button><div class="ident">${me}</div></div>`;
}
function renderDrawer(){
  $("drawer").innerHTML = `
    <div class="d-av">${initials(me)}</div>
    <div class="d-id">${me}</div>
    <div class="d-active"><i></i> Active</div>
    <div class="label">YOUR PRODUCTS</div>
    <div class="prods">${products.map(p=>`<div class="prod ${p.id===me?"on":""}" data-id="${p.id}">
      <div class="pa">${initial(p.id)}</div><span>${p.id}</span>
      <button class="copy" data-copy="${p.id}" aria-label="Copy">${svg.copy}</button>
    </div>`).join("")}</div>
    <div class="d-foot">
      <button type="button"><i>${svg.gear}</i>Settings</button>
      <button type="button"><i>${svg.cam}</i>Scan</button>
    </div>`;
}
function openDrawer(on){
  $("drawer").classList.toggle("on", on);
  $("scrim").classList.toggle("on", on);
  if (on) renderDrawer();
}
function renderChats(){
  const chats = inboxes[me] || {};
  const rows = Object.entries(chats).map(([id,c])=>`
    <div class="row" data-open="${id}">
      <div class="avatar">${initial(id)}</div>
      <div><div class="name">${id}</div><div class="snip">${c.snip}</div></div>
      <div class="when">${c.when}</div>
      <button class="call-mini" data-call="${id}" aria-label="Call">${svg.phone}</button>
    </div>`).join("");
  $("view").innerHTML = idbar()+`<div class="list">${rows}</div>`+tabs();
}
function renderThread(){
  const chats = inboxes[me] || {};
  const c = chats[threadId];
  if (!c) { screen = "chats"; threadId = null; render(); return; }
  const msgs = c.msgs.map(m=>{
    if (m.k==="chip") return `<div class="chip">${m.t}</div>`;
    if (m.k==="pill") return `<div class="pill">${m.t}<small>${m.at||""}</small></div>`;
    if (m.k==="out") return `<div class="bubble out">${m.t}<span class="t">${m.at}</span></div>`;
    return `<div class="bubble in"><div class="from">${threadId}</div>${m.t}<span class="t">${m.at}</span></div>`;
  }).join("");
  $("view").innerHTML = idbar()+`
    <div class="thread-nav">
      <button class="icon-btn left" id="back">${svg.back}</button>
      <div class="who">${threadId}</div>
      <button class="icon-btn right" data-call="${threadId}">${svg.phone}</button>
    </div>
    <div class="thread" id="thread">${msgs}</div>
    <form class="composer" id="composer">
      <button class="cam" type="button" aria-label="Camera">${svg.cam}</button>
      <input name="m" placeholder="Type a message..." autocomplete="off" />
      <button class="send" type="submit" aria-label="Send">${svg.send}</button>
    </form>`;
  const th = $("thread"); th.scrollTop = th.scrollHeight;
}
function renderDialer(){
  const keys = [["1",""],["2","ABC"],["3","DEF"],["4","GHI"],["5","JKL"],["6","MNO"],["7","PQRS"],["8","TUV"],["9","WXYZ"],["*",""],["0","+"],["#",""]];
  $("view").innerHTML = idbar()+`
    <div class="dialer">
      <div class="num-field">${dial?`<div class="val">${dial}</div>`:`<div class="ph">Enter number</div>`}<div class="under"></div></div>
      <div class="keys">${keys.map(([n,l])=>`<button class="key" data-key="${n}"><b>${n}</b>${l?`<span>${l}</span>`:""}</button>`).join("")}</div>
      <div class="dial-actions">
        <button class="round" data-msg-dial aria-label="Message">${svg.plane}</button>
        <button class="call-go" data-call-dial aria-label="Call">${svg.phone}</button>
        <button class="round" data-bs aria-label="Delete">${svg.bs}</button>
      </div>
    </div>`+tabs();
}
function startCall(who){
  callFor = who; callT = 0; muted = false; speaker = false;
  screen = "call";
  if (callIv) clearInterval(callIv);
  callIv = setInterval(()=>{ callT++; const el=document.getElementById("timer"); if(el) el.textContent = fmt(callT); }, 1000);
  renderCall();
}
function fmt(s){ return String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0"); }
function renderCall(){
  $("view").innerHTML = `
    <div class="call">
      <button class="min" id="min">${svg.down} Minimize</button>
      <div class="call-top"><span>${callFor}</span><span class="active">Active</span></div>
      <div class="call-av">${initial(callFor)}</div>
      <div class="call-id">${callFor}</div>
      <div class="timer" id="timer">${fmt(callT)}</div>
      <div class="call-ctrls">
        <button class="ctrl" data-noop><i>${svg.grid}</i>Keypad</button>
        <button class="ctrl ${muted?"on":""}" id="mute"><i>${svg.mic}</i>Mute</button>
        <button class="ctrl ${speaker?"on":""}" id="spk"><i>${svg.spk}</i>Speaker</button>
      </div>
      <button class="hang" id="hang" aria-label="Hang up">${svg.hang}</button>
    </div>`;
}
function hang(){
  if (callIv) clearInterval(callIv);
  const chats = inboxes[me] || {};
  if (callFor && chats[callFor]) chats[callFor].msgs.push({k:"pill", t:"Outgoing call", at: now()});
  callFor = null; screen = threadId ? "thread" : (tab==="dialer"?"dialer":"chats");
  render(); $("cta").classList.add("on");
  setTimeout(()=> $("cta").classList.remove("on"), 8000);
}
function render(){
  openDrawer(false);
  if (screen==="call") return renderCall();
  if (screen==="thread") return renderThread();
  if (tab==="dialer") return renderDialer();
  renderChats();
}
document.getElementById("app").addEventListener("click", e=>{
  const ham = e.target.closest("#ham"); if (ham) { openDrawer(true); return; }
  if (e.target.closest("#scrim")) { openDrawer(false); return; }
  const prod = e.target.closest(".prod");
  if (prod && !e.target.closest(".copy")) { me = prod.dataset.id; threadId = null; screen = "chats"; tab = "chats"; openDrawer(false); render(); return; }
  const cp = e.target.closest("[data-copy]");
  if (cp) { navigator.clipboard && navigator.clipboard.writeText(cp.dataset.copy); return; }
  const tb = e.target.closest("[data-tab]");
  if (tb) { tab = tb.dataset.tab; screen = tab; threadId=null; render(); return; }
  const call = e.target.closest("[data-call]");
  if (call) { startCall(call.dataset.call); return; }
  const open = e.target.closest("[data-open]");
  if (open && !e.target.closest("[data-call]")) { threadId = open.dataset.open; screen="thread"; tab="chats"; render(); return; }
  if (e.target.closest("#back")) { screen="chats"; threadId=null; render(); return; }
  const key = e.target.closest("[data-key]");
  if (key) { dial += key.dataset.key; renderDialer(); return; }
  if (e.target.closest("[data-bs]")) { dial = dial.slice(0,-1); renderDialer(); return; }
  if (e.target.closest("[data-call-dial]")) { startCall(dial || "you@mail.com"); return; }
  if (e.target.closest("[data-msg-dial]")) {
    const id = dial || "you@mail.com";
    if (!inboxes[me]) inboxes[me] = {};
    if (!inboxes[me][id]) inboxes[me][id] = { snip: "New chat", when: "now", msgs: [{k:"chip", t: now()}] };
    threadId = id; tab="chats"; screen="thread"; render(); return;
  }
  if (e.target.closest("#hang") || e.target.closest("#min")) { hang(); return; }
  if (e.target.closest("#mute")) { muted=!muted; renderCall(); return; }
  if (e.target.closest("#spk")) { speaker=!speaker; renderCall(); return; }
});
document.getElementById("app").addEventListener("submit", e=>{
  if (e.target.id!=="composer") return;
  e.preventDefault();
  const input = e.target.m;
  const text = (input.value||"").trim(); if (!text) return;
  const chats = inboxes[me] || {};
  if (!chats[threadId]) return;
  chats[threadId].msgs.push({k:"out", t:text, at: now()});
  chats[threadId].snip = text;
  input.value = "";
  renderThread();
  setTimeout(()=>{
    const r = replies[Math.floor(Math.random()*replies.length)];
    chats[threadId].msgs.push({k:"in", t:r, at: now()});
    chats[threadId].snip = r;
    renderThread();
  }, 700);
});
render();
