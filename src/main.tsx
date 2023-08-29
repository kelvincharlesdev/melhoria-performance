import ReactDOM from 'react-dom/client'
import './index.css';
import { MarketPlace } from './pages/MarketPlace';
import { ListKeys } from './pages/ListKeys';
import { ContadorComErros } from './pages/ContadorComErros';
import { CampoDeBusca } from './pages/CampoDeBusca';
import Chat from './pages/Chat';
import { ColorResponsive } from './pages/ColorResponsive';

ReactDOM.createRoot(document.getElementById('root')!).render(
    // <CampoDeBusca />
    // <Chat />
    // <ColorResponsive />
    // <ContadorComErros />
    // <ListKeys />
    <MarketPlace/>

)
