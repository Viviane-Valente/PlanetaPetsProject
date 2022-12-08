import "./perfil.css";
import profileImg from '../../assets/img/P1.png';
import profileFundo from '../../assets/img/heroimg.jpg';
import { useNavigate } from "react-router-dom";
import Button from "../Form/Button";
import useAuth from "../Form/useAuth";

export default function Perfil() {
    const { signout } = useAuth();
    const navigate = useNavigate();


  return (
    <div className="profile">
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
            <img
              className="profileCoverImg"
              src={profileFundo}
              alt=""
            />
            <img
              className="profileUserImg"
              src={profileImg}
              alt=""
            />
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">
              {localStorage.getItem('users_bd')}
            </h4>
          </div>
        </div>
        <div className="profileRightBottom" class="d-flex row justify-content-center">
          <div class="col-6">
            <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
              Sair
            </Button>
          </div>
          <div class="col-6">
            <Button Text="Configurações" onClick={() => [navigate("/config")]}>
              Sair
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}