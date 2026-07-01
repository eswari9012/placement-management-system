import Navbar from "../components/Navebar";

function Dashboard() {

  return (

    <>

      <Navbar />

      <div className="container">

        <div className="dashboard-header">

          <div>

            <h1>

              Welcome back, Ram 👋

            </h1>

            <p>

              Campus Placement Management System

            </p>

          </div>

        </div>

        <div className="stats-grid">

          <div className="stat-card">

            <h2>12</h2>

            <p>Total Jobs</p>

          </div>

          <div className="stat-card">

            <h2>4</h2>

            <p>Applied</p>

          </div>

          <div className="stat-card">

            <h2>2</h2>

            <p>Shortlisted</p>

          </div>

          <div className="stat-card">

            <h2>8</h2>

            <p>Companies</p>

          </div>

        </div>

        <div className="section">

          <h2>🔔 Notifications</h2>

          <div className="notification">

            🎉 TCS shortlisted your application.

          </div>

          <div className="notification">

            💼 Infosys is hiring Software Engineers.

          </div>

          <div className="notification">

            📅 New job deadline: 31 Dec 2026.

          </div>

        </div>

      </div>

    </>

  );

}

export default Dashboard;