import { Outlet } from 'react-router-dom';
import Header from './Components/Header'

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: "'Poppins', sans-serif"
    }}>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
