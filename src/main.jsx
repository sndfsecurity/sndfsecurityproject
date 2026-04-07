import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from "./context/CartContext";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
<<<<<<< HEAD
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
);
=======
    <App />
  </StrictMode>  // Fixed: removed extra </App>
)
>>>>>>> f91e9ff262fb705a9a8993acee94004d88908c9c
