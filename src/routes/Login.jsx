import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = ({ setIsLoggedIn, isLoggedIn }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      userName: userName,
      password: password,
    };

    try {
      const response = await axios.post("http://localhost:3000/users/login", formData);

      console.log(response); 

      if (response.status === 201) {
        console.log("Inicio de sesión exitoso");

        navigate("/dashboard")
      } else {
        setError("Credenciales inválidas");
      }
    } catch (error) {
      console.error(error);

      if (error.response && error.response.status === 401) {
        setError("Credenciales inválidas");
      } else {
        setError("Ocurrió un error, inténtelo más tarde.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url("./src/assets/background-image.jpg")' }}>
      <div style={{ borderColor: "#32a873" }} className="border-3 rounded-lg p-6 mx-10 shadow-md bg-white w-[400px]">
        <h2 className="text-2xl font-bold mb-6">Iniciar sesión como administrador</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userName">
              Nombre de Usuario
            </label>
            <input
              className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="userName"
              type="text"
              placeholder="Ingrese su nombre de usuario"
              value={userName}
              onChange={handleUserNameChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Contraseña
            </label>
            <div className="flex">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Ingrese su contraseña"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <div className="input-group-append">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={toggleShowPassword}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="flex justify-center bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Iniciar sesión
            </button>
          </div>
        </form>

        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default Login;