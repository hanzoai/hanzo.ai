import { useState, ReactNode } from "react";
import { ChevronDown } from "lucide-react";

type NavMenuProps = {
  label: string;
  children: ReactNode;
};

export const NavMenu = ({ label, children }: NavMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Pass closeMenu function to children if they are a function
  const childrenWithProps = typeof children === "function" 
    ? children(closeMenu) 
    : children;

  return (
    <div className="relative">
      {/* Menu trigger button */}
      <button
        onClick={toggleMenu}
        className={`${isOpen ? 'text-white' : 'text-neutral-300'} hover:text-white transition-colors inline-flex items-center outline-none focus:outline-none`}
      >
        {label}
        <ChevronDown
          className={`ml-1 h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown content */}
      {isOpen && (
        <>
          {/* Fullscreen backdrop overlay */}
          <div
            className="fixed inset-0 bg-[#000000]/95 backdrop-blur-md z-50"
            style={{ top: 'var(--header-height)', height: 'calc(100vh - var(--header-height))' }}
            onClick={closeMenu}
          >
            {/* Menu content with click propagation stopped */}
            <div 
              className="relative w-full h-full overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {childrenWithProps}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NavMenu;