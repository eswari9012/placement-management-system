import { useEffect, useState } from "react";

import axios from "axios";

import Navbar from "../components/Navebar";

function Profile() {

  const [student, setStudent] = useState(null);

  useEffect(() => {

    const fetchProfile = async () => {

      try {

        const token = localStorage.getItem("token");

        const response = await axios.get(

          "http://localhost:5000/api/student/profile",

          {

            headers: {

              Authorization: `Bearer ${token}`

            }

          }

        );

        setStudent(response.data);

      }

      catch(error){

        console.log(error);

      }

    };

    fetchProfile();

  }, []);

  if(!student){

    return (

      <>

        <Navbar />

        <div className="container">

          <h2>Loading profile...</h2>

        </div>

      </>

    );

  }

  return (

    <>

      <Navbar />

      <div className="container">

        <div className="profile-card">

          <div className="profile-avatar">

            👨‍🎓

          </div>

          <h1>{student.name}</h1>

          <p>Student Profile</p>

          <div className="profile-info">

            <div>

              <strong>Email</strong>

              <span>{student.email}</span>

            </div>

            <div>

              <strong>Branch</strong>

              <span>{student.branch}</span>

            </div>

            <div>

              <strong>Year</strong>

              <span>{student.year}</span>

            </div>

          </div>

        </div>

      </div>

    </>

  );

}

export default Profile;