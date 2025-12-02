import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Header } from "./components/Header/Header";

import { createContext } from "react";
import { Hero } from "./components/Hero/Hero";
import { Card } from "./components/Card/Card";
import Button from "./components/Button/Button";
import { Tile } from "./components/Tile/Tile";
import { Accordion } from "./components/Accordion/Accordion";

export const themeNames = Object.fromEntries(
  Object.keys(import.meta.glob("../build/**/*.css", { eager: true })).map(
    (x) => [x.replace("../build/", "").replace("/css/_variables.css", ""), x],
  ),
);

export const ThemeContext = createContext(Object.keys(themeNames)[0]);

function App() {
  const [theme, setTheme] = useState(Object.keys(themeNames)[0]);

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <ThemeSwitcher setTheme={setTheme} />
        <Header />
        <Hero>
          <Card />
          <div
            style={{
              display: "flex",
              gap: "var(--myh-spacing-large)",
              flexWrap: "wrap",
              alignContent: "flex-start",
              margin: "var(--myh-spacing-xxx-large) 0",
            }}
          >
            {[
              "Explicabo →",
              "Nostrum quis →",
              "Explicabo →",
              "Veniam quis nostrum →",
              "Ut enim ad →",
              "Ove Sundberg →",
              "Exceritaationem →",
              "Exceritaationem →",
              "Nostrum quis →",
              "Explicabo →",
              "Ut enim ad →",
            ].map((x) => (
              <Button key={x}>{x}</Button>
            ))}
          </div>
        </Hero>
        <div
          style={{
            background: "var(--myh-color-surface-secondary)",
            display: "flex",
            gap: "var(--myh-spacing-medium)",
            padding:
              "var(--myh-spacing-xxx-large) var(--myh-spacing-xxx-large)",
          }}
        >
          <Tile />
          <Tile />
          <Tile />
        </div>
        <div
          style={{
            background: "var(--myh-color-surface-background)",
            display: "flex",
            gap: "var(--myh-spacing-medium)",
            flexDirection: "column",
            padding:
              "var(--myh-spacing-xxx-large) var(--myh-spacing-xxx-large)",
          }}
        >
          <Accordion>
            <p>
              Inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
              aut odit aut fugit, sed quia consequuntur magni dolores eos qui
              ratione voluptatem sequi nesciunt.
            </p>
            <p>
              Inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
              aut odit aut fugit, sed quia consequuntur magni dolores eos qui
              ratione voluptatem sequi nesciunt.
            </p>
            <p>
              Inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
              aut odit aut fugit, sed quia consequuntur magni dolores eos qui
              ratione voluptatem sequi nesciunt.
            </p>
          </Accordion>
          <Accordion />
          <Accordion />
        </div>
        {/* <div
          style={{
            background: "var(--myh-color-surface-secondary)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--myh-spacing-medium)",
            margin: "var(--myh-spacing-xxx-large) var(--myh-spacing-xxx-large)",
          }}
        >
          <Accordion>
            <p>
              Inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
              aut odit aut fugit, sed quia consequuntur magni dolores eos qui
              ratione voluptatem sequi nesciunt.
            </p>
            <p>
              Inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
              aut odit aut fugit, sed quia consequuntur magni dolores eos qui
              ratione voluptatem sequi nesciunt.
            </p>
            <p>
              Inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
              aut odit aut fugit, sed quia consequuntur magni dolores eos qui
              ratione voluptatem sequi nesciunt.
            </p>
          </Accordion>
          <Accordion />
          <Accordion />
        </div> */}
        <div
          style={{
            background: "white",
            height: "200px",
          }}
        ></div>
        <div
          style={{
            background: "var(--myh-color-background-primary)",
            height: "200px",
          }}
        ></div>
      </ThemeContext.Provider>
    </>
  );
}

function ThemeSwitcher({ setTheme }: { setTheme: (theme: string) => void }) {
  const theme = useContext(ThemeContext);

  return (
    <>
      <select
        style={{
          background: "white",
          position: "fixed",
          bottom: 10,
          left: 10,
          margin: "10px",
          zIndex: 1000,
        }}
        onChange={(e) => {
          setTheme(e.target.value);
        }}
      >
        {Object.keys(themeNames).map((theme) => (
          <option key={theme} style={{ background: "white" }}>
            {theme}
          </option>
        ))}
      </select>
      <link href={themeNames[theme]} rel="stylesheet" />
    </>
  );
}

export default App;
