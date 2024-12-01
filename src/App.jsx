<<<<<<< HEAD
import CombinedSearch from "./components/CombinedSearch";
=======
import './App.css'
import Footer from './components/Footer'
import Form from './components/Form'
import Header from './components/Header'
import Recommendations from './components/Recommendations.Jsx'
import { MovieProvider } from './components/State'
>>>>>>> 2441cd71d064e87a1c31ef7368682ddb2f347f73

function App() {
  return (
<<<<<<< HEAD
    <div>
      <h1>Welcome to the Movie Picker</h1>
      <CombinedSearch />
    </div>
=======
    <>
    <MovieProvider>
      <Header />
      <div className="form-container">
        <Form  />
      </div>
      <div className="movies-container">
        {/* <Movies /> */}
        <Recommendations />
      </div>
      <Footer />
      </MovieProvider>
    </>
>>>>>>> 2441cd71d064e87a1c31ef7368682ddb2f347f73
  );
}

export default App;
