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
  links: {
    facebook: "https://www.facebook.com/katrin.yair",
    instagram: "https://www.instagram.com/katrinyair",
    whatsappChat: "https://wa.me/972556620441",
    whatsappRecipesChat: "https://chat.whatsapp.com/LNe0EqWlJStCAtybKVw3Rm",
    googleMapsAddress: "https://maps.app.goo.gl/RwgiUnZhJ4KR9czz6",
    phoneNumber: "tel:+972556620441",
  },
};
