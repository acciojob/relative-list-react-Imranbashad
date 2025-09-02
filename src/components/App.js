import React from "react";

const App = () => {
  const relatives = [
    { id: "relativeListItem1", name: "Uncle Raj" },
    { id: "relativeListItem2", name: "Aunt Meena" },
    { id: "relativeListItem3", name: "Cousin Anjali" },
    { id: "relativeListItem4", name: "Grandparents" }
  ];

  return (
    <div id="main">
      {/* Do not remove the main div */}
      <ol key="relativeList">
        {relatives.map((relative) => (
          <li key={relative.id}>{relative.name}</li>
        ))}
      </ol>
    </div>
  );
};

export default App;
