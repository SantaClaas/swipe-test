/**
 * @typedef {Object} Connection
 * @property {string} label
 * @property {Connection[]} connections
 */

/**
 * @type {Connection[]}
 */
export default [
  {
    label: "Connection 1",
    connections: [
      {
        label: "Connection 1.1",
        connections: [
          {
            label: "Connection 1.1.1",
            connections: [],
          },
          {
            label: "Connection 1.1.2",
            connections: [
              {
                label: "Connection 1.1.2.1",
                connections: [],
              },
              {
                label: "Connection 1.1.2.2",
                connections: [],
              },
            ],
          },
        ],
      },
      {
        label: "Connection 1.2",
        connections: [],
      },
    ],
  },
  {
    label: "Connection 2",
    connections: [
      {
        label: "Connection 2.1",
        connections: [],
      },
      {
        label: "Connection 2.2",
        connections: [],
      },
    ],
  },
  {
    label: "Connection 3",
    connections: [
      {
        label: "Connection 3.1",
        connections: [],
      },
      {
        label: "Connection 3.2",
        connections: [],
      },
    ],
  },
];
