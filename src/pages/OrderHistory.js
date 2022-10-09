import Bredcrum from "../components/Bredcrum";
import AccountWrapper from "../components/layouts/AccountWrapper";
import Wrapper from "../components/layouts/Wrapper";

const OrderHistory = () => {
  return (
    <Wrapper title="Order History">
      <Bredcrum name="Account" name2="Order History" />
      <AccountWrapper>
        <div class="col-span-9 overflow-x-auto relative shadow sm:rounded-lg">
          <h3 className="text-lg p-5 text-gray-700 font-medium font-roboto uppercase mb-4">
            My Orders
          </h3>
          <table class="w-full text-sm text-left text-gray-500 ">
            <thead class="text-xs text-gray-700 uppercase font-roboto bg-gray-50">
              <tr>
                <th scope="col" class="py-3 px-6">
                  Product name
                </th>
                <th scope="col" class="py-3 px-6">
                  Color
                </th>
                <th scope="col" class="py-3 px-6">
                  Category
                </th>
                <th scope="col" class="py-3 px-6">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b 700 hover:bg-gray-50">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17"
                </th>
                <td class="py-4 px-6">Sliver</td>
                <td class="py-4 px-6">Laptop</td>
                <td class="py-4 px-6">$2999</td>
              </tr>
            </tbody>
          </table>
        </div>
      </AccountWrapper>
    </Wrapper>
  );
};

export default OrderHistory;
