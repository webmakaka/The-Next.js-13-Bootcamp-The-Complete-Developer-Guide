import RestaurantDescription from '@/app/restaurant/[slug]/components/RestaurantDescription';
import RestaurantImages from '@/app/restaurant/[slug]/components/RestaurantImages';
import RestaurantNavbar from '@/app/restaurant/[slug]/components/RestaurantNavbar';
import RestaurantRating from '@/app/restaurant/[slug]/components/RestaurantRating';
import RestaurantReservationCard from '@/app/restaurant/[slug]/components/RestaurantReservationCard';
import RestaurantReviews from '@/app/restaurant/[slug]/components/RestaurantReviews';
import RestaurantTitle from '@/app/restaurant/[slug]/components/RestaurantTitle';
import { PrismaClient } from '@prisma/client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Milestones Grill (Toronto) | OpenTable',
  description: 'Milestones Grill (Toronto) | OpenTable',
};

const prisma = new PrismaClient();

interface Restaurant {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
}

const fetchRestaurantBySlug = async (slug: string): Promise<Restaurant> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
    },
  });

  if (!restaurant) {
    throw new Error();
  }

  return restaurant;
};

export default async function RestaurantDetails({
  params,
}: {
  params: { slug: string };
}) {
  const restaurant = await fetchRestaurantBySlug(params.slug);

  console.log(restaurant);

  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavbar slug={restaurant.slug} />
        <RestaurantTitle name={restaurant.name} />
        <RestaurantRating />
        <RestaurantDescription description={restaurant.description} />
        <RestaurantImages images={restaurant.images} />
        <RestaurantReviews />
      </div>
      <div className="w-[27%] relative text-reg">
        <RestaurantReservationCard />
      </div>
    </>
  );
}
