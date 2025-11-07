import { useNavigate } from "react-router-dom";

function BackToProjects() {
  const navigate = useNavigate();

  const handleBack = () => {

    navigate(-1);

    setTimeout(() => {
      const element = document.getElementById("work");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <button onClick={handleBack} className="back-link">
      ← Back to Projects
    </button>
  );
}

export default BackToProjects;
