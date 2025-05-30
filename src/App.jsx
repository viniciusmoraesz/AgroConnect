import { Outlet } from 'react-router-dom';
import Header from './Components/Header';
import AccessibilityTools from './Components/AccessibilityTools';

function App() {
  return (
    <>
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'Poppins', sans-serif"
      }}>
        <Header />
        <div style={{
          paddingTop: '80px',  // Adicionar um pouco de padding para o Header
          flex: 1,
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '80px 20px 20px'  // "Top" padding para o Header
        }}>
          <Outlet />
        </div>
      </div>
      <AccessibilityTools />
    </>
  );
}

export default App;
