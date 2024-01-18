/**
 * @typedef {Object} Stop
 * @property {string} name
 */

/**
 * @typedef {Object} Connection
 * @property {string} line
 * @property {string} headsign
 * @property {string} color
 * @property {string} departure
 * @property {string} destination
 * @property {string} arrival
 * @property {number} duration
 * @property {Connection[]} connections
 */

/**
 * @typedef {Object} Journey
 * @property {Stop} source
 * @property {Stop} destination
 * @property {Connection[]} connections
 */

/**
 * @type {Journey}
 */
// Based on example qery:
// https://www.bahn.de/buchung/fahrplan/suche#sts=true&so=Neumarkt%2C%20K%C3%B6ln&zo=Bonn%20Konrad-Adenauer-Platz&kl=2&r=13:16:KLASSENLOS:1&soid=A%3D1%40O%3DNeumarkt%2C%20K%C3%B6ln%40X%3D6948626%40Y%3D50935937%40U%3D80%40L%3D441560%40B%3D1%40p%3D1704912371%40&zoid=A%3D1%40O%3DBonn%20Konrad-Adenauer-Platz%40X%3D7117659%40Y%3D50739307%40U%3D80%40L%3D8070075%40B%3D1%40p%3D1704912371%40&sot=ST&zot=ST&soei=441560&zoei=8070075&hd=2024-01-16T12:48:54&hza=D&hz=%5B%5D&ar=false&s=true&d=false&fm=false&bp=false
export default {
  source: {
    name: 'Neumarkt, Köln',
  },
  destination: {
    name: 'Bonn Konrad-Adenauer-Platz',
  },
  connections: [
    {
      line: 'STR 4',
      headsign: 'Dünnwald Leverkusen Schlebusch, Köln',
      color: '#a9455d',
      departure: '12:48',
      destination: 'Köln Messe/Deutz',
      arrival: '12:56',
      duration: 8 * 60,
      connections: [
        {
          line: 'S 19',
          headsign: 'Au(Sieg)',
          color: '#408335',
          departure: '13:03',
          destination: 'Siegburg/Bonn',
          arrival: '13:31',

          duration: (31 - 3) * 60,
          connections: [
            {
              line: 'STR 66',
              headsign: 'Bad Honnef Stadtbahn',
              color: '#a9455d',
              departure: '13:37',
              destination: 'Bonn Konrad-Adenauer-Platz',
              arrival: '13:55',

              duration: (55 - 37) * 60,
              connections: [],
            },
          ],
        },
      ],
    },
    {
      line: 'STR 1',
      headsign: 'Bensberg, Bergisch Gladbach',
      color: '#a9455d',
      departure: '12:54',
      destination: 'Köln Messe/Deutz',
      arrival: '13:00',
      duration: 6 * 60,
      connections: [
        {
          line: 'RE 8',
          headsign: 'Troisdorf',
          color: '#878c96',
          departure: '13:07',
          destination: 'Troisdorf',
          arrival: '13:21',

          duration: (21 - 7) * 60,
          connections: [
            {
              line: 'S 19',
              headsign: 'Au(Sieg)',
              color: '#408335',
              departure: '13:27',
              destination: 'Siegburg/Bonn',
              arrival: '13:31',
              duration: 4 * 60,
              connections: [
                {
                  line: 'STR 66',
                  headsign: 'Bad Honnef Stadtbahn',
                  color: '#a9455d',
                  departure: '13:37',
                  destination: 'Bonn Konrad-Adenauer-Platz',
                  arrival: '13:55',
                  duration: (55 - 37) * 60,
                  connections: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      line: 'STR 4',
      headsign: 'Dünnwald Leverkusen Schlebusch, Köln',
      color: '#a9455d',
      departure: '12:58',
      destination: 'Köln Messe/Deutz',
      arrival: '13:06',
      duration: 8 * 60,
      connections: [
        {
          line: 'S 12',
          headsign: 'Hennef(Sieg)',
          color: '#408335',
          departure: '13:13',
          destination: 'Siegburg/Bonn',
          arrival: '13:38',
          duration: (38 - 13) * 60,
          connections: [
            {
              line: 'STR 66',
              headsign: 'Königswinter, Clemens-August-Str.',
              color: '#a9455d',
              departure: '13:47',
              destination: 'Bonn Konrad-Adenauer-Platz',
              arrival: '14:05',
              duration: 18 * 60,
              connections: [],
            },
          ],
        },
      ],
    },
  ],
};
