
/* ============================================================
   記事を追加するには、下の articles 配列に同じ形のオブジェクトを
   1つ追加するだけでOKです（コピーして書き換えてください）。
   body は段落ごとに文字列を1つずつ配列に入れます（HTMLタグ不要）。
   ============================================================ */
const articles = [
  {
    id:"pharmacy-basics",
    date:"2026-01-15",
    title:{
      ja:"はじめての日本の薬局：基本の使い方ガイド",
      en:"First Time at a Japanese Pharmacy: A Basic Guide",
      zh:"第一次到日本藥局：基本使用指南",
      es:"Su primera vez en una farmacia japonesa: guía básica"
    },
    excerpt:{
      ja:"処方箋なしで買える市販薬がたくさんある日本の薬局。選び方のコツと、薬剤師への伝え方を紹介します。",
      en:"Japanese pharmacies carry many OTC medicines you can buy without a prescription. Here's how to choose, and how to talk to the pharmacist.",
      zh:"日本藥局有許多不需處方箋即可購買的成藥。介紹挑選技巧，以及如何與藥劑師溝通。",
      es:"Las farmacias japonesas ofrecen muchos medicamentos de venta libre. Aquí le contamos cómo elegir y cómo hablar con el farmacéutico."
    },
    body:{
      ja:[
        "日本の薬局やドラッグストアには、処方箋がなくても買える「OTC医薬品」がたくさん並んでいます。ただし成分名や注意書きはほとんどが日本語のみで、外国人旅行者にとっては選ぶだけでもひと苦労です。",
        "まず知っておきたいのは、日本の薬は「錠剤」「粉末」「貼り薬」「ドリンク」など剤形の種類が豊富なこと。同じ症状でも、飲みやすさや眠気の出やすさが商品によって大きく異なります。",
        "レジ横やカウンターに薬剤師や登録販売者がいる場合、アレルギーや持病があるかどうかを聞かれることがあります。簡単な英単語（allergy, pregnant, medicineなど）を伝えるだけでも、より適した商品を提案してもらえます。",
        "このサイトでは、症状別に商品を比較できるほか、「3つの質問でおすすめを探す」機能を使えば、眠気の好みや効き目のタイプに合わせて1つを提案します。購入前の参考にしてください。",
        "体調がすぐれない場合は、無理をせず、症状が重いときや長引くときは医療機関を受診することをおすすめします。"
      ],
      en:[
        "Japanese pharmacies and drugstores carry a wide range of over-the-counter (OTC) medicines you can buy without a prescription. However, ingredient names and precautions are almost always written only in Japanese, which can make choosing the right one a challenge for visitors.",
        "One thing worth knowing: Japanese medicines come in many forms — tablets, powders, patches, drinks — and how easy they are to take, and how likely they are to cause drowsiness, can vary a lot even for the same symptom.",
        "If there's a pharmacist or registered seller at the counter, they may ask whether you have any allergies or existing conditions. Even a few simple words like \"allergy,\" \"pregnant,\" or \"medicine\" can help them suggest something more suitable.",
        "On this site, you can compare products by symptom, or use the \"Find your medicine in 3 questions\" tool, which suggests one option based on how you feel about drowsiness and effect strength. Use it as a reference before you buy.",
        "If you're not feeling well, don't push through it — if symptoms are severe or last a long time, we recommend seeing a doctor."
      ],
      zh:[
        "日本的藥局與藥妝店裡陳列著許多不需處方箋即可購買的「成藥（OTC）」。不過成分名稱與注意事項幾乎都只以日文標示，對外國旅客來說，光是挑選就相當不容易。",
        "首先要知道的是，日本的藥品劑型相當多元，有錠劑、粉末、貼布、飲品等。即使是同樣的症狀，不同商品在服用難易度與嗜睡程度上也可能有很大差異。",
        "若櫃檯有藥劑師或登錄販賣者，有時會詢問您是否有過敏或宿疾。只要說出「allergy」「pregnant」「medicine」等簡單英文單字，就能獲得更合適的建議。",
        "本網站可依症狀比較商品，也可使用「3個問題找到適合您的藥」功能，依您對嗜睡與藥效強度的偏好推薦一款商品，購買前可作為參考。",
        "若身體不適，請不要勉強，若症狀嚴重或持續較久，建議就醫。"
      ],
      es:[
        "Las farmacias y droguerías de Japón ofrecen una amplia variedad de medicamentos de venta libre (OTC) que se pueden comprar sin receta. Sin embargo, los nombres de los ingredientes y las precauciones casi siempre están escritos solo en japonés, lo que puede hacer que elegir el correcto sea todo un reto para los visitantes.",
        "Algo que vale la pena saber: los medicamentos japoneses vienen en muchas formas — comprimidos, polvos, parches, bebidas — y tanto la facilidad para tomarlos como la probabilidad de causar somnolencia pueden variar mucho incluso para el mismo síntoma.",
        "Si hay un farmacéutico o vendedor registrado en el mostrador, puede que le pregunten si tiene alergias o alguna condición médica. Incluso unas pocas palabras simples como \"allergy\" (alergia), \"pregnant\" (embarazada) o \"medicine\" (medicamento) pueden ayudarles a sugerirle algo más adecuado.",
        "En este sitio puede comparar productos por síntoma, o usar la herramienta \"Encuentra tu medicamento en 3 preguntas\", que sugiere una opción según sus preferencias sobre la somnolencia y la intensidad del efecto. Úsela como referencia antes de comprar.",
        "Si no se siente bien, no continúe forzándose — si los síntomas son intensos o duran mucho tiempo, le recomendamos consultar a un médico."
      ]
    }
  },
  {
    id:"hayfever-season",
    date:"2026-02-01",
    title:{
      ja:"春の花粉症シーズンを日本で乗り切る方法",
      en:"Getting Through Hay Fever Season in Japan",
      zh:"如何在日本度過春季花粉症季節",
      es:"Cómo sobrellevar la temporada de alergias en Japón"
    },
    excerpt:{
      ja:"2〜4月は花粉症のピークシーズン。旅行者が知っておきたい対策と、薬の選び方をまとめました。",
      en:"February to April is peak hay fever season in Japan. Here's what visitors should know, and how to choose a medicine.",
      zh:"2月至4月是花粉症的高峰季節，整理了旅客應該知道的因應方式與選藥要點。",
      es:"De febrero a abril es la temporada alta de alergias en Japón. Esto es lo que los visitantes deben saber, y cómo elegir un medicamento."
    },
    body:{
      ja:[
        "日本では2月〜4月ごろにスギ花粉、その後ヒノキ花粉が飛散し、多くの人が鼻水やくしゃみ、目のかゆみに悩まされます。この時期に日本を訪れる方は、思ったより症状がつらく感じることも少なくありません。",
        "花粉症用の薬は、大きく分けて「眠くなりにくいタイプ」と「効果は強いが眠くなりやすいタイプ」があります。観光やお仕事の予定がある日は、眠くなりにくいタイプを選ぶのがおすすめです。",
        "目のかゆみが強い場合は、鼻炎薬に加えて、点眼薬を併用する人も多いです。マスクやメガネ（サングラス）も、花粉を物理的に防ぐ手段として広く使われています。",
        "このサイトの「花粉症・鼻炎」のページでは、成分の違いや眠気の強さを比較できます。症状が重い場合は、我慢せず薬局のスタッフに相談してください。",
        "花粉情報はテレビの天気予報やスマートフォンアプリでも毎日発表されているので、飛散量が多い日は外出を控えめにするのも一つの方法です。"
      ],
      en:[
        "In Japan, cedar pollen spreads roughly from February to April, followed by cypress pollen, leaving many people with a runny nose, sneezing, and itchy eyes. If you're visiting during this season, the symptoms can catch you off guard.",
        "Hay fever medicines broadly fall into two types: ones less likely to cause drowsiness, and stronger ones that are more likely to make you sleepy. On days with sightseeing plans or work, a low-drowsiness option is usually the better choice.",
        "For strong eye itching, many people combine a nasal allergy medicine with eye drops. Masks and glasses (or sunglasses) are also widely used as a physical barrier against pollen.",
        "On this site's \"Hay Fever & Rhinitis\" page, you can compare ingredients and drowsiness levels. If your symptoms are severe, don't tough it out — ask the pharmacy staff for advice.",
        "Daily pollen forecasts are broadcast on TV weather reports and available through smartphone apps, so limiting time outdoors on high-pollen days is another option worth considering."
      ],
      zh:[
        "在日本，杉樹花粉大約於2月至4月飄散，接著是檜木花粉，讓許多人飽受流鼻水、打噴嚏、眼睛癢之苦。若在這段期間訪日，症狀有時會比預期更難受。",
        "花粉症用藥大致分為「較不易嗜睡的類型」與「藥效強但較容易嗜睡的類型」。若當天有觀光或工作行程，建議選擇較不易嗜睡的類型。",
        "若眼睛癢感嚴重，不少人會併用鼻炎藥與點眼藥。口罩與眼鏡（太陽眼鏡）也是廣泛使用的物理性花粉防護方式。",
        "本網站的「花粉症・鼻炎」頁面可比較成分差異與嗜睡程度。若症狀嚴重，請不要忍耐，可洽詢藥局工作人員。",
        "花粉資訊每天都會透過電視氣象預報或手機應用程式公布，飛散量高的日子減少外出，也是一種應對方式。"
      ],
      es:[
        "En Japón, el polen de cedro se dispersa aproximadamente de febrero a abril, seguido del polen de ciprés, dejando a muchas personas con rinorrea, estornudos y picazón de ojos. Si visita el país durante esta temporada, los síntomas pueden sorprenderle.",
        "Los medicamentos para la fiebre del heno se dividen en general en dos tipos: los que tienen menos probabilidad de causar somnolencia y los más fuertes, con mayor probabilidad de dar sueño. En días con planes de turismo o trabajo, suele ser mejor elegir una opción de baja somnolencia.",
        "Para una picazón de ojos intensa, muchas personas combinan un medicamento nasal con gotas oculares. Las mascarillas y las gafas (o gafas de sol) también se usan ampliamente como barrera física contra el polen.",
        "En la página \"Fiebre del heno y rinitis\" de este sitio puede comparar ingredientes y niveles de somnolencia. Si sus síntomas son intensos, no los aguante — pida consejo al personal de la farmacia.",
        "Los pronósticos diarios de polen se transmiten en el informe del clima de la televisión y están disponibles en aplicaciones para smartphone, así que limitar el tiempo al aire libre en los días de alta dispersión es otra opción a considerar."
      ]
    }
  }
   {
    id:"receiving-medicine",
    date:"2026-03-01",
    title:{
      ja:"日本での薬の受け取り方｜ドラッグストアと病院・薬局の違いをやさしく解説",
      en:"How to Receive Medicine in Japan: A Guide to Drugstores vs. Hospitals & Pharmacies",
      zh:"在日本如何領藥：藥妝店與醫院・藥局的區別淺顯易懂指南",
      es:"Cómo recibir medicamentos en Japón: guía sobre farmacias y hospitales"
    },
    excerpt:{
      ja:"ドラッグストアで買える市販薬と、病院の処方薬の違いや買い方の基本をわかりやすく解説します。",
      en:"An easy-to-understand guide on the differences between OTC medicines and prescription drugs, and how to get them in Japan.",
      zh:"淺顯易懂地解說可在藥妝店購買的成藥與醫院處方箋藥品的區別及基本購買方式。",
      es:"Una guía clara sobre las diferencias entre los medicamentos de venta libre y los recetados en Japón."
    },
    body:{
      ja:[
        "日本に着いて「頭が痛い」「お腹の調子が悪い」と思ったとき、ドラッグストアで買える市販薬（OTC）と、病院で診察を受けてから薬局で受け取る処方薬の2つのルートがあります。",
        "軽い症状ならドラッグストアが便利ですが、高熱が続く場合や3〜5日たっても良くならないときは、無理をせず医療機関を受診しましょう。",
        "日本の市販薬には副作用などのリスクに応じた区分があり、第1類医薬品などは薬剤師からの説明を受けて購入します。",
        "海外の医師の処方箋は日本では使えないため、処方薬が必要な場合は日本の医療機関を受診してください。",
        "困ったときは薬剤師に相談し、パッケージの用法・用量をしっかり確認して安全に服用しましょう。"
      ],
      en:[
        "When you feel unwell in Japan, you have two main routes for getting medicine: over-the-counter (OTC) medicines at drugstores, or prescription medicines after seeing a doctor.",
        "Drugstores are convenient for mild symptoms, but if you have a high fever or symptoms last more than 3-5 days without improvement, please visit a medical institution.",
        "Japanese OTC medicines are categorized by risk, and some products like Category 1 drugs require an explanation from a pharmacist before purchase.",
        "Foreign prescriptions cannot be used in Japan, so if you need prescription medicine, you must visit a Japanese medical institution.",
        "When in doubt, consult a pharmacist, check the dosage instructions on the package carefully, and take medications safely."
      ],
      zh:[
        "在日本感到身體不適時，主要有兩個管道：在藥妝店購買成藥（OTC），或是到醫院就診後在藥局領取處方藥。",
        "症狀輕微時去藥妝店很方便，但若持續高燒或3至5天未見好轉，請務必就醫。",
        "日本的成藥依風險分級，第1類等藥品需要聽取藥劑師說明後才能購買。",
        "國外的處方箋在日本無法使用，若需要處方藥請至日本醫療機構就診。",
        "有疑問時請諮詢藥劑師，並仔細確認包裝上的用法與用量，以確保安全用藥。"
      ],
      es:[
        "Cuando no se siente bien en Japón, tiene dos rutas principales para obtener medicamentos: los de venta libre en farmacias o los recetados tras consultar a un médico.",
        "Las farmacias son convenientes para síntomas leves, pero si tiene fiebre alta o los síntomas duran más de 3 a 5 días, acuda a un centro médico.",
        "Los medicamentos de venta libre en Japón están clasificados por riesgo, y algunos requieren la explicación de un farmacéutico antes de comprarlos.",
        "Las recetas extranjeras no se pueden usar en Japón, por lo que debe visitar una institución médica japonesa si necesita medicamentos con receta.",
        "Si tiene dudas, consulte a un farmacéutico, lea atentamente las instrucciones de dosificación y tome los medicamentos de forma segura."
      ]
    }
  },
  {
    id:"long-stay",
    date:"2026-03-15",
    title:{
      ja:"長期で日本に来る人の「薬」ガイド｜持ち込み・保険・薬局・薬剤情報提供書（薬情）の読み方",
      en:"Medicine Guide for Long-Term Visitors to Japan: Bringing, Insurance & Pharmacies",
      zh:"長期滯留日本者的「用藥」指南：攜帶限制、保險、藥局與藥情解讀",
      es:"Guía de medicamentos para estancias prolongadas en Japón: importación y seguros"
    },
    excerpt:{
      ja:"留学や仕事で日本に長く滞在する方向けに、薬の持ち込みルール、健康保険、薬局の利用法をまとめました。",
      en:"A guide for those staying long-term in Japan, covering medicine import rules, health insurance, and pharmacy use.",
      zh:"為長期滯留日本的留學或工作人員整理了藥品攜帶規定、健康保險與藥局使用方法。",
      es:"Una guía para quienes se quedan a largo plazo en Japón sobre reglas de importación y seguros."
    },
    body:{
      ja:[
        "留学や仕事などで日本に3か月以上滞在する場合、母国からの薬の持ち込み制限や日本の健康保険への加入など、知っておくべきポイントが多くあります。",
        "市販薬は原則2か月分、処方薬は1か月分まで手続きなしで持ち込めますが、覚醒剤原料や一部のADHD治療薬など、日本で持ち込み禁止・制限されている成分があるため注意が必要です。",
        "日本に到着したら住民登録を行い、公的医療保険に加入することで医療費や薬代の自己負担を原則3割に抑えられます。",
        "日本の調剤薬局では、薬の効能や副作用が書かれた「薬剤情報提供書（薬情）」が渡されます。内容をよく確認し、お薬手帳を活用しましょう。",
        "持病がある方は、薬が切れる前に日本の医療機関を受診し、安全に治療を継続してください。"
      ],
      en:[
        "If you are staying in Japan for more than 3 months for study or work, there are many important points to know, such as medicine import limits and health insurance.",
        "You can generally bring up to 2 months' supply of OTC medicines and 1 month's supply of prescription drugs without procedures, but some ingredients like stimulants or certain ADHD drugs are prohibited or restricted in Japan.",
        "After arriving, register your residence and join the public health insurance to reduce out-of-pocket medical and pharmacy costs to generally 30%.",
        "At Japanese dispensing pharmacies, you will receive a Drug Information Sheet (Yakujō) detailing effects and side effects. Review it carefully and use a medication notebook.",
        "If you have a chronic condition, visit a Japanese medical institution before your current supply runs out to continue your treatment safely."
      ],
      zh:[
        "若因留學或工作在日本滯留超過3個月，有許多需要注意的事項，例如藥品攜帶限制與加入日本健康保險。",
        "原則上可攜帶2個月內的成藥與1個月內的處方藥免手續費，但像興奮劑原料或部分ADHD治療藥等成分在日本禁止或受限制，請特別注意。",
        "抵達後請辦理居住登記並加入公用醫療機構保險，可將醫療與藥費自付額降至原則上3成。",
        "在日本調剤藥局領藥時，會拿到記載藥效與副作用的「藥劑情報提供書（藥情）」。請務必仔細確認並善用藥帳本。",
        "有慢性病的民眾，請在藥品用完前至日本醫療機構就診，以安全持續治療。"
      ],
      es:[
        "Si se queda en Japón por más de 3 meses por estudios o trabajo, hay puntos clave como las reglas de importación de medicamentos y el seguro de salud.",
        "Generalmente puede traer hasta 2 meses de medicamentos de venta libre y 1 mes de medicamentos recetados sin trámites, pero sustancias como estimulantes o ciertos medicamentos para el TDAH están prohibidos o restringidos.",
        "Tras llegar, regístrese e inscríbase en el seguro de salud público para reducir sus costos médicos y de farmacia al 30%.",
        "En las farmacias de dispensación japonesas recibirá una Hoja de Información de Medicamentos (Yakujō). Revísela detenidamente y use una libreta de medicamentos.",
        "Si tiene una condición médica crónica, visite una institución médica japonesa antes de que se le acaben los medicamentos actuales."
      ]
    }
  }
  /* ↓ 新しい記事を追加する時は、ここに同じ形でオブジェクトを追加してください
  ,{
    id:"unique-id-here",
    date:"2026-04-01",
    title:{ja:"...", en:"...", zh:"...", es:"..."},
    excerpt:{ja:"...", en:"...", zh:"...", es:"..."},
    body:{
      ja:["段落1","段落2"],
      en:["Paragraph 1","Paragraph 2"],
      zh:["段落1","段落2"],
      es:["Párrafo 1","Párrafo 2"]
    }
  }
  */
];

