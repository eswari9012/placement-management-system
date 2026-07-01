import {
  Link,
  useNavigate
} from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/");

  };

  return (

    <div className="navbar">

      <h2>Placement Portal 🎓</h2>

      <div>

        <Link to="/dashboard">

          <button>

            Dashboard

          </button>

        </Link>

        <Link to="/profile">

          <button>

            Profile

          </button>

        </Link>

        <Link to="/companies">

          <button>

            Companies

          </button>

        </Link>

        <Link to="/jobs">

          <button>

            Jobs

          </button>

        </Link>

        <Link to="/applications">

          <button>

            Applications

          </button>

        </Link>

        <button onClick={logout}>

          Logout

        </button>

      </div>

    </div>

  );

}

export default Navbar;