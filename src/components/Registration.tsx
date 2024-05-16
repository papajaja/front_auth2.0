import React, { MouseEvent, useState } from "react";
import "./Login.scss";
import AuthService from "../services/AuthService";
import StringValidator from "../utils/StringValidator";
import { useNavigate } from "react-router-dom";
import "./Registration.scss";
import ChooseGender from "./ui/ChooseGender";
import { AxiosError, AxiosResponse } from "axios";
import { AuthResponse } from "../models/AuthResponse";
import { IUser } from "../models/IUser";
import { useAppDispatch } from "../hooks/redux";
import { setUser } from "../redux/userSlice";
import CloudSvg from "../images/CloudSvg";

interface IRegistration {
  setRotate: (n: number) => void;
}

const Registration: React.FC<IRegistration> = ({ setRotate }) => {
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [usernameError, setUsernameError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [gender, setGender] = useState<string>("");

  const warningColor = "rgba(255, 0, 0, 0.7)";

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const validateData = (): boolean => {
    const usernameRegex = /^[A-Za-z]{6,32}$/;
    let isPossible: boolean = true;
    if (!StringValidator.isEmail(email)) {
      setEmailError("Некорректная почта");
      isPossible = false;
    }
    if (email.length === 0) {
      setEmailError("Поле не может быть пустым");
      isPossible = false;
    }
    if (password.length < 6) {
      setPasswordError("Слишком короткий пароль");
      isPossible = false;
    }
    if (password.length > 32) {
      setPasswordError("Слишком длинный пароль");
      isPossible = false;
    }
    if (password.length === 0) {
      setPasswordError("Поле не может быть пустым");
      isPossible = false;
    }
    if (!usernameRegex.test(username)) {
      setUsernameError("Запрещенные символы");
      isPossible = false;
    }
    if (username.length < 6) {
      setUsernameError("Слишком короткий никнейм");
      isPossible = false;
    }
    if (username.length > 32) {
      setUsernameError("Слишком длинный никнейм");
      isPossible = false;
    }
    if (!gender.length) {
      isPossible = false;
    }
    if (username.length === 0) {
      setUsernameError("Поле не может быть пустым");
      isPossible = false;
    }
    return isPossible;
  };

  async function registration(e: MouseEvent) {
    e.preventDefault();

    if (!validateData()) {
      return;
    }

    AuthService.registration(email, username, password, gender)
      .then((response: AxiosResponse<AuthResponse>) => {
        const user: IUser = {
          id: response.data?.id,
          username: response.data?.username,
          email: response.data?.email,
          disk_space: response.data?.disk_space,
          used_space: response.data?.used_space,
          gender: response.data?.gender,
        };

        dispatch(setUser(user));
        localStorage.setItem("token", response.data?.access);
        navigate("/");
      })
      .catch((error: AxiosError) => {
        setEmailError(error.response?.data as string);
      });
  }

  return (
    <article className="registration">
      <div className="login_title">
        <CloudSvg />
        <h1 className="title_text">CloudStorage</h1>
      </div>
      <form action="" className="registration_form">
        <div className="email_cont">
          <input
            style={{ borderColor: usernameError ? warningColor : "" }}
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setUsernameError("");
            }}
            className="login_input"
            type="text"
            placeholder="username"
          />
          <p
            style={{ "--warningColor": warningColor } as React.CSSProperties}
            className="auth_error"
          >
            {usernameError}
          </p>
        </div>
        <div className="email_cont">
          <input
            style={{ borderColor: emailError ? warningColor : "" }}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
            className="login_input"
            type="text"
            placeholder="e-mail"
          />
          <p
            style={{ "--warningColor": warningColor } as React.CSSProperties}
            className="auth_error"
          >
            {emailError}
          </p>
        </div>
        <div className="password_cont">
          <input
            style={{ borderColor: passwordError ? warningColor : "" }}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError("");
            }}
            className="login_input"
            type="password"
            placeholder="password"
          />
          <p
            style={{ "--warningColor": warningColor } as React.CSSProperties}
            className="auth_error"
          >
            {passwordError}
          </p>
        </div>
        <ChooseGender gender={gender} setGender={setGender} />
        <button onClick={registration} className={"login_confirm"}>
          Зарегистрироваться
        </button>
      </form>
      <button onClick={() => setRotate(0)} className="switch_button">
        Вход
      </button>
    </article>
  );
};

export default Registration;
