import RestaurantReviewCard from '@/app/restaurant/[slug]/components/RestaurantReviewCard';
import { Review } from '@prisma/client';

export default function RestaurantReviews({ reviews }: { reviews: Review[] }) {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">
        What {reviews.length} {reviews.length === 1 ? 'person' : 'popple'} are
        saying
      </h1>
      <div>
        {reviews.map((review) => (
          <RestaurantReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}