const translations = {
  ja:{
    siteName:"ふぁらまーnavi", backLink:"← トップページに戻る",
    listTitle:"お役立ち記事", listLead:"日本の市販薬や薬局の使い方について、旅行者向けに役立つ情報をまとめています。",
    readMore:"続きを読む →", backToList:"← 記事一覧に戻る",
    footerCredit:"企画：yuto.h／監修：石鍋卓望", navHome:"トップページ", navAbout:"このサイトについて", navPrivacy:"プライバシーポリシー", navContact:"お問い合わせ"
  },
  en:{
    siteName:"Pharama-Navi", backLink:"← Back to home",
    listTitle:"Articles", listLead:"Helpful information for visitors about Japanese OTC medicine and how to use pharmacies here.",
    readMore:"Read more →", backToList:"← Back to articles",
    footerCredit:"Planning: yuto.h / Supervision: 石鍋卓望", navHome:"Home", navAbout:"About Us", navPrivacy:"Privacy Policy", navContact:"Contact"
  },
  zh:{
    siteName:"Pharama-Navi", backLink:"← 返回首頁",
    listTitle:"實用文章", listLead:"整理了關於日本成藥與藥局使用方式，對旅客有幫助的資訊。",
    readMore:"閱讀更多 →", backToList:"← 返回文章列表",
    footerCredit:"企劃：yuto.h／監修：石鍋卓望", navHome:"首頁", navAbout:"關於本站", navPrivacy:"隱私權政策", navContact:"聯絡我們"
  },
  es:{
    siteName:"Pharama-Navi", backLink:"← Volver al inicio",
    listTitle:"Artículos", listLead:"Información útil para visitantes sobre los medicamentos de venta libre en Japón y cómo usar las farmacias.",
    readMore:"Leer más →", backToList:"← Volver a los artículos",
    footerCredit:"Planificación: yuto.h / Supervisión: 石鍋卓望", navHome:"Inicio", navAbout:"Sobre nosotros", navPrivacy:"Política de privacidad", navContact:"Contacto"
  }
};
const langNames = {ja:"日本語", en:"English", zh:"繁體中文", es:"Español"};
const dateLocale = {ja:"ja-JP", en:"en-US", zh:"zh-TW", es:"es-ES"};

