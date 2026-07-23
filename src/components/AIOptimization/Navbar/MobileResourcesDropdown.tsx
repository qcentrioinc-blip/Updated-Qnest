import { Link } from "react-router-dom";

interface MobileResourcesDropdownProps {
  setMenuOpen: (value: boolean) => void;
}

const MobileResourcesDropdown = ({ setMenuOpen }: MobileResourcesDropdownProps) => {
  return (
    <div className="border-b border-gray-200 pb-3">
      <Link
        to="/industries/cloud-finops-ai/resources/whyclouddiet/clouddiet"
        onClick={() => setMenuOpen(false)}
        className="w-full text-left flex justify-between items-center text-gray-800 font-quadran font-regular"
      >
        Resources
      </Link>
    </div>
  );
};

export default MobileResourcesDropdown;
