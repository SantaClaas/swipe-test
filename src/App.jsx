import logo from "./logo.svg";
import styles from "./App.module.css";
import connections from "./connections.js";

/**
 *
 * @param {import("./connections.js").Connection} connection
 */
function Connection({ label, connections }) {
  return (
    <div class={styles.box}>
      <p>{label}</p>
      <div class={styles.row}>{connections.map(Connection)}</div>
    </div>
  );
}

function App() {
  return (
    <div class={styles.frame}>
      {connections.map(Connection)}
      {/* <div class={styles.box}>
        <p>Connection 1</p>

        <div class={styles.row}>
          <div class={styles.box}>
            <p>Connection 1.1</p>
          </div>
          <div class={styles.box}>
            <p>Connection 1.2</p>
          </div>
          <div class={styles.box}>
            <p>Connection 1.3</p>
          </div>
        </div>
      </div>
      <div class={styles.box}>
        <p>Connection 2</p>
        <div class={styles.box}>
          <p>Connection 2.1</p>
        </div>
      </div>
      <div class={styles.box}>
        <p>Connection 3</p>
        <div class={styles.box}>
          <p>Connection 3.1</p>
        </div>
      </div> */}
    </div>
  );
}

export default App;
