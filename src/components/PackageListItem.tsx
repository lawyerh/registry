import type { PackageSummary } from "../api/types/PackageSummary";
import { Link } from "react-router-dom";

interface PackageListItemProps {
  pack: PackageSummary;
}

export function PackageListItem({ pack }: PackageListItemProps) {
  return (
    <div className="result">
      <div className="result__info">
        <p className="result__title"></p>
        <p className="result__description"></p>
        <ul className="result__list">
          <li className="result__list-item"></li>
        </ul>
      </div>

      <Link className="result__link" to="/details"></Link>
    </div>
  );
}
