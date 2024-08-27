import type { PackageSummary } from "../api/types/PackageSummary";
import { Link } from "react-router-dom";

interface PackageListItemProps {
  pack: PackageSummary;
}

export function PackageListItem({ pack }: PackageListItemProps) {
  return (
    <div className="result">
      <div className="result__container">
        <div className="result__info">
          <p className="result__title">
            <span className="bold">{pack.name}</span>
            <span className="result__version"> || -v {pack.version}</span>
          </p>
          <p className="result__description">{pack.description}</p>
        </div>

        <Link className="link result__link" to={`/packages/${pack.name}`}>
          VIEW {pack.name.toUpperCase()}
        </Link>
      </div>

      <ul className="result__list">
        {pack.keywords &&
          pack.keywords.map((item) => (
            <li key={item} className="result__list-item">
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
}
