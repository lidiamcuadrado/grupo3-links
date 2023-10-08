import PropTypes from "prop-types";
import { useState } from "react";
import '../pages/UpdateProfilePage.css'

const UpdateProfileForm = ({ authUpdateProfile, loading, userId }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUpdating(true);
    await authUpdateProfile(userId, username, email, password);

    setUsername("");
    setEmail("");
    setPassword("");

    setShowSuccessMessage(true);

    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
    window.location.reload();
  };

  return (
    <>
      <div className="auth-form-container">
        <form className="update-profile-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Username</label>
          <input
            value={username}
            name="name"
            onChange={(e) => setUsername(e.target.value)}
            id="name"
            placeholder="Username"
          />
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <label htmlFor="password">New Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <button className="log" disabled={loading || isUpdating}>
            {isUpdating ? "Updating..." : "Update Profile"}
          </button>
        </form>
      </div>
      {showSuccessMessage && (
        <div className="success-popup">
          <p>Your profile has updated successfully!</p>
        </div>
      )}
    </>
  );
};

UpdateProfileForm.propTypes = {
  updateProfile: PropTypes.func,
  loading: PropTypes.bool.isRequired,
};

export default UpdateProfileForm;