import { useEffect, useState } from "react";

import axios from "axios";

import Navbar from "../components/Navebar";

function Applications() {

  const [applications, setApplications] = useState([]);

  useEffect(() => {

    fetchApplications();

  }, []);

  const fetchApplications = async () => {

    try {

      const token = localStorage.getItem("token");

      const response = await axios.get(

        "http://localhost:5000/api/applications",

        {

          headers: {

            Authorization:

            `Bearer ${token}`

          }

        }

      );

      setApplications(

        response.data

      );

    }

    catch(error){

      console.log(error);

    }

  };

  return (

    <>

      <Navbar />

      <div className="container">

        <h1>

          📄 My Applications

        </h1>

        <div className="applications-grid">

          {

            applications.map((app)=>(

              <div

                className="application-card"

                key={app._id}

              >

                <h2>

                  {app.job.title}

                </h2>

                <p>

                  🏢

                  {

                  app.job.company.companyName

                  }

                </p>

                <p>

                  📍

                  {

                  app.job.company.location

                  }

                </p>

                <p>

                  📅

                  {

                  new Date(

                  app.createdAt

                  ).toLocaleDateString()

                  }

                </p>

                <p>

                  Status:

                  <span

                  className={`status ${

                  app.status.toLowerCase()

                  }`}

                  >

                  {

                  app.status

                  }

                  </span>

                </p>

              </div>

            ))

          }

        </div>

      </div>

    </>

  );

}

export default Applications;