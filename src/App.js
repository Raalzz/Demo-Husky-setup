import React from "react";

function App() {
  //below code is just to check if validate script is running fine or not with respect to eslint.
  // const showNames = () => {
  //   var p = {
  //     p1: "value1",
  //     p2: "value2",
  //     p3: "value3",
  //   };

  //   for (var key in p) {
  //     if (p.hasOwnProperty(key)) {
  //       console.log(key + " -> " + p[key]);
  //     }
  //   }
  // }

  return (
    <div className="App">
      <h1>Dummy Project with Husky Setup</h1>
    </div>
  );
}

export default App;

//Confused with below code. Should i replace below code with the code in .lintstagedrc file.?
// {
//   "*.{js,jsx}": ["npm run lint:fix --", "git add"],
//   "*.{js,jsx,json}": ["prettier --write","git add"]
// }
