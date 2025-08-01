import { Header } from '@/components/ui/Header';
import { Features } from '@/components/ui/Features';
import { Subscribe } from '@/components/ui/Subscribe';
import { Footer } from '@/components/ui/Footer';

export default function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <Features />
        <Subscribe />
      </main>
      <Footer />
    </div>
  );
}
