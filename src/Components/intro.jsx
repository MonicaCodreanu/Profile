import "../styles/animation.css";

function Intro() {
  return (
    <div className="introAnimation">
      <div className="introFigures">
        <div className="introRow1">
          <img className="S" src="/animation/Semicircle_black_new.png" alt="" />
          <img className="S" src="/animation/circle_red.svg" alt="" />
          <img className="S" src="/animation/polka_dots.jpg" alt="" />
        </div>
        <div className="introRow2">
          <img className="S" src="/animation/square_yellow.svg" alt="" />
          <img className="S" src="/animation/Semicircle_gray_new.png" alt="" />
          <img className="S" src="/animation/arrows.svg" alt="" />
        </div>
        <div className="introRow3">
          <div className="introColumn1">
            <img className="S" src="/animation/Zigzag.png" alt="" />
            <img className="S" src="/animation/hexagon.svg" alt="" />
          </div>
          <img className="L" src="/animation/lines.png" alt="" />
          <img className="S" src="/animation/triangle.svg" alt="" />
        </div>
      </div>
      <div className="introFullName">
        <h1>Monica Codreanu</h1>
      </div>
    </div>
  );
}

export default Intro;
