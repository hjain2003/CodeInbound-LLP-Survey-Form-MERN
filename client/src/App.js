import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Survey from './components/SurveyPage/Survey';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/surveypage' element={<Survey/>}/>
    </Routes>

    </>
  );
}

export default App;
