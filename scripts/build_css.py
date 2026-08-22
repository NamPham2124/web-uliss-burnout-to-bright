css_content = """@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400;1,600&family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap');

:root {
  --font-heading: 'Josefin Sans', sans-serif;
  --font-body: 'Nunito', sans-serif;
  --primary: #059669;
  --primary-light: #34d399;
  --primary-dark: #047857;
  --accent: #0284c7;
  --accent-warm: #f59e0b;
  --streak-fire: #f97316;
  --bg-gradient: linear-gradient(135deg, #f0fdf4 0%, #ecfeff 40%, #fefce8 100%);
  --card-bg: rgba(255, 255, 255, 0.90);
  --card-border: rgba(255, 255, 255, 0.7);
  --text-main: #1e293b;
  --text-muted: #64748b;
  
  /* Future Letter Pink & Green Theme */
  --letter-pink-bg: #fdf2f8;
  --letter-pink-border: #f472b6;
  --letter-pink-text: #831843;
  --letter-green-accent: #059669;
}

body {
  font-family: var(--font-body);
  color: var(--text-main);
  background: var(--bg-gradient);
  background-attachment: fixed;
  min-height: 100vh;
  overflow-x: hidden;
}

h1, h2, h3, .font-heading, .font-serif-title {
  font-family: var(--font-heading);
}

/* Glassmorphism Cards */
.glass-card {
  background: rgba(255, 255, 255, 0.90);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
}

.glass-nav {
  background: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(226, 232, 240, 0.85);
}

.glass-modal {
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.9);
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background: #f1f5f9;
}
::-webkit-scrollbar-thumb {
  background: #a7f3d0;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #34d399;
}

/* Drag and Drop Styling */
.draggable-item {
  cursor: grab;
  user-select: none;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  touch-action: none;
}
.draggable-item:active, .draggable-item.is-dragging {
  cursor: grabbing;
  opacity: 0.6;
  transform: scale(1.03) rotate(2deg);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  border-color: #059669;
}
.draggable-item.paired {
  opacity: 0.4;
  pointer-events: none;
  filter: grayscale(0.5);
}

.drop-target-zone {
  transition: all 0.25s ease;
  min-height: 80px;
  border: 2px dashed #cbd5e1;
}
.drop-target-zone.drag-over {
  border-color: #059669;
  background-color: #ecfdf5;
  transform: scale(1.02);
  box-shadow: 0 0 15px rgba(5, 150, 105, 0.2);
}
.drop-target-zone.correct-match {
  border-color: #10b981;
  background-color: #f0fdf4;
  border-style: solid;
}
.drop-target-zone.incorrect-match {
  border-color: #f43f5e;
  background-color: #fff1f2;
  border-style: solid;
  animation: shake 0.5s ease-in-out;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-6px); }
  40%, 80% { transform: translateX(6px); }
}

/* Future Letter Envelope Styling (Pink / Green Tone) */
.future-letter-envelope {
  background: linear-gradient(135deg, #fdf2f8 0%, #f0fdf4 100%);
  border: 2px solid #f472b6;
  box-shadow: 0 15px 35px rgba(244, 114, 182, 0.15);
  position: relative;
  overflow: hidden;
}

.wax-seal {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: radial-gradient(circle, #f43f5e 40%, #be123c 100%);
  box-shadow: 0 4px 10px rgba(190, 18, 60, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  border: 2px solid #fda4af;
}

.letter-paper {
  background: #ffffff;
  background-image: linear-gradient(#f1f5f9 1px, transparent 1px);
  background-size: 100% 28px;
  line-height: 28px;
}

/* Iceberg Styling */
.iceberg-container {
  position: relative;
  width: 100%;
  max-width: 650px;
  height: 480px;
  margin: 0 auto;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}
.iceberg-sky {
  height: 40%;
  background: linear-gradient(180deg, #e0f2fe 0%, #bae6fd 100%);
  position: relative;
  padding: 1rem;
}
.iceberg-water {
  height: 60%;
  background: linear-gradient(180deg, #0284c7 0%, #0369a1 50%, #0c4a6e 100%);
  position: relative;
  padding: 1rem;
}
.iceberg-waterline {
  position: absolute;
  top: 40%;
  left: 0;
  right: 0;
  height: 6px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 12px rgba(255, 255, 255, 1);
  z-index: 10;
}

/* 24-Hour Energy Map */
.energy-slot {
  transition: all 0.2s ease;
  cursor: pointer;
}
.energy-slot:hover {
  transform: scale(1.06);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Value Flower Petals */
.flower-petal {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.flower-petal:hover {
  transform: translateY(-4px) scale(1.03);
}

/* Pulse Glow & Animations */
@keyframes pulseGlow {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.06); opacity: 1; }
}
.animate-pulse-glow {
  animation: pulseGlow 5s ease-in-out infinite;
}

@keyframes floatAnim {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
}
.animate-float {
  animation: floatAnim 3.5s ease-in-out infinite;
}

/* Custom Checkbox/Radio */
.custom-checkbox {
  width: 1.25rem;
  height: 1.25rem;
  accent-color: #059669;
  border-radius: 0.25rem;
  cursor: pointer;
}

/* Active Nav Tab */
.nav-tab-active {
  color: #047857;
  background-color: #ecfdf5;
  font-weight: 700;
  border-bottom: 2px solid #059669;
}
"""

with open("css/styles.css", "w", encoding="utf-8") as f:
    f.write(css_content)

print("Generated css/styles.css successfully")
