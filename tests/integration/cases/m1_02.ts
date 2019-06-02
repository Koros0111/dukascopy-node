const config = {
  symbol: 'eurusd',
  dates: { start: '2019-02-05 01:00', end: '2019-02-05 02:00' },
  timeframe: 'm1',
  volumes: true,
  gmtOffset: 0
};

const expectedOutput = [
  [1549328400000, 1.14357, 1.14361, 1.14357, 1.1436, 43.09],
  [1549328460000, 1.1436, 1.14366, 1.14359, 1.14364, 147.81],
  [1549328520000, 1.14365, 1.14365, 1.14359, 1.14359, 142.83],
  [1549328580000, 1.14359, 1.1436, 1.14354, 1.14354, 149.19],
  [1549328640000, 1.14355, 1.14358, 1.14353, 1.14355, 166.11],
  [1549328700000, 1.14355, 1.14359, 1.14354, 1.14354, 78.55],
  [1549328760000, 1.14354, 1.14355, 1.14353, 1.14354, 120.93],
  [1549328820000, 1.14354, 1.1436, 1.14354, 1.14359, 119.58],
  [1549328880000, 1.1436, 1.1436, 1.14358, 1.14359, 55.4],
  [1549328940000, 1.1436, 1.1436, 1.14359, 1.14359, 15.92],
  [1549329000000, 1.1436, 1.14366, 1.1436, 1.14362, 143.89],
  [1549329060000, 1.14362, 1.14372, 1.14362, 1.1437, 69.94],
  [1549329120000, 1.1437, 1.14372, 1.14368, 1.14369, 80.66],
  [1549329180000, 1.14369, 1.14372, 1.14369, 1.1437, 66.71],
  [1549329240000, 1.1437, 1.14372, 1.14369, 1.14371, 41.64],
  [1549329300000, 1.14371, 1.14371, 1.14368, 1.14369, 82.44],
  [1549329360000, 1.1437, 1.14371, 1.14369, 1.14369, 81.45],
  [1549329420000, 1.1437, 1.1437, 1.14364, 1.14364, 68.98],
  [1549329480000, 1.14365, 1.14365, 1.14358, 1.14358, 38.01],
  [1549329540000, 1.14359, 1.14364, 1.14358, 1.14362, 19.08],
  [1549329600000, 1.14362, 1.14365, 1.14362, 1.14364, 28.03],
  [1549329660000, 1.14363, 1.14365, 1.1436, 1.14364, 127.49],
  [1549329720000, 1.14365, 1.14365, 1.14363, 1.14365, 64.72],
  [1549329780000, 1.14366, 1.14366, 1.14364, 1.14364, 30.58],
  [1549329840000, 1.14365, 1.14365, 1.14364, 1.14364, 63.5],
  [1549329900000, 1.14365, 1.14365, 1.14363, 1.14363, 82.85],
  [1549329960000, 1.14364, 1.14365, 1.14363, 1.14365, 93.43],
  [1549330020000, 1.14364, 1.14375, 1.14364, 1.14374, 113.79],
  [1549330080000, 1.14375, 1.14375, 1.14374, 1.14374, 38.96],
  [1549330140000, 1.14375, 1.14376, 1.14374, 1.14375, 71.81],
  [1549330200000, 1.14375, 1.14382, 1.14371, 1.14381, 50.73],
  [1549330260000, 1.14381, 1.14382, 1.14381, 1.14381, 19.68],
  [1549330320000, 1.14381, 1.14387, 1.14381, 1.14385, 86.29],
  [1549330380000, 1.14384, 1.14385, 1.14382, 1.14385, 89.94],
  [1549330440000, 1.14384, 1.14385, 1.14384, 1.14384, 63.97],
  [1549330500000, 1.14385, 1.14385, 1.14384, 1.14385, 33.95],
  [1549330560000, 1.14384, 1.14386, 1.14384, 1.14385, 35.01],
  [1549330620000, 1.14386, 1.14391, 1.14385, 1.1439, 98.56],
  [1549330680000, 1.1439, 1.14391, 1.14389, 1.14391, 30.44],
  [1549330740000, 1.14393, 1.14395, 1.1439, 1.14392, 85.76],
  [1549330800000, 1.14391, 1.14391, 1.1439, 1.1439, 17.81],
  [1549330860000, 1.14391, 1.14391, 1.1439, 1.14391, 14.9],
  [1549330920000, 1.14391, 1.14391, 1.14384, 1.14385, 107.65],
  [1549330980000, 1.14385, 1.14392, 1.14385, 1.14389, 151.77],
  [1549331040000, 1.14389, 1.14389, 1.14386, 1.14386, 89.88],
  [1549331100000, 1.14388, 1.14389, 1.14381, 1.14381, 82.46],
  [1549331160000, 1.14381, 1.14386, 1.1438, 1.14385, 158.04],
  [1549331220000, 1.14386, 1.14394, 1.14384, 1.14393, 133.38],
  [1549331280000, 1.14393, 1.14395, 1.1439, 1.14391, 124.6],
  [1549331340000, 1.1439, 1.14391, 1.14384, 1.14385, 140.94],
  [1549331400000, 1.14385, 1.14385, 1.14382, 1.14384, 80.4],
  [1549331460000, 1.14385, 1.14386, 1.14384, 1.14386, 36.51],
  [1549331520000, 1.14385, 1.14387, 1.1438, 1.14387, 178.15],
  [1549331580000, 1.14386, 1.14387, 1.14381, 1.14385, 60.14],
  [1549331640000, 1.14384, 1.14387, 1.14382, 1.14385, 134.42],
  [1549331700000, 1.14385, 1.14387, 1.14385, 1.14385, 88.43],
  [1549331760000, 1.14384, 1.14384, 1.14379, 1.1438, 54.54],
  [1549331820000, 1.1438, 1.14389, 1.1438, 1.14385, 192.01],
  [1549331880000, 1.14386, 1.14386, 1.14381, 1.14381, 101.41],
  [1549331940000, 1.14381, 1.14381, 1.14379, 1.1438, 88.42]
];

export { config, expectedOutput };
