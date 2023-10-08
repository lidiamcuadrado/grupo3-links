import { useAuth } from '../hooks/useAuth';
import defaultAvatar from '../../public/usuario.png'
import "./ProfilePage.css";

export default function ProfilePage() {
  const { authUser } = useAuth();
  const baseURL = import.meta.env.VITE_API_URL;
  const avatarImage = authUser?.avatar ? `${baseURL}/${authUser.avatar}` : defaultAvatar;

  return (
    <div className="profileContainer">
      <div className="profileAvatar">
        <img src={avatarImage} alt="Avatar" />
      </div>
      <div className="profileUserInfo">
        <h2>{authUser?.userId}</h2>
        <h2>{authUser?.username}</h2>
        <h3>{authUser?.userId}</h3>
        <h3>{authUser?.email}</h3>
      </div>

    </div>
    
  );
}
