import RestaurantDescription from '@/app/restaurant/[slug]/components/RestaurantDescription';
import RestaurantImages from '@/app/restaurant/[slug]/components/RestaurantImages';
import RestaurantNavbar from '@/app/restaurant/[slug]/components/RestaurantNavbar';
import RestaurantRating from '@/app/restaurant/[slug]/components/RestaurantRating';
import RestaurantReservationCard from '@/app/restaurant/[slug]/components/RestaurantReservationCard';
import RestaurantReviews from '@/app/restaurant/[slug]/components/RestaurantReviews';
import RestaurantTitle from '@/app/restaurant/[slug]/components/RestaurantTitle';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Milestones Grill (Toronto) | OpenTable',
  description: 'Milestones Grill (Toronto) | OpenTable',
};

export default function RestaurantDetails() {
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavbar />
        <RestaurantTitle />
        <RestaurantRating />
        <RestaurantDescription />
        <RestaurantImages />
        <RestaurantReviews />
      </div>
      <div className="w-[27%] relative text-reg">
        <RestaurantReservationCard />
      </div>
    </>
  );
}
