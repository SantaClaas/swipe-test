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
  // It is pretty cool that routes are like a tree and can be perfectly mirrored in the HTML structure
  return <div class={styles.frame}>{connections.map(Connection)}</div>;
}

export default App;
