
/* ============================================================
   記事を追加するには、下の articles 配列に同じ形のオブジェクトを
   1つ追加するだけでOKです（コピーして書き換えてください）。
   body は段落ごとに文字列を1つずつ配列に入れます（HTMLタグ不要）。
   ============================================================ */
const articles = [
  {
    id:"pharmacy-basics",
    date:"2026-9-15",
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
 id: "hay-fever",
    date: "2026-10-31",
    title: {
      ja: "日本に来てくしゃみ・鼻水が止まらない？ 外国人のための花粉症ガイド｜原因・市販薬・病院の選び方",
      en: "Sneezing and Runny Nose in Japan? Hay Fever Guide for Foreigners: Causes, OTC Medicines & Hospital Care",
      zh: "來到日本後打噴嚏流鼻水不止？外國人花粉症指南｜原因・成藥・醫院選擇",
      es: "¿Estornudos y secreción nasal en Japón? Guía de alergia al polen para extranjeros"
    },
    excerpt: {
      ja: "日本で風邪でもないのにくしゃみや鼻水が止まらない方向けに、花粉の時期、市販薬の選び方、病院に行く目安を解説します。",
      en: "A guide for visitors experiencing hay fever symptoms in Japan, covering pollen seasons, OTC medicine choices, and when to see a doctor.",
      zh: "為在日本非感冒卻打噴嚏、流鼻水不止的人士解說花粉季節、成藥挑選與就醫基準。",
      es: "Una guía sobre la fiebre del heno en Japón, que cubre las temporadas de polen, medicamentos de venta libre y cuándo ir al médico."
    },
    body: {
      ja: [
        "「日本に来てから、風邪でもないのにくしゃみと鼻水が止まらない」「目がかゆくて涙が出る」――そんな経験はありませんか。それは花粉症（hay fever）かもしれません[cite: 12]。日本は花粉症の人が非常に多い国で、母国では何もなかった人が日本で初めて症状を感じることもあります[cite: 12]。10月のいまも、秋の花粉（ブタクサ・ヨモギなど）で症状が出る人がいます[cite: 12]。",
        "1. それ、風邪ではなく「花粉症」かも：花粉症はアレルギー疾患で、透明で水っぽい鼻水、連続するクシャミ、目のかゆみなどが特徴です[cite: 12, 13]。熱はことさら出ず、花粉が飛ぶ間数週間以上続きます[cite: 13]。発熱や強いだるさがあるときは風邪やインフルエンザ、新型コロナなどの可能性があるため受診してください[cite: 13]。",
        "2. 日本の花粉カレンダー：12月・1月の冬を除くとほぼ一年中いずれかの花粉が飛んでおり[cite: 13]、スギ（2〜4月）、ヒノキ（3〜5月）、イネ科（初夏〜夏）、ブタクサ・ヨモギ（8〜10月頃まで）、シラカンバ（北海道など北の地域で春〜初夏）などがあります[cite: 13, 14]。毎日の情報は環境省の「はなこさん」や天気予報アプリで確認できます[cite: 14]。",
        "3. ドラッグストアで買える市販薬（OTC）：第2世代抗ヒスタミン薬、鼻炎薬・総合タイプ、ステロイド点鼻薬や血管収縮薬入りの点鼻薬、抗アレルギー点眼薬があります[cite: 14]。眠気、他の薬との重複、持病・妊娠などに注意し、車を運転する人は「眠くならない薬」を薬剤師に相談しましょう[cite: 14, 15]。売り場での日本語フレーズも活用できます[cite: 15]。",
        "4. 薬以外のセルフケア：マスク・メガネの着用、帰宅時の服払い・手洗い・うがい、室内干し、空気清浄機やこまめな拭き掃除が効果的です[cite: 15]。",
        "5. 病院に行くべきサインと治療：鼻水・鼻づまりは耳鼻咽喉科、目のかゆみは眼科、総合的な相談はアレルギー科を受診します[cite: 15]。高熱、強いだるさ、黄色い鼻水、顔や目の周りの痛み、ゼーゼーする咳が続く場合はすぐに受診してください[cite: 15, 16]。長期滞在者は舌下免疫療法などの選択肢もあり、日本の公的医療保険に加入していれば自己負担は原則3割です[cite: 16]。",
        "6. 母国から薬を持ち込むときの注意：Sudafed（プソイドエフェドリン入り）やVicksインハラーなどは、日本で持ち込み禁止・制限の対象になる場合があります[cite: 16]。必ず成分を確認し、不安なときは地方厚生局へ問い合わせましょう[cite: 16]。"
      ],
      en: [
        "If you experience sneezing or runny nose without a cold after coming to Japan, it might be hay fever[cite: 12]. Visitors who had no symptoms in their home country can develop them in Japan[cite: 12], and autumn pollen (such as ragweed and mugwort) can also trigger symptoms[cite: 12].",
        "1. Is it Hay Fever?: Unlike a common cold, hay fever features clear, watery mucus, consecutive sneezing, and itchy eyes, usually without fever[cite: 12, 13]. Symptoms last for weeks while pollen is airborne[cite: 13]. If you have a fever or severe fatigue, consult a doctor[cite: 13].",
        "2. Pollen Calendar in Japan: Pollen flies almost year-round in Japan except for December and January[cite: 13]. Major types include cedar (Feb-Apr), cypress (Mar-May), grasses (early summer), ragweed/mugwort (until Aug-Oct), and birch in northern regions[cite: 13, 14]. Daily forecasts are available via weather apps or official monitoring systems[cite: 14].",
        "3. OTC Medicines at Drugstores: Options include 2nd-generation antihistamines, combination rhinitis drugs, nasal sprays, and anti-allergy eye drops[cite: 14]. Pay attention to drowsiness, drug duplication, and consult a pharmacist if you drive[cite: 14, 15].",
        "4. Self-Care Tips: Wear masks and glasses, brush off clothes and wash up after returning home, dry laundry indoors, and use air purifiers[cite: 15].",
        "5. When to See a Doctor: Visit an ENT for nasal symptoms, eye clinics for eye itching, or allergists[cite: 15]. Seek immediate medical care if you have a high fever, discolored mucus, facial pain, wheezing, or if OTC drugs do not help[cite: 15, 16]. Sublingual immunotherapy is an option for long-term residents, and public health insurance covers 70% (patient pays 30%)[cite: 16].",
        "6. Bringing Medicine from Overseas: Be careful when bringing medicines from home, as items like Sudafed (containing pseudoephedrine) or Vicks inhalers may be restricted or prohibited in Japan[cite: 16]."
      ],
      zh: [
        "來到日本後若出現打噴嚏、流鼻水且非感冒所引起，可能是花粉症[cite: 12]。在母國沒有症狀的人也可能在日本首次發作[cite: 12]，10月的秋季花粉（豚草、艾草等）也可能引起症狀[cite: 12]。",
        "1. 這可能是「花粉症」而非感冒：花粉症常見症狀為透明水狀鼻涕、連續打噴嚏、眼睛癢且通常不發燒[cite: 12, 13]。症狀會持續數週以上[cite: 13]。若有發燒或嚴重倦怠感，請就醫診治[cite: 13]。",
        "2. 日本花粉日曆：除12月與1月外，日本幾乎全年都有花粉飄散[cite: 13]。主要包括杉樹（2~4月）、檜木（3~5月）、禾本科（初夏~夏）、豚草/艾草（8~10月左右）、白樺（北海道等北方地區）[cite: 13, 14]。每日花粉資訊可透過氣象App確認[cite: 14]。",
        "3. 藥妝店販售的成藥（OTC）：包含第2代抗組織胺藥、綜合鼻炎藥、鼻噴劑與抗過敏眼藥水[cite: 14]。選購時需注意嗜睡性、藥物重複、懷孕或慢性病，開車者請諮詢藥劑師[cite: 14, 15]。",
        "4. 藥物以外的自我照護：佩戴口罩與眼鏡、返家後拍落衣物並洗臉漱口、室內晾衣及使用空氣清淨機[cite: 15]。",
        "5. 應就醫徵兆與治療：鼻部症狀看耳鼻喉科，眼睛症狀看眼科，綜合諮詢看過敏科[cite: 15]。若有高燒、嚴重倦怠、黃鼻涕、臉部疼痛、喘鳴或成藥無效等請立即就醫[cite: 15, 16]。長期居住者可考慮舌下免疫療法，加入健康保險後自付額原則上為3成[cite: 16]。",
        "6. 從母國攜帶藥物的注意事項：含有偽麻黃鹼的 Sudafed 或 Vicks 鼻吸劑可能在日本屬於禁止或受限攜帶品項[cite: 16]。務必確認成分，如有疑慮請向地方厚生局洽詢[cite: 16]。"
      ],
      es: [
        "Si experimenta estornudos o secreción nasal sin estar resfriado tras llegar a Japón, podría ser fiebre del heno[cite: 12]. Es común desarrollar síntomas por primera vez en Japón[cite: 12], y el polen de otoño también puede desencadenar síntomas[cite: 12].",
        "1. ¿Es fiebre del heno?: A diferencia del resfriado, la fiebre del heno causa moco claro y acuoso, estornudos consecutivos y picazón en los ojos, por lo general sin fiebre[cite: 12, 13]. Si presenta fiebre alta o fatiga severa, consulte a un médico[cite: 13].",
        "2. Calendario de polen: El polen vuela casi todo el año en Japón, excepto en diciembre y enero[cite: 13]. Los tipos principales incluyen cedro (feb-abr), ciprés (mar-may), gramíneas, ambrosía/altamisa (hasta ago-oct) y abedul[cite: 13, 14].",
        "3. Medicamentos de venta libre (OTC): Hay antihistamínicos de 2.ª generación, medicamentos para la rinitis, aerosoles nasales y gotas para los ojos[cite: 14]. Preste atención a la somnolencia y consulte al farmacéutico si conduce[cite: 14, 15].",
        "4. Cuidados personales: Use mascarilla y gafas, sacuda la ropa al llegar a casa, lávese la cara, seque la ropa en interiores y use purificadores de aire[cite: 15].",
        "5. Cuándo ir al médico: Acuda al otorrinolaringólogo para síntomas nasales y al oftalmólogo para ojos[cite: 15]. Si tiene fiebre alta, fatiga severa, moco amarillento, sibilancias o si los medicamentos no mejoran los síntomas, busque atención médica[cite: 15, 16].",
        "6. Traer medicamentos del extranjero: Tenga en cuenta que productos como Sudafed (con pseudoefedrina) pueden estar restringidos o prohibidos en Japón[cite: 16]. Verifique los ingredientes y consulte a la oficina de厚生局 si tiene dudas[cite: 16]."
      ]
    }
  },
   {
    id: "receiving-medicine",
    date: "2026-10-31",
    title: {
      ja: "日本での薬の受け取り方｜ドラッグストアと病院・薬局の違いをやさしく解説",
      en: "How to Receive Medicine in Japan: A Guide to Drugstores vs. Hospitals & Pharmacies",
      zh: "在日本如何領藥：藥妝店與醫院・藥局的區別淺顯易懂指南",
      es: "Cómo recibir medicamentos en Japón: guía sobre farmacias y hospitales"
    },
    excerpt: {
      ja: "ドラッグストアで買える市販薬と、病院の処方薬の違いや買い方の基本をわかりやすく解説します。",
      en: "An easy-to-understand guide on the differences between OTC medicines and prescription drugs, and how to get them in Japan.",
      zh: "淺顯易懂地解說可在藥妝店購買的成藥與醫院處方箋藥品的區別及基本購買方式。",
      es: "Una guía clara sobre las diferencias entre los medicamentos de venta libre y los recetados en Japón."
    },
    body: {
      ja: [
        "日本に着いて「頭が痛い」「お腹の調子が悪い」「いつもの薬が切れた」と思ったとき、ドラッグストアで買える市販薬（OTC）と、病院・クリニックで診てもらってから薬局で受け取る処方薬の2つのルートがあります。",
        "軽い症状ならドラッグストアが便利ですが、高熱が続く場合や強い痛み、呼吸が苦しい、症状が3〜5日たっても良くならないときは無理をせず医療機関を受診しましょう。",
        "1. ドラッグストアで市販薬を買う：日本の市販薬はリスク区分（要指導医薬品、第1類〜第3類）で買い方が異なります。特に「第1類」は薬剤師のいるカウンターで購入する必要があり、薬剤師が不在の時間帯は購入できないため営業時間の事前確認が安心です。また、乱用防止のため購入数が1人1個に制限される医薬品もあります。",
        "2. 買い物のコツと使えるフレーズ：症状や持病、アレルギー、妊娠の有無などを薬剤師に伝えましょう。母国で使い慣れた「成分名」（アセトアミノフェン、イブプロフェン、フェキソフェナジンなど）で探すと失敗しにくいですが、日本の市販薬は1回の用量が海外と異なる場合があるため、パッケージの用法・用量を必ず守ってください。",
        "3. 病院・クリニックで処方薬を受け取る：海外の処方箋は日本の薬局では使えません。日本の医療機関を受診して処方箋（有効期限は発行日含め4日間）をもらう必要があります。旅行者は保険適用外で全額自己負担になることが多いため、海外旅行保険の確認と領収書・明細書の保管をおすすめします。",
        "4. ネット購入と個人輸入の注意：国内の正規ドラッグストア通販サイトで市販薬は購入できますが、海外サイトからの個人輸入は品質・安全性が保証されずリスクがあるため厚生労働省も注意を呼びかけています。個人輸入した薬の転売や譲渡は認められていません。"
      ],
      en: [
        "When you feel unwell or run out of medicine in Japan, you have two main routes: buying over-the-counter (OTC) medicine at a drugstore, or visiting a clinic to receive prescription medicine at a pharmacy.",
        "Drugstores are convenient for mild symptoms, but please visit a medical institution if you have high fever, severe pain, breathing difficulty, or symptoms lasting over 3-5 days.",
        "1. Buying OTC Drugs at Drugstores: Japanese OTC drugs are classified by risk levels. Category 1 drugs require a pharmacist to be present, so check store hours beforehand. Note that some medicines have purchase limits (e.g., 1 per person) to prevent misuse.",
        "2. Shopping Tips: Inform the pharmacist about your symptoms, medical conditions, allergies, or pregnancy. Searching by active ingredient names (e.g., Acetaminophen, Ibuprofen, Fexofenadine) helps find suitable options, but always strictly follow Japanese dosage instructions as concentrations may differ from foreign medications.",
        "3. Prescription Drugs at Hospitals/Pharmacies: Foreign prescriptions cannot be used in Japanese pharmacies; you must see a doctor in Japan to get a Japanese prescription (valid for 4 days). Tourists usually pay 100% out-of-pocket, so keep all receipts for insurance claims.",
        "4. Online Purchases & Imports: While official domestic drugstore websites sell OTC drugs, importing medications from overseas sites carries safety risks and lacks approval. Reselling or transferring imported drugs is strictly prohibited."
      ],
      zh: [
        "在日本感到頭痛、腸胃不適或習慣用藥用完時，主要有兩個管道：在藥妝店購買成藥（OTC），或是到診所就診後在調劑藥局領取處方藥。",
        "症狀輕微時去藥妝店很方便，但若持續高燒、劇痛、呼吸困難或3至5天未見好轉，請務必就醫。",
        "1. 在藥妝店購買成藥：日本成藥依風險等級分類，特別是「第1類」需要有藥劑師在場才能購買，建議事先確認藥劑師值班時間。部分感冒藥等為防止濫用，每人限購1盒。",
        "2. 選購技巧：請向藥劑師說明症狀、宿疾、過敏及是否懷孕。依「成分名稱」（如 Acetaminophen、Ibuprofen、Fexofenadine 等）尋找較不容易買錯，但請務必遵守日本包裝上的用法用量，勿直接照母國劑量服用。",
        "3. 醫療機構與處方藥：國外處方箋在日本無法使用，必須在日本就診並取得處方箋（有效期包含發行日共4天）。外國旅客通常需全額自費，請留存收據向海外旅行保險申請理賠。",
        "4. 網路購買與個人輸入：僅限日本國內正規藥妝店網站購買成藥。從國外網站個人輸入藥物缺乏安全保障，且禁止轉售或轉讓他人。"
      ],
      es: [
        "Cuando se siente mal o se le acaban sus medicamentos en Japón, existen dos rutas: comprar medicamentos de venta libre (OTC) en una farmacia, o acudir a una clínica para obtener una receta.",
        "Las farmacias son convenientes para síntomas leves, pero consulte a un médico si tiene fiebre alta, dolor intenso, dificultad respiratoria o síntomas que duren más de 3 a 5 días.",
        "1. Comprar medicamentos de venta libre: Los medicamentos OTC están clasificados por riesgo. Los de Categoría 1 requieren la presencia de un farmacéutico. Algunos productos tienen límites de compra (1 unidad por persona) para prevenir abusos.",
        "2. Consejos de compra: Informe al farmacéutico sobre sus síntomas, alergias, condiciones médicas o embarazo. Buscar por el nombre del ingrediente activo (como paracetamol o ibuprofeno) facilita la elección, pero siga siempre las instrucciones de dosificación japonesas.",
        "3. Medicamentos con receta: Las recetas extranjeras no son válidas en Japón; debe consultar a un médico local para obtener una receta japonesa (válida por 4 días). Los turistas suelen pagar el 100% de los costos, por lo que se recomienda guardar todos los recibos.",
        "4. Compras en línea e importación: Compre solo en sitios de farmacias japonesas reguladas. Importar medicamentos por su cuenta desde sitios web extranjeros conlleva riesgos de seguridad y está prohibida su reventa."
      ]
    }
  },
  {
    id: "long-stay",
    date: "2026-10-31",
    title: {
      ja: "長期で日本に来る人の「薬」ガイド｜持ち込み・保険・薬局・薬剤情報提供書（薬情）の読み方",
      en: "Medicine Guide for Long-Term Visitors to Japan: Bringing, Insurance & Pharmacies",
      zh: "長期滯留日本者的「用藥」指南：攜帶限制、保險、藥局與藥情解讀",
      es: "Guía de medicamentos para estancias prolongadas en Japón: importación y seguros"
    },
    excerpt: {
      ja: "留学や仕事で日本に長く滞在する方向けに、薬の持ち込みルール、健康保険、薬局の利用法をまとめました。",
      en: "A guide for those staying long-term in Japan, covering medicine import rules, health insurance, and pharmacy use.",
      zh: "為長期滯留日本的留學或工作人員整理了藥品攜帶規定、健康保險與藥局使用方法。",
      es: "Una guía para quienes se quedan a largo plazo en Japón sobre reglas de importación y seguros."
    },
    body: {
      ja: [
        "留学、仕事、家族帯同などで日本に長く住む場合、薬の問題は一度で終わりません。この記事では、日本に3か月以上滞在する方に向けて、出発前の準備から到着後の医療・薬局の使い方、薬の説明書を読むコツまでをまとめました[cite: 6]。",
        "1. 薬の持ち込みルールと禁止薬：自己使用目的の場合、外用剤は1品目につき24個以内、毒薬・劇薬・処方薬は1か月分以内、その他の医薬品は2か月分以内であれば手続きなしで持ち込めますが、これを超える場合は事前に地方厚生局で「輸入確認証」の取得が必要です[cite: 6, 7]。また、プソイドエフェドリンを含む薬（Sudafedなど）やアンフェタミン系のADHD治療薬など、日本で持ち込みが禁止・制限されている薬があるため十分に注意してください[cite: 7]。",
        "2. 日本の健康保険と医療機関：日本に3か月以上滞在する外国人は原則として社会保険や国民健康保険に加入し、医療費や処方薬の自己負担を原則3割に抑えられます[cite: 9]。受診時は近所のクリニック（開業医）を基本とし、紹介状なしで大病院を受診すると選定療養費がかかるため注意が必要です[cite: 9]。また、到着直後の数週間は海外旅行保険を活用するのも有効です[cite: 9]。",
        "3. 薬情（薬剤情報提供書）とお薬手帳：日本の調剤薬局では、薬の効能、飲み方、注意点、副作用が記載された「薬剤情報提供書（薬情）」が渡されます[cite: 8, 9]。また「お薬手帳」を利用することで、複数の病院や薬局を利用する際も、薬剤師が重複薬や飲み合わせをチェックできるため安全性が高まります[cite: 10]。",
        "4. 市販薬とセルフメディケーション税制：総合感冒薬、漢方薬、湿布などが薬局で買えます[cite: 10]。成分の重複による過剰服用の防止に注意しましょう[cite: 10]。条件を満たした対象の市販薬を年間12,000円超購入した場合は、セルフメディケーション税制による所得控除の対象になる可能性があります[cite: 10]。",
        "5. 副作用と注意点：ピルやサプリメントの扱い、海外サイトからの個人輸入のリスクに注意してください[cite: 11]。医薬品を適正に使用しても重い副作用がまれに起こることがあり、発疹や呼吸困難などが出た場合はすぐに服用を中止して医療機関を受診し、必要に応じて医薬品副作用被害救済制度（PMDA）を確認してください[cite: 11]。"
      ],
      en: [
        "If you are staying in Japan long-term for study, work, or family, medicine issues require careful attention. This guide covers pre-departure preparation, post-arrival medical and pharmacy use, and reading medication instructions for those staying over 3 months[cite: 6].",
        "1. Import Rules & Prohibited Drugs: For personal use, you can bring up to 24 topical items, 1 month's supply of prescription drugs, and 2 months' supply of others without procedures; quantities exceeding this require an Import Certificate[cite: 6, 7]. Note that certain drugs like those containing pseudoephedrine (e.g., Sudafed) or amphetamine-type ADHD medications are prohibited or restricted in Japan[cite: 7].",
        "2. Health Insurance & Medical Care: Foreigners staying over 3 months generally enroll in public health insurance, reducing out-of-pocket costs to 30%[cite: 9]. It is standard to visit local clinics first, as visiting large hospitals without a referral incurs extra non-insurance fees[cite: 9]. Utilizing travel insurance for the first few weeks is also an option[cite: 9].",
        "3. Yakujō & Medication Notebooks: Dispensing pharmacies provide a Drug Information Sheet ('Yakujō') detailing effects, dosage, and side effects[cite: 8, 9]. Using a medication notebook helps pharmacists check for drug interactions and duplication across multiple hospitals and pharmacies[cite: 10].",
        "4. OTC Drugs & Tax Deductions: You can buy cold medicines, herbal medicines, and patches at pharmacies[cite: 10]. Avoid duplicating active ingredients to prevent overdose[cite: 10]. If you meet the conditions, purchasing over 12,000 yen annually of eligible OTC drugs may qualify you for the self-medication tax system[cite: 10].",
        "5. Side Effects & Precautions: Be aware of rules regarding pills, supplements, and the risks of personal import from overseas sites[cite: 11]. If severe side effects like rashes or breathing difficulties occur, stop taking the medication immediately, seek medical attention, and consult PMDA if necessary[cite: 11]."
      ],
      zh: [
        "若因留學、工作或攜眷長期居留日本，用藥問題不容忽視。本指南為預計停留超過3個月的人士，整理了行前準備、抵達後的醫療與藥局使用方式以及藥品說明書的閱讀技巧[cite: 6]。",
        "1. 藥品攜帶規定與違禁藥：個人自用情況下，外用藥最多24個、處方藥最多1個月分、其他藥品最多2個月分可免手續費攜帶，超過者需事先申請「進口確認證」[cite: 6, 7]。請注意，含有偽麻黃鹼（如Sudafed）或苯丙胺類ADHD治療藥在日本屬於禁止或受限藥品，切勿違規[cite: 7]。",
        "2. 健康保險與醫療機構：居留超過3個月的外國人原則上應加入公營醫療保險，將醫療與藥費自付額降至3成[cite: 9]。就醫時以鄰近診所為基本，未持介紹信前往大醫院將被收取額外選定療養費[cite: 9]。抵達初期也可善用海外旅行保險[cite: 9]。",
        "3. 藥情（藥劑情報提供書）與用藥手冊：調劑藥局發放的「藥情」載有療效、用法及副作用[cite: 8, 9]。善用用藥手冊可讓藥劑師在您使用多家醫院時，協助檢查重複用藥與交互作用，確保安全[cite: 10]。",
        "4. 成藥與自我醫療稅制：藥局可購買綜合感冒藥、中藥及貼布[cite: 10]。應避免重複服用相同成分以防過量[cite: 10]。若年度購買指定成藥超過12,000日圓，符合條件者可能適用自我醫療稅制扣除額[cite: 10]。",
        "5. 副作用與注意事項：留意事後避孕藥、保健食品及海外個人輸入之風險[cite: 11]。若出現皮疹、呼吸困難等嚴重副作用，應立即停藥並就醫，必要時可洽詢醫藥品副作用被害救濟制度（PMDA）[cite: 11]。"
      ],
      es: [
        "Si se queda en Japón a largo plazo por estudios, trabajo o familia, este artículo cubre desde la preparación previa hasta el uso de servicios médicos y farmacias para estancias superiores a 3 meses[cite: 6].",
        "1. Reglas de importación y medicamentos prohibidos: Para uso personal, puede traer hasta 24 tópicos, 1 mes de recetados y 2 meses de otros sin trámites; cantidades mayores requieren un Certificado de Importación[cite: 6, 7]. Tenga en cuenta que ciertos medicamentos, como los que contienen pseudoefedrina (ej. Sudafed) o anfetaminas para el TDAH, están prohibidos o restringidos en Japón[cite: 7].",
        "2. Seguro médico y atención médica: Los extranjeros con estancias superiores a 3 meses generalmente se inscriben en el seguro de salud público, reduciendo los costos al 30%[cite: 9]. Es recomendable acudir primero a clínicas locales, ya que ir a hospitales grandes sin derivación genera tarifas adicionales[cite: 9]. El uso de un seguro de viaje al principio también es una opción[cite: 9].",
        "3. Yakujō y Libreta de Medicamentos: Las farmacias de dispensación proporcionan una Hoja de Información de Medicamentos ('Yakujō') que detalla efectos, dosis y efectos secundarios[cite: 8, 9]. El uso de una libreta de medicamentos ayuda a los farmacéuticos a verificar interacciones y duplicaciones entre múltiples hospitales[cite: 10].",
        "4. Medicamentos de venta libre e impuestos: Puede comprar medicamentos para el resfriado, hierbas medicinales y parches en las farmacias[cite: 10]. Evite duplicar ingredientes activos para prevenir sobredosis[cite: 10]. Si cumple las condiciones y gasta más de 12,000 yenes al año en medicamentos OTC elegibles, podría calificar para deducciones fiscales por automedicación[cite: 10].",
        "5. Efectos secundarios y precauciones: Tenga en cuenta las reglas sobre anticonceptivos, suplementos y los riesgos de la importación personal desde el extranjero[cite: 11]. Si se presentan efectos secundarios graves como sarpullido o dificultad para respirar, suspenda el medicamento de inmediato, busque atención médica y consulte a la PMDA si es necesario[cite: 11]."
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
