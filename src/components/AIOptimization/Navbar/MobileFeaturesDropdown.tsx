import { Link } from "react-router-dom";

interface MobileFeaturesDropdownProps {
  setMenuOpen: (value: boolean) => void;
}

const MobileFeaturesDropdown = ({ setMenuOpen }: MobileFeaturesDropdownProps) => {
  const industry = "cloud-finops-ai";
  const base = `/industries/${industry}`;

  return (
    <div className="border-b border-gray-200 pb-3">
      <Link
        to={`${base}/features`}
        onClick={() => setMenuOpen(false)}
        className="w-full text-left flex justify-between items-center text-gray-800 font-quadran font-regular"
      >
        Features
      </Link>
    </div>
  );
};

export default MobileFeaturesDropdown;
