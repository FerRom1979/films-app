import SearchMovie from "./components/SearchMovie/index";
import Header from "./components/Header/index";
import Billboard from "./components/Billboard/index";
import { GetData } from "./assets/getData";
import "./App.css";

function App() {
  const {
    callback,
    moviePopular,
    infoMovie,
    newNameMovie,
    nameMovie,
    apiError,
    apiErrorPopular,
  } = GetData();

  return (
    <div className="App">
      <Header />
      <SearchMovie callback={callback} apiError={apiError} />
      <Billboard
        moviePopular={moviePopular}
        infoMovie={infoMovie}
        nameMovie={nameMovie}
        apiErrorPopular={apiErrorPopular}
        newNameMovie={newNameMovie}
      />
    </div>
  );
}

export default App;
