import { useState, useEffect, useRef, createContext } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import './App.css';
import Navbar from './header/Navbar';
import AllRoutes from './routes/AllRoutes';
import Footer from './header/Footer';

// Register the ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

// Create theme context to share theme state across components
export const ThemeContext = createContext();

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("default");

  const loaderRef = useRef(null);
  const droneRef = useRef(null);
  const bladesRef = useRef([]);
  const textRef = useRef(null);
  const progressRef = useRef(null);

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prev) => {
      const nextTheme = prev === "default" ? "earth" : prev === "earth" ? "forest" : "default";
      console.log(theme);

      return nextTheme;

    });
  };

  // Update document theme attribute whenever theme changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    // Enable smooth scrolling globally
    document.documentElement.style.scrollBehavior = 'smooth';

    // Initialize GSAP animations
    const tl = gsap.timeline();

    // Drone floating animation
    tl.to(droneRef.current, {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Blades spinning animation (all blades)
    bladesRef.current.forEach(blade => {
      gsap.to(blade, {
        rotation: 360,
        duration: 0.8,
        repeat: -1,
        transformOrigin: '50% 50%',
        ease: "none"
      });
    });

    // Text pulsing animation
    gsap.to(textRef.current, {
      opacity: 0.5,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // Progress bar animation
    gsap.to(progressRef.current, {
      width: "100%",
      duration: 2,
      ease: "power1.out"
    });

    // Simulate loading completion
    const timer = setTimeout(() => {
      // Fade out loader
      gsap.to(loaderRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => setLoading(false)
      });
    }, 2500);

    // Create a function to handle smooth scrolling to elements
    window.smoothScrollTo = (target, duration = 1) => {
      gsap.to(window, {
        duration,
        scrollTo: {
          y: target,
          autoKill: false
        },
        ease: "power2.inOut"
      });
    };

    return () => {
      clearTimeout(timer);
      tl.kill();
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Function to get button background color based on current theme
  const getThemeColors = () => {
    switch (theme) {
      case "default":
        return {
          background: "#f6f8fa",
          text: "#555"
        };
      case "earth":
        return {
          background: "#b58863",
          text: "#ffffff"
        };
      case "forest":
        return {
          background: "#2c7c4c",
          text: "#ffffff"
        };
      default:
        return {
          background: "#f6f8fa",
          text: "#555"
        };
    }
  };

  // Theme values to be shared across components
  const themeValues = {
    theme,
    toggleTheme,
    colors: getThemeColors()
  };

  if (loading) {
    return (
      <div id="pre-loader" ref={loaderRef} style={{ backgroundColor: getThemeColors().background }}>
        <div className="loading-container">
          <div className="drone-container" ref={droneRef}>
            <svg className="drone" width="300" height="300" viewBox="-55 -40 450 420">
              <path fill="#009B3B" d="M325.2 159.8l-0.1 0c0 0-3.3-0.5-6.4-0.1 -6.3 0.7-11.6 3.2-14.9 5.1 -1.6 0.9-2.6 1.6-2.9 1.8h-54.3v-21.5c1.6-1.1 2.6-2.9 2.6-4.9 0-2-1-3.8-2.6-4.9v-2.7H240v2.7c-1.6 1.1-2.6 2.9-2.6 4.9 0 2 1 3.8 2.6 4.9v21.5H201V148c0-2.8-1.8-5.4-4.6-7.6l0 0 46.8-82.7c0.4-0.2 1.5-0.7 3-1.6 3.3-2 8-5.5 11.8-10.5 2.1-2.8 3.1-5.7 3.1-5.7 1.9-6.5-0.9-14-4.6-16.3l-0.4-0.2c-2.6-1.7-11.5-2-16.6 4.3 0 0-2 2.3-3.2 5.6 -2.4 5.7-2.9 11.6-2.9 15.5 0 2.2 0.2 3.5 0.2 3.6l0 0.3 0.4 0.2 -43.5 76.8v-19.9c0-1.7-1.4-3.1-3.1-3.1 -1.7 0-3.1 1.4-3.1 3.1v24.2c-7.8-3-12.8-3.9-15.6-3.9 -2.6 0-9.8 1.6-16.8 4.4v-24.6c0-1.7-1.4-3.1-3.1-3.1s-3.1 1.4-3.1 3.1v19.9l-43.3-76 0.4-0.2 0-0.3c0-0.1 0.2-1.4 0.2-3.6 0-3-0.5-7.2-1.8-11.7 -0.3-1.2-0.7-2.5-1.2-3.8C99 30.3 97 28.4 97 28.4 92.7 23 83.9 22 80.2 24.1c-3.9 2.2-6.8 9.9-4.8 16.5 0 0 0.9 3 3.1 5.7 3.7 5.1 8.5 8.5 11.8 10.4 1.5 0.9 2.6 1.4 3 1.6l47.1 82.6c-2.3 2.1-3.8 4.4-3.8 7v18.6H97.7V145c1.6-1.1 2.6-2.9 2.6-4.9 0-2-1-3.8-2.6-4.9v-2.7h-6.6v2.7c-1.6 1.1-2.6 2.9-2.6 4.9 0 2 1 3.8 2.6 4.9v21.5H36.8c-0.3-0.2-1.3-0.9-2.9-1.8 -3.4-1.9-8.7-4.4-14.9-5.1 0 0-3.2-0.4-6.5 0.1 -6.7 1.6-11.9 7.9-11.9 12.4 0 4.2 3.8 11.1 12 12.5 2.6 0.4 6.5 0 6.5 0 6.2-0.7 11.5-3.2 14.9-5.1 1.9-1.1 3-1.9 3-1.9l0.2-0.2V177h54v40.6l0 22.4c-1.6 1.1-2.7 3-2.7 4.9 0 1.9 1.1 3.5 2.7 4.6l0 1.7h6.6v-1.7c1.6-1.1 2.7-2.7 2.7-4.6 0-1.9-1.1-3.8-2.7-4.9v-22.4h2.3l4.9-7.9 0 0h22.6l0 0c-0.4 1.1-0.5 2.1-0.2 3.2 0.4 1.5 1.7 2.8 4 4 0.3 0.1 0.5 0.3 0.8 0.4l-38.1 67.2 -0.4-0.2 -0.2 0.1c-0.1 0-1.3 0.6-3.2 1.7 -3.3 2-8.1 5.4-11.8 10.4 0 0-1.6 1.4-3.2 5.7 -2.8 7.8 1.3 14.5 5 16.6 1.2 0.7 2.7 1 4.5 1 4 0 8.9-1.8 12.2-5.3 0 0 2.1-2.4 3.3-5.6 2.5-5.8 2.9-11.6 2.9-15.5 0-1.8-0.1-3-0.2-3.4l37.8-66.7c0.7 1.1 1.2 2.4 1.5 3.9 0.9 6.6 4.2 30.1 5.5 36.3 0.9 4.2 2 7.6 8.3 9.3 3 0.8 7.2 1.2 13 1.2h0.1 0c5.3 0 9.3-0.4 12.3-1 6.9-1.6 8.1-5.1 9-9.5 1.2-6.2 4.6-29.7 5.5-36.3 0.2-1.5 0.7-2.7 1.3-3.7l37.7 66.2c0 0.4-0.2 1.6-0.2 3.4 0 3.9 0.5 9.7 3 15.5 0 0 1.3 3.1 3.3 5.6 3.2 3.5 8.2 5.3 12.1 5.3 1.7 0 3.2-0.3 4.4-0.9l0.1-0.1c3.7-2.1 7.8-8.8 4.9-16.6 0 0-0.9-3.2-3.2-5.7 -3.7-5-8.4-8.4-11.8-10.4 -1.9-1.1-3.1-1.6-3.2-1.7L244 284l-0.4 0.2 -38.1-66.8c0.3-0.2 0.7-0.3 1-0.5 2.3-1.2 3.5-2.5 4-4 0.3-1 0.2-2.1-0.2-3.1h22.6l0 0 4.9 7.9h2.3v22.4c-1.6 1.1-2.7 3-2.7 4.9 0 1.9 1.1 3.5 2.7 4.6v1.7h6.6l0-1.7c1.6-1.1 2.7-2.7 2.7-4.6 0-1.9-1.1-3.8-2.7-4.9l0-22.4V177h54v0.5l0.2 0.2c0 0 1.1 0.9 3 1.9 3.4 1.9 8.7 4.4 14.9 5.1 3.1 0.6 6.5 0 6.5 0 8.2-1.4 12-8.3 12-12.5C337.2 167.7 332 161.3 325.2 159.8zM105.1 200.9l-5.1-7.5h-2.3V177h38.9v0.7l0 0.7 0.7 0.2c0.3 0.1 2.7 0.7 2.7 3.7 0 2.9-2.4 3.5-2.7 3.6l-0.8 0.2 0.1 0.8c0 0 0.5 4.9-1.4 8.3 -0.8 1.5-1.7 3.1-2.5 4.7 -0.2 0.4-0.4 0.7-0.6 1.1H105.1zM240 193.5h-2.3l-5.1 7.5h-27c-0.2-0.3-0.3-0.7-0.5-1 -0.9-1.7-1.8-3.4-2.6-4.9 -1.9-3.4-1.4-8.3-1.4-8.3l0.1-0.8 -0.8-0.2c-0.3-0.1-2.7-0.7-2.7-3.6 0-3 2.4-3.6 2.7-3.6l0.7-0.1V177H240V193.5z" />

              {/* Blades with individual refs */}
              <path
                ref={el => bladesRef.current[0] = el}
                className="blade"
                fill="#000"
                d="M325.3 183.1c4.8-1.3 8.3-5.7 8.3-10.9 0-5.1-3.4-9.5-8.2-10.9 0.5-2.8 2.7-17.4 1.7-32.8 -1.2-17.1-2-21.7-4.3-23.6 -0.7-0.6-1.5-1-2.2-1 -2.5 0-4.2 3.7-5.3 11.5 -1.8 12.4-3.5 27.9 0 37.2l3.3 8.8c-4.5 1.5-7.8 5.8-7.8 10.8 0 4.9 3.2 9.1 7.6 10.7 -0.4 2.3-2.8 17.2-1.7 33 1.2 17.1 2 21.7 4.3 23.6 0.7 0.6 1.5 1 2.2 1 2.5 0 4.2-3.7 5.3-11.5 1.8-12.4 3.5-27.9 0-37.2L325.3 183.1z"
              />
              <path
                ref={el => bladesRef.current[1] = el}
                className="blade"
                fill="#000"
                d="M308 271c-0.5-0.2-1.1-0.3-1.7-0.3 -2.9 0-8 2-21 8.3 -14.3 6.9-26.1 16.4-27.9 17.8 -2-1.8-4.6-2.8-7.4-2.8 -2 0-3.9 0.5-5.6 1.5 -2.6 1.5-4.5 3.9-5.3 6.9 -0.5 1.7-0.5 3.5-0.2 5.2l-9.3 1.5c-9.8 1.6-22.5 10.7-32.4 18.4 -5.4 4.3-7.9 7.4-7.6 9.5 0.2 1 0.9 1.7 2.2 2.2 0.5 0.2 1.1 0.3 1.7 0.3 2.9 0 8-2 21-8.3 13.9-6.7 25.5-15.9 27.7-17.7 2.1 2 4.9 3.2 7.9 3.2 2 0 3.9-0.5 5.6-1.5 2.6-1.5 4.5-3.9 5.3-6.9 0.5-1.9 0.5-3.9 0-5.8l9.2-1.5c9.8-1.6 22.5-10.7 32.4-18.4 5.4-4.3 7.9-7.4 7.6-9.5C310 272.2 309.2 271.5 308 271z"
              />
              <path
                ref={el => bladesRef.current[2] = el}
                className="blade"
                fill="#000"
                d="M140.3 327.8c-9.9-7.7-22.6-16.8-32.4-18.3l-9.3-1.5c0.3-1.7 0.3-3.5-0.2-5.2 -0.8-2.9-2.7-5.4-5.3-6.9 -1.7-1-3.6-1.5-5.6-1.5 -2.8 0-5.4 1-7.4 2.8 -1.7-1.4-13.6-10.9-27.9-17.8 -13-6.2-18.1-8.2-21-8.2 -0.6 0-1.2 0.1-1.7 0.3 -1.3 0.5-2 1.2-2.2 2.2 -0.3 2.2 2.1 5.3 7.6 9.5 9.9 7.7 22.6 16.8 32.4 18.3l9.2 1.4c-0.5 1.9-0.5 3.9 0.1 5.8 0.8 2.9 2.7 5.4 5.3 6.9 1.7 1 3.6 1.5 5.6 1.5 3 0 5.8-1.2 7.9-3.2 2.2 1.8 13.8 11 27.7 17.6 13 6.2 18.1 8.2 21 8.2 0.6 0 1.2-0.1 1.7-0.3 1.3-0.5 2-1.2 2.2-2.2C148.3 335.1 145.8 332 140.3 327.8z"
              />
              <path
                ref={el => bladesRef.current[3] = el}
                className="blade"
                fill="#000"
                d="M19 161.4l3.3-8.8c3.5-9.3 1.8-24.8 0-37.2 -1.1-7.7-2.9-11.5-5.4-11.5 -0.7 0-1.4 0.3-2.2 1 -2.3 1.9-3.1 6.6-4.3 23.6 -1 15.4 1.2 30 1.7 32.8 -4.7 1.4-8.2 5.7-8.2 10.9 0 5.2 3.5 9.6 8.4 10.9l-3.3 8.7c-3.5 9.3-1.8 24.8 0 37.2 1.1 7.7 2.9 11.5 5.4 11.5 0.7 0 1.4-0.3 2.2-1 2.3-1.9 3.1-6.6 4.3-23.6 1.1-15.8-1.3-30.8-1.7-33 4.4-1.6 7.6-5.8 7.6-10.7C26.8 167.1 23.5 162.9 19 161.4z"
              />
              <path
                ref={el => bladesRef.current[4] = el}
                className="blade"
                fill="#000"
                d="M146.3 2.1c-1.5-1.8-5.5-1.3-12.4 1.4 -11.7 4.6-26 10.8-32.3 18.5l-5.9 7.1c-2.1-2.1-5-3.3-8-3.3 -2 0-3.9 0.5-5.6 1.5 -4.5 2.5-6.5 7.7-5.4 12.5 -2.7 1-16.5 6.3-29.3 14.8C33 64 29.4 67 28.8 69.9c-0.2 1.1-0.1 2 0.5 2.7 0.6 0.7 1.6 1.1 3 1.1h0c2.1 0 5.3-0.8 9.4-2.4 11.7-4.6 26-10.8 32.3-18.5l6.1-7.3c2.1 1.9 4.7 2.9 7.6 2.9 2 0 3.9-0.5 5.6-1.5 4.3-2.4 6.4-7.3 5.5-11.9 2.1-0.8 16.3-6.1 29.5-14.9 14.3-9.5 17.9-12.5 18.4-15.4C147 3.7 146.8 2.8 146.3 2.1z"
              />
              <path
                ref={el => bladesRef.current[5] = el}
                className="blade"
                fill="#000"
                d="M307.9 69c-0.6-2.9-4.2-5.9-18.5-15.4C276.5 45.2 262.7 39.9 260 39c1.1-4.8-1-9.9-5.5-12.5 -1.7-1-3.6-1.5-5.6-1.5 -3.1 0-5.9 1.2-8.1 3.3l-5.9-7.1c-6.4-7.6-20.7-13.8-32.4-18.4 -6.8-2.7-10.9-3.1-12.4-1.3 -0.5 0.6-0.7 1.6-0.5 2.7 0.6 2.9 4.2 5.9 18.5 15.4 13.2 8.7 27.4 14 29.6 14.8 -0.3 1.6-0.2 3.3 0.2 5 0.8 2.9 2.7 5.4 5.3 6.9 1.7 1 3.6 1.5 5.6 1.5 2.9 0 5.6-1.1 7.6-3l6.1 7.3c6.4 7.6 20.7 13.8 32.4 18.4 4.1 1.6 7.2 2.4 9.4 2.4 1.4 0 2.4-0.4 3-1.1C308 71.1 308.1 70.2 307.9 69z"
              />
            </svg>
          </div>

          <p className="loadingText" ref={textRef} style={{ color: getThemeColors().text }}>
            Preparing your drone experience...
          </p>

          <div className="progress-container">
            <div
              className="progress-bar"
              ref={progressRef}
              style={{ backgroundColor: theme === "default" ? "#009B3B" : getThemeColors().background }}
            ></div>
          </div>
        </div>
      </div>
    );
  }

  // ... (keep all your existing imports and code until the theme toggle button)

return (
  <ThemeContext.Provider value={themeValues}>
    <div className={`app-container theme-${theme}`}>
      <main>
        <Navbar />
        <AllRoutes />

        {/* Enhanced Theme Toggle Button */}
        <div className="theme-toggle-container">
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            title={`Current Theme: ${theme}`}
            style={{
              backgroundColor: getThemeColors().background,
              color: getThemeColors().text
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="settings-icon"
            >
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
            <span className="theme-tooltip">{theme}</span>
          </button>
          
          {/* Theme Color Options */}
          <div className="theme-options">
            <button 
              className="theme-option default" 
              onClick={() => setTheme("default")}
              data-theme="default"
            ></button>
            <button 
              className="theme-option earth" 
              onClick={() => setTheme("earth")}
              data-theme="earth"
            ></button>
            <button 
              className="theme-option forest" 
              onClick={() => setTheme("forest")}
              data-theme="forest"
            ></button>
          </div>
        </div>

        <Footer />
      </main>
    </div>

    <style jsx>{`
      .app-container {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        transition: background-color 0.3s ease, color 0.3s ease;
      }
      
      main {
        flex: 1;
        position: relative;
      }
      
      .theme-toggle-container {
        position: fixed;
        right: 20px;
        bottom: 100px;
        z-index: 1000;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 10px;
      }
      
      .theme-toggle-btn {
        width: 50px;
        height: 50px;
        right: 15px;
        border-radius: 50%;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      }
      
      .theme-toggle-btn:hover {
        transform: translateY(-3px) scale(1.05);
        box-shadow: 0 6px 16px rgba(0,0,0,0.2);
      }
      
      .theme-toggle-btn:active {
        transform: translateY(0) scale(0.98);
      }
      
      .theme-toggle-btn .theme-tooltip {
        position: absolute;
        right: 60px;
        white-space: nowrap;
        background: rgba(0,0,0,0.7);
        color: white;
        padding: 5px 10px;
        border-radius: 4px;
        font-size: 12px;
        opacity: 0;
        pointer-events: none;
        transition: all 0.2s ease;
      }
      
      .theme-toggle-btn:hover .theme-tooltip {
        opacity: 1;
        right: 65px;
      }
      
      .theme-options {
        display: flex;
        gap: 8px;
        background: rgba(255,255,255,0.9);
        padding: 8px;
        border-radius: 20px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        transform: scale(0.9);
        opacity: 0;
        transform-origin: bottom right;
        transition: all 0.3s ease;
      }
      
      .theme-toggle-container:hover .theme-options {
        transform: scale(1);
        opacity: 1;
      }
      
      .theme-option {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 2px solid white;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      
      .theme-option:hover {
        transform: scale(1.1);
      }
      
      .theme-option.default {
        background: #009E3C;
      }
      
      .theme-option.earth {
        background: #b58863;
      }
      
      .theme-option.forest {
        background: #2c7c4c;
      }
      
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      
      .settings-icon {
        animation: spin 15s linear infinite;
      }
      
      .theme-toggle-btn:hover .settings-icon {
        animation: spin 2s linear infinite;
      }
      
      /* Theme-specific styles */
      .theme-default {
        background-color: #ffffff;
        color: #333333;
      }
      
      .theme-earth {
        background-color: #e8d0b3;
        color: #5d4037;
      }
      
      .theme-forest {
        background-color: #b3d0e8;
        color: #333333;
      }
    `}</style>
  </ThemeContext.Provider>
);
}

export default App;