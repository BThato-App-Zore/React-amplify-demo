import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// import { Amplify} from 'aws-amplify';
// import awsconfig from './aws-exports';
// Amplify.configure(awsconfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
