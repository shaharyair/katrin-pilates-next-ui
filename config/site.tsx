import {
  CalendarIcon,
  ClockIcon,
  DumbbellIcon,
  UsersIcon,
} from "@/components/icons";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  hero: {
    title: "פילאטיס שעושה שינוי – בגוף ובנפש",
    subtitle: "התחילי היום את המסע לבריאות, איזון וחוזק פנימי.",
    primaryAction: "תאמי שיעור ניסיון",
    secondaryAction: "צפייה בשיעורים",
  },
  testimonials: {
    title: "מה אומרים עלינו",
    subtitle: "הקשבה, תמיכה ומקצועיות בכל שיעור.",
    items: [
      {
        name: "אורית כהן",
        job: "מנהלת חשבונות",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        text: "השירות שקיבלתי היה מדהים! צוות מקצועי, אדיב ועם תשומת לב לפרטים. תודה רבה!",
      },
      {
        name: "דוד לוי",
        job: "מנהל פרויקטים",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg",
        text: "אני ממליץ בחום על החברה הזו. התהליך היה פשוט ונעים, וקיבלתי בדיוק את מה שחיפשתי.",
      },
      {
        name: "רונית ישראלי",
        job: "מעצבת גרפית",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        text: "צוות יוצא מן הכלל! תמיד זמינים, מקצועיים ואדיבים. חוויה מדהימה.",
      },
      {
        name: "משה פרץ",
        job: "אנליסט פיננסי",
        avatar: "https://randomuser.me/api/portraits/men/4.jpg",
        text: "אין מילים לתאר את השירות האיכותי שקיבלתי. צוות מעולה שעושה הכל כדי לוודא שהלקוח מרוצה.",
      },
      {
        name: "גלית עמר",
        job: "יועצת שיווק",
        avatar: "https://randomuser.me/api/portraits/women/5.jpg",
        text: "תודה על עבודה יוצאת דופן! המקצועיות והשירות ברמה הכי גבוהה שיכולה להיות.",
      },
      {
        name: "אריאל בנימין",
        job: "מתכנת",
        avatar: "https://randomuser.me/api/portraits/men/6.jpg",
        text: "חברה אמינה ומקצועית. השירות היה מעולה והיחס האישי עשה את כל ההבדל.",
      },
    ],
  },
  benefits: {
    title: "למה לבחור בנו ?",
    items: [
      {
        icon: <DumbbellIcon />,
        text: "שירות מקצועי ואמין שמתמקד בצרכים שלכם.",
      },
      {
        icon: <UsersIcon />,
        text: "צוות מנוסה עם מומחיות בתחומים מגוונים.",
      },
      {
        icon: <CalendarIcon />,
        text: "יחס אישי ותשומת לב לכל לקוח.",
      },
      {
        icon: <ClockIcon />,
        text: "תוצאות מוכחות ושביעות רצון גבוהה.",
      },
    ],
  },
  faq: {
    title: "שאלות נפוצות",
    items: [
      {
        question: "האם ניתן לבטל שיעור?",
        answer: "כן, ניתן לבטל שיעור עד 24 שעות לפני השיעור.",
      },
      {
        question: "מה צריך להביא לשיעור?",
        answer: "נדרשים בגדים נוחים ונעליים סגורות.",
      },
      {
        question: "האם ניתן להצטרף לשיעור באמצע?",
        answer: "כן, ניתן להצטרף לשיעור באמצע בתיאום מראש.",
      },
      {
        question: "האם ניתן להגיע לשיעור ללא רישום מראש?",
        answer: "לא, נדרש רישום מראש לכל שיעור.",
      },
    ],
  },
  contact: {
    title: "צרו קשר",
    subtitle: "אנחנו כאן כדי לעזור לכם בכל שאלה.",
  },
  aboutUs: {
    title: "על הסטודיו",
    subtitle: "סטודיו פילאטיס מקצועי ומפנק בלב העיר.",
    text: [
      "עלינו ברוכים הבאים לסטודיו שלנו, המקום שבו תנועה, איזון ושקט נפשי נפגשים!",
      "בסטודיו שלנו לפילאטיס, אנו מאמינים בכוח של תנועה מודעת ליצירת שינוי אמיתי בחיים. הסטודיו הוקם מתוך תשוקה עמוקה לעזור לאנשים לחזק את הגוף, לשפר את הגמישות ולהגיע לחיים בריאים ומאוזנים יותר.",
      "אנחנו מזמינים אתכם להצטרף לקהילה שלנו ולגלות מחדש את הכוח שבכם, באווירה שמזמינה השראה, חום והנאה.",
      "כי אצלנו, זה לא רק פילאטיס – זו דרך חיים.",
    ],
  },
  navItems: [
    {
      label: "בית",
      href: "/",
    },
    {
      label: "על הסטודיו",
      href: "/studio",
    },
    {
      label: "שיעורים",
      href: "/classes",
    },
    {
      label: "מחירים",
      href: "/pricing",
    },
    {
      label: "מתאמנות מספרות",
      href: "/testimonials",
    },
    {
      label: "צרו קשר",
      href: "/contact-us",
    },
    {
      label: "שאלות נפוצות",
      href: "/faqs",
    },
    {
      label: "גלריה",
      href: "/gallery",
    },
  ],
  galleryGridImages: [
    [
      {
        src: "https://randomwordgenerator.com/img/picture-generator/54e3d5434b52a514f1dc8460962e33791c3ad6e04e507441722973d49645c2_640.jpg",
        width: 1,
        height: 1,
      },
      {
        src: "https://randomwordgenerator.com/img/picture-generator/5fe3d7444d52b10ff3d8992cc12c30771037dbf85257714b752d72dd964f_640.jpg",
        width: 3,
        height: 1,
      },
      {
        src: "https://randomwordgenerator.com/img/picture-generator/55e4d5434a54a514f1dc8460962e33791c3ad6e04e5074417d2e72d1974ec1_640.jpg",
        width: 2,
        height: 1,
      },
      {
        src: "https://randomwordgenerator.com/img/picture-generator/55e1dd464857b10ff3d8992cc12c30771037dbf85254784e77267dd3914a_640.jpg",
        width: 1,
        height: 1,
      },
    ],
    [
      {
        src: "https://randomwordgenerator.com/img/picture-generator/54e3d5434b52a514f1dc8460962e33791c3ad6e04e507441722973d49645c2_640.jpg",
        width: 1,
        height: 1,
      },
      {
        src: "https://randomwordgenerator.com/img/picture-generator/5fe3d7444d52b10ff3d8992cc12c30771037dbf85257714b752d72dd964f_640.jpg",
        width: 3,
        height: 1,
      },
      {
        src: "https://randomwordgenerator.com/img/picture-generator/55e4d5434a54a514f1dc8460962e33791c3ad6e04e5074417d2e72d1974ec1_640.jpg",
        width: 2,
        height: 1,
      },
      {
        src: "https://randomwordgenerator.com/img/picture-generator/55e1dd464857b10ff3d8992cc12c30771037dbf85254784e77267dd3914a_640.jpg",
        width: 1,
        height: 1,
      },
    ],
    [
      {
        src: "https://randomwordgenerator.com/img/picture-generator/54e3d5434b52a514f1dc8460962e33791c3ad6e04e507441722973d49645c2_640.jpg",
        width: 1,
        height: 1,
      },
      {
        src: "https://randomwordgenerator.com/img/picture-generator/5fe3d7444d52b10ff3d8992cc12c30771037dbf85257714b752d72dd964f_640.jpg",
        width: 3,
        height: 1,
      },
      {
        src: "https://randomwordgenerator.com/img/picture-generator/55e4d5434a54a514f1dc8460962e33791c3ad6e04e5074417d2e72d1974ec1_640.jpg",
        width: 2,
        height: 1,
      },
      {
        src: "https://randomwordgenerator.com/img/picture-generator/55e1dd464857b10ff3d8992cc12c30771037dbf85254784e77267dd3914a_640.jpg",
        width: 1,
        height: 1,
      },
    ],
    [
      {
        src: "https://randomwordgenerator.com/img/picture-generator/54e3d5434b52a514f1dc8460962e33791c3ad6e04e507441722973d49645c2_640.jpg",
        width: 1,
        height: 1,
      },
      {
        src: "https://randomwordgenerator.com/img/picture-generator/5fe3d7444d52b10ff3d8992cc12c30771037dbf85257714b752d72dd964f_640.jpg",
        width: 3,
        height: 1,
      },
      {
        src: "https://randomwordgenerator.com/img/picture-generator/55e4d5434a54a514f1dc8460962e33791c3ad6e04e5074417d2e72d1974ec1_640.jpg",
        width: 2,
        height: 1,
      },
      {
        src: "https://randomwordgenerator.com/img/picture-generator/55e1dd464857b10ff3d8992cc12c30771037dbf85254784e77267dd3914a_640.jpg",
        width: 1,
        height: 1,
      },
    ],
  ],
  links: {
    facebook: "https://www.facebook.com/katrin.yair",
    instagram: "https://www.instagram.com/katrinyair",
    whatsappChat: "https://wa.me/972556620441",
    whatsappRecipesChat: "https://chat.whatsapp.com/LNe0EqWlJStCAtybKVw3Rm",
    googleMapsAddress: "https://maps.app.goo.gl/RwgiUnZhJ4KR9czz6",
    phoneNumber: "tel:+972556620441",
  },
};
