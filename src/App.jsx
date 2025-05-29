import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: "'Poppins', sans-serif"
    }}>
      <Outlet />
    </div>
  );
}

export default App;
