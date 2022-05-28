import {createRoot} from 'react-dom/client';
import { App } from './App';

// render - recebe dois parametros o primeiro o que eu quero renderizar (exibir em tela)
// e o segundo é dentro de qual elemento eu quero renderizar essa informação

const container = document.getElementById('root')
const root = createRoot(container);
root.render(<App/>)
