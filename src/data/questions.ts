import { Question } from '../types/quiz';

export const QUESTIONS: Question[] = [
  {
    question: 'מהי פונקציית חץ ב-JavaScript?',
    options: [
      'פונקציה שמצביעה לפונקציה אחרת',
      'פונקציה שעובדת רק עם מערכים',
      'פונקציה שיוצרת חיצים בממשק המשתמש',
      'תחביר מקוצר לכתיבת ביטויי פונקציה',
    ],
    correctAnswer: 3,
  },
  {
    question: 'מה המטרה של תגית <meta> ב-HTML?',
    options: [
      'לציין metadata על המסמך',
      'ליצור קישורי meta',
      'להגדיר תוכן מטמורפי',
      'לעצב metadata',
    ],
    correctAnswer: 0,
  },
  {
    question: 'מה עושה ה-hook useState ב-React?',
    options: [
      'מנהל state ברכיבים פונקציונליים',
      'מנהל state ברכיבי class',
      'מנהל props ברכיבים פונקציונליים',
      'מנהל props ברכיבי class',
    ],
    correctAnswer: 0,
  },
  {
    question: 'מהו localStorage ב-JavaScript?',
    options: [
      'שרת מקומי',
      'טווח משתנה',
      'מערכת קבצים',
      'דרך לאחסן מידע בדפדפן',
    ],
    correctAnswer: 3,
  },
  {
    question: 'מהו event bubbling ב-JavaScript?',
    options: [
      'כאשר אירוע מתפשט מאלמנטים ילדים להורים',
      'כאשר אירועים יוצרים בועות בממשק המשתמש',
      'כאשר אירועים מבוטלים',
      'כאשר אירועים מושהים',
    ],
    correctAnswer: 0,
  },
  {
    question: 'באיזה hook משתמשים עבור side effects ב-React?',
    options: ['useEffect', 'useState', 'useContext', 'useReducer'],
    correctAnswer: 0,
  },
  {
    question: 'מה המטרה של תגית <article> ב-HTML5?',
    options: [
      'ליצור רשימת מאמרים',
      'לעצב טקסט כמאמר עיתון',
      'להגדיר תוכן עצמאי ומכיל את עצמו',
      'לקשר למאמרים חיצוניים',
    ],
    correctAnswer: 2,
  },
  {
    question: 'מה תפקידו של אלמנט <canvas> ב-HTML?',
    options: [
      'לעצב מכלים',
      'ליצור טפסי קלט',
      'להציג תמונות בלבד',
      'לצייר גרפיקה באמצעות JavaScript',
    ],
    correctAnswer: 3,
  },
  {
    question: 'באיזה מאפיין CSS משתמשים לשינוי צבע טקסט?',
    options: ['text-color', 'color', 'font-color', 'text-style'],
    correctAnswer: 1,
  },
  {
    question: 'מה זה CSS Grid?',
    options: [
      'מערכת פריסה דו-ממדית',
      'סוג של תפריט ניווט',
      'מסגרת עבודה ל-CSS',
      'כלי ליצירת גרדיאנטים',
    ],
    correctAnswer: 0,
  },
  {
    question: 'מה המטרה של Promises ב-JavaScript?',
    options: [
      'לטפל בפעולות אסינכרוניות',
      'להבטיח ביצועים',
      'ליצור קוד מאובטח',
      'להבטיח תאימות קוד',
    ],
    correctAnswer: 0,
  },
  {
    question: 'מה המטרה של "use strict" ב-JavaScript?',
    options: [
      'גורם לקוד לרוץ מהר יותר',
      'מפעיל מצב קפדני לבדיקת שגיאות טובה יותר',
      'מייבא הקלדה קפדנית',
      'אוכף הרצת קוד סינכרונית',
    ],
    correctAnswer: 1,
  },
  {
    question: 'מה המטרה של CSS flexbox?',
    options: [
      'להוסיף אנימציות',
      'ליצור פריסות גמישות ורספונסיביות',
      'לעצב טקסט',
      'ליצור אפקטים תלת-ממדיים',
    ],
    correctAnswer: 1,
  },
  {
    question: 'למה משמש המאפיין box-sizing ב-CSS?',
    options: [
      'ליצור מסגרת סביב אלמנטים',
      'לקבוע את גודל תיבת הסימון',
      'ליצור תיבות גמישות',
      'לכלול padding ו-border ברוחב ובגובה הכולל של האלמנט',
    ],
    correctAnswer: 3,
  },
  {
    question: 'מה ראשי התיבות HTML?',
    options: [
      'High Tech Modern Language',
      'Hyper Transfer Markup Language',
      'Hybrid Text Modern Language',
      'Hyper Text Markup Language',
    ],
    correctAnswer: 3,
  },
  {
    question: 'מה המטרה של media queries ב-CSS?',
    options: [
      'לתשאל קבצי מדיה',
      'ליצור נגני מדיה',
      'ליצור עיצובים רספונסיביים למסכים בגדלים שונים',
      'לעצב אלמנטי וידאו',
    ],
    correctAnswer: 2,
  },
  {
    question: 'מהו ה-Virtual DOM ב-React?',
    options: [
      'עותק מלא של ה-DOM האמיתי',
      'שרת וירטואלי לאפליקציות React',
      'עותק קל משקל של ה-DOM האמיתי לאופטימיזציית ביצועים',
      'כלי להמחשת DOM',
    ],
    correctAnswer: 2,
  },
  {
    question: 'מה ההבדל בין let ל-var ב-JavaScript?',
    options: [
      'ל-let יש block scope, ל-var יש function scope',
      'let מיועד למחרוזות, var למספרים',
      'var חדש יותר מ-let',
      'אין הבדל',
    ],
    correctAnswer: 0,
  },
  {
    question: 'מה זה JSX ב-React?',
    options: [
      'תחביר JavaScript XML לכתיבת רכיבי ממשק משתמש',
      'הרחבת Java ל-XML',
      'מפענח JSON',
      'מסגרת בדיקות JavaScript',
    ],
    correctAnswer: 0,
  },
  {
    question: 'למה משמש המאפיין z-index ב-CSS?',
    options: [
      'לקבוע את רמת הזום',
      'ליצור אפקט פסים',
      'לציין את סדר השכבות של אלמנטים',
      'למדוד גודל אלמנט',
    ],
    correctAnswer: 2,
  },
];
