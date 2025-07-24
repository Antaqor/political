import Image from 'next/image';

export interface Article {
  id: string;
  title: string;
  description: string;
  image: string;
}

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="border rounded shadow-sm overflow-hidden bg-white dark:bg-neutral-800 flex flex-col">
      <div className="relative h-48">
        <Image src={article.image} alt="" fill className="object-cover" />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h2 className="font-semibold text-lg">{article.title}</h2>
        <p className="text-sm text-neutral-700 dark:text-neutral-300">{article.description}</p>
      </div>
    </article>
  );
}
