import './index.css';
import ReactDOM from 'react-dom/client'; // Import from react-dom/client in React 18
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
); // Use createRoot in React 18
root.render(<App />);
