import ReserveForm from '@/app/reserve/[slug]/components/ReserveForm';
import ReserveHeader from '@/app/reserve/[slug]/components/ReserveHeader';
import { PrismaClient } from '@prisma/client';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Reserve at Milestones Grill (Toronto) | OpenTable',
  description: 'Reserve at Milestones Grill (Toronto) | OpenTable',
};

const prisma = new PrismaClient();

const fetchRestaurantBySlug = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
  });

  if (!restaurant) {
    notFound();
  }

  return restaurant;
};

export default async function ReservePage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { date: string; partySize: string };
  date: string;
  partySize: string;
}) {
  const restaurant = await fetchRestaurantBySlug(params.slug);

  return (
    <div className="border-t h-screen">
      <div className="py-9 w-3/5 m-auto">
        <ReserveHeader
          image={restaurant.main_image}
          name={restaurant.name}
          date={searchParams.date}
          partySize={searchParams.partySize}
        />
        <ReserveForm
          slug={params.slug}
          date={searchParams.date}
          partySize={searchParams.partySize}
        />
      </div>
    </div>
  );
}
