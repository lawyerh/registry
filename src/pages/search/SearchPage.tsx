import { useLoaderData } from "react-router-dom";
import type { PackageSummary } from "../../api/types/PackageSummary";
import { SearchLoaderResult } from "./searchLoader";

export default function SearchPage() {
  const data = useLoaderData() as SearchLoaderResult;

  console.log(data);
  return <div className="search">Search</div>;
}
