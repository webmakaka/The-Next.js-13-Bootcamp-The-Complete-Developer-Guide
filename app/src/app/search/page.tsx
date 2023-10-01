import NavBar from '@/app/components/NavBar';
import SearchHeader from '@/app/search/components/SearchHeader';
import SearchRestaurantCard from '@/app/search/components/SearchRestaurantCard';
import SearchSideBar from '@/app/search/components/SearchSideBar';

export default function Search() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <SearchHeader />
        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          <SearchSideBar />
          <div className="w-5/6">
            <SearchRestaurantCard />
          </div>
        </div>
      </main>
    </main>
  );
}
