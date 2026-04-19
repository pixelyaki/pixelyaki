import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "iconoir-react";
import { Header } from "@/components/header";
import { getCopy, isLocale, type Locale } from "@/lib/i18n";

type Section = { heading: string; body: string };
type TermsContent = { title: string; updated: string; back: string; sections: Section[] };

const content: Partial<Record<Locale, TermsContent>> = {
  ko: {
    title: "이용약관",
    updated: "최종 수정일: 2026년 4월 18일",
    back: "홈으로",
    sections: [
      {
        heading: "1. 서비스 소개",
        body: "Pixelyaki는 텍스트를 QR 코드로 변환하는 무료 웹 서비스입니다. 회원가입 없이 누구나 이용할 수 있습니다."
      },
      {
        heading: "2. 이용 조건",
        body: "서비스는 합법적인 용도로만 이용해야 합니다. 다음 행위는 금지됩니다.\n• 불법적인 콘텐츠 또는 타인의 권리를 침해하는 내용을 담은 QR 코드 생성\n• 악의적 목적(피싱, 악성코드 배포 등)의 QR 코드 생성\n• 서비스를 통한 제3자 피해 유발"
      },
      {
        heading: "3. 서비스 변경 및 중단",
        body: "운영자는 사전 예고 없이 서비스의 내용을 변경하거나 제공을 중단할 수 있습니다. 이로 인해 발생하는 손해에 대해 책임지지 않습니다."
      },
      {
        heading: "4. 면책 조항",
        body: "서비스는 현재 상태('있는 그대로')로 제공되며, 다음에 대해 어떠한 보증도 하지 않습니다.\n• 서비스의 정확성, 신뢰성, 지속적 가용성\n• 특정 목적에 대한 적합성\n\n서비스 이용으로 인한 직·간접적인 손해에 대해 운영자는 법적 책임을 지지 않습니다."
      },
      {
        heading: "5. 지식재산권",
        body: "'QR Code'는 DENSO WAVE INCORPORATED의 등록상표입니다.\n\n서비스의 디자인, 소스코드, 로고 등 모든 콘텐츠는 Pixelyaki에 귀속되며, 사전 동의 없는 무단 복제·배포를 금합니다."
      },
      {
        heading: "6. 약관 변경",
        body: "약관은 사전 예고 없이 변경될 수 있습니다. 변경 후 서비스를 계속 이용하면 변경된 약관에 동의한 것으로 간주합니다."
      }
    ]
  },
  en: {
    title: "Terms of Service",
    updated: "Last updated: April 18, 2026",
    back: "Back",
    sections: [
      {
        heading: "1. Service Description",
        body: "Pixelyaki is a free web service that converts text into QR codes. No account or sign-up is required."
      },
      {
        heading: "2. Permitted Use",
        body: "You may use this service for lawful purposes only. The following are prohibited:\n• Generating QR codes containing illegal content or content that infringes on others' rights\n• Generating QR codes for malicious purposes (phishing, malware distribution, etc.)\n• Using the service to cause harm to third parties"
      },
      {
        heading: "3. Service Changes and Availability",
        body: "We may modify or discontinue the service at any time without prior notice and are not liable for any resulting damages."
      },
      {
        heading: "4. Disclaimer",
        body: "The service is provided 'as is' without any warranty of:\n• Accuracy, reliability, or continuous availability\n• Fitness for a particular purpose\n\nWe are not liable for any direct or indirect damages resulting from use of the service."
      },
      {
        heading: "5. Intellectual Property",
        body: "'QR Code' is a trademark of DENSO WAVE INCORPORATED.\n\nThe design, source code, logo, and all other content of Pixelyaki are the property of Pixelyaki and may not be reproduced or distributed without prior consent."
      },
      {
        heading: "6. Changes to Terms",
        body: "These terms may be updated without prior notice. Continued use of the service after changes constitutes acceptance of the revised terms."
      }
    ]
  },
  zh: {
    title: "服务条款",
    updated: "最后更新：2026年4月18日",
    back: "返回",
    sections: [
      {
        heading: "1. 服务说明",
        body: "Pixelyaki是一项免费的网页服务，可将文本转换为二维码，无需注册账号即可使用。"
      },
      {
        heading: "2. 使用条件",
        body: "您只能将本服务用于合法目的。以下行为被明确禁止：\n• 生成包含违法内容或侵犯他人权益的二维码\n• 生成用于恶意目的（钓鱼、传播恶意软件等）的二维码\n• 利用本服务对第三方造成损害"
      },
      {
        heading: "3. 服务变更与中断",
        body: "我们可能随时在不另行通知的情况下修改或中断服务，对由此产生的损失不承担责任。"
      },
      {
        heading: "4. 免责声明",
        body: "本服务按「现状」提供，不对以下事项作出任何保证：\n• 服务的准确性、可靠性或持续可用性\n• 对特定用途的适用性\n\n我们对因使用本服务而造成的任何直接或间接损失不承担法律责任。"
      },
      {
        heading: "5. 知识产权",
        body: "「QR Code」是DENSO WAVE INCORPORATED的注册商标。\n\nPixelyaki的设计、源代码、Logo及所有内容均归Pixelyaki所有，未经事先同意不得擅自复制或传播。"
      },
      {
        heading: "6. 条款变更",
        body: "本条款可能在不另行通知的情况下更新。在变更后继续使用本服务即视为接受更新后的条款。"
      }
    ]
  },
  ja: {
    title: "利用規約",
    updated: "最終更新日：2026年4月18日",
    back: "戻る",
    sections: [
      {
        heading: "1. サービスについて",
        body: "Pixelyakiは、テキストをQRコードに変換する無料のウェブサービスです。アカウント登録不要でご利用いただけます。"
      },
      {
        heading: "2. 利用条件",
        body: "本サービスは合法的な目的にのみご使用ください。以下の行為は禁止されています。\n• 違法なコンテンツや他者の権利を侵害する内容のQRコード生成\n• 悪意ある目的（フィッシング・マルウェア配布等）のQRコード生成\n• 本サービスを通じた第三者への損害行為"
      },
      {
        heading: "3. サービスの変更・中断",
        body: "運営者は事前の予告なくサービスの内容を変更または提供を中断する場合があります。これにより生じた損害について責任を負いません。"
      },
      {
        heading: "4. 免責事項",
        body: "本サービスは現状のまま（'as is'）提供されます。以下についていかなる保証もいたしません。\n• サービスの正確性・信頼性・継続的な可用性\n• 特定の目的への適合性\n\n本サービスの利用により生じた直接的・間接的な損害について、運営者は法的責任を負いません。"
      },
      {
        heading: "5. 知的財産権",
        body: "「QRコード」は株式会社デンソーウェーブの登録商標です。\n\nPixelyakiのデザイン・ソースコード・ロゴ等のコンテンツはPixelyakiに帰属し、事前の同意なく無断複製・配布することを禁じます。"
      },
      {
        heading: "6. 規約の変更",
        body: "本規約は事前予告なく変更される場合があります。変更後に本サービスを継続してご利用いただいた場合、変更後の規約に同意したものとみなします。"
      }
    ]
  },
  es: {
    title: "Términos de Servicio",
    updated: "Última actualización: 18 de abril de 2026",
    back: "Volver",
    sections: [
      {
        heading: "1. Descripción del servicio",
        body: "Pixelyaki es un servicio web gratuito que convierte texto en códigos QR. No se requiere registro ni cuenta."
      },
      {
        heading: "2. Uso permitido",
        body: "Solo puedes usar este servicio para fines lícitos. Está prohibido:\n• Generar códigos QR con contenido ilegal o que infrinja los derechos de terceros\n• Generar códigos QR con fines maliciosos (phishing, distribución de malware, etc.)\n• Usar el servicio para causar daño a terceros"
      },
      {
        heading: "3. Cambios y disponibilidad del servicio",
        body: "Podemos modificar o interrumpir el servicio en cualquier momento sin previo aviso y no somos responsables de los daños resultantes."
      },
      {
        heading: "4. Exención de responsabilidad",
        body: "El servicio se proporciona 'tal cual', sin garantía de:\n• Exactitud, fiabilidad o disponibilidad continua\n• Idoneidad para un propósito particular\n\nNo somos responsables de ningún daño directo o indirecto derivado del uso del servicio."
      },
      {
        heading: "5. Propiedad intelectual",
        body: "'QR Code' es una marca registrada de DENSO WAVE INCORPORATED.\n\nEl diseño, código fuente, logo y todo el contenido de Pixelyaki son propiedad de Pixelyaki y no pueden reproducirse ni distribuirse sin consentimiento previo."
      },
      {
        heading: "6. Cambios en los términos",
        body: "Estos términos pueden actualizarse sin previo aviso. El uso continuado del servicio tras los cambios implica la aceptación de los términos revisados."
      }
    ]
  },
  fr: {
    title: "Conditions d'Utilisation",
    updated: "Dernière mise à jour : 18 avril 2026",
    back: "Retour",
    sections: [
      {
        heading: "1. Description du service",
        body: "Pixelyaki est un service web gratuit qui convertit du texte en codes QR. Aucun compte ni inscription n'est requis."
      },
      {
        heading: "2. Utilisation autorisée",
        body: "Vous ne pouvez utiliser ce service qu'à des fins légales. Les éléments suivants sont interdits :\n• Générer des codes QR contenant du contenu illégal ou portant atteinte aux droits de tiers\n• Générer des codes QR à des fins malveillantes (hameçonnage, distribution de logiciels malveillants, etc.)\n• Utiliser le service pour causer un préjudice à des tiers"
      },
      {
        heading: "3. Modifications et disponibilité du service",
        body: "Nous pouvons modifier ou interrompre le service à tout moment sans préavis et ne sommes pas responsables des dommages qui en résultent."
      },
      {
        heading: "4. Clause de non-responsabilité",
        body: "Le service est fourni « tel quel », sans garantie de :\n• Exactitude, fiabilité ou disponibilité continue\n• Adéquation à un usage particulier\n\nNous ne sommes pas responsables des dommages directs ou indirects résultant de l'utilisation du service."
      },
      {
        heading: "5. Propriété intellectuelle",
        body: "« QR Code » est une marque déposée de DENSO WAVE INCORPORATED.\n\nLe design, le code source, le logo et tout le contenu de Pixelyaki sont la propriété de Pixelyaki et ne peuvent être reproduits ou distribués sans consentement préalable."
      },
      {
        heading: "6. Modifications des conditions",
        body: "Ces conditions peuvent être mises à jour sans préavis. L'utilisation continue du service après les modifications vaut acceptation des conditions révisées."
      }
    ]
  },
  de: {
    title: "Nutzungsbedingungen",
    updated: "Letzte Aktualisierung: 18. April 2026",
    back: "Zurück",
    sections: [
      {
        heading: "1. Dienstbeschreibung",
        body: "Pixelyaki ist ein kostenloser Webdienst, der Text in QR-Codes umwandelt. Eine Kontoregistrierung ist nicht erforderlich."
      },
      {
        heading: "2. Erlaubte Nutzung",
        body: "Sie dürfen diesen Dienst nur für rechtmäßige Zwecke verwenden. Folgendes ist verboten:\n• Erstellen von QR-Codes mit illegalen Inhalten oder Inhalten, die Rechte Dritter verletzen\n• Erstellen von QR-Codes für böswillige Zwecke (Phishing, Verbreitung von Malware usw.)\n• Nutzung des Dienstes zur Schädigung Dritter"
      },
      {
        heading: "3. Dienständerungen und -verfügbarkeit",
        body: "Wir können den Dienst jederzeit ohne vorherige Ankündigung ändern oder einstellen und haften nicht für daraus resultierende Schäden."
      },
      {
        heading: "4. Haftungsausschluss",
        body: "Der Dienst wird 'wie besehen' bereitgestellt, ohne Gewährleistung für:\n• Genauigkeit, Zuverlässigkeit oder kontinuierliche Verfügbarkeit\n• Eignung für einen bestimmten Zweck\n\nWir haften nicht für direkte oder indirekte Schäden, die durch die Nutzung des Dienstes entstehen."
      },
      {
        heading: "5. Geistiges Eigentum",
        body: "'QR Code' ist eine eingetragene Marke von DENSO WAVE INCORPORATED.\n\nDesign, Quellcode, Logo und alle Inhalte von Pixelyaki sind Eigentum von Pixelyaki und dürfen ohne vorherige Zustimmung nicht vervielfältigt oder verbreitet werden."
      },
      {
        heading: "6. Änderungen der Bedingungen",
        body: "Diese Bedingungen können ohne vorherige Ankündigung aktualisiert werden. Die weitere Nutzung des Dienstes nach Änderungen gilt als Zustimmung zu den überarbeiteten Bedingungen."
      }
    ]
  },
  ru: {
    title: "Условия использования",
    updated: "Последнее обновление: 18 апреля 2026 г.",
    back: "Назад",
    sections: [
      { heading: "1. Описание сервиса", body: "Pixelyaki — бесплатный веб-сервис для генерации QR-кодов. Регистрация не требуется." },
      { heading: "2. Допустимое использование", body: "Используйте сервис только в законных целях. Запрещено:\n• Генерация QR-кодов с незаконным контентом\n• Генерация QR-кодов в злоумышленных целях (фишинг, распространение вредоносного ПО и т.д.)\n• Причинение вреда третьим лицам через сервис" },
      { heading: "3. Изменения и доступность", body: "Мы можем изменить или прекратить работу сервиса без уведомления и не несём ответственности за последствия." },
      { heading: "4. Отказ от ответственности", body: "Сервис предоставляется «как есть», без гарантий точности, надёжности или пригодности для конкретных целей. Мы не несём ответственности за прямой или косвенный ущерб." },
      { heading: "5. Интеллектуальная собственность", body: "«QR Code» является товарным знаком DENSO WAVE INCORPORATED.\n\nДизайн, исходный код и все материалы Pixelyaki принадлежат Pixelyaki." },
      { heading: "6. Изменения условий", body: "Условия могут обновляться без уведомления. Продолжение использования сервиса означает согласие с обновлёнными условиями." }
    ]
  },
  ar: {
    title: "شروط الخدمة",
    updated: "آخر تحديث: 18 أبريل 2026",
    back: "رجوع",
    sections: [
      { heading: "1. وصف الخدمة", body: "Pixelyaki خدمة ويب مجانية لتحويل النص إلى رموز QR. لا يلزم إنشاء حساب." },
      { heading: "2. الاستخدام المسموح", body: "يُسمح باستخدام الخدمة للأغراض المشروعة فقط. المحظورات:\n• إنشاء رموز QR تحتوي على محتوى غير قانوني\n• إنشاء رموز QR لأغراض خبيثة\n• استخدام الخدمة للإضرار بالآخرين" },
      { heading: "3. تغييرات الخدمة", body: "يمكننا تعديل الخدمة أو إيقافها في أي وقت دون إشعار مسبق." },
      { heading: "4. إخلاء المسؤولية", body: "تُقدَّم الخدمة كما هي دون أي ضمانات. لسنا مسؤولين عن أي أضرار مباشرة أو غير مباشرة." },
      { heading: "5. الملكية الفكرية", body: "QR Code علامة تجارية مسجلة لـ DENSO WAVE INCORPORATED.\n\nجميع محتويات Pixelyaki ملك لـ Pixelyaki." },
      { heading: "6. تغييرات الشروط", body: "قد تُحدَّث هذه الشروط دون إشعار. الاستمرار في استخدام الخدمة يعني قبول الشروط المحدَّثة." }
    ]
  },
  hi: {
    title: "सेवा की शर्तें",
    updated: "अंतिम अपडेट: 18 अप्रैल 2026",
    back: "वापस",
    sections: [
      { heading: "1. सेवा विवरण", body: "Pixelyaki एक मुफ्त वेब सेवा है जो टेक्स्ट को QR कोड में बदलती है। कोई अकाउंट आवश्यक नहीं।" },
      { heading: "2. अनुमत उपयोग", body: "इस सेवा का उपयोग केवल कानूनी उद्देश्यों के लिए करें। निम्नलिखित निषिद्ध हैं:\n• अवैध सामग्री वाले QR कोड बनाना\n• दुर्भावनापूर्ण उद्देश्यों के लिए QR कोड बनाना\n• तृतीय पक्षों को नुकसान पहुंचाना" },
      { heading: "3. सेवा परिवर्तन", body: "हम बिना पूर्व सूचना के सेवा बदल या बंद कर सकते हैं।" },
      { heading: "4. अस्वीकरण", body: "सेवा 'जैसी है' प्रदान की जाती है, बिना किसी वारंटी के। हम किसी भी नुकसान के लिए जिम्मेदार नहीं हैं।" },
      { heading: "5. बौद्धिक संपदा", body: "QR Code, DENSO WAVE INCORPORATED का ट्रेडमार्क है।\n\nPixelyaki की सभी सामग्री Pixelyaki की संपत्ति है।" },
      { heading: "6. शर्तों में बदलाव", body: "शर्तें बिना सूचना के बदल सकती हैं। सेवा जारी रखने का अर्थ है नई शर्तों से सहमति।" }
    ]
  },
  id: {
    title: "Ketentuan Layanan",
    updated: "Terakhir diperbarui: 18 April 2026",
    back: "Kembali",
    sections: [
      { heading: "1. Deskripsi Layanan", body: "Pixelyaki adalah layanan web gratis yang mengonversi teks menjadi kode QR. Tidak diperlukan akun atau pendaftaran." },
      { heading: "2. Penggunaan yang Diizinkan", body: "Layanan ini hanya boleh digunakan untuk tujuan yang sah. Dilarang:\n• Membuat kode QR berisi konten ilegal\n• Membuat kode QR untuk tujuan jahat\n• Menggunakan layanan untuk merugikan pihak ketiga" },
      { heading: "3. Perubahan Layanan", body: "Kami dapat mengubah atau menghentikan layanan kapan saja tanpa pemberitahuan." },
      { heading: "4. Penafian", body: "Layanan disediakan 'apa adanya' tanpa garansi apapun. Kami tidak bertanggung jawab atas kerusakan apapun." },
      { heading: "5. Kekayaan Intelektual", body: "QR Code adalah merek dagang dari DENSO WAVE INCORPORATED.\n\nSeluruh konten Pixelyaki adalah milik Pixelyaki." },
      { heading: "6. Perubahan Ketentuan", body: "Ketentuan ini dapat diperbarui tanpa pemberitahuan. Penggunaan layanan yang berkelanjutan berarti penerimaan ketentuan yang direvisi." }
    ]
  },
  it: {
    title: "Termini di Servizio",
    updated: "Ultimo aggiornamento: 18 aprile 2026",
    back: "Indietro",
    sections: [
      { heading: "1. Descrizione del servizio", body: "Pixelyaki è un servizio web gratuito che converte testo in codici QR. Non è richiesto alcun account." },
      { heading: "2. Uso consentito", body: "Puoi utilizzare questo servizio solo per scopi leciti. È vietato:\n• Generare codici QR con contenuti illegali\n• Generare codici QR per scopi malevoli\n• Utilizzare il servizio per causare danni a terzi" },
      { heading: "3. Modifiche al servizio", body: "Possiamo modificare o interrompere il servizio in qualsiasi momento senza preavviso." },
      { heading: "4. Esclusione di responsabilità", body: "Il servizio è fornito 'così com'è', senza garanzie. Non siamo responsabili per danni diretti o indiretti." },
      { heading: "5. Proprietà intellettuale", body: "QR Code è un marchio registrato di DENSO WAVE INCORPORATED.\n\nTutti i contenuti di Pixelyaki sono di proprietà di Pixelyaki." },
      { heading: "6. Modifiche ai termini", body: "Questi termini possono essere aggiornati senza preavviso. Il continuo utilizzo del servizio implica l'accettazione dei termini aggiornati." }
    ]
  },
  pt: {
    title: "Termos de Serviço",
    updated: "Última atualização: 18 de abril de 2026",
    back: "Voltar",
    sections: [
      { heading: "1. Descrição do serviço", body: "Pixelyaki é um serviço web gratuito que converte texto em QR codes. Não é necessário cadastro." },
      { heading: "2. Uso permitido", body: "Você pode usar este serviço apenas para fins lícitos. É proibido:\n• Gerar QR codes com conteúdo ilegal\n• Gerar QR codes para fins maliciosos\n• Usar o serviço para causar danos a terceiros" },
      { heading: "3. Alterações no serviço", body: "Podemos modificar ou encerrar o serviço a qualquer momento sem aviso prévio." },
      { heading: "4. Isenção de responsabilidade", body: "O serviço é fornecido 'como está', sem garantias. Não somos responsáveis por danos diretos ou indiretos." },
      { heading: "5. Propriedade intelectual", body: "QR Code é uma marca registrada da DENSO WAVE INCORPORATED.\n\nTodo o conteúdo do Pixelyaki é propriedade do Pixelyaki." },
      { heading: "6. Alterações nos termos", body: "Estes termos podem ser atualizados sem aviso prévio. O uso continuado do serviço implica aceitação dos termos revisados." }
    ]
  },
  th: {
    title: "เงื่อนไขการใช้บริการ",
    updated: "อัปเดตล่าสุด: 20 เมษายน 2026",
    back: "กลับ",
    sections: [
      { heading: "1. คำอธิบายบริการ", body: "Pixelyaki เป็นบริการเว็บฟรีที่แปลงข้อความเป็น QR Code ไม่จำเป็นต้องมีบัญชีหรือสมัครสมาชิก" },
      { heading: "2. การใช้งานที่อนุญาต", body: "คุณสามารถใช้บริการนี้เพื่อวัตถุประสงค์ที่ถูกกฎหมายเท่านั้น สิ่งต่อไปนี้เป็นสิ่งต้องห้าม:\n• การสร้าง QR Code ที่มีเนื้อหาผิดกฎหมาย\n• การสร้าง QR Code เพื่อวัตถุประสงค์ที่เป็นอันตราย\n• การใช้บริการเพื่อสร้างความเสียหายแก่บุคคลที่สาม" },
      { heading: "3. การเปลี่ยนแปลงบริการ", body: "เราอาจแก้ไขหรือยุติบริการได้ตลอดเวลาโดยไม่แจ้งล่วงหน้า" },
      { heading: "4. การปฏิเสธความรับผิดชอบ", body: "บริการนี้จัดให้ 'ตามที่เป็น' โดยไม่มีการรับประกันใดๆ เราไม่รับผิดชอบต่อความเสียหายใดๆ" },
      { heading: "5. ทรัพย์สินทางปัญญา", body: "QR Code เป็นเครื่องหมายการค้าของ DENSO WAVE INCORPORATED\n\nเนื้อหาทั้งหมดของ Pixelyaki เป็นทรัพย์สินของ Pixelyaki" },
      { heading: "6. การเปลี่ยนแปลงเงื่อนไข", body: "เงื่อนไขเหล่านี้อาจได้รับการอัปเดตโดยไม่แจ้งล่วงหน้า การใช้บริการต่อเนื่องถือเป็นการยอมรับเงื่อนไขที่แก้ไขแล้ว" }
    ]
  }
};

type Props = { params: Promise<{ locale: string }> };

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const copy = content[locale] || content.en!;
  const headerLabels = getCopy(locale).header;

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 md:py-12">
      <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <Header locale={locale} labels={headerLabels} />
        <div className="border-t border-neutral-200 px-6 py-8 dark:border-neutral-800 md:px-10 md:py-10">
          <Link
            href={`/${locale}`}
            className="mb-6 inline-flex items-center gap-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            <ArrowLeft width={14} height={14} aria-hidden />
            {copy.back}
          </Link>
          <h1 className="mb-1 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
            {copy.title}
          </h1>
          <p className="mb-8 text-xs text-neutral-400 dark:text-neutral-500">{copy.updated}</p>
          <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
            {copy.sections.map((section, i) => (
              <section key={i} className="py-5 first:pt-0">
                <h2 className="mb-2 text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                  {section.heading}
                </h2>
                <p className="whitespace-pre-line text-sm text-neutral-600 dark:text-neutral-400">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
