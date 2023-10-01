import ReserveForm from '@/app/reserve/[slug]/components/ReserveForm';
import ReserveHeader from '@/app/reserve/[slug]/components/ReserveHeader';

export default function ReservePage() {
  return (
    <div className="border-t h-screen">
      <div className="py-9 w-3/5 m-auto">
        <ReserveHeader />
        <ReserveForm />
      </div>
    </div>
  );
}
