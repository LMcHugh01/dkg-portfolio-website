import { useNavigate } from "react-router-dom";

function BackToProjects() {
  const navigate = useNavigate();

  const handleBack = () => {
    // Go back to the previous page
    navigate(-1);

    // Wait a tiny bit, then scroll to #work
    setTimeout(() => {
      const element = document.getElementById("work");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 100); // small delay to ensure the previous page has rendered
  };

  return (
    <button onClick={handleBack} className="back-link">
      ← Back to Projects
    </button>
  );
}

export default BackToProjects;
