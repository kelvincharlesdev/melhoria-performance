import ReactDOM from 'react-dom/client'
import './index.css';
import { MarketPlace } from './pages/MarketPlace';
import { ListKeys } from './pages/ListKeys';
import { ContadorComErros } from './pages/ContadorComErros';
import { CampoDeBusca } from './pages/CampoDeBusca';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <CampoDeBusca />
)
