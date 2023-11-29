// Root-Komponente. Legt das Grundlayout der Seite fest.
// Rendert Komponenten konditional zum Viewport und triggert den Slider Menu bei Mobile Devices.
// Benutzt die Komponenten FooterNavigation.js, MainNavigation.js, SocialNavigation.js
// Burgermenu.js und MenuSlider.js

import Logo from "../components/Logo";

import FooterNavigation from "../components/FooterNavigation";
import MainNavigation from "../components/MainNavigation";
import SocialNavigation from "../components/SocialNavigation";
import Burgermenu from "../components/Burgermenu";
import MenuSlider from "../components/MenuSlider";

import { Outlet } from "react-router-dom";
import { useState } from "react";

function Root(props) {

  // useState-Variable, wo der Zustand des Slider Menu (hidden: false oder true) als boolean gespeichert wird
  const [sliderIsHidden, setSliderIsHidden] = useState(true);

  // setzt den Zustand des Sliders auf "not hidden". Wird per Click-Listener in BurgerMenu.js getriggert
  const onBurgerMenuActivateHandler = () => {
    setSliderIsHidden(false);
  };

  // setzt den Zustand des Sliders auf "hidden". Wird per Click-Listener in MenuSlider.js getriggert
  const onCloseIconActivateHandler = () => {
    setSliderIsHidden(true);
  };

  return (
    <>
      <Logo />

      {/* Rendert MainNavigation.js bei Desktop Devices und BurgerMenu.js bei Mobile Devices */}
      {props.viewport > 820 ? (
        <MainNavigation />
      ) : (
        <Burgermenu onBurgerMenuActivateHandler={onBurgerMenuActivateHandler} />
      )}

      {/* Rendert MenuSlider.js bei Mobile Devices */}
      {props.viewport <= 820 && (
        <MenuSlider
          hidden={sliderIsHidden}
          onCloseIconActivateHandler={onCloseIconActivateHandler}
        />
      )}

      {/* Rendert die Ausgabe des Routers */}
      <Outlet />

      {/* Rendert das Social Menu und das Footer Menu */}
      <SocialNavigation />
      <FooterNavigation />
    </>
  );
}

export default Root;
