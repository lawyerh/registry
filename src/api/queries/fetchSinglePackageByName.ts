import type { PackageDetails } from "../types/PackageDetails";

export default async function fetchSinglePackageByName(
  term: string
): Promise<PackageDetails> {
  const res = await fetch(`https://registry.npmjs.org/${term}`);

  const data: PackageDetails = await res.json();

  return data;
}
