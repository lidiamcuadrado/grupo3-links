import { useAuth } from '../hooks/useAuth';
import { useState } from 'react';
import UpdateProfileForm from '../forms/UpdateProfileForm';
import ProfilePage from './ProfilePage';
import './UpdateProfilePage.css'

// Importamos iconos
import { FaUserEdit } from "react-icons/fa"
import { CgClose } from "react-icons/cg"


const UpdateProfilePage = () => {
  const { authUpdateProfile, loading, authUser } = useAuth();

  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const handleButtonClick = () => {
    setShowUpdateForm(!showUpdateForm);
  };

  return (
    <main>
      <div className="profileBig">
        <div className="profileMedium">
          {showUpdateForm ? (
            <>
              <button className='profileEditButton' onClick={handleButtonClick}>
                <CgClose />
              </button>
              <UpdateProfileForm authUpdateProfile={authUpdateProfile} userId={authUser?.id} loading={loading} />
            </>
          ) : (
            <>
              <button className='profileEditButton' onClick={handleButtonClick}>
                <FaUserEdit />
              </button>
              <ProfilePage />
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default UpdateProfilePage;