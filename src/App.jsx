import './App.css'
// import { useState } from 'react'
import Footer from './components/Footer'
import Form from './components/Form'
import Header from './components/Header'
// import fetchMovies from './functions/searcher'
function App() {
  // const [movies, setMovies] = useState([]);

  // const handleSearch = async () => {
  //   const data = await fetchMovies();
  //   setMovies(data);
  // };

  return (
    <>
      <Header />
      <div className="form-container">
        <Form />
        {/* <button onClick={handleSearch}>Search</button> */}
      </div>
      <div className="movies-container">
  

      </div>
      <Footer />
    </>
  );
}

export default App