let currentLang = "ja";
try{ const saved = localStorage.getItem("kn_lang"); if(saved && translations[saved]) currentLang = saved; }catch(e){}

function t(key){ return translations[currentLang][key]; }
function formatDate(iso){
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString(dateLocale[currentLang], { year:"numeric", month:"long", day:"numeric" });
}

function getHashId(){
  const h = location.hash;
  if(h.startsWith("#a/")) return h.slice(3);
  return null;
}

function renderList(){
  const main = document.getElementById("main");
  main.innerHTML = `
    <h1>${t("listTitle")}</h1>
    <p class="lead">${t("listLead")}</p>
    <div class="article-grid" id="articleGrid"></div>`;
  const grid = document.getElementById("articleGrid");
  grid.innerHTML = articles.slice().reverse().map(a => `
    <div class="article-card" data-id="${a.id}">
      <p class="article-date">${formatDate(a.date)}</p>
      <p class="article-title">${a.title[currentLang]}</p>
      <p class="article-excerpt">${a.excerpt[currentLang]}</p>
      <span class="article-readmore">${t("readMore")}</span>
    </div>`).join("");
  grid.querySelectorAll(".article-card").forEach(card=>{
    card.addEventListener("click", ()=>{ location.hash = "a/" + card.dataset.id; });
  });
}

