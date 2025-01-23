import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import Search from "./pages/Search/Search";
import MovieDetails from "./pages/MovieDetails/MovieDetails";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={ <MainPage /> } />
      <Route path="/search" element={ <Search />} />
      <Route path="/movies/:movieId" element={<MovieDetails />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
