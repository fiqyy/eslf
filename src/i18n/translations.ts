export type Language = 'en' | 'ar';

export interface FieldTranslation {
    title: string;
    desc: string;
    details: string;
}

export interface Translation {
    meta: { title: string; description: string };
    langToggle: { label: string; aria: string };
    nav: {
        about: string;
        fields: string;
        consult: string;
        tagline: string;
        home: string;
        openMenu: string;
        closeMenu: string;
    };
    hero: {
        badge: string;
        titleLine1: string;
        titleHighlight: string;
        subtitle: string;
        ctaMain: string;
        ctaSecondary: string;
        trustYears: string;
        trustAttorneys: string;
        trustDedication: string;
    };
    about: {
        eyebrow: string;
        titlePrefix: string;
        titleHighlight: string;
        subtitle: string;
        p1: string;
        p2: string;
        statYears: string;
        statAttorneys: string;
        statTopValue: string;
        statTop: string;
        statFocus: string;
        logoAlt: string;
        badge: string;
    };
    fields: {
        eyebrow: string;
        titlePrefix: string;
        titleHighlight: string;
        subtitle: string;
        explore: string;
        consultCta: string;
        close: string;
        closeAria: string;
        items: FieldTranslation[];
    };
    contact: {
        eyebrow: string;
        titlePrefix: string;
        titleHighlight: string;
        subtitle: string;
        officeTitle: string;
        officeDesc: string;
        mapAria: string;
        navigate: string;
        firmFull: string;
        addressLine: string;
        directTitle: string;
        directDesc: string;
        hotline: string;
        callNow: string;
        callAria: string;
        inquiries: string;
        sendEmail: string;
        emailAria: string;
        networks: string;
    };
    footer: {
        desc: string;
        hq: string;
        navigation: string;
        home: string;
        about: string;
        fields: string;
        contact: string;
        directContact: string;
        location: string;
        rights: string;
        backToTop: string;
        backToTopAria: string;
        logoAlt: string;
    };
}

