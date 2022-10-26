import Navigation from "../Component/Navigation";
import Movies from "../Component/Movies";
import SearchForm from "../Component/SearchForm";

const Home = () => {
  return (
    <main>
      <Navigation />
      <SearchForm />
      <Movies />
    </main>
  );
};

export default Home;
