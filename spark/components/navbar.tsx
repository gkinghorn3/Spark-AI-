

import { UserButton } from "@clerk/nextjs";


import MobileSidebar from '@/components/mobileSidebar';

const Navbar = () => {
  return (
    <>
      <div className="flex items-center p-4 justify-between">
        <MobileSidebar />
        <UserButton afterSignOutUrl="/" />
      </div>

    </>
  );
};

export default Navbar;
