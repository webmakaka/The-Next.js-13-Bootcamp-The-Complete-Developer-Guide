import NavBar from '@/app/components/NavBar';
import ReserveForm from '@/app/reserve/[slug]/components/ReserveForm';
import ReserveHeader from '@/app/reserve/[slug]/components/ReserveHeader';

export default function ReservePage() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
            <ReserveHeader />
            <ReserveForm />
          </div>
        </div>
      </main>
    </main>
  );
}
