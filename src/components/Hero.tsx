import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-64 md:h-96">
      <Image
        src="https://images.unsplash.com/photo-1498814124330-3f43d0eb94c4?auto=format&fit=crop&w=1500&q=60"
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-blue-900/50 flex items-center justify-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
          Building a Better Future Together
        </h1>
      </div>
    </section>
  );
}
