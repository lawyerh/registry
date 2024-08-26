import fetchSinglePackageByName from "../../api/queries/fetchSinglePackageByName";
import { PackageDetails } from "../../api/types/PackageDetails";
import { Params } from "react-router-dom";
interface LoaderArgs {
  params: Params;
}

export interface DetailsLoaderResult {
  data: PackageDetails;
}

export const detailsLoader = async ({
  params,
}: LoaderArgs): Promise<DetailsLoaderResult> => {
  const { name } = params;

  if (!name) throw new Error();

  const data = await fetchSinglePackageByName(name);

  return {
    data,
  };
};
