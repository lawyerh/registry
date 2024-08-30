import { Link } from "react-router-dom";

interface HomeFeatureProps {
  title: string;
  description: string;
  maintainers: {
    name: string; 
    email: string;
}[];
}

export default function HomeFeatureItem({
  title,
  description,
  maintainers,
}: HomeFeatureProps) {

    const renderMaintainers: JSX.Element[] = maintainers.map(item => {
        return <ul key={item.name} className="feature__list-item">{item.name}</ul>
    })

    return (
        <div className="feature">
            <p className="title">{title}</p>
            <p className="text">{description}</p>
            <ul className="feature__list">
                {renderMaintainers}
            </ul>
            <Link to={`/packages/${title}`} className="link">{title}&rarr;</Link>
        </div>
    )
}
