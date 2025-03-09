
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  link: string;
  linkText: string;
}

const SectionHeader = ({ title, link, linkText }: SectionHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <Link to={link}>
        <h3 className="text-xl font-semibold text-white hover:text-gray-300 transition-colors">
          {title}
        </h3>
      </Link>
      <Link to={link} className="text-sm text-purple-400 hover:text-purple-300 flex items-center group">
        {linkText}
        <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </div>
  );
};

export default SectionHeader;
