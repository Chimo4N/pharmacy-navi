
  :root{
    --bg:#F4F7F3; --bg-card:#FFFFFF; --bg-tab:#E4ECE4; --ink:#22303A; --ink-soft:#5B6B70;
    --accent:#2A6F77; --accent-soft:#DCEBEA; --warn-soft:#F7E4DC; --line:#D8E1D6; --radius:14px;
  }
  *{box-sizing:border-box;}
  html,body{margin:0;padding:0;}
  body{background:var(--bg);color:var(--ink);font-family:'Zen Kaku Gothic New',-apple-system,'Hiragino Sans','Noto Sans TC',sans-serif;line-height:1.75;-webkit-font-smoothing:antialiased;}
  .wrap{max-width:720px;margin:0 auto;padding:0 20px;}
  a{color:var(--accent);}
  header{padding:28px 0 18px;border-bottom:1px solid var(--line);}
  .header-row{display:flex;justify-content:space-between;align-items:flex-start;gap:20px;flex-wrap:wrap;}
  .brand{display:flex;align-items:center;gap:12px;}
  .mark{width:40px;height:40px;flex:none;border-radius:10px;background:var(--accent);display:flex;align-items:center;justify-content:center;}
  .mark svg{width:22px;height:22px;stroke:#fff;fill:none;stroke-width:2.4;stroke-linecap:round;}
  .site-name{font-weight:900;font-size:1.1rem;margin:0;}
  .back-link{font-size:.82rem;color:var(--ink-soft);text-decoration:none;display:inline-block;margin-top:2px;}
  .lang-switch{display:flex;gap:6px;flex-wrap:wrap;}
  .lang-btn{border:1px solid var(--line);background:#fff;color:var(--ink-soft);padding:7px 13px;border-radius:999px;font-size:.82rem;font-weight:500;cursor:pointer;font-family:inherit;}
  .lang-btn.active{background:var(--ink);color:#fff;border-color:var(--ink);}
  main{padding:32px 0 10px;}
  h1{font-size:1.6rem;font-weight:900;margin:0 0 6px;}
  .updated{font-size:.78rem;color:var(--ink-soft);margin:0 0 20px;}
  .dev-note{background:var(--warn-soft);border-radius:10px;padding:12px 14px;font-size:.8rem;margin-bottom:28px;color:#8A3B22;}
  section{margin-bottom:24px;}
  h2{font-size:1.02rem;font-weight:700;margin:0 0 8px;}
  p{font-size:.9rem;margin:0 0 10px;}
  ul{margin:0 0 10px;padding-left:1.2em;font-size:.9rem;}
  li{margin-bottom:4px;}
  .info-box{background:var(--bg-card);border:1px solid var(--line);border-radius:var(--radius);padding:16px 18px;font-size:.88rem;}
  footer{margin:44px 0 30px;padding-top:18px;border-top:1px solid var(--line);font-size:.76rem;color:var(--ink-soft);display:flex;flex-direction:column;gap:10px;}
  .footer-nav{display:flex;gap:16px;flex-wrap:wrap;}
  .footer-nav a{color:var(--ink-soft);text-decoration:underline;font-size:.76rem;}
