import { useLoaderData } from "react-router-dom";
import type { HomeLoaderResult } from "./HomeLoader";
import HomeFeatureItem from "../../components/HomeFeatureItem";

export default function HomePage() {
  const { featuredPackages } = useLoaderData() as HomeLoaderResult;
  console.log(featuredPackages);

  const mapFeatures = featuredPackages.map((item) => {
    return (
      <HomeFeatureItem
        key={item.name}
        title={item.name}
        description={item.description}
        maintainers={item.maintainers}
      />
    );
  });

  return <div className="home-page">{mapFeatures}</div>;
}
