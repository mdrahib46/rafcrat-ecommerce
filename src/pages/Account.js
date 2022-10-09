import Bredcrum from "../components/Bredcrum";
import AccountWrapper from "../components/layouts/AccountWrapper";
import Wrapper from "../components/layouts/Wrapper";

const Account = () => {
  return (
    <Wrapper title="Account | RAFCRAFT">
      <Bredcrum name="Account" />
      <AccountWrapper>
        <div className="col-span-9 grid md:grid-cols-3 gap-4 mt-6 lg:mt-0">
          {/* <!-- single card --> */}
          <div class="shadow rounded bg-white px-4 pt-6 pb-8">
            <div class="flex justify-between items center mb-4">
              <h3 class="font-medium capitalize text-gray-800 text-lg">
                personal profile
              </h3>
              <a href="#" class="text-primary">
                Edit
              </a>
            </div>
            <div class="space-y-1">
              <h4 class="text-gray-700 font-medium">Russell Ahmed</h4>
              <p class="text-gray-800">example@mail.com</p>
              <p class="text-gray-800">(123) 456-789</p>
            </div>
          </div>
          {/* <!-- single card end --> */}
          {/* <!-- single card --> */}
          <div class="shadow rounded bg-white px-4 pt-6 pb-8">
            <div class="flex justify-between items center mb-4">
              <h3 class="font-medium capitalize text-gray-800 text-lg">
                Shipping Address
              </h3>
              <a href="#" class="text-primary">
                Edit
              </a>
            </div>
            <div class="space-y-1">
              <h4 class="text-gray-700 font-medium">Russell Ahmed</h4>
              <p class="text-gray-800">3891 Ranchview Dr.</p>
              <p class="text-gray-800">Richardson, Califora</p>
              <p class="text-gray-800">(123) 456-789</p>
            </div>
          </div>
          {/* <!-- single card end --> */}
          {/* <!-- single card --> */}
          <div class="shadow rounded bg-white px-4 pt-6 pb-8">
            <div class="flex justify-between items center mb-4">
              <h3 class="font-medium capitalize text-gray-800 text-lg">
                Billing Address
              </h3>
              <a href="#" class="text-primary">
                Edit
              </a>
            </div>
            <div class="space-y-1">
              <h4 class="text-gray-700 font-medium">Russell Ahmed</h4>
              <p class="text-gray-800">3891 Ranchview Dr.</p>
              <p class="text-gray-800">Richardson, Califora</p>
              <p class="text-gray-800">(123) 456-789</p>
            </div>
          </div>
          {/* <!-- single card end --> */}
        </div>
      </AccountWrapper>
    </Wrapper>
  );
};

export default Account;
