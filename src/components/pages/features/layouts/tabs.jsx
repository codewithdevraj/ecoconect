import React, { useState } from "react";

const tabsData = [
  {
    id: "resource-sharing",
    label: "Resource Sharing",
    contentTitle: "Resource Sharing",
    contentDescription: "Explanation of resource sharing capabilities",
    features: [
      "Document storage and management",
      "Secure file sharing",
      "Access control",
    ],
  },
  {
    id: "project-management",
    label: "Project Management",
    contentTitle: "Project Management",
    contentDescription: "Explanation of project management features",
    features: ["Task assignment", "Progress tracking", "Collaboration boards"],
  },
  {
    id: "community-building",
    label: "Community Building",
    contentTitle: "Community Building",
    contentDescription: "Explanation of community building features",
    features: ["Member directories", "Group creation", "Event planning"],
  },
  {
    id: "communication-tools",
    label: "Communication Tools",
    contentTitle: "Communication Tools",
    contentDescription: "Explanation of communication tools",
    features: [
      "Real-time messaging",
      "Video conferencing",
      "Discussion forums",
    ],
  },
  {
    id: "analytics-reporting",
    label: "Analytics & Reporting",
    contentTitle: "Analytics & Reporting",
    contentDescription: "Explanation of analytics and reporting tools",
    features: ["Data visualization", "Custom reports", "Performance metrics"],
  },
];

const Tabs = ({ tabs, selectedTab, onSelect }) => (
  <div className="tabs">
    {tabs.map((tab) => (
      <div
        key={tab.id}
        className={`tab ${tab.id === selectedTab ? "active" : ""}`}
        onClick={() => onSelect(tab.id)}
      >
        {tab.label}
      </div>
    ))}
  </div>
);

const Content = ({ tab }) => (
  <div className="content">
    <h2>{tab.contentTitle}</h2>
    <p>{tab.contentDescription}</p>
    <ul>
      {tab.features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
  </div>
);

const FeatureTabs = () => {
  const [selectedTab, setSelectedTab] = useState(tabsData[0].id);
  const currentTab = tabsData.find((tab) => tab.id === selectedTab);

  return (
    <section class="features-tab">
      <div className="container">
        <Tabs
          tabs={tabsData}
          selectedTab={selectedTab}
          onSelect={setSelectedTab}
        />
        <Content tab={currentTab} />
      </div>
    </section>
  );
};

export default FeatureTabs;
