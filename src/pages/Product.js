import productImg from "../assets/images/products/product1.jpg";
import Bredcrum from "../components/Bredcrum";
import Wrapper from "../components/layouts/Wrapper";
import Products from "../components/products/Products";

const Product = () => {
  return (
    <Wrapper title="Product Page">
      <Bredcrum name={"Shop"} name2="Product Name" />
      <div class="container pt-4 pb-6 grid lg:grid-cols-2 gap-6">
        <div>
          <div>
            <img id="main-img" src={productImg} class="w-full" alt="Product" />
          </div>
          <div class="grid grid-cols-5 gap-4 mt-4">
            <div>
              <img
                src={productImg}
                class="single-img w-full cursor-pointer border border-primary"
                alt="Product"
              />
            </div>
            <div>
              <img
                src={productImg}
                class="single-img w-full cursor-pointer border"
                alt="Product"
              />
            </div>
            <div>
              <img
                src={productImg}
                class="single-img w-full cursor-pointer border"
                alt="Product"
              />
            </div>
            <div>
              <img
                src={productImg}
                class="single-img w-full cursor-pointer border"
                alt="Product"
              />
            </div>
            <div>
              <img
                src={productImg}
                class="single-img w-full cursor-pointer border"
                alt="Product"
              />
            </div>
          </div>
        </div>
        <div>
          <h2 class="md:text-3xl text-2xl font-medium uppercase mb-2">
            Italian L Shape Sofa
          </h2>
          <div class="flex items-center mb-4">
            <div class="flex gap-1 text-sm text-yellow-400">
              <span>
                <i class="fas fa-star"></i>
              </span>
              <span>
                <i class="fas fa-star"></i>
              </span>
              <span>
                <i class="fas fa-star"></i>
              </span>
              <span>
                <i class="fas fa-star"></i>
              </span>
              <span>
                <i class="fas fa-star"></i>
              </span>
            </div>
            <div class="text-xs text-gray-500 ml-3">(150 Reviews)</div>
          </div>
          <div class="space-y-2">
            <p class="text-gray-800 font-semibold space-x-2">
              <span>Availability: </span>
              <span class="text-green-600">In Stock</span>
            </p>
            <p class="space-x-2">
              <span class="text-gray-800 font-semibold">Brand: </span>
              <span class="text-gray-600">Apex</span>
            </p>
            <p class="space-x-2">
              <span class="text-gray-800 font-semibold">Category: </span>
              <span class="text-gray-600">Sofa</span>
            </p>
            <p class="space-x-2">
              <span class="text-gray-800 font-semibold">SKU: </span>
              <span class="text-gray-600">BE45VGRT</span>
            </p>
          </div>
          <div class="mt-4 flex items-baseline gap-3">
            <span class="text-primary font-semibold text-xl">$450.00</span>
            <span class="text-gray-500 text-base line-through">$500.00</span>
          </div>
          <p class="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            exercitationem quaerat excepturi labore blanditiis
          </p>
          <div class="mt-4">
            <h3 class="text-base text-gray-800 mb-1">Size</h3>
            <div class="flex items-center gap-2">
              {/* <!-- single size --> */}
              <div class="size-selector">
                <input type="radio" name="size" class="hidden" id="size-xs" />
                <label
                  for="size-xs"
                  class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  XS
                </label>
              </div>

              <div class="size-selector">
                <input type="radio" name="size" class="hidden" id="size-s" />
                <label
                  for="size-s"
                  class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  S
                </label>
              </div>

              <div class="size-selector">
                <input
                  type="radio"
                  name="size"
                  class="hidden"
                  id="size-m"
                  checked
                />
                <label
                  for="size-m"
                  class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  M
                </label>
              </div>

              <div class="size-selector">
                <input type="radio" name="size" class="hidden" id="size-l" />
                <label
                  for="size-l"
                  class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  L
                </label>
              </div>

              <div class="size-selector">
                <input type="radio" name="size" class="hidden" id="size-xl" />
                <label
                  for="size-xl"
                  class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  XL
                </label>
              </div>
              {/* <!-- single size end --> */}
            </div>
          </div>

          <div class="mt-4">
            <h3 class="text-base text-gray-800 mb-1">Color</h3>
            <div class="flex items-center gap-2">
              <div class="color-selector">
                <input
                  type="radio"
                  name="color"
                  class="hidden"
                  id="color-red"
                  checked
                />
                <label
                  for="color-red"
                  style={{ backgroundColor: "#fc3d57" }}
                  class="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm"
                ></label>
              </div>

              <div class="color-selector">
                <input
                  type="radio"
                  name="color"
                  class="hidden"
                  id="color-white"
                />
                <label
                  for="color-white"
                  style={{ backgroundColor: "#fff" }}
                  class="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm"
                ></label>
              </div>

              <div class="color-selector">
                <input
                  type="radio"
                  name="color"
                  class="hidden"
                  id="color-black"
                />
                <label
                  for="color-black"
                  style={{ backgroundColor: "#000" }}
                  class="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm"
                ></label>
              </div>
              {/* <!-- single color end --> */}
            </div>
          </div>

          <div class="mt-4">
            <h3 class="text-base text-gray-800 mb-1">Quantity</h3>
            <div class="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
              <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                -
              </div>
              <div class="h-8 w-10 flex items-center justify-center">4</div>
              <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                +
              </div>
            </div>
          </div>

          <div class="flex gap-3 border-b border-gray-200 pb-5 mt-6">
            <a
              href="#"
              class="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase 
                    hover:bg-transparent hover:text-primary transition text-sm flex items-center"
            >
              <span class="mr-2">
                <i class="fas fa-shopping-bag"></i>
              </span>{" "}
              Add to cart
            </a>
            <a
              href="#"
              class="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase 
                    hover:bg-transparent hover:text-primary transition text-sm"
            >
              <span class="mr-2">
                <i class="far fa-heart"></i>
              </span>{" "}
              Wishlist
            </a>
          </div>

          <div class="flex space-x-3 mt-4">
            <a
              href="#"
              class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </div>
          {/* <!-- product share icons end --> */}
        </div>
      </div>
      <div class="container pb-16">
        {/* <!-- detail buttons --> */}
        <h3 class="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">
          Product Details
        </h3>
        {/* <!-- details button end --> */}

        {/* <!-- details content --> */}
        <div class="lg:w-4/5 xl:w-3/5 pt-6">
          <div class="space-y-3 text-gray-600">
            <p>
              Incredible graphics performanceMacBook Air can take on more
              graphics-intensive projects than ever. For the first time, content
              creators can edit and seamlessly play back multiple streams of
              full‑quality 4K video without dropping a frame.
            </p>
            <p>
              Incredible graphics performanceMacBook Air can take on more
              graphics-intensive projects than ever. For the first time, content
              creators can edit and seamlessly play back multiple streams of
              full‑quality 4K video without dropping a frame.
            </p>
            <p>
              Apps on MacBook Air can use machine learning (ML) to automatically
              retouch photos like a pro, make smart tools such as magic wands
              and audio filters more accurate at auto‑detection, and so much
              more. That’s not just brain power — that’s the power of a full
              stack of ML technologies.
            </p>
          </div>
          {/* <!-- details table --> */}
          <table class="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
            <tr>
              <th class="py-2 px-4 border border-gray-300 w-40 font-medium">
                Color
              </th>
              <td class="py-2 px-4 border border-gray-300">
                Black, Brown, Red
              </td>
            </tr>
            <tr>
              <th class="py-2 px-4 border border-gray-300 w-40 font-medium">
                Material
              </th>
              <td class="py-2 px-4 border border-gray-300">
                Artificial Leather
              </td>
            </tr>
            <tr>
              <th class="py-2 px-4 border border-gray-300 w-40 font-medium">
                Weight
              </th>
              <td class="py-2 px-4 border border-gray-300">55kg</td>
            </tr>
          </table>
          {/* <!-- details table --> */}
        </div>
        {/* <!-- details content end --> */}
      </div>
      <div>
        <Products title="Related products" />
      </div>
    </Wrapper>
  );
};

export default Product;
