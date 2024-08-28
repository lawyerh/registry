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
          <p className="title bold">{pack.name}</p>
          <p className="result__version"> || -v {pack.version}</p>
          <p className="text">{pack.description}</p>
        </div>

        <Link className="link result__link" to={`/packages/${pack.name}`}>
          VIEW {pack.name.toUpperCase()} &rarr;
        </Link>
      </div>

      <ul className="result__list">
        <p className="text">Keywords:</p>
        {pack.keywords ? (
          pack.keywords.map((item) => (
            <li key={item} className="result__list-item">
              {item}
            </li>
          ))
        ) : (
          <p className="title">
            <span className="text bold">none</span>
          </p>
        )}
      </ul>
    </div>
  );
}
