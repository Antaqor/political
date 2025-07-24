import ArticleCard, { Article } from '../components/ArticleCard';
import HeroSlider from '../components/HeroSlider';
import AdminCard, { Admin } from '../components/AdminCard';

const articles: Article[] = [
  {
    id: '1',
    title: '2024 оны сонгуулийн мэдээ',
    description:
      'Удахгүй болох сонгуулийн болон намын стратегийн хамгийн сүүлийн үеийн мэдээ.',
    image:
      'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '2',
    title: 'Олон улсын харилцаа',
    description:
      'Сүүлийн үеийн дипломат үйл явдлууд дэлхийн улс төрийг хэрхэн бүрдүүлж байна.',
    image:
      'https://images.unsplash.com/photo-1506499180271-65b10591b7c1?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '3',
    title: 'Эдийн засгийн бодлогын хэлэлцүүлэг',
    description:
      'Шинжээчид санал болгож буй эдийн засгийн шинэчлэлийн нөлөөг хэлэлцэж байна.',
    image:
      'https://images.unsplash.com/photo-1502920917128-1aa500764ff0?auto=format&fit=crop&w=800&q=60',
  },
];

const admins: Admin[] = [
  { id: '1', name: 'Alex Morgan', role: 'Тамгын газрын дарга' },
  { id: '2', name: 'Jamie Lee', role: 'Харилцаа холбооны захирал' },
  { id: '3', name: 'Riley Chen', role: 'Бодлогын зөвлөх' },
  { id: '4', name: 'Jordan Patel', role: 'Хэвлэлийн төлөөлөгч' },
];

export default function Home() {
  return (
    <div className="font-sans bg-neutral-50 dark:bg-neutral-900 min-h-screen">
      <HeroSlider />
      <header className="p-8 text-center">
        <h1 className="text-3xl font-bold">Улс төрийн мэдээ</h1>
        <p className="text-neutral-600 dark:text-neutral-300">
          Дэлхий даяарх хамгийн сүүлийн үеийн гарчигууд
        </p>
      </header>
      <main className="p-8 space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-center">Удирдлагууд</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {admins.map((admin) => (
              <AdminCard key={admin.id} admin={admin} />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Сүүлийн мэдээ</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
