import RestaurantMenu from '@/app/restaurant/[slug]/components/RestaurantMenu';
import RestaurantNavbar from '@/app/restaurant/[slug]/components/RestaurantNavbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menu of Milestones Grill (Toronto) | OpenTable',
  description: 'Menu of Milestones Grill (Toronto) | OpenTable',
};

export default function RestaurantMenuPage() {
  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavbar />
        <RestaurantMenu />
      </div>
    </>
  );
}
