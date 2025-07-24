import Link from 'next/link';

export default function About() {
  return (
    <div className="p-8 max-w-3xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">Бидний тухай</h1>
      <p>
        Энэ сайт нь засгийн газрын бодлого болон иргэний оролцоотой холбоотой
        мэдээ мэдээллийг хуваалцдаг. Албан ёсны White House вэб сайтаас санаа
        авч, олон нийтэд зориулсан хүртээмжтэй шинэчлэлт, боловсролын
        нөөцөөр хангах зорилготой.
      </p>
      <Link href="/" className="text-blue-600 hover:underline">
        Нүүр хуудсанд буцах
      </Link>
    </div>
  );
}
