import React from 'react';


interface ProductProps {
  params: {
    id: string;
  };
}


const Product: React.FC<ProductProps> = ({ params }) => {
  return <div>Product {params.id}</div>;
};

export default Product;