function renderDetail(id){
  const a = articles.find(x=>x.id===id);
  if(!a){ renderList(); return; }
  const main = document.getElementById("main");
  main.innerHTML = `
    <button class="detail-back" id="backBtn1">${t("backToList")}</button>
    <p class="detail-date">${formatDate(a.date)}</p>
    <h1 class="detail-title">${a.title[currentLang]}</h1>
    <div class="detail-body">${a.body[currentLang].map(p=>`<p>${p}</p>`).join("")}</div>
    <button class="detail-back detail-back-bottom" id="backBtn2">${t("backToList")}</button>`;
  const goBack = ()=>{ location.hash = ""; };
  document.getElementById("backBtn1").addEventListener("click", goBack);
  document.getElementById("backBtn2").addEventListener("click", goBack);
}

function renderMain(){
  const id = getHashId();
  if(id) renderDetail(id); else renderList();
}

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
  document.title = t("listTitle") + " | " + t("siteName");
  document.getElementById("siteName").textContent = t("siteName");
  document.getElementById("backLink").textContent = t("backLink");
  document.getElementById("footerCredit").textContent = t("footerCredit");
  document.getElementById("navHome").textContent = t("navHome");
  document.getElementById("navAbout").textContent = t("navAbout");
  document.getElementById("navPrivacy").textContent = t("navPrivacy");
  document.getElementById("navContact").textContent = t("navContact");
  renderLangSwitch();
  renderMain();
}

window.addEventListener("hashchange", renderMain);
renderAll();
