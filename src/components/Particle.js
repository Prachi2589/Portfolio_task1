import React from "react";
import Particles from "react-tsparticles"; // Importing the Particles component

// Particle component for background animation effect
function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 160, // Number of particles
            density: {
              enable: true,
              value_area: 1500, // Controls particle spread
            },
          },
          line_linked: {
            enable: false, // Disabling lines between particles
            opacity: 0.03,
          },
          move: {
            direction: "right", // Particles move towards the right
            speed: 0.05, // Slow movement speed
          },
          size: {
            value: 1, // Small particle size
          },
          opacity: {
            anim: {
              enable: true, // Enables opacity animation
              speed: 1, // Animation speed
              opacity_min: 0.05, // Minimum opacity level
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true, // Adds new particles on click
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1, // Number of particles added per click
            },
          },
        },
        retina_detect: true, // Enables high-DPI display support
      }}
    />
  );
}

export default Particle; // Exporting the Particle component
