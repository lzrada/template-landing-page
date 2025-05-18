import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const renderContent = () => {
    switch (activeTab) {
      case "Home":
        return <p>Ini halaman Home</p>;
      case "Profile":
        return <p>Ini halaman Profile</p>;
      case "Settings":
        return <p>Ini halaman Settings</p>;
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Tab Buttons */}
      <div style={{ display: "flex", gap: "10px" }}>
        {["Home", "Profile", "Settings"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: "10px",
              backgroundColor: activeTab === tab ? "#007bff" : "#f0f0f0",
              color: activeTab === tab ? "white" : "black",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div style={{ marginTop: "20px" }}>{renderContent()}</div>
    </div>
  );
};

export default Tabs;
