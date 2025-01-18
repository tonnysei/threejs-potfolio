import "./GlowButton.css"; // Import the CSS file

const GlowButton = () => {
  const handleClick = () => {
    window.location.href = "https://forms.fillout.com/t/kcXE5BnFnSus"; // Redirect to the specified URL
  };

  return (
    <div className="center-container">
      <button className="glow-button" onClick={handleClick}>
        Click Here
      </button>
    </div>
  );
};

export default GlowButton;
