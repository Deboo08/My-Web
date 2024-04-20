import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./HomePage/HomePage";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" Component={HomePage}/>
                </Routes>
            </Router>
        </div>
    );
}
export default App;

