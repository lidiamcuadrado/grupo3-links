import { useAuth } from '../hooks/useAuth';
import { useState } from 'react';
import UpdateProfileForm from '../forms/UpdateProfileForm';
import ProfilePage from './ProfilePage';
import './UpdateProfilePage.css'
// import { Navigate } from 'react-router-dom';

const UpdateProfilePage = () => {
  const { authUpdateProfile, loading, authUser } = useAuth();

  // Si la persona no esta logeada redirigimos a la página principal.
  // if (!authUser) return <Navigate to="/users/register" />
  const [showProfileSmall, setShowProfileSmall] = useState(false);

  const handleButtonClick = () => {
    setShowProfileSmall(true);
  };

  const handleCloseProfile = () => {
    setShowProfileSmall(false);
  };

  return (
    <main>
      <div className="profileBig">
        <div className="profileMedium"> 
        <button className='profileEditButton' onClick={handleButtonClick}>
          editar perfil
        </button>
        <ProfilePage />
        </div>
        {showProfileSmall && (
      <div className="profilesmall">
        <button className='profileEditButton' onClick={handleCloseProfile}>
          cerrar perfil
        </button>
      <UpdateProfileForm authUpdateProfile={authUpdateProfile} userId={authUser?.id} loading={loading} />
      </div>
      )}
      </div>
    </main>
  );
};

export default UpdateProfilePage;