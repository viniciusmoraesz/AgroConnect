import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="app" style={{ minHeight: '100vh' }}>
      <Outlet />
    </div>
  );
}

export default App;
