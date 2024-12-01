import './App.css'
import Footer from './components/Footer'
import Form from './components/Form'
import Header from './components/Header'
import Recommendations from './components/Recommendations.Jsx'
import { MovieProvider } from './components/State'

function App() {

  return (
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
  );
}

export default App
