import PropTypes from "prop-types";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../pages/UpdateProfilePage.css";

const UpdateProfileForm = ({
  authUpdateProfile,
  userId,
  setShowUpdateForm,
  loading,
}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [currentPasswordInput, setCurrentPasswordInput] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowCurrentPassword = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar que los campos no estén vacíos
    if (!username || !email) {
      toast.error("Usuario y e-mail son obligatorios", {
        position: "top-center",
      });
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Las nuevas contraseñas no coinciden", {
        position: "top-center",
      });
      return;
    }

    /*if (password === currentPassword || password === currentPasswordInput) {
      toast.error("La nueva contraseña debe ser diferente de la actual", {
        position: "top-center",
      });
      return;
    }*/

    // Lógica de actualización del perfil aquí...
    authUpdateProfile(userId, username, email, password);

    toast.success("Perfil actualizado con éxito", { position: "top-center" });

    // Cierra el formulario de actualización.
    setShowUpdateForm(false);

    // Limpia los campos de contraseña después de la actualización
    setPassword("");
    setConfirmPassword("");
    setCurrentPasswordInput("");
  };

  return (
    <>
      <div className="auth-form-container">
        <form className="update-profile-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Usuario</label>
              <input
                value={username}
                name="name"
                onChange={(e) => setUsername(e.target.value)}
                id="name"
                placeholder="Nombre de usuario"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="tucorreo@gmail.com"
                id="email"
                name="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="currentPassword">Contraseña actual</label>
              <div className="password-input-container">
                <input
                  value={currentPasswordInput}
                  onChange={(e) => setCurrentPasswordInput(e.target.value)}
                  type={showCurrentPassword ? "text" : "password"}
                  placeholder="********"
                  id="currentPassword"
                  name="currentPassword"
                />
                <button
                  type="button"
                  onClick={toggleShowCurrentPassword}
                  className="password-toggle-button"
                >
                  {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">Nueva contraseña</label>
              <div className="password-input-container">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  id="password"
                  name="password"
                />
                <button
                  type="button"
                  onClick={toggleShowPassword}
                  className="password-toggle-button"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Repetir nueva contraseña</label>
              <div className="password-input-container">
                <input
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="********"
                  id="confirmPassword"
                  name="confirmPassword"
                />
                <button
                  type="button"
                  onClick={toggleShowConfirmPassword}
                  className="password-toggle-button"
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
          </div>

          <button className="log" disabled={loading}>
            Actualizar
          </button>
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

UpdateProfileForm.propTypes = {
  authUpdateProfile: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  userId: PropTypes.string.isRequired,
  currentPassword: PropTypes.string.isRequired,
};

export default UpdateProfileForm;
