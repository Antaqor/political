import ArticleCard, { Article } from '../components/ArticleCard';
import Hero from '../components/Hero';

const articles: Article[] = [
  {
    id: '1',
    title: 'Election Updates 2024',
    description:
      'Latest news on the upcoming elections and party strategies.',
    image:
      'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '2',
    title: 'International Relations',
    description:
      'How recent diplomatic events are shaping global politics.',
    image:
      'https://images.unsplash.com/photo-1506499180271-65b10591b7c1?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '3',
    title: 'Economic Policies Debates',
    description:
      'Analysts discuss the impact of proposed economic reforms.',
    image:
      'https://images.unsplash.com/photo-1502920917128-1aa500764ff0?auto=format&fit=crop&w=800&q=60',
  },
];

export default function Home() {
  return (
    <div className="font-sans bg-neutral-50 dark:bg-neutral-900 min-h-screen">
      <Hero />
      <header className="p-8 text-center">
        <h1 className="text-3xl font-bold">Political News</h1>
        <p className="text-neutral-600 dark:text-neutral-300">
          Latest headlines from around the world
        </p>
      </header>
      <main className="p-8">
        <h2 className="text-2xl font-semibold mb-4">Latest Articles</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </main>
    </div>
  );
}
