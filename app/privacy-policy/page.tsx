import { Container } from "../../components/container";
import { siteConfig } from "../../config/site";

export default function PrivacyPolicy() {
  return (
    <Container className="mt-10 flex flex-col items-start justify-center gap-2">
      <h1 className="text-xl font-semibold">
        מדיניות פרטיות - הסטודיו של קאתרין
      </h1>

      <p>
        אנו מכבדים את פרטיות המשתמשים באתר שלנו ומתחייבים לשמור על מידע אישי
        בהתאם לחוקי הפרטיות החלים בישראל. מסמך זה מסביר כיצד אנו אוספים, משתמשים
        ושומרים על פרטיך בעת השימוש באתר שלנו.
      </p>

      <h2 className="mt-4 text-lg font-semibold">1. איסוף מידע</h2>
      <p>
        אנו לא מוכרים מוצרים או שירותים דרך האתר, אך ייתכן שנאסוף מידע בסיסי כדי
        לשפר את חוויית המשתמש שלך, כולל:
      </p>
      <ul>
        <li>מידע שתמסור לנו דרך טפסי יצירת קשר (שם, טלפון, כתובת אימייל).</li>
        <li>
          מידע טכני הנאסף באופן אוטומטי (כגון כתובת IP, סוג דפדפן, סטטיסטיקות
          גלישה).
        </li>
      </ul>

      <h2 className="mt-2 text-lg font-semibold">2. מטרות השימוש במידע</h2>
      <p>אנו משתמשים במידע שנאסף למטרות הבאות בלבד:</p>
      <ul>
        <li>יצירת קשר עם מבקרים שפנו אלינו באמצעות טופס יצירת קשר.</li>
        <li>שיפור חוויית המשתמש באתר ואופטימיזציה של התוכן.</li>
        <li>אבטחת האתר ומניעת שימוש לרעה.</li>
      </ul>

      <h2 className="mt-2 text-lg font-semibold">3. מסירת מידע לצד שלישי</h2>
      <p>
        אנו לא מוכרים, משכירים או מעבירים מידע אישי לצדדים שלישיים, אלא אם כן
        הדבר נדרש על פי חוק, צו בית משפט או לצורך הגנה על זכויותינו המשפטיות.
      </p>

      <h2 className="mt-2 text-lg font-semibold">4. שימוש בעוגיות (Cookies)</h2>
      <p>
        האתר עשוי להשתמש בקובצי עוגיות (Cookies) לצורך תפעול תקין, אבטחה ושיפור
        חוויית המשתמש. ניתן לחסום עוגיות דרך הגדרות הדפדפן, אך ייתכן שחלק
        מהפונקציות באתר לא יעבדו כראוי.
      </p>

      <h2 className="mt-2 text-lg font-semibold">5. אבטחת מידע</h2>
      <p>
        אנו נוקטים באמצעים סבירים לשמירה על אבטחת המידע שלך, אך אין אפשרות
        להבטיח הגנה מוחלטת מפני גישה בלתי מורשית.
      </p>

      <h2 className="mt-2 text-lg font-semibold">6. קישורים לאתרים חיצוניים</h2>
      <p>
        ייתכן שהאתר יכיל קישורים לאתרים חיצוניים. אין לנו שליטה על מדיניות
        הפרטיות של אתרים אלה, ולכן אנו ממליצים לקרוא את תנאי השימוש שלהם בנפרד.
      </p>

      <h2 className="mt-2 text-lg font-semibold">7. יצירת קשר בנוגע לפרטיות</h2>
      <p>
        אם יש לך שאלות או בקשות בנוגע לפרטיות באתר, ניתן ליצור איתנו קשר בכתובת:{" "}
        {siteConfig.email}
      </p>

      <h2 className="mt-2 text-lg font-semibold">
        8. שינויים במדיניות הפרטיות
      </h2>
      <p>
        אנו שומרים לעצמנו את הזכות לעדכן את מדיניות הפרטיות מעת לעת. עדכונים
        יפורסמו בעמוד זה.
      </p>

      <p className="mt-4">עודכן לאחרונה: 06.02.2025</p>
    </Container>
  );
}
