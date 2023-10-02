import RestaurantMenu from '@/app/restaurant/[slug]/components/RestaurantMenu';
import RestaurantNavbar from '@/app/restaurant/[slug]/components/RestaurantNavbar';
import { PrismaClient } from '@prisma/client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menu of Milestones Grill (Toronto) | OpenTable',
  description: 'Menu of Milestones Grill (Toronto) | OpenTable',
};

const prisma = new PrismaClient();

const fetchRestaurantMenu = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items: true,
    },
  });

  if (!restaurant) {
    throw new Error();
  }

  return restaurant.items;
};

export default async function RestaurantMenuPage({
  params,
}: {
  params: { slug: string };
}) {
  const menu = await fetchRestaurantMenu(params.slug);

  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavbar slug={params.slug} />
        <RestaurantMenu menu={menu} />
      </div>
    </>
  );
}
