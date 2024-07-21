import React from 'react';

const Product = ({ params }: { params: { id: string } }) => {
  return <div>Product {params.id}</div>;
};

export default Product;
