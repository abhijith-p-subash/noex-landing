import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import "./index.css";
import styles from "./style";

function App() {
  return (
    <div className="bg-noexBlack text-noexWhite w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}></div>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
