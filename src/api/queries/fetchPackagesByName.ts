import type { PackageSummary } from "../types/PackageSummary";

interface SearchResponse {
  objects: {
    package: {
      name: string;
      description: string;
      version: string;
      keywords: string[];
    };
  }[];
}

export default async function fetchPackagesByName(
  term: string
): Promise<PackageSummary[]> {
  const res = await fetch(
    `https://registry.npmjs.org/-/v1/search?text=${term}`
  );

  const data: SearchResponse = await res.json();

  return data.objects.map(
    ({ package: { name, version, description, keywords } }) => {
      return {
        name,
        description,
        version,
        keywords,
      };
    }
  );
}
