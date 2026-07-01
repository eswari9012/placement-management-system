import { useEffect, useState } from "react";

import axios from "axios";

import Navbar from "../components/Navebar";

function Companies() {

  const [companies, setCompanies] = useState([]);

  useEffect(() => {

    const fetchCompanies = async () => {

      try {

        const response = await axios.get(

          "http://localhost:5000/api/companies"

        );

        setCompanies(response.data);

      }

      catch(error){

        console.log(error);

      }

    };

    fetchCompanies();

  }, []);

  return (

    <>

      <Navbar />

      <div className="container">

        <h1>🏢 Partner Companies</h1>

        <div className="companies-grid">

          {

            companies.map((company)=>(

              <div

                className="company-card"

                key={company._id}

              >

                <div className="company-logo">

                  🏢

                </div>

                <h2>

                  {company.companyName}

                </h2>

                <p>

                  📍 {company.location}

                </p>

                <p>

                  💰 ₹{company.package}

                </p>

                <p>

                  {company.description}

                </p>

              </div>

            ))

          }

        </div>

      </div>

    </>

  );

}

export default Companies;