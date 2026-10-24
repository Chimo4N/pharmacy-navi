
const translations = {
  ja:{
    siteName:"ふぁらまーnavi", backLink:"← トップページに戻る",
    pageTitle:"お問い合わせ",
    lead:"サイトの内容や掲載商品についてのご質問、誤りのご指摘などがあれば、下記フォームまたはメールにてお気軽にご連絡ください。",
    labelName:"お名前", labelEmail:"メールアドレス", labelMessage:"お問い合わせ内容",
    submitBtn:"送信する", formNote:"送信いただいた内容は、お問い合わせへの回答のみに利用します。",
    altContactLabel:"メールでのお問い合わせ",
    footerCredit:"企画：yuto.h／監修：石鍋卓望", navHome:"トップページ", navAbout:"このサイトについて", navPrivacy:"プライバシーポリシー",
    sendingMsg:"送信中…", successMsg:"送信しました。ご連絡ありがとうございます。折り返しご連絡いたします。",
    errorMsg:"送信に失敗しました。お手数ですが、下記のメールアドレス宛に直接ご連絡ください。",
    notSetMsg:"（プロトタイプのため）フォームIDがまだ設定されていません。下のメールアドレスへ直接ご連絡ください。"
  },
  en:{
    siteName:"Pharama-Navi", backLink:"← Back to home",
    pageTitle:"Contact",
    lead:"If you have questions about this site or the products listed, or notice anything that needs correcting, please reach out using the form below or by email.",
    labelName:"Name", labelEmail:"Email address", labelMessage:"Message",
    submitBtn:"Send", formNote:"What you submit here is used only to respond to your inquiry.",
    altContactLabel:"Contact us by email",
    footerCredit:"Planning: yuto.h / Supervision: 石鍋卓望", navHome:"Home", navAbout:"About Us", navPrivacy:"Privacy Policy",
    sendingMsg:"Sending…", successMsg:"Message sent. Thank you for reaching out — we'll get back to you soon.",
    errorMsg:"Something went wrong sending your message. Please email us directly at the address below.",
    notSetMsg:"This form's ID hasn't been set up yet (prototype). Please email us directly at the address below."
  },
  zh:{
    siteName:"Pharama-Navi", backLink:"← 返回首頁",
    pageTitle:"聯絡我們",
    lead:"若您對網站內容或刊登商品有任何疑問，或發現有需要更正之處，歡迎透過下方表單或電子郵件與我們聯繫。",
    labelName:"姓名", labelEmail:"電子郵件地址", labelMessage:"詢問內容",
    submitBtn:"送出", formNote:"您所填寫的內容僅用於回覆您的詢問。",
    altContactLabel:"以電子郵件聯絡我們",
    footerCredit:"企劃：yuto.h／監修：石鍋卓望", navHome:"首頁", navAbout:"關於本站", navPrivacy:"隱私權政策",
    sendingMsg:"傳送中…", successMsg:"已送出，感謝您的聯繫，我們會盡快回覆。",
    errorMsg:"傳送失敗，請直接寄信至下方電子郵件地址。",
    notSetMsg:"（原型階段）表單ID尚未設定，請直接寄信至下方電子郵件地址。"
  },
  es:{
    siteName:"Pharama-Navi", backLink:"← Volver al inicio",
    pageTitle:"Contacto",
    lead:"Si tiene preguntas sobre este sitio o los productos que aparecen, o si detecta algo que deba corregirse, contáctenos mediante el siguiente formulario o por correo electrónico.",
    labelName:"Nombre", labelEmail:"Correo electrónico", labelMessage:"Mensaje",
    submitBtn:"Enviar", formNote:"Lo que envíe aquí se usa únicamente para responder a su consulta.",
    altContactLabel:"Contáctenos por correo electrónico",
    footerCredit:"Planificación: yuto.h / Supervisión: 石鍋卓望", navHome:"Inicio", navAbout:"Sobre nosotros", navPrivacy:"Política de privacidad",
    sendingMsg:"Enviando…", successMsg:"Mensaje enviado. Gracias por contactarnos — le responderemos pronto.",
    errorMsg:"Hubo un problema al enviar su mensaje. Por favor escríbanos directamente a la dirección de abajo.",
    notSetMsg:"El ID de este formulario aún no está configurado (prototipo). Escríbanos directamente a la dirección de abajo."
  }
};
const langNames = {ja:"日本語", en:"English", zh:"繁體中文", es:"Español"};
let currentLang = "ja";
try{ const saved = localStorage.getItem("kn_lang"); if(saved && translations[saved]) currentLang = saved; }catch(e){}

function t(key){ return translations[currentLang][key]; }

function renderLangSwitch(){
  const el = document.getElementById("langSwitch");
  el.innerHTML = Object.keys(langNames).map(l=>`<button class="lang-btn${l===currentLang?" active":""}" data-lang="${l}">${langNames[l]}</button>`).join("");
  el.querySelectorAll(".lang-btn").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      if(btn.dataset.lang === currentLang) return;
      currentLang = btn.dataset.lang;
      try{ localStorage.setItem("kn_lang", currentLang); }catch(e){}
      renderAll();
    });
  });
}

function renderAll(){
  document.documentElement.lang = currentLang;
  document.title = t("pageTitle") + " | " + t("siteName");
  [
    "siteName","backLink","pageTitle","lead","devNote",
    "labelName","labelEmail","labelMessage","submitBtn","formNote","altContactLabel",
    "footerCredit","navHome","navAbout","navPrivacy"
  ].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.textContent = t(id);
  });
  renderLangSwitch();
}
renderAll();


const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgaavezv";

const form = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const statusEl = document.getElementById("formStatus");

function showStatus(kind, message){
  statusEl.textContent = message;
  statusEl.className = "form-status " + kind;
  statusEl.style.display = "block";
}

form.addEventListener("submit", async (e)=>{
  e.preventDefault();

  if(FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID")){
    showStatus("error", t("notSetMsg"));
    return;
  }

  submitBtn.disabled = true;
  showStatus("success", t("sendingMsg"));

  try{
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { "Accept": "application/json" },
      body: new FormData(form)
    });
    if(res.ok){
      showStatus("success", t("successMsg"));
      form.reset();
    } else {
      showStatus("error", t("errorMsg"));
    }
  } catch(err){
    showStatus("error", t("errorMsg"));
  } finally {
    submitBtn.disabled = false;
  }
});
