import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import { Title } from './components/title.jsx'
import Description from './components/description.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <Title />
    <Description />
  </StrictMode>,
);



