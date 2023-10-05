import SearchHeader from '@/app/search/components/SearchHeader';
import SearchRestaurantCard from '@/app/search/components/SearchRestaurantCard';
import SearchSideBar from '@/app/search/components/SearchSideBar';
import { PrismaClient } from '@prisma/client';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search Restaurants OpenTable',
  description: 'Search Restaurants OpenTable',
};

const prisma = new PrismaClient();

const fetchRestaurantsByCity = (city: string | undefined) => {
  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
  };

  if (!city) return prisma.restaurant.findMany({ select });
  return prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city.toLowerCase(),
        },
      },
    },
    select,
  });
};

const fetchLocations = async () => {
  return prisma.location.findMany({});
};

const fetchCuisines = async () => {
  return prisma.cuisine.findMany({});
};

export default async function Search({
  searchParams,
}: {
  searchParams: { city: string };
}) {
  const restaurants = await fetchRestaurantsByCity(searchParams.city);
  const location = await fetchLocations();
  const cuisine = await fetchCuisines();
  return (
    <>
      <SearchHeader />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar locations={location} cuisines={cuisine} />
        <div className="w-5/6">
          {restaurants.length ? (
            <>
              {restaurants.map((restaurant) => (
                <SearchRestaurantCard
                  key={restaurant.id}
                  restaurant={restaurant}
                />
              ))}
            </>
          ) : (
            <p>Sorry, we fond no restaurants in this area</p>
          )}
        </div>
      </div>
    </>
  );
}
