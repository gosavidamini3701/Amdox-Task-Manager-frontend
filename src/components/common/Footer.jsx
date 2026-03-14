import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="footer-container">
        
        {/* Brand */}
        <div className="footer-section">
          <h2 className="footer-logo">
            Amdox<span>Task</span>
          </h2>
          <p>
            Amdox Task Management helps teams organize, track,
            and collaborate efficiently with modern workflows.
          </p>
        </div>

        {/* Product */}
        <div className="footer-section">
          <h4>Product</h4>
          <ul>
            <li>Features</li>
            <li>Kanban Board</li>
            <li>Task Management</li>
            <li>Reports</li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact</li>
            <li>Support</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>Email: support@amdox.in</li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: India</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Amdox Task Management. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