export const translations: Record<Language, Translation> = {
    en: {
        meta: {
            title: 'Emad Soliman Law Firm | ESLF',
            description: 'Emad Soliman Law Firm (ESLF) - Top tier legal consultancy, corporate law, litigation, and arbitration services in Cairo, Egypt.',
        },
        langToggle: { label: 'عربي', aria: 'Switch to Arabic' },
        nav: {
            about: 'About The Firm',
            fields: 'Practice Areas',
            consult: 'Consult ESLF',
            tagline: 'Excellence in Legal Advocacy',
            home: 'ESLF Home',
            openMenu: 'Open navigation menu',
            closeMenu: 'Close navigation menu',
        },
        hero: {
            badge: 'Cairo • Est. 1987 • Top Tier Legal Firm',
            titleLine1: 'Excellence in',
            titleHighlight: 'Legal Advocacy',
            subtitle: 'Emad Soliman Law Firm (ESLF) is one of the leading law firms in Egypt. A growing law firm based in Cairo, ESLF was established in 1987 by Mr. Emad Soliman who decided to cease his consultancy services in Egypt Air as Government Public Sector Counsellor.',
            ctaMain: 'Get Legal Counsel',
            ctaSecondary: 'Discover ESLF',
            trustYears: 'Years of Trust',
            trustAttorneys: 'Senior Attorneys',
            trustDedication: 'Client Dedication',
        },
        about: {
            eyebrow: 'Established Heritage',
            titlePrefix: 'About',
            titleHighlight: 'The Firm',
            subtitle: 'Embracing Change with an Unwavering Vision',
            p1: 'ESLF has achieved a record of success and growth that today makes it one of the leading firms in Egypt. With over 32 attorneys and consultants, the firm provides quality legal and consultancy services to a broad base of multinational, Egyptian and regional clients through its office in Egypt. The firm provides legal advice and advanced services to many of the most dynamic, local and multinational, corporations and has the knowledge and resources to deliver high quality legal services required.',
            p2: 'Founded in 1987 by Mr. Emad Soliman following his distinguished tenure as Government Public Sector Counsellor for EgyptAir, ESLF operates at the forefront of corporate law, commercial litigation, and high-stakes arbitration.',
            statYears: 'Years of Excellence',
            statAttorneys: 'Attorneys & Experts',
            statTopValue: 'Top',
            statTop: 'Tier Directory Rank',
            statFocus: 'Client Focus',
            logoAlt: 'Emad Soliman Law Firm Emblem',
            badge: 'Cairo Headquarters • Est. 1987',
        },
        fields: {
            eyebrow: 'Practice Expertise',
            titlePrefix: 'Our',
            titleHighlight: 'Practice Areas',
            subtitle: 'Delivering specialized legal solutions and tactical counsel across core industry sectors.',
            explore: 'Explore Details',
            consultCta: 'Consult on this Practice Area',
            close: 'Close',
            closeAria: 'Close modal',
            items: [
                {
                    title: 'Corporate & Commercial',
                    desc: 'Comprehensive legal support for enterprises, including M&A, restructuring, and governance.',
                    details: 'We advise on complex domestic and cross-border mergers and acquisitions, equity offerings, joint ventures, and restructuring transactions. Our attorneys possess extensive depth in company incorporation, hosting general assemblies and board meetings, formulating internal bylaws, and navigating regulatory compliance across the Egyptian and MENA markets.',
                },
                {
                    title: 'Litigation & Dispute Strategy',
                    desc: 'Robust representation in commercial, civil, administrative, and appellate proceedings.',
                    details: 'The ESLF litigation team combines market-leading local court advocacy with a strategic approach to client business problems. We specialize in managing complex multi-party claims, shareholder disputes, asset recovery, and commercial litigation, working closely across practice areas to mitigate regulatory and judicial risks.',
                },
                {
                    title: 'Arbitration & Mediation (ADR)',
                    desc: 'Expert handling of institutional arbitration (CRCICA, ICC) and private mediation.',
                    details: 'We guide clients through alternative dispute resolution mechanisms, starting with reconciliation and mediation, through to institutional and ad hoc arbitration. Our lawyers regularly appear before leading arbitration forums such as the Cairo Regional Centre for International Commercial Arbitration (CRCICA) and the International Chamber of Commerce (ICC).',
                },
                {
                    title: 'Intellectual Property Rights',
                    desc: 'Protection for trademarks, patents, copyrights, trade secrets, and licensing agreements.',
                    details: 'Our IP practice provides comprehensive protection, portfolio management, and enforcement for critical intellectual property assets. We handle trademark registration, patent litigation, anti-counterfeiting enforcement programs, technology transfer agreements, and complex licensing across diverse industrial and digital sectors.',
                },
                {
                    title: 'Strategic Legal Consultancy',
                    desc: 'Tailored strategic counsel addressing regulatory landscapes, compliance, and risk management.',
                    details: "ESLF provides high-level legal consultancy services to multinational corporations, governmental bodies, and regional institutions. We deliver proactive regulatory roadmaps, legislative analyses, foreign investment advisory, and compliance frameworks customized to each client's strategic objectives.",
                },
                {
                    title: 'Contract Management & Drafting',
                    desc: 'Meticulous drafting, review, negotiation, and lifecycle management of commercial agreements.',
                    details: "Our contract attorneys provide rigorous contract lifecycle drafting and negotiation. From initial risk assessment and drafting tailored contractual covenants to execution and post-closing compliance, we safeguard our clients' rights and commercial value across all transactions.",
                },
                {
                    title: 'Real Estate & Infrastructure',
                    desc: 'Navigating major property transactions, development projects, zoning, and licensing.',
                    details: 'Acting for property developers, major investment funds, and industrial leaders, we advise on the entire real estate lifecycle—from site acquisition, zoning approvals, and governmental licensing to construction contracting, commercial leasing, and asset disposition.',
                },
            ],
        },
        contact: {
            eyebrow: 'Direct Engagement',
            titlePrefix: 'Get In',
            titleHighlight: 'Touch',
            subtitle: 'Reach out directly for top-tier legal consultation, strategic advocacy, and corporate counsel.',
            officeTitle: 'Cairo Office',
            officeDesc: 'Visit our office in Nasr City, Cairo.',
            mapAria: 'Open directions in Google Maps',
            navigate: 'Navigate via Maps',
            firmFull: 'Emad Soliman Law Firm (ESLF)',
            addressLine: '38HQ+RJW Nasr City, Cairo Governorate, Egypt',
            directTitle: 'Direct Communications',
            directDesc: 'Our senior partners and legal team are at your service.',
            hotline: 'Direct Hotline',
            callNow: 'Call Now',
            callAria: 'Call ESLF directly',
            inquiries: 'Official Inquiries',
            sendEmail: 'Send Email',
            emailAria: 'Email ESLF',
            networks: 'Professional Networks',
        },
        footer: {
            desc: 'Embracing Change with a Firm Vision. Comprehensive corporate counsel, high-stakes litigation, and arbitration tailored to protect and advance your strategic interests.',
            hq: '📍 Cairo, Egypt • Est. 1987',
            navigation: 'Navigation',
            home: 'Home',
            about: 'About Firm',
            fields: 'Practice Areas',
            contact: 'Contact Us',
            directContact: 'Direct Contact',
            location: 'Nasr City, Cairo',
            rights: 'Emad Soliman Law Firm (ESLF). All rights reserved.',
            backToTop: 'Back to Top',
            backToTopAria: 'Back to top of page',
            logoAlt: 'Emad Soliman Law Firm',
        },
    },
    ar: {
        meta: {
            title: 'مكتب عماد سليمان للمحاماة | ESLF',
            description: 'مكتب عماد سليمان للمحاماة (ESLF) - استشارات قانونية متميزة، وقانون الشركات، والتقاضي، والتحكيم في القاهرة، مصر.',
        },
        langToggle: { label: 'EN', aria: 'التبديل إلى الإنجليزية' },
        nav: {
            about: 'عن المكتب',
            fields: 'مجالات الممارسة',
            consult: 'استشر ESLF',
            tagline: 'التميز في المحاماة',
            home: 'الصفحة الرئيسية',
            openMenu: 'فتح قائمة التنقل',
            closeMenu: 'إغلاق قائمة التنقل',
        },
        hero: {
            badge: 'القاهرة • تأسس عام 1987 • مكتب محاماة رائد',
            titleLine1: 'التميز في',
            titleHighlight: 'المحاماة والدفاع القانوني',
            subtitle: 'مكتب عماد سليمان للمحاماة (ESLF) هو أحد مكاتب المحاماة الرائدة في مصر. مكتب متنامٍ مقره القاهرة، أسسه الأستاذ عماد سليمان عام 1987 بعد أن قرر إنهاء خدماته الاستشارية في مصر للطيران بصفته مستشارًا حكوميًا لقطاع الأعمال العام.',
            ctaMain: 'احصل على استشارة قانونية',
            ctaSecondary: 'اكتشف ESLF',
            trustYears: 'عامًا من الثقة',
            trustAttorneys: 'محاميًا خبيرًا',
            trustDedication: 'تفانٍ في خدمة العملاء',
        },
        about: {
            eyebrow: 'إرث راسخ',
            titlePrefix: 'عن',
            titleHighlight: 'المكتب',
            subtitle: 'نواكب التغيير برؤية ثابتة',
            p1: 'حقق مكتب ESLF سجلًا من النجاح والنمو جعله اليوم أحد المكاتب الرائدة في مصر. ويضم المكتب أكثر من 32 محاميًا ومستشارًا، ويقدم خدمات قانونية واستشارية عالية الجودة لقاعدة واسعة من العملاء متعددي الجنسيات والمصريين والإقليميين من خلال مقره في مصر. كما يقدم المكتب المشورة القانونية والخدمات المتقدمة للعديد من أكثر الشركات المحلية والدولية ديناميكية، ويمتلك المعرفة والموارد اللازمة لتقديم خدمات قانونية بأعلى مستويات الجودة.',
            p2: 'أسس الأستاذ عماد سليمان المكتب عام 1987 عقب مسيرته المتميزة مستشارًا حكوميًا لقطاع الأعمال العام في مصر للطيران، ويعمل ESLF في طليعة مجالات قانون الشركات والتقاضي التجاري والتحكيم في القضايا الكبرى.',
            statYears: 'عامًا من التميز',
            statAttorneys: 'محاميًا وخبيرًا',
            statTopValue: 'الصدارة',
            statTop: 'في التصنيفات القانونية',
            statFocus: 'تركيز على العميل',
            logoAlt: 'شعار مكتب عماد سليمان للمحاماة',
            badge: 'المقر الرئيسي بالقاهرة • تأسس عام 1987',
        },
        fields: {
            eyebrow: 'خبراتنا القانونية',
            titlePrefix: 'مجالات',
            titleHighlight: 'الممارسة',
            subtitle: 'نقدم حلولًا قانونية متخصصة واستشارات استراتيجية عبر القطاعات الرئيسية.',
            explore: 'استكشف التفاصيل',
            consultCta: 'استشرنا في هذا المجال',
            close: 'إغلاق',
            closeAria: 'إغلاق النافذة',
            items: [
                {
                    title: 'الشركات والقانون التجاري',
                    desc: 'دعم قانوني شامل للمؤسسات، يشمل الاندماج والاستحواذ وإعادة الهيكلة والحوكمة.',
                    details: 'نقدم المشورة في عمليات الاندماج والاستحواذ المحلية والعابرة للحدود، وطرح الأسهم، والمشروعات المشتركة، وعمليات إعادة الهيكلة. ويتمتع محامونا بخبرة واسعة في تأسيس الشركات، وعقد الجمعيات العامة واجتماعات مجالس الإدارة، وصياغة اللوائح الداخلية، والامتثال التنظيمي في السوق المصرية وأسواق الشرق الأوسط وشمال أفريقيا.',
                },
                {
                    title: 'التقاضي واستراتيجية النزاعات',
                    desc: 'تمثيل قوي في الدعاوى التجارية والمدنية والإدارية وأمام محاكم الاستئناف.',
                    details: 'يجمع فريق التقاضي في ESLF بين الترافع المتميز أمام المحاكم المحلية والنهج الاستراتيجي في معالجة مشكلات العملاء التجارية. ونتخصص في إدارة المطالبات المعقدة متعددة الأطراف، ونزاعات المساهمين، واسترداد الأصول، والتقاضي التجاري، مع التنسيق الوثيق بين مجالات الممارسة للحد من المخاطر التنظيمية والقضائية.',
                },
                {
                    title: 'التحكيم والوساطة',
                    desc: 'خبرة في التحكيم المؤسسي (مركز القاهرة الإقليمي، غرفة التجارة الدولية) والوساطة الخاصة.',
                    details: 'نرشد عملاءنا عبر آليات التسوية البديلة للنزاعات، بدءًا من التوفيق والوساطة وصولًا إلى التحكيم المؤسسي والحر. ويمثل محامونا العملاء بانتظام أمام أبرز هيئات التحكيم مثل مركز القاهرة الإقليمي للتحكيم التجاري الدولي وغرفة التجارة الدولية.',
                },
                {
                    title: 'حقوق الملكية الفكرية',
                    desc: 'حماية العلامات التجارية وبراءات الاختراع وحقوق المؤلف والأسرار التجارية واتفاقيات الترخيص.',
                    details: 'توفر ممارستنا في الملكية الفكرية حماية شاملة وإدارة للمحافظ وإنفاذًا للحقوق المتعلقة بأصول الملكية الفكرية الحيوية. ونتولى تسجيل العلامات التجارية، وقضايا براءات الاختراع، وبرامج مكافحة التقليد، واتفاقيات نقل التكنولوجيا، والتراخيص المعقدة في مختلف القطاعات الصناعية والرقمية.',
                },
                {
                    title: 'الاستشارات القانونية الاستراتيجية',
                    desc: 'مشورة استراتيجية مصممة خصيصًا تتناول البيئة التنظيمية والامتثال وإدارة المخاطر.',
                    details: 'يقدم ESLF خدمات استشارية قانونية رفيعة المستوى للشركات متعددة الجنسيات والجهات الحكومية والمؤسسات الإقليمية. ونقدم خرائط طريق تنظيمية استباقية، وتحليلات تشريعية، واستشارات للاستثمار الأجنبي، وأطر امتثال مصممة وفق الأهداف الاستراتيجية لكل عميل.',
                },
                {
                    title: 'إدارة العقود وصياغتها',
                    desc: 'صياغة ومراجعة وتفاوض وإدارة دقيقة لدورة حياة الاتفاقيات التجارية.',
                    details: 'يقدم محامو العقود لدينا صياغة دقيقة وتفاوضًا محكمًا عبر دورة حياة العقد كاملة. فمن تقييم المخاطر الأولي وصياغة البنود التعاقدية المناسبة إلى التنفيذ والامتثال اللاحق للإغلاق، نحمي حقوق عملائنا وقيمتهم التجارية في جميع المعاملات.',
                },
                {
                    title: 'العقارات والبنية التحتية',
                    desc: 'إدارة المعاملات العقارية الكبرى ومشروعات التطوير والتخطيط العمراني والتراخيص.',
                    details: 'نمثل المطورين العقاريين وصناديق الاستثمار الكبرى والشركات الصناعية الرائدة، ونقدم المشورة عبر دورة حياة العقار كاملة، بدءًا من الاستحواذ على الأراضي وموافقات التخطيط والتراخيص الحكومية، مرورًا بعقود المقاولات والتأجير التجاري، وصولًا إلى التصرف في الأصول.',
                },
            ],
        },
        contact: {
            eyebrow: 'تواصل مباشر',
            titlePrefix: 'تواصل',
            titleHighlight: 'معنا',
            subtitle: 'تواصل معنا مباشرة للحصول على استشارات قانونية متميزة ودفاع استراتيجي ومشورة للشركات.',
            officeTitle: 'مكتب القاهرة',
            officeDesc: 'تفضل بزيارة مكتبنا في مدينة نصر، القاهرة.',
            mapAria: 'فتح الاتجاهات في خرائط جوجل',
            navigate: 'الاتجاهات عبر الخرائط',
            firmFull: 'مكتب عماد سليمان للمحاماة (ESLF)',
            addressLine: 'مدينة نصر، محافظة القاهرة، مصر',
            directTitle: 'التواصل المباشر',
            directDesc: 'شركاؤنا وفريقنا القانوني في خدمتكم.',
            hotline: 'الخط المباشر',
            callNow: 'اتصل الآن',
            callAria: 'اتصل بـ ESLF مباشرة',
            inquiries: 'الاستفسارات الرسمية',
            sendEmail: 'أرسل بريدًا',
            emailAria: 'راسل ESLF عبر البريد الإلكتروني',
            networks: 'الشبكات المهنية',
        },
        footer: {
            desc: 'نواكب التغيير برؤية راسخة. استشارات شاملة للشركات، وتقاضٍ في القضايا الكبرى، وتحكيم مصمم لحماية مصالحكم الاستراتيجية وتعزيزها.',
            hq: '📍 القاهرة، مصر • تأسس عام 1987',
            navigation: 'التنقل',
            home: 'الرئيسية',
            about: 'عن المكتب',
            fields: 'مجالات الممارسة',
            contact: 'اتصل بنا',
            directContact: 'التواصل المباشر',
            location: 'مدينة نصر، القاهرة',
            rights: 'مكتب عماد سليمان للمحاماة (ESLF). جميع الحقوق محفوظة.',
            backToTop: 'العودة للأعلى',
            backToTopAria: 'العودة إلى أعلى الصفحة',
            logoAlt: 'مكتب عماد سليمان للمحاماة',
        },
    },
};
