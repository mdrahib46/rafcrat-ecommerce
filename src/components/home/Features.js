import delivary from "../../assets/images/icons/delivery-van.svg";
import moneyBack from "../../assets/images/icons/money-back.svg";
import serviceHours from "../../assets/images/icons/service-hours.svg";

const Features = () => {
  return (
    <div class="container py-16">
      <div class="lg:w-10/12 grid md:grid-cols-3 gap-3 lg:gap-6 mx-auto justify-center">
        {/* <!-- single feature --> */}
        <div class="border-primary border rounded-sm px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5">
          <img
            src={delivary}
            class="lg:w-12 w-10 h-12 object-contain"
            alt="delivery"
          />
          <div>
            <h4 class="font-medium capitalize text-lg">free shipping</h4>
            <p class="text-gray-500 text-xs lg:text-sm">Order over $200</p>
          </div>
        </div>

        <div class="border-primary border rounded-sm px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5">
          <img
            src={moneyBack}
            class="lg:w-12 w-10 h-12 object-contain"
            alt="money back"
          />
          <div>
            <h4 class="font-medium capitalize text-lg">Money returns</h4>
            <p class="text-gray-500 text-xs lg:text-sm">30 Days money return</p>
          </div>
        </div>

        <div class="border-primary border rounded-sm px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5">
          <img
            src={serviceHours}
            class="lg:w-12 w-10 h-12 object-contain"
            alt="service hour"
          />
          <div>
            <h4 class="font-medium capitalize text-lg">24/7 Support</h4>
            <p class="text-gray-500 text-xs lg:text-sm">Customer support</p>
          </div>
        </div>
        {/* <!-- single feature end --> */}
      </div>
    </div>
  );
};

export default Features;
