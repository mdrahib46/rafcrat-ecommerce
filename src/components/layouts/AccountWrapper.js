import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import avatar from "../../assets/images/avatar.png";
import { userLoggedOut } from "../../features/auth/authSlice";

const AccountWrapper = ({ children }) => {
  const dispatch = useDispatch();
    // logout
    const logout = () => {
      dispatch(userLoggedOut());
      localStorage.clear();
  }
  return (
    <div class="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
      {/* <!-- sidebar --> */}
      <div class="col-span-3">
        {/* <!-- account profile --> */}
        <div class="px-4 py-3 shadow flex items-center gap-4">
          <div class="flex-shrink-0">
            <img
              src={avatar}
              alt="avatar"
              class="rounded-full w-14 h-14 p-1 border border-gray-200 object-cover"
            />
          </div>
          <div>
            <p class="text-gray-600">Hello,</p>
            <h4 class="text-gray-800 capitalize font-medium">Russell Ahmed</h4>
          </div>
        </div>
        {/* <!-- account profile end --> */}

        {/* <!-- profile NavLinks --> */}
        <div class="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
          {/* <!-- single NavLink --> */}
          <div class="space-y-1 pl-8">
            <NavLink
              to="/account"
              className={(navInfo) =>
                navInfo.isActive
                  ? "relative text-base font-medium capitalize hover:text-primary transition block text-primary"
                  : "hover:text-primary transition capitalize block relative text-base font-medium"
              }
              end={true}
            >
              Manage account
              <span class="absolute -left-8 top-0 text-base">
                <i class="far fa-address-card"></i>
              </span>
            </NavLink>
            <NavLink
              to="/account/profile-info"
              className={(navInfo) =>
                navInfo.isActive
                  ? "relative text-base font-medium capitalize hover:text-primary transition block text-primary"
                  : "hover:text-primary transition capitalize block"
              }
            >
              Profile information
            </NavLink>
            <NavLink
              to="/account/manage-address"
              className={(navInfo) =>
                navInfo.isActive
                  ? "relative text-base font-medium capitalize hover:text-primary transition block text-primary"
                  : "hover:text-primary transition capitalize block"
              }
            >
              Manage address
            </NavLink>

            <NavLink
              to="/account/change-password"
              className={(navInfo) =>
                navInfo.isActive
                  ? "relative text-base font-medium capitalize hover:text-primary transition block text-primary"
                  : "hover:text-primary transition capitalize block"
              }
            >
              Change Password
            </NavLink>
          </div>
          {/* <!-- single NavLink end -->
                <!-- single NavLink --> */}
          <div class="space-y-1 pl-8 pt-4">
            <NavLink
              to="/account/order-history"
              className={(navInfo) =>
                navInfo.isActive
                  ? "relative text-base font-medium capitalize hover:text-primary transition block text-primary"
                  : "relative text-base font-medium hover:text-primary transition capitalize block"
              }
            >
              My order history
              <span class="absolute -left-8 top-0 text-base">
                <i class="fas fa-gift"></i>
              </span>
            </NavLink>

            <NavLink
              to="/account/reviews"
              className={(navInfo) =>
                navInfo.isActive
                  ? "relative text-base font-medium capitalize hover:text-primary transition block text-primary"
                  : "relative text-base font-medium hover:text-primary transition capitalize block"
              }
            >
              my reviews
            </NavLink>
          </div>
          {/* <!-- single NavLink end -->
                <!-- single NavLink --> */}
          <div class="space-y-1 pl-8 pt-4">
            <div class="relative medium capitalize text-gray-800 font-medium hover:text-primary transition block">
              Payment methods
              <span class="absolute -left-8 top-0 text-base">
                <i class="far fa-credit-card"></i>
              </span>
            </div>
            <div class="hover:text-primary transition block capitalize">
              Voucher
            </div>
          </div>
          {/* <!-- single NavLink end -->
                <!-- single NavLink --> */}
          <div class="pl-8 pt-4">
            <NavLink
              to="/account/wishlist"
              className={(navInfo) =>
                navInfo.isActive
                  ? "relative text-base font-medium capitalize hover:text-primary transition block text-primary"
                  : "relative text-base font-medium hover:text-primary transition capitalize block"
              }
            >
              my wishlist
              <span class="absolute -left-8 top-0 text-base">
                <i class="far fa-heart"></i>
              </span>
            </NavLink>
          </div>
          {/* <!-- single NavLink end --> */}
          {/* <!-- single NavLink --> */}
          <div class="pl-8 pt-4">
            <button onClick={logout} class="relative medium capitalize text-gray-800 font-medium hover:text-primary transition block">
              logout
              <span class="absolute -left-8 top-0 text-base">
                <i class="fas fa-sign-out-alt"></i>
              </span>
            </button>
          </div>
          {/* <!-- single NavLink end --> */}
        </div>
        {/* <!-- profile NavLinks end --> */}
      </div>
      {/* <!-- sidebar end --> */}

      {/* <!-- account content --> */}
      {children}
      {/* <!-- account content end --> */}
    </div>
  );
};

export default AccountWrapper;
