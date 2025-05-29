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
      <div style={{
        paddingTop: '80px',  // Add padding to account for the fixed header
        flex: 1,
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '80px 20px 20px'  // Top padding accounts for header
      }}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
