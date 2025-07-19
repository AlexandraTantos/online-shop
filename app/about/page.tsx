import React from "react";
function AboutPage() {
  return (
    <section>
      <h1 className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text-6xl">
        We love
        <span className="bg-primary py-2 px-4 rounded-lg tracking-widest text-white">
          store
        </span>
      </h1>
      <p className="mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground">
        We believe in quality, simplicity, and timeless design. Whether
        you&apos;re looking to upgrade your space, find the perfect gift, or
        discover something truly unique, our collection is built to inspire.
        Every product we feature has been carefully selected for its style,
        functionality, and sustainability. We&apos;re passionate about helping
        you create a home you love — one piece at a time. Thank you for choosing
        us. Your space deserves something special.
      </p>
    </section>
  );
}
export default AboutPage;
