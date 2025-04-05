
import { Link } from "react-router-dom";

interface SolutionCategoryProps {
  title: string;
  items: string[];
}

export const SolutionCategory = ({ title, items }: SolutionCategoryProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              to={`/solutions/${title.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-neutral-300 hover:text-white transition-colors"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
