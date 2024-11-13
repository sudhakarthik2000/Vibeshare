


import { Route, Routes, useLocation } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import AuthenPage from './Authenpage/Authen';
import PageLayout from './Layouts/pageLayout';
import ProfilePage from './pages/Homepage/ProfilePage/ProfilePage';
// import useAuthStore from './store/authStore';

function App() {

  //  const authUser = useAuthStore(state => state.user)
  const location = useLocation();

  // Sidebar should not be shown on the '/authen' page
  const showSidebar = location.pathname !== '/authen';

  return (
    <PageLayout showSidebar={showSidebar}>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/authen' element={<AuthenPage />} />
        <Route path='/:username' element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
