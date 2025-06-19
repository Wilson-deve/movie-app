import { useState } from "react";
import Search from "./components/Search";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <main className="pattern">
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>
            Discover <span className="text-gradient">Movies</span> You’ll Love
            Instantly
          </h1>
        </header>

        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <h1>
          {searchTerm ? `Searching for "${searchTerm}"` : "Popular Movies"}
        </h1>
      </div>
    </main>
  );
}

export default App;
