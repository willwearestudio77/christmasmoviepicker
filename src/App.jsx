import './App.css'
import Footer from './components/Footer'
import Form from './components/Form'
import Header from './components/Header'
import { MovieProvider } from './components/State'
import Recommendations from './components/Recommendations'
function App() {

  return (
    <>
    <MovieProvider>
      <div className="app-container">
      <Header />
      <div className="form-container max-w-screen-md m-auto p-10 rounded-sm">
        <Form  />
      </div>
      <div className="movies-container">
        <Recommendations />
      </div>
      <Footer />
      </div>
      </MovieProvider>
    </>
  );
}

export default App
