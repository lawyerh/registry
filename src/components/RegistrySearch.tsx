import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "./icons/SearchIcon";

export default function RegistrySearch() {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate(`/search?term=${term}`);
    setTerm("");
  };
  return (
    <form onSubmit={handleSubmit} className="search__form">
      <button className="search__submit">
        <SearchIcon styling="search__icon" />
      </button>
      <input
        value={term}
        onChange={(e) => {
          setTerm(e.target.value);
        }}
        type="text"
        className="search__input"
      />
    </form>
  );
}
