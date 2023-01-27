import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
export const API_URL = "http://localhost:8000/api/students/";


 const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);