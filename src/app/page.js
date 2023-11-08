//import "../horizon/perspective.scss";
//import "../horizon/stage.scss";
import "./styles/vanishingPoint.scss";

export default function Home() {
  return (
    <main className="">
      <div>
        <h1>
          Voir :
          <a href="https://www.youtube.com/watch?v=LzDf8BizhmQ&ab_channel=9elements">
            CETTE VIDEO
          </a>
        </h1>
        <h2>Vanishing point</h2>
        <section className="vp_output horizon">
          <div className="vp_layout stage_background"></div>
          <div className="vp_layout stage_down"></div>
          <div className="vp_layout stage_center"></div>
          <div className="vp_layout stage_up"></div>
          <div className="vp_layout stage_foreground"></div>
        </section>
        <h3>Center top</h3>
        <h3>Center left</h3>
        <h3>Center right</h3>
        <h3>Middle center</h3>
        <h3>Middle left</h3>
        <h3>Middle right</h3>
        <h3>Bottom left</h3>
        <h3>Bottom right</h3>
      </div>
    </main>
  );
}
