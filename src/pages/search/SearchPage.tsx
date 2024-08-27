import { useLoaderData } from "react-router-dom";
import { SearchLoaderResult } from "./searchLoader";
import { PackageListItem } from "../../components/PackageListItem";

export default function SearchPage() {
  const { searchResults } = useLoaderData() as SearchLoaderResult;

  return (
    <div className="search-page">
      <h2 className="h2">Search Results:</h2>
      <div className="search">
        {searchResults
          ? searchResults.map((item) => {
              return <PackageListItem pack={item} key={item.name} />;
            })
          : ""}
      </div>
    </div>
  );
}
