import Header from '@/app/components/Header';
import RestaurantCard from '@/app/components/RestaurantCard';

export default function Home() {
  return (
    <main>
      <Header />
      {/* CARDS */}
      <div className="py-3 px-36 mt-10 flex flex-wrap">
        <RestaurantCard />
      </div>
      {/* CARDS */}
    </main>
  );
}
