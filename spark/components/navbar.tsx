

import { UserButton } from "@clerk/nextjs";


import MobileSidebar from '@/components/mobileSidebar';

const Navbar = () => {
  return (
    <>
      <div className="flex items-center p-4">
        <MobileSidebar />
      </div>
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  );
};

export default Navbar;
