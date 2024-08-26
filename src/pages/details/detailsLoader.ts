import fetchSinglePackageByName from "../../api/queries/fetchSinglePackageByName";

import { Params } from "react-router-dom";
interface LoaderArgs {
  params: Params;
}

export const detailsLoader = async ({ params }: LoaderArgs) => {
  const { name } = params;

  if (!name) throw new Error();

  const data = await fetchSinglePackageByName(name);

  return {
    data,
  };
};
