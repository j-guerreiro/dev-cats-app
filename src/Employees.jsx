import './App.scss'
import { useState } from "react";
import maleKitty from './images/maleKitty.png'
import femaleKitty from './images/femaleKitty.png'

/**
 * Hint:
 * useState is a hook that react uses to track the
 * states of an array of objects of the Employees.
 */
const Employees = () => {

  const [selectedTeam, setTeam] = useState('TeamB');

  const [employees, setEmployees] = useState(
    [
      {
        "id": 1,
        "fullName": "John Meow",
        "designation": "Front-end Jr Dev",
        "gender": "Male",
        "teamName": "TeamC"
      },
      {
        "id": 2,
        "fullName": "Jane Purr",
        "designation": "Back-end Jr Dev",
        "gender": "Female",
        "teamName": "TeamA"
      },
      {
        "id": 3,
        "fullName": "David Whiskers",
        "designation": "UI/UX Designer",
        "gender": "Male",
        "teamName": "TeamB"
      },
      {
        "id": 4,
        "fullName": "Emily Scratches",
        "designation": "Front-end Jr Dev",
        "gender": "Female",
        "teamName": "TeamD"
      },
      {
        "id": 5,
        "fullName": "Michael Furball",
        "designation": "Full-stack Developer",
        "gender": "Male",
        "teamName": "TeamA"
      },
      {
        "id": 6,
        "fullName": "Sophia Whiskers",
        "designation": "Front-end Jr Dev",
        "gender": "Female",
        "teamName": "TeamB"
      },
      {
        "id": 7,
        "fullName": "Daniel Pounce",
        "designation": "Back-end Jr Dev",
        "gender": "Male",
        "teamName": "TeamC"
      },
      {
        "id": 8,
        "fullName": "Olivia Fuzz",
        "designation": "Front-end Jr Dev",
        "gender": "Female",
        "teamName": "TeamD"
      },
      {
        "id": 9,
        "fullName": "Ethan Whiskers",
        "designation": "Full-stack Developer",
        "gender": "Male",
        "teamName": "TeamB"
      },
      {
        "id": 10,
        "fullName": "Ava Paws",
        "designation": "Front-end Jr Dev",
        "gender": "Female",
        "teamName": "TeamC"
      },
      {
        "id": 11,
        "fullName": "William Meow",
        "designation": "Back-end Jr Dev",
        "gender": "Male",
        "teamName": "TeamD"
      },
      {
        "id": 12,
        "fullName": "Emma Whiskers",
        "designation": "Front-end Jr Dev",
        "gender": "Female",
        "teamName": "TeamA"
      }
    ]
  );

  /**
   * Helper function to handle team selection
   */
  const handleTeamSelectionChange = (event) => {
    setTeam(event.target.value);
  }

  const handleEmployeeOnClick = (event) => {

  }

  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-lg-8 col-sm-12 col-lg-12 col-md-12 col-12">
          <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
            <option value="TeamA">Team A</option>
            <option value="TeamB">Team B</option>
            <option value="TeamC">Team C</option>
            <option value="TeamD">Team D</option>
          </select>
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-lg-8 col-sm-12 col-lg-12 col-md-12 col-12">
          <div className="card-collection">
            {
              employees.map((employee) => (
                <div id={employee.id} className="card w-100 h-10 rounded-2 shadow-lg p-3 mb-5 bg-white" style={{ cursor: "pointer" }} onClick={handleEmployeeOnClick}>

                  {
                    employee.gender === 'Female' ? (
                      <img src={femaleKitty} className="card-image-top rounded-2" />
                    ) : (
                      <img src={maleKitty} className="card-image-top rounded-2" />
                    )
                  }

                  <div className="card-body">
                    <h5 className="card-title text-left">Full Name: {employee.fullName}</h5>
                    <p className="card-text fw-bold">Designation: {employee.designation}</p>
                    <p className="card-text">Gender: {employee.gender}</p>
                    <p className="card-text">Team Name: {employee.teamName}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </main>
  )
}

export default Employees;