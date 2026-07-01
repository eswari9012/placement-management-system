import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async () => {

    try {

      const response = await axios.post(

        "http://localhost:5000/api/auth/login",

        {

          email,

          password

        }

      );

      localStorage.setItem(

        "token",

        response.data.token

      );

      navigate("/dashboard");

    }

    catch(error){

      alert("Invalid credentials");

    }

  };

  return (

    <div className="login-container">

      <div className="login-card">

        <h1>🎓 Placement Portal</h1>
        <h3>Student Login</h3>

        <p>

Sign in to access your placement dashboard

</p>

        <input

          type="email"

          placeholder="Email"

          value={email}

          onChange={(e)=>

            setEmail(e.target.value)

          }

        />

        <input

          type="password"

          placeholder="Password"

          value={password}

          onChange={(e)=>

            setPassword(e.target.value)

          }

        />

        <button onClick={login}>

          Login

        </button>

      </div>

    </div>

  );

}

export default Login;