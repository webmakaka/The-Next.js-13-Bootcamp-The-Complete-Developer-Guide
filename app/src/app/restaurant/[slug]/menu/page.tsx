import RestaurantHeader from '@/app/restaurant/[slug]/components/RestaurantHeader';
import RestaurantMenu from '@/app/restaurant/[slug]/components/RestaurantMenu';
import RestaurantNavbar from '@/app/restaurant/[slug]/components/RestaurantNavbar';

export default function RestaurantMenuPage() {
  return (
    <>
      <RestaurantHeader />
      {/* DESCRIPTION PORTION */}
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        <div className="bg-white w-[100%] rounded p-3 shadow">
          <RestaurantNavbar />
          <RestaurantMenu />
        </div>
      </div>
      {/* DESCRIPTION PORTION */}
    </>
  );
}
