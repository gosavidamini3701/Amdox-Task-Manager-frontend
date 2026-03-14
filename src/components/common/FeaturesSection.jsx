import "./FeaturesSection.css";

const features = [
  {
    title: "Task Assignment & Priority",
    description:
      "Assign tasks to team members with clear deadlines and priority levels."
  },
  {
    title: "Kanban Board",
    description:
      "Visualize tasks using To-Do, In-Progress, and Done boards."
  },
  {
    title: "Role-Based Access",
    description:
      "Admin, Editor, and Viewer roles with controlled permissions."
  },
  {
    title: "Real-Time Collaboration",
    description:
      "Comment on tasks, share files, and collaborate seamlessly."
  },
  {
    title: "Deadline Tracking",
    description:
      "Never miss deadlines with reminders and status tracking."
  },
  {
    title: "Reports & Analytics",
    description:
      "Track progress and team performance with detailed reports."
  }
];

const FeaturesSection = () => {
  return (
    <section className="features">
      <h2 className="features-title">Powerful Features</h2>
      <p className="features-subtitle">
        Everything you need to manage tasks efficiently in one platform
      </p>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
