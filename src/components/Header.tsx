import { Link } from "react-router-dom";
import RegistrySearch from "./RegistrySearch";

export default function Header() {

  
  return (
    <header className="header">
      <Link className="link" to="/">
        NPM Registry
      </Link>
      <RegistrySearch />
    </header>
  );
}
