import logo from './logo.svg';
import './stylesheets/style.css';
import Month from './components/Month.js';
import { gsap } from "gsap";


const month = document.getElementsByClassName("month");

    // Use GSAP to animate the boxes with a stagger effect
    gsap.from(month, {
        duration: 1,
        x: -100,
        opacity: 0,
        stagger: 0.2, // Stagger each animation by 0.2 seconds
        ease: "power2.out",
        onComplete: () => {
            console.log("Animation complete!");
        }
    });

function App() {
  return (
    <div className="main_container">
      <Month name="Jan"/>
      <Month name="Feb"/>
      <Month name="March"/>
      <Month name="April"/>

      <Month name="May"/>
      <Month name="Jun"/>
      <Month name="Jul"/>
      <Month name="Aug"/>

      <Month name="Sept"/>
      <Month name="Oct"/>
      <Month name="Nov"/>
      <Month name="Dec"/>

    </div>
  );
}

export default App;
