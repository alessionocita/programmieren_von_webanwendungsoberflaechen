// Zentrale App-Komponente
// Legt das gesamte Seitenverzeichnis durch React-Router-Dom fest
// Ruft beim Laden die Viewport-Breite und die Orientation ab
// Gibt das Viewport weiter und legt die Orientation auf "Portrait" fest bei Mobile Devices

import "./App.css";

import { useState, lazy, Suspense } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
// import About from "./pages/About";
import Emissions from "./pages/Emissions";
import Solutions from "./pages/Solutions";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";
import News from "./pages/News";
import FAQ from "./pages/FAQ";
import Partners from "./pages/Partners";
import Team from "./pages/Team";
import Research from "./pages/Research";
import Glossary from "./pages/Glossary";
import Testimonials from "./pages/Testimonials";
import Root from "./pages/Root";

function App() {

  const About = lazy(() => import("./pages/About"));

  // speichert der Viewport-Breite in der Variable "viewport"
  const [viewport, setViewport] = useState(window.innerWidth);

  // speichert der Orientation in der Variable "orientation"
  const [orientation, setOrientation] = useState(
    window.screen.orientation.angle
  );

  // aktualisiert die Variable "viewport" falls die Fenstergröße geändert wird
  window.addEventListener("resize", () => {
    setViewport(window.innerWidth);
  });

  // aktualisiert die Variablen "viewport" und "orientation" falls die Mobile Device Orientation geändert wird
  window.screen.orientation.addEventListener("change", (event) => {
    if (event.target.angle !== 0) {
      setViewport(window.innerWidth);
      setOrientation(window.screen.orientation.angle);
    }
  });

  // falls die Orientation sich ändert (bei Mobile Devices), dann wird sie auf "Portrait" fixiert
  if (viewport <= 820 && orientation !== 0) {
    window.screen.orientation.lock("portrait").catch((error) => {
      console.error(error);
    });
  }

  // Browser Router. Legt alle URLs der Unterseiten fest.
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root viewport={viewport} />,
      children: [
        { index: true, element: <Home viewport={viewport} /> },
        { path: "news", element: <News viewport={viewport} /> },
        { path: "faq", element: <FAQ viewport={viewport} /> },
        { path: "partners", element: <Partners viewport={viewport} /> },
        { path: "our team", element: <Team viewport={viewport} /> },
        { path: "research", element: <Research viewport={viewport} /> },
        { path: "glossary", element: <Glossary viewport={viewport} /> },
        { path: "testimonials", element: <Testimonials viewport={viewport} /> },
        { path: "about", element: <Suspense><About viewport={viewport} /></Suspense> },
        {
          path: "emissions",
          element: <Emissions viewport={viewport} />,
          // data loader für die Emissions-Tabelle. Ruft alle Emissions Data von public/data.json ab
          loader: async () => {
            const response = await fetch("data.json");
            if (!response.ok) {
              console.error("Response not ok");
            } else {
              const emissions = response.json();
              return emissions;
            }
          },
        },
        { path: "solutions", element: <Solutions viewport={viewport} /> },
        { path: "contact", element: <Contact viewport={viewport} /> },
        { path: "Legal", element: <Legal viewport={viewport} /> },
      ],
    },
  ]);

  // rendert den Browser Router in der App
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
