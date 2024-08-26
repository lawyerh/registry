import fetchPackagesByName from "../../api/queries/fetchPackagesByName";
import { PackageSummary } from "../../api/types/PackageSummary";

export interface SearchLoaderResult {
  searchResults: PackageSummary[];
}

export const searchLoader = async ({
  request,
}: {
  request: Request;
}): Promise<SearchLoaderResult> => {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("term");

  if (!term) throw new Error();

  const res = await fetchPackagesByName(term);

  return {
    searchResults: res,
  };
};
