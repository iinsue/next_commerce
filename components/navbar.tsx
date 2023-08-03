import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="border-b">
      <div className="flex items-center h-16 px-4">
        <div>This will be a store switcher</div>
        <div>This will be the routes</div>
        <div className="flex items-center ml-auto space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
