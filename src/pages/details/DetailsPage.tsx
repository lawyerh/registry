import { useLoaderData } from "react-router-dom";
import { DetailsLoaderResult } from "./detailsLoader";

export default function DetailsPage() {
  const { data } = useLoaderData() as DetailsLoaderResult;

  return (
    <div className="details-page">
      <div className="details__container">
        <p className="details__title">{data.name}</p>
        <p className="details__text">{data.description}</p>
      </div>

      <div className="details__container">
        <p className="details__label">Author:</p>
        <p className="details__text">{data.author?.name}</p>
        <p className="details__text">{data.author?.email}</p>
        {!data.author && <p className="details__text">Unknown</p>}
      </div>

      <div className="details__container">
        <p className="details__label">License:</p>
        <p className="details__text">{data.license}</p>
      </div>
    </div>
  );
}
