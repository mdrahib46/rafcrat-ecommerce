import Product from "./Product";

const Products = ({ title, products }) => {
  return (
    <div class="container pb-16">
      <h2 class="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">
        {title}
      </h2>
      {/* <!-- product wrapper --> */}
      <div class="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
        {/* <!-- single product --> */}
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />

        {/* <!-- single product end --> */}
      </div>
      {/* <!-- product wrapper end --> */}
    </div>
  );
};

export default Products;
