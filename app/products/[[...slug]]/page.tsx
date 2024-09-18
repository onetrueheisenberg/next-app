import React from "react";

interface Props {
  params: {
    slug: string[];
  };
  searchParams: {
    sort: string;
  };
}

const ProductPage = ({ params: { slug }, searchParams: { sort } }: Props) => {
  return (
    <div>
      ProductPage {slug} {sort}
    </div>
  );
};

export default ProductPage;
