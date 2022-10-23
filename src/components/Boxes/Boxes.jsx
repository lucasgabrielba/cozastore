import styles from "./Boxes.modules.css";

function Boxes() {
  return (
    <div className="categories">
      <div className="block woman_category">
        <h3>Woman</h3>
        <p>Spring 2018</p>

        <button>SHOP NOW</button>
      </div>
      <div className="block men_category">
        <h3>Men</h3>
        <p>Spring 2018</p>

        <button>SHOP NOW</button>
      </div>
      <div className="block accessories">
        <h3>Accessories</h3>
        <p>New Trend</p>

        <button>SHOP NOW</button>
      </div>
    </div>
  );
}

export default Boxes;
