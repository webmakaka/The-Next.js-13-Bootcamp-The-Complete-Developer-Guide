import RestaurantMenu from '@/app/restaurant/[slug]/components/RestaurantMenu';
import RestaurantNavbar from '@/app/restaurant/[slug]/components/RestaurantNavbar';

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
