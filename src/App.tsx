import React, { useEffect } from "react";
import { useState } from "react";

type Planet = {
  id: string;
  energy: number;
  lastUpdated: number;
};

const myPlanet: Planet = {
  id: "0",
  energy: 0,
  lastUpdated: 0,
};

function App() {
  const [planet, setPlanet] = useState<Planet>(myPlanet);

  useEffect(() => {
    console.log("App rerendered");
  });

  useEffect(() => {
    console.log("planet effect fired ", planet);
  }, [planet]);

  useEffect(() => {
    console.log("energy updated out of component ", planet.energy);
  }, [planet.energy]);

  return (
    <div>
      <MyComponent planet={planet} />
      <div>
        <p>id: {planet.id}</p>
        <p>energy: {planet.energy}</p>
      </div>
      <button
        onClick={() => {
          myPlanet.energy += 10;
          myPlanet.lastUpdated = Date.now();
          setPlanet(myPlanet);
        }}
      >
        Update Planet
      </button>
    </div>
  );
}

function MyComponent({ planet }: { planet: Planet }) {
  useEffect(() => {
    console.log("energy updated in component ", planet?.energy);
  }, [planet?.energy]);

  return (
    <div>
      <p>id: {planet.id}</p>
      <p>energy: {planet.energy}</p>
    </div>
  );
}

export default App;
