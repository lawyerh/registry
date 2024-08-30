import type { PackageDetails } from "../types/PackageDetails";

const FEATURED_PACKAGES = ["react", "typescript", "esbuild", "vite"];

export async function getFeaturedPackages() {
  const promises = FEATURED_PACKAGES.map(async (name) => {
    const res = await fetch(`https://registry.npmjs.org/${name}`);
    return res.json();
  });
  const data = await Promise.all(promises);
  console.log(data);

  return data as PackageDetails[];
}
