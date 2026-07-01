import { useEffect, useState } from "react";

import axios from "axios";

import Navbar from "../components/Navebar";

function Jobs() {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {

    const fetchJobs = async () => {

      try {

        const response = await axios.get(

          "http://localhost:5000/api/jobs"

        );

        setJobs(response.data);

      }

      catch(error){

        console.log(error);

      }

    };

    fetchJobs();

  }, []);

  const applyJob = async (jobId) => {

    try {

      const token =

      localStorage.getItem("token");

      await axios.post(

        `http://localhost:5000/api/applications/${jobId}`,

        {},

        {

          headers: {

            Authorization:

            `Bearer ${token}`

          }

        }

      );

      alert("Application Submitted");

    }

    catch(error){

      alert(

        "Already applied or error"

      );

    }

  };

  return (

    <>

      <Navbar />

      <div className="container">

        <h1>💼 Available Jobs</h1>

        <div className="jobs-grid">

          {

            jobs.map((job)=>(

              <div

                className="job-card"

                key={job._id}

              >

                <h2>

                  {job.title}

                </h2>

                <p>

                  🏢 {job.company.companyName}

                </p>

                <p>

                  📍 {job.company.location}

                </p>

                <p>

                  🎓 {job.eligibility}

                </p>

                <p>

                  💰 ₹{job.salary}

                </p>

                <p>

                  📅 {

                    new Date(

                      job.deadline

                    ).toLocaleDateString()

                  }

                </p>

                <button

                  onClick={()=>

                    applyJob(job._id)

                  }

                >

                  Apply Now

                </button>

              </div>

            ))

          }

        </div>

      </div>

    </>

  );

}

export default Jobs;