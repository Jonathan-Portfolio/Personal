import React from "react";
import "./App.css";
import MusicPlayer from "./components/MusicPlayer";
import HeroSection from "./components/HeroSection";
import MilitarySection from "./components/MilitarySection";
import TravelSection from "./components/TravelSection";
import HistorySection from "./components/HistorySection";
import CombatSection from "./components/CombatSection";
import PhilosophySection from "./components/PhilosophySection";
import FutureSection from "./components/FutureSection";

function App() {
  return (
    <div className="App">
      <MusicPlayer />
      <HeroSection />
      <MilitarySection />
      <TravelSection />
      <HistorySection />
      <CombatSection />
      <PhilosophySection />
      <FutureSection />
    </div>
  );
}

export default App;
