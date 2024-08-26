import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegistrySearch() {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate(`/search?term=${term}`)
  };
  return (
    <form onSubmit={handleSubmit} className="search_form">
      <button className="search_submit">GO</button>
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
