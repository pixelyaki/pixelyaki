import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "iconoir-react";
import { Header } from "@/components/header";
import { getCopy, isLocale, type Locale } from "@/lib/i18n";

type Section = { heading: string; body: string };
type PrivacyContent = { title: string; updated: string; back: string; sections: Section[] };

const content: Record<Locale, PrivacyContent> = {
  ko: {
    title: "개인정보 처리방침",
    updated: "최종 수정일: 2026년 4월 18일",
    back: "홈으로",
    sections: [
      {
        heading: "1. 서비스 개요",
        body: "Pixelyaki(이하 '서비스')는 브라우저에서 QR 코드를 생성하는 도구입니다. 서비스 이용에 회원가입이나 계정 생성이 필요하지 않습니다."
      },
      {
        heading: "2. 수집하는 개인정보",
        body: "QR 코드 생성에 입력된 텍스트, 색상, 로고 파일은 서버에 전송되거나 저장되지 않습니다. 모든 처리는 이용자의 브라우저 내에서만 이루어집니다.\n\n서비스 개선을 위해 Google Analytics 4(GA4)를 통해 다음 정보가 수집될 수 있습니다.\n• 페이지 방문 기록\n• 접속 기기 정보(브라우저, OS)\n• 익명화된 IP 주소"
      },
      {
        heading: "3. 로컬 스토리지",
        body: "다크/라이트 모드는 이용자의 시스템 설정을 자동으로 따릅니다. 서비스가 테마 설정을 별도로 로컬 스토리지에 저장하거나 서버로 전송하지 않습니다."
      },
      {
        heading: "4. 제3자 서비스",
        body: "본 서비스는 Google Analytics 4를 사용합니다. 수집된 데이터는 Google의 서버에 저장되며, Google의 개인정보처리방침이 적용됩니다.\nhttps://policies.google.com/privacy"
      },
      {
        heading: "5. 미성년자 보호",
        body: "본 서비스는 만 14세 미만 아동을 대상으로 하지 않으며, 고의로 아동의 개인정보를 수집하지 않습니다."
      },
      {
        heading: "6. 방침 변경",
        body: "본 방침은 사전 예고 없이 변경될 수 있습니다. 변경 시 이 페이지의 최종 수정일이 업데이트됩니다."
      },
      {
        heading: "7. 개인정보 보호책임자",
        body: "개인정보 관련 문의: pixelyaki@gmail.com"
      }
    ]
  },
  en: {
    title: "Privacy Policy",
    updated: "Last updated: April 18, 2026",
    back: "Back",
    sections: [
      {
        heading: "1. Overview",
        body: "Pixelyaki ('Service') is a browser-based QR code generation tool that requires no account or sign-up."
      },
      {
        heading: "2. Information We Collect",
        body: "The text, colors, and logo files you enter for QR code generation are not transmitted to or stored on any server. All processing occurs entirely within your browser.\n\nTo improve the service, Google Analytics 4 (GA4) may collect:\n• Page visit data\n• Device and browser information\n• Anonymized IP addresses"
      },
      {
        heading: "3. Local Storage",
        body: "Dark/light mode follows your system preference automatically. The service does not store a separate theme preference in local storage or send it to any server."
      },
      {
        heading: "4. Third-Party Services",
        body: "This service uses Google Analytics 4. Data collected is stored on Google's servers and subject to Google's Privacy Policy.\nhttps://policies.google.com/privacy"
      },
      {
        heading: "5. Children's Privacy",
        body: "This service is not directed at children under 14. We do not knowingly collect personal information from minors."
      },
      {
        heading: "6. Changes to This Policy",
        body: "This policy may be updated without prior notice. The revision date at the top of this page will reflect any changes."
      },
      {
        heading: "7. Contact",
        body: "For privacy-related inquiries: pixelyaki@gmail.com"
      }
    ]
  },
  zh: {
    title: "隐私政策",
    updated: "最后更新：2026年4月18日",
    back: "返回",
    sections: [
      {
        heading: "1. 服务概述",
        body: "Pixelyaki（以下简称「服务」）是一款基于浏览器的二维码生成工具，无需注册账号即可使用。"
      },
      {
        heading: "2. 我们收集的信息",
        body: "您输入的文本、颜色及Logo文件不会传输至服务器或被存储。所有处理均在您的浏览器中本地完成。\n\n为改善服务体验，Google Analytics 4（GA4）可能收集以下信息：\n• 页面访问记录\n• 设备与浏览器信息\n• 匿名化的IP地址"
      },
      {
        heading: "3. 本地存储",
        body: "深色/浅色模式会自动跟随您的系统设置。服务不会将主题偏好单独存储在本地，也不会传输到服务器。"
      },
      {
        heading: "4. 第三方服务",
        body: "本服务使用Google Analytics 4。收集的数据存储在Google服务器上，适用Google隐私政策。\nhttps://policies.google.com/privacy"
      },
      {
        heading: "5. 未成年人保护",
        body: "本服务不面向14岁以下未成年人，我们不会故意收集未成年人的个人信息。"
      },
      {
        heading: "6. 政策变更",
        body: "本政策可能在不另行通知的情况下更新，修订日期将在本页顶部标注。"
      },
      {
        heading: "7. 联系方式",
        body: "隐私相关咨询：pixelyaki@gmail.com"
      }
    ]
  },
  ja: {
    title: "プライバシーポリシー",
    updated: "最終更新日：2026年4月18日",
    back: "戻る",
    sections: [
      {
        heading: "1. サービス概要",
        body: "Pixelyaki（以下「本サービス」）は、アカウント登録不要でブラウザ上でQRコードを生成するツールです。"
      },
      {
        heading: "2. 収集する情報",
        body: "QRコード生成に入力されたテキスト・色・ロゴファイルは、サーバーに送信・保存されません。すべての処理はお使いのブラウザ内で完結します。\n\nサービス改善のため、Google Analytics 4（GA4）により次の情報が収集される場合があります：\n• ページ閲覧履歴\n• 端末・ブラウザ情報\n• 匿名化されたIPアドレス"
      },
      {
        heading: "3. ローカルストレージ",
        body: "ダーク/ライトモードはお使いのシステム設定に自動で追従します。本サービスがテーマ設定をローカルストレージに個別保存したり、サーバーへ送信したりすることはありません。"
      },
      {
        heading: "4. 第三者サービス",
        body: "本サービスはGoogle Analytics 4を使用しています。収集されたデータはGoogleのサーバーに保存され、Googleのプライバシーポリシーが適用されます。\nhttps://policies.google.com/privacy"
      },
      {
        heading: "5. 未成年者について",
        body: "本サービスは14歳未満の方を対象としておらず、意図的に未成年者の個人情報を収集することはありません。"
      },
      {
        heading: "6. ポリシーの変更",
        body: "本ポリシーは事前予告なく変更される場合があります。変更はこのページの最終更新日に反映されます。"
      },
      {
        heading: "7. お問い合わせ",
        body: "プライバシーに関するお問い合わせ：pixelyaki@gmail.com"
      }
    ]
  },
  es: {
    title: "Política de Privacidad",
    updated: "Última actualización: 18 de abril de 2026",
    back: "Volver",
    sections: [
      {
        heading: "1. Descripción del servicio",
        body: "Pixelyaki ('Servicio') es una herramienta de generación de códigos QR basada en el navegador que no requiere registro ni cuenta."
      },
      {
        heading: "2. Información que recopilamos",
        body: "El texto, colores y archivos de logo que introduces no se transmiten ni almacenan en ningún servidor. Todo el procesamiento ocurre localmente en tu navegador.\n\nPara mejorar el servicio, Google Analytics 4 (GA4) puede recopilar:\n• Datos de visitas de página\n• Información del dispositivo y navegador\n• Direcciones IP anonimizadas"
      },
      {
        heading: "3. Almacenamiento local",
        body: "El modo oscuro/claro sigue automáticamente la configuración del sistema. El servicio no guarda una preferencia de tema separada en el almacenamiento local ni la envía a servidores."
      },
      {
        heading: "4. Servicios de terceros",
        body: "Este servicio utiliza Google Analytics 4. Los datos recopilados se almacenan en los servidores de Google y están sujetos a la Política de Privacidad de Google.\nhttps://policies.google.com/privacy"
      },
      {
        heading: "5. Privacidad de menores",
        body: "Este servicio no está dirigido a menores de 14 años. No recopilamos intencionalmente información personal de menores."
      },
      {
        heading: "6. Cambios en esta política",
        body: "Esta política puede actualizarse sin previo aviso. La fecha de revisión en la parte superior de esta página reflejará cualquier cambio."
      },
      {
        heading: "7. Contacto",
        body: "Consultas sobre privacidad: pixelyaki@gmail.com"
      }
    ]
  },
  fr: {
    title: "Politique de Confidentialité",
    updated: "Dernière mise à jour : 18 avril 2026",
    back: "Retour",
    sections: [
      {
        heading: "1. Présentation du service",
        body: "Pixelyaki (« Service ») est un outil de génération de QR codes fonctionnant dans le navigateur, sans inscription requise."
      },
      {
        heading: "2. Informations collectées",
        body: "Le texte, les couleurs et les fichiers de logo que vous saisissez ne sont pas transmis ni stockés sur un serveur. Tout le traitement s'effectue localement dans votre navigateur.\n\nPour améliorer le service, Google Analytics 4 (GA4) peut collecter :\n• Données de visite des pages\n• Informations sur l'appareil et le navigateur\n• Adresses IP anonymisées"
      },
      {
        heading: "3. Stockage local",
        body: "Le mode sombre/clair suit automatiquement la configuration de votre système. Le service n'enregistre pas de préférence de thème distincte dans le stockage local et ne l'envoie pas au serveur."
      },
      {
        heading: "4. Services tiers",
        body: "Ce service utilise Google Analytics 4. Les données collectées sont stockées sur les serveurs de Google et soumises à la Politique de Confidentialité de Google.\nhttps://policies.google.com/privacy"
      },
      {
        heading: "5. Vie privée des mineurs",
        body: "Ce service n'est pas destiné aux enfants de moins de 14 ans. Nous ne collectons pas sciemment d'informations personnelles auprès de mineurs."
      },
      {
        heading: "6. Modifications de la politique",
        body: "Cette politique peut être mise à jour sans préavis. La date de révision en haut de cette page sera actualisée en cas de modification."
      },
      {
        heading: "7. Contact",
        body: "Pour toute question relative à la confidentialité : pixelyaki@gmail.com"
      }
    ]
  },
  de: {
    title: "Datenschutzerklärung",
    updated: "Letzte Aktualisierung: 18. April 2026",
    back: "Zurück",
    sections: [
      {
        heading: "1. Dienstbeschreibung",
        body: "Pixelyaki ('Dienst') ist ein browserbasiertes QR-Code-Generierungswerkzeug, das keine Kontoregistrierung erfordert."
      },
      {
        heading: "2. Erhobene Informationen",
        body: "Der von Ihnen eingegebene Text, Farben und Logo-Dateien werden nicht an Server übertragen oder gespeichert. Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser.\n\nZur Verbesserung des Dienstes kann Google Analytics 4 (GA4) folgende Informationen erheben:\n• Seitenbesuchsdaten\n• Geräte- und Browser-Informationen\n• Anonymisierte IP-Adressen"
      },
      {
        heading: "3. Lokaler Speicher",
        body: "Der Dunkel-/Hellmodus folgt automatisch Ihrer Systemeinstellung. Der Dienst speichert keine separate Theme-Präferenz im lokalen Speicher und überträgt sie nicht an einen Server."
      },
      {
        heading: "4. Drittanbieterdienste",
        body: "Dieser Dienst verwendet Google Analytics 4. Die erhobenen Daten werden auf Googles Servern gespeichert und unterliegen der Datenschutzerklärung von Google.\nhttps://policies.google.com/privacy"
      },
      {
        heading: "5. Datenschutz für Minderjährige",
        body: "Dieser Dienst richtet sich nicht an Kinder unter 14 Jahren. Wir erheben wissentlich keine personenbezogenen Daten von Minderjährigen."
      },
      {
        heading: "6. Änderungen dieser Richtlinie",
        body: "Diese Richtlinie kann ohne vorherige Ankündigung aktualisiert werden. Das Revisionsdatum oben auf dieser Seite wird bei Änderungen aktualisiert."
      },
      {
        heading: "7. Kontakt",
        body: "Anfragen zum Datenschutz: pixelyaki@gmail.com"
      }
    ]
  },
  ru: {
    title: "Политика конфиденциальности",
    updated: "Последнее обновление: 18 апреля 2026 г.",
    back: "Назад",
    sections: [
      { heading: "1. Обзор сервиса", body: "Pixelyaki («Сервис») — браузерный инструмент для генерации QR-кодов, не требующий регистрации." },
      { heading: "2. Собираемая информация", body: "Текст, цвета и файлы логотипа не передаются и не хранятся на серверах. Вся обработка выполняется локально.\n\nДля улучшения сервиса Google Analytics 4 (GA4) может собирать:\n• Данные о посещённых страницах\n• Информацию об устройстве и браузере\n• Анонимизированные IP-адреса" },
      { heading: "3. Локальное хранилище", body: "Тёмный/светлый режим следует настройкам системы. Сервис не хранит настройки темы отдельно и не отправляет их на сервер." },
      { heading: "4. Сторонние сервисы", body: "Сервис использует Google Analytics 4. Данные хранятся на серверах Google согласно их политике.\nhttps://policies.google.com/privacy" },
      { heading: "5. Конфиденциальность детей", body: "Сервис не предназначен для детей до 14 лет. Мы не собираем намеренно их персональные данные." },
      { heading: "6. Изменения политики", body: "Политика может обновляться без уведомления. Дата изменения отображается в верхней части страницы." },
      { heading: "7. Контакты", body: "По вопросам конфиденциальности: pixelyaki@gmail.com" }
    ]
  },
  ar: {
    title: "سياسة الخصوصية",
    updated: "آخر تحديث: 18 أبريل 2026",
    back: "رجوع",
    sections: [
      { heading: "1. نظرة عامة", body: "Pixelyaki هي أداة لإنشاء رموز QR تعمل عبر المتصفح ولا تتطلب إنشاء حساب." },
      { heading: "2. المعلومات التي نجمعها", body: "النص والألوان وملفات الشعار لا تُرسل إلى أي خادم ولا تُخزَّن. تتم جميع العمليات محليًا.\n\nقد يجمع Google Analytics 4 (GA4):\n• بيانات زيارات الصفحات\n• معلومات الجهاز والمتصفح\n• عناوين IP مجهولة الهوية" },
      { heading: "3. التخزين المحلي", body: "يتبع وضع الظلام/الفاتح إعدادات نظامك. لا تحتفظ الخدمة بتفضيل سمة منفصل." },
      { heading: "4. خدمات الطرف الثالث", body: "تستخدم هذه الخدمة Google Analytics 4 وتخضع لسياسة الخصوصية الخاصة بها.\nhttps://policies.google.com/privacy" },
      { heading: "5. خصوصية الأطفال", body: "لا تستهدف هذه الخدمة الأطفال دون سن 14 عامًا." },
      { heading: "6. تغييرات هذه السياسة", body: "قد تُحدَّث هذه السياسة دون إشعار مسبق. ستعكس تاريخ المراجعة في أعلى هذه الصفحة." },
      { heading: "7. التواصل", body: "للاستفسارات المتعلقة بالخصوصية: pixelyaki@gmail.com" }
    ]
  },
  hi: {
    title: "गोपनीयता नीति",
    updated: "अंतिम अपडेट: 18 अप्रैल 2026",
    back: "वापस",
    sections: [
      { heading: "1. सेवा अवलोकन", body: "Pixelyaki एक ब्राउज़र-आधारित QR कोड जनरेटर है जिसके लिए कोई अकाउंट या साइन-अप आवश्यक नहीं है।" },
      { heading: "2. एकत्रित जानकारी", body: "QR कोड जनरेशन के लिए दर्ज किया गया टेक्स्ट, रंग और लोगो फ़ाइलें किसी सर्वर पर नहीं भेजी जाती हैं।\n\nGoogle Analytics 4 (GA4) एकत्र कर सकता है:\n• पेज विज़िट डेटा\n• डिवाइस और ब्राउज़र जानकारी\n• अनामीकृत IP पते" },
      { heading: "3. लोकल स्टोरेज", body: "डार्क/लाइट मोड आपकी सिस्टम सेटिंग का अनुसरण करता है। सेवा थीम प्राथमिकता अलग से संग्रहीत नहीं करती।" },
      { heading: "4. तृतीय-पक्ष सेवाएं", body: "यह सेवा Google Analytics 4 का उपयोग करती है। एकत्रित डेटा Google के सर्वर पर संग्रहीत होता है।\nhttps://policies.google.com/privacy" },
      { heading: "5. बच्चों की गोपनीयता", body: "यह सेवा 14 वर्ष से कम उम्र के बच्चों के लिए नहीं है।" },
      { heading: "6. नीति में बदलाव", body: "यह नीति बिना पूर्व सूचना के अपडेट हो सकती है।" },
      { heading: "7. संपर्क", body: "गोपनीयता संबंधी प्रश्नों के लिए: pixelyaki@gmail.com" }
    ]
  },
  id: {
    title: "Kebijakan Privasi",
    updated: "Terakhir diperbarui: 18 April 2026",
    back: "Kembali",
    sections: [
      { heading: "1. Gambaran Layanan", body: "Pixelyaki adalah alat pembuatan QR code berbasis browser yang tidak memerlukan akun atau pendaftaran." },
      { heading: "2. Informasi yang Kami Kumpulkan", body: "Teks, warna, dan file logo tidak dikirim atau disimpan di server. Semua pemrosesan terjadi di browser Anda.\n\nGoogle Analytics 4 (GA4) dapat mengumpulkan:\n• Data kunjungan halaman\n• Informasi perangkat dan browser\n• Alamat IP yang dianonimkan" },
      { heading: "3. Penyimpanan Lokal", body: "Mode gelap/terang mengikuti pengaturan sistem secara otomatis. Layanan tidak menyimpan preferensi tema secara terpisah." },
      { heading: "4. Layanan Pihak Ketiga", body: "Layanan ini menggunakan Google Analytics 4. Data tunduk pada Kebijakan Privasi Google.\nhttps://policies.google.com/privacy" },
      { heading: "5. Privasi Anak", body: "Layanan ini tidak ditujukan untuk anak di bawah 14 tahun." },
      { heading: "6. Perubahan Kebijakan", body: "Kebijakan ini dapat diperbarui tanpa pemberitahuan sebelumnya." },
      { heading: "7. Kontak", body: "Pertanyaan privasi: pixelyaki@gmail.com" }
    ]
  },
  it: {
    title: "Informativa sulla Privacy",
    updated: "Ultimo aggiornamento: 18 aprile 2026",
    back: "Indietro",
    sections: [
      { heading: "1. Panoramica del servizio", body: "Pixelyaki è uno strumento per la generazione di codici QR basato su browser, che non richiede account o registrazione." },
      { heading: "2. Informazioni raccolte", body: "Il testo, i colori e i file logo non vengono trasmessi né archiviati su server. Tutto il trattamento avviene nel browser.\n\nGoogle Analytics 4 (GA4) può raccogliere:\n• Dati di visita delle pagine\n• Informazioni su dispositivo e browser\n• Indirizzi IP anonimizzati" },
      { heading: "3. Archiviazione locale", body: "La modalità scura/chiara segue automaticamente le impostazioni di sistema. Il servizio non memorizza preferenze di tema separatamente." },
      { heading: "4. Servizi di terze parti", body: "Questo servizio utilizza Google Analytics 4. I dati sono soggetti alla Privacy Policy di Google.\nhttps://policies.google.com/privacy" },
      { heading: "5. Privacy dei minori", body: "Questo servizio non è destinato a bambini sotto i 14 anni." },
      { heading: "6. Modifiche alla politica", body: "Questa politica può essere aggiornata senza preavviso." },
      { heading: "7. Contatti", body: "Per domande sulla privacy: pixelyaki@gmail.com" }
    ]
  },
  pt: {
    title: "Política de Privacidade",
    updated: "Última atualização: 18 de abril de 2026",
    back: "Voltar",
    sections: [
      { heading: "1. Visão geral do serviço", body: "Pixelyaki é uma ferramenta de geração de QR codes baseada em navegador, sem necessidade de conta ou cadastro." },
      { heading: "2. Informações coletadas", body: "O texto, as cores e os arquivos de logotipo não são transmitidos nem armazenados em servidores. Todo o processamento ocorre no navegador.\n\nO Google Analytics 4 (GA4) pode coletar:\n• Dados de visitas às páginas\n• Informações sobre dispositivo e navegador\n• Endereços IP anonimizados" },
      { heading: "3. Armazenamento local", body: "O modo escuro/claro segue automaticamente as configurações do sistema. O serviço não armazena preferência de tema separadamente." },
      { heading: "4. Serviços de terceiros", body: "Este serviço usa o Google Analytics 4. Os dados estão sujeitos à Política de Privacidade do Google.\nhttps://policies.google.com/privacy" },
      { heading: "5. Privacidade de menores", body: "Este serviço não é destinado a menores de 14 anos." },
      { heading: "6. Alterações nesta política", body: "Esta política pode ser atualizada sem aviso prévio." },
      { heading: "7. Contato", body: "Para dúvidas sobre privacidade: pixelyaki@gmail.com" }
    ]
  }
};

type Props = { params: Promise<{ locale: string }> };

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const copy = content[locale];
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
