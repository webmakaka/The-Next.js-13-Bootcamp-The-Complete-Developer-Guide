import SearchHeader from '@/app/search/components/SearchHeader';
import SearchRestaurantCard from '@/app/search/components/SearchRestaurantCard';
import SearchSideBar from '@/app/search/components/SearchSideBar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search Restaurants OpenTable',
  description: 'Search Restaurants OpenTable',
};

export default function Search() {
  return (
    <>
      <SearchHeader />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar />
        <div className="w-5/6">
          <SearchRestaurantCard />
        </div>
      </div>
    </>
  );
}
