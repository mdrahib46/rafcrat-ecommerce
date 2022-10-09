import Bredcrum from "../components/Bredcrum";
import AccountWrapper from "../components/layouts/AccountWrapper";
import Wrapper from "../components/layouts/Wrapper";

const ManageAddress = () => {
  return (
    <Wrapper title="Manage Address | RAFTCRAFT">
      <Bredcrum name="Account" name2="Manage Address" />
      <AccountWrapper>
        <div class="col-span-9 shadow rounded px-6 pt-5 pb-7 mt-6 lg:mt-0">
          <form action="">
            <h3 class="text-lg font-medium capitalize mb-4">Manage Address</h3>
            <div class="space-y-4">
              {/* <!-- Form row --> */}
              <div class="grid sm:grid-cols-2 gap-4">
                {/* <!-- Single input --> */}
                <div>
                  <label class="text-gray-600 mb-2 block">Full Name</label>
                  <input type="text" class="input-box" value="John" />
                </div>
                {/* <!-- single input end -->
                              <!-- single input --> */}
                <div>
                  <label class="text-gray-600 mb-2 block">Phone Number</label>
                  <input type="text" class="input-box" value="+123 456 789" />
                </div>
                {/* <!-- Single input end --> */}
              </div>
              {/* <!-- Form row end --> */}
              <div class="grid sm:grid-cols-2 gap-4">
                <div>
                  <label class="text-gray-600 mb-2 block">Country</label>
                  <select class="input-box">
                    <option>Bangladesh</option>
                    <option>Bidesh</option>
                  </select>
                </div>
                <div>
                  <label class="text-gray-600 mb-2 block">Region</label>
                  <select class="input-box">
                    <option>Dhaka</option>
                    <option>Noakhali</option>
                  </select>
                </div>
              </div>
              <div class="grid sm:grid-cols-2 gap-4">
                <div>
                  <label class="text-gray-600 mb-2 block">City</label>
                  <select class="input-box">
                    <option>Dhaka-North</option>
                    <option>Dhaka-South</option>
                  </select>
                </div>
                <div>
                  <label class="text-gray-600 mb-2 block">Area</label>
                  <select class="input-box">
                    <option>Notun Bazar</option>
                    <option>Gulshan</option>
                  </select>
                </div>
              </div>
              <div>
                <label class="text-gray-600 mb-2 block">Address</label>
                <input
                  type="text"
                  class="input-box"
                  value="Badda Notun Bazar"
                />
              </div>
            </div>
            <div class="mt-6">
              <button
                type="submit"
                class="px-6 py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
              >
                Save change
              </button>
            </div>
          </form>
        </div>
      </AccountWrapper>
    </Wrapper>
  );
};

export default ManageAddress;
