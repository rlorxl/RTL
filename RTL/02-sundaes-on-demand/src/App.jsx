import './App.css';
import { Container } from 'react-bootstrap/Container';

// import Options from './pages/entry/Options';
// import SummaryForm from './pages/summary/SummaryForm';
import OrderEntry from './pages/entry/OrderEntry';
import { OrderDetailsProvider } from './context/OrderDetails';

function App() {
  return (
    <Container>
      <OrderDetailsProvider>
        <OrderEntry />
      </OrderDetailsProvider>
    </Container>
  );
}

export default App;
