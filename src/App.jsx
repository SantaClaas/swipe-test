import journey from './exampleJourney';
/**
 * @typedef {import("./exampleJourney.js").Connection} Connection
 * @typedef {import("./exampleJourney.js").Journey} Journey
 * @typedef {import("solid-js").JSX.Element} Element
 */

/**
 * @param {Object} properties
 * @param {string} properties.line
 * @param {string} properties.color
 * @returns {Element}
 */
function LineBadge({ line, color }) {
  return (
    <div
      class="h-max w-max space-x-1 rounded-lg bg-black/10 px-1.5 py-1 text-sm font-bold text-slate-50"
      style={{ 'background-color': color }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
        class="inline-block border-current fill-current"
      >
        <path d="M160-340v-380q0-53 27.5-84.5t72.5-48q45-16.5 102.5-22T480-880q66 0 124.5 5.5t102 22q43.5 16.5 68.5 48t25 84.5v380q0 59-40.5 99.5T660-200l60 60v20h-80l-80-80H400l-80 80h-80v-20l60-60q-59 0-99.5-40.5T160-340Zm320-460q-106 0-155 12.5T258-760h448q-15-17-64.5-28.5T480-800ZM240-560h200v-120H240v120Zm420 80H240h480-60Zm-140-80h200v-120H520v120ZM340-320q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm280 0q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm-320 40h360q26 0 43-17t17-43v-140H240v140q0 26 17 43t43 17Zm180-480h226-448 222Z" />
      </svg>

      <span class="">{line}</span>
    </div>
  );
}

/**
 *
 * @param {Connection} connection
 */
function Connection({
  line,
  connections,
  destination,
  color,
  duration,
  headsign,
}) {
  return (
    <div class="flex w-full shrink-0 snap-center flex-col-reverse overscroll-contain bg-black/10 text-center">
      <div class="flex gap-2 p-2">
        <div
          class="ml-4 flex w-10 flex-col-reverse items-center rounded-lg bg-black/10"
          style={{ height: `${duration}px` }}
        ></div>

        <div class="flex flex-col justify-end">
          <LineBadge line={line} color={color} />
          <p>{headsign}</p>
        </div>
      </div>
      <p>{destination}</p>
      <div class="flex snap-x snap-mandatory snap-always gap-4 overflow-x-auto overscroll-contain">
        {connections.map(Connection)}
      </div>
    </div>
  );
}

/**
 *
 * @param {Object} properties
 * @param {Journey} properties.journey
 * @returns {Element}
 */
function Journey({ journey }) {
  return (
    <div class="flex h-screen snap-x snap-mandatory snap-always overflow-x-auto overscroll-auto bg-black/10">
      {/* <p>{journey.source.name}</p> */}
      {journey.connections.map(Connection)}
    </div>
  );
}

function App() {
  // It is pretty cool that routes are like a tree and can be perfectly mirrored in the HTML structure
  return <Journey journey={journey} />;
}

export default App;
