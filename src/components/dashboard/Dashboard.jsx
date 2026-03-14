import "./Dashborad.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();


  return (
    <div className="jira-app">

      {/* TOP NAVBAR */}
      <header className="jira-topnav">
        <div className="jira-left">
          <span className="jira-logo">Task Management</span>
          <nav>
            <span>Projects</span>
            <span>Dashboards</span>
            <span>People</span>
          </nav>
        </div>

        <div className="jira-right">
          <input placeholder="Search" />
          <button className="create-btn">Create</button>
           <div
              className="user-avatar"
              onClick={() => navigate("/profile")}
            >
              {user.userName.charAt(0).toUpperCase()}
          </div>

        </div>
      </header>

      <div className="jira-body">

        {/* LEFT SIDEBAR */}
        <aside className="jira-sidebar">
          <h4>Sample Project</h4>

          <p className="section-title">PLANNING</p>
          <ul>
            <li>Roadmap</li>
            <li className="active">Backlog</li>
            <li>Board</li>
          </ul>

          <p className="section-title">DEVELOPMENT</p>
          <ul>
            <li>Code</li>
          </ul>
        </aside>

        {/* MAIN CONTENT */}
        <main className="jira-content">
          <h2>Backlog</h2>

          {/* SPRINT */}
          <div className="sprint">
            <div className="sprint-header">
              <span>SP Sprint 1</span>
              <button className="start-btn">Start sprint</button>
            </div>

            <div className="issue">
              <span className="issue-type story"></span>
              <p>Design Login UI</p>
            </div>

            <div className="issue">
              <span className="issue-type task"></span>
              <p>JWT Authentication</p>
            </div>
          </div>

          {/* BACKLOG */}
          <div className="backlog">
            <h4>Backlog</h4>

            <div className="issue">
              <span className="issue-type bug"></span>
              <p>Fix CORS issue</p>
            </div>

            <div className="issue">
              <span className="issue-type story"></span>
              <p>Create Dashboard UI</p>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default Dashboard;