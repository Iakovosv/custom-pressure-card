class PressureCard extends HTMLElement {
  set hass(hass) {
    const pressureEntityId = "sensor.custom_pressure_sensor"; // Αντικατέστησε με το ID του αισθητήρα σου
    const pressure = hass.states[pressureEntityId].state;

    // Δημιουργία του HTML περιεχομένου της κάρτας
    this.innerHTML = `
      <style>
        .card {
          background: white;
          border-radius: 10px;
          padding: 16px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        .arrow {
          font-size: 48px;
          animation: pulse 1s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }

        .pressure-value {
          font-size: 24px;
          font-weight: bold;
        }
      </style>
      <div class="card">
        <h2>Pressure Sensor</h2>
        <div class="pressure-value">${pressure} hPa</div>
        <div class="arrow">↑</div>
      </div>
    `;
  }

  getCardSize() {
    return 1; // Μέγεθος της κάρτας
  }
}

// Δηλώστε την κάρτα στον Home Assistant
customElements.define('pressure-card', PressureCard);
