import { fetchProductReviews } from "@/utils/actions";
import React from "react";
import ReviewCard from "./ReviewCard";
import SectionTitle from "../global/SectionTitle";

export default async function ProductReview({
  productId,
}: {
  productId: string;
}) {
  const reviews = await fetchProductReviews(productId);
  return (
    <div className="mt-16">
      <SectionTitle text="Product reviews" />
      <div className="grid md:grid-cols-2 gap-8 my-8">
        {reviews.map((review) => {
          const { comment, rating, authorImageUrl, authorName } = review;
          const reviewInfo = {
            comment,
            rating,
            image: authorImageUrl,
            name: authorName,
          };
          return <ReviewCard key={review.id} reviewInfo={reviewInfo} />;
        })}
      </div>
    </div>
  );
}
