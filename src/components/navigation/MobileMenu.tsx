
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/radix-button";
import { Link } from "react-router-dom";

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const MobileMenu = ({ isOpen, onToggle }: MobileMenuProps) => {
  return (
    <>
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="text-[var(--white)]"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-[var(--black)]/90 backdrop-blur-md border-b border-gray-800">
            <a
              href="#products"
              className="block px-3 py-2 text-base font-medium text-neutral-300 hover:text-[var(--white)]"
            >
              Products
            </a>
            <a
              href="#solutions"
              className="block px-3 py-2 text-base font-medium text-neutral-300 hover:text-[var(--white)]"
            >
              Solutions
            </a>
            <a
              href="#resources"
              className="block px-3 py-2 text-base font-medium text-neutral-300 hover:text-[var(--white)]"
            >
              Resources
            </a>
            <Link
              to="/open-source"
              className="block px-3 py-2 text-base font-medium text-neutral-300 hover:text-[var(--white)]"
            >
              Open Source
            </Link>
            <a
              href="/pricing"
              className="block px-3 py-2 text-base font-medium text-neutral-300 hover:text-[var(--white)]"
            >
              Pricing
            </a>
            <div className="px-3 py-2 space-y-2">
              <Button variant="ghost" className="w-full text-[var(--white)] hover:bg-[var(--white)]/10">
                <a href="https://cloud.hanzo.ai">Login</a>
              </Button>
              <Button className="w-full bg-[var(--white)] text-black hover:bg-gray-100">
                <a href="https://cloud.hanzo.ai/auth/sign-up">Signup</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
