import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import {Link} from "react-router-dom"
// import ReactDOM from "react-dom";
// import BusinessBody from "./Components/BusinessBody";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App(props) {
  const [formdata, setFormdata] = React.useState({
    title: "",
    Paid: "$ Paid /❤ Gratis",
    short_description: "",
    description: "",
    worktype: "Remote / Hybrid ",
  });

  function handlechange(event) {
    setFormdata((prevdata) => {
      return { ...prevdata, [event.target.name]: event.target.value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formdata);
  }
  // const navigate = useNavigate();

  // <Router>
  //   <Routes>
  //     <Route path="/" element={<App />} />
  //     <Route
  //       path="/business"
  //       element={
  //         <BusinessBody
  //           title={formdata.title}
  //           paid={formdata.Paid}
  //           short_description={formdata.short_description}
  //           worktype={formdata.worktype}
  //         />
  //       }
  //     />
  //   </Routes>
  // </Router>;
  return (
    <div className="App">
      <Navbar />

      {/* <BusinessBody title={formdata.title} paid={formdata.Paid} short_description={formdata.short_description} worktype={formdata.worktype}/> */}
      <div className="dashboard">
        <div className="header">
          <p>Career Dashboard</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="formdetails">
            <div className="name">
              <div className="title">
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Title"
                  onChange={handlechange}
                  value={formdata.title}
                />
              </div>
              <div className="empoymentType">
                <select name="employmenttype">
                  <option value="0">Employment type ( Option Choose )</option>
                  <option value="1">Full-Time</option>
                  <option value="2">Part-Time</option>
                  <option value="3">Contract</option>
                  <option value="4">Temporary</option>
                  <option value="5">Volunteer</option>
                  <option value="6">Internship</option>
                </select>
              </div>
            </div>
            <div className="otherdetail">
              <div className="location">
                <input type="text" name="location" placeholder="Location" />
              </div>
              <div className="jobsection">
                <select name="employment" id="employment">
                  <option value="0">Job Section ( Option Choose )</option>
                  <option value="1">Business Systems</option>
                  <option value="2">Design</option>
                  <option value="3">Engineering</option>
                  <option value="4">Finance</option>
                  <option value="5">Human Resources</option>
                  <option value="6">Legal</option>
                  <option value="7">Marketing</option>
                  <option value="8">Operations</option>
                  <option value="9">Product</option>
                  <option value="10">Sales</option>
                  <option value="11">Security</option>
                  <option value="12">Support</option>
                </select>
              </div>
              <div className="workplacetype">
                <select
                  name="worktype"
                  id="employment"
                  onChange={handlechange}
                  value={formdata.worktype}
                >
                  <option value="Remote / Hybrid">
                    Workplace type ( Option Choose )
                  </option>
                  <option value="On-site">
                    On-site
                    {/* <sub>Employees come to work in-person</sub> */}
                  </option>
                  <option value="Hybrid">
                    Hybrid
                    {/* <sub>Employees work on-site and off-site</sub> */}
                  </option>
                  <option value="Remote">
                    Remote
                    {/* <sub>Employees work off-site</sub> */}
                  </option>
                </select>
              </div>
              <div className="paid2">
                <select
                  name="Paid"
                  id="employment"
                  onChange={handlechange}
                  value={formdata.Paid}
                >
                  <option value="0">Paid / Gratis ( Option Choose )</option>
                  <option value="paid">Paid</option>
                  <option value="gratis">Gratis</option>
                </select>
              </div>
            </div>
            <div className="short_description">
              <input
                type="text"
                name="short_description"
                id="description"
                placeholder="Short Description ( 150 Words )"
                onChange={handlechange}
                value={formdata.short_description}
              />
            </div>
            <div className="job_description">
              <h3>Add a job description</h3>
              <p>
                Description <sup>*</sup>
              </p>
              <div className="logos">
                <div className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M321.1 242.4C340.1 220.1 352 191.6 352 160c0-70.59-57.42-128-128-128L32 32.01c-17.67 0-32 14.31-32 32s14.33 32 32 32h16v320H32c-17.67 0-32 14.31-32 32s14.33 32 32 32h224c70.58 0 128-57.41 128-128C384 305.3 358.6 264.8 321.1 242.4zM112 96.01H224c35.3 0 64 28.72 64 64s-28.7 64-64 64H112V96.01zM256 416H112v-128H256c35.3 0 64 28.71 64 63.1S291.3 416 256 416z" />
                  </svg>
                </div>

                <div className="icon1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M384 64.01c0 17.69-14.31 32-32 32h-58.67l-133.3 320H224c17.69 0 32 14.31 32 32s-14.31 32-32 32H32c-17.69 0-32-14.31-32-32s14.31-32 32-32h58.67l133.3-320H160c-17.69 0-32-14.31-32-32s14.31-32 32-32h192C369.7 32.01 384 46.33 384 64.01z" />
                  </svg>
                </div>
                <div className="icon2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M416 448H32c-17.69 0-32 14.31-32 32s14.31 32 32 32h384c17.69 0 32-14.31 32-32S433.7 448 416 448zM48 64.01H64v160c0 88.22 71.78 159.1 160 159.1s160-71.78 160-159.1v-160h16c17.69 0 32-14.32 32-32s-14.31-31.1-32-31.1l-96-.0049c-17.69 0-32 14.32-32 32s14.31 32 32 32H320v160c0 52.94-43.06 95.1-96 95.1S128 276.1 128 224v-160h16c17.69 0 32-14.31 32-32s-14.31-32-32-32l-96 .0049c-17.69 0-32 14.31-32 31.1S30.31 64.01 48 64.01z" />
                  </svg>
                </div>
                <div className="icon3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M16 96C16 69.49 37.49 48 64 48C90.51 48 112 69.49 112 96C112 122.5 90.51 144 64 144C37.49 144 16 122.5 16 96zM480 64C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H192C174.3 128 160 113.7 160 96C160 78.33 174.3 64 192 64H480zM480 224C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H192C174.3 288 160 273.7 160 256C160 238.3 174.3 224 192 224H480zM480 384C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H192C174.3 448 160 433.7 160 416C160 398.3 174.3 384 192 384H480zM16 416C16 389.5 37.49 368 64 368C90.51 368 112 389.5 112 416C112 442.5 90.51 464 64 464C37.49 464 16 442.5 16 416zM112 256C112 282.5 90.51 304 64 304C37.49 304 16 282.5 16 256C16 229.5 37.49 208 64 208C90.51 208 112 229.5 112 256z" />
                  </svg>
                </div>

                <div className="icon4">
                  <svg
                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="FormatListNumberedIcon"
                  >
                    <path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"></path>
                  </svg>
                </div>
              </div>
              <div className="descriparea">
                <textarea
                  name="description"
                  id="description"
                  cols="94"
                  rows="7"
                  charswidth="23"
                  onChange={handlechange}
                  value={formdata.description}
                ></textarea>
              </div>
              <h3>Add skills</h3>
              <p className="skillpara">
                Add skill keyword to make your job more visible to the right
                candidates(Select up to 10)
              </p>
              <div className="btn">
                <span>Add skill +</span>
              </div>
            </div>
            {/*   onClick={() => {navigate("/BusinessBody");}} */}

            <div className="submit" onClick={()=>(props.formdata)}>
             <Link to="/business"> <button type="submit">Submit</button></Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
