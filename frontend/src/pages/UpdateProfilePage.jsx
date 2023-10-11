import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import UpdateProfileForm from "../forms/UpdateProfileForm";
import Profile from "../components/ProfileSection/Profile";
import "./UpdateProfilePage.css";

// Importamos iconos
import { FaUserEdit } from "react-icons/fa";
import { CgClose } from "react-icons/cg";

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
              <div className="profileEditButtonContainer">
                <button
                  className="profileEditButton"
                  onClick={handleButtonClick}
                >
                  <CgClose />
                </button>
              </div>
              <UpdateProfileForm
                authUpdateProfile={authUpdateProfile}
                userId={authUser?.id}
                setShowUpdateForm={setShowUpdateForm}
                loading={loading}
              />
            </>
          ) : (
            <>
              <div className="profileEditButtonContainer">
                <button
                  className="profileEditButton"
                  onClick={handleButtonClick}
                >
                  <FaUserEdit />
                </button>
              </div>
              <Profile authUser={authUser} />
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default UpdateProfilePage;
