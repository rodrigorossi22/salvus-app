import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('Iniciando aplicação Salvus...');
const rootElement = document.getElementById("root");
console.log('Elemento root:', rootElement);
if (rootElement) {
  createRoot(rootElement).render(<App />);
  console.log('App renderizado com sucesso!');
} else {
  console.error('Elemento root não encontrado!');
}
