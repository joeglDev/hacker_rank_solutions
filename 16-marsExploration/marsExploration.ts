/*
 * Returns number of characters changed from 'SOS' in a string. Could check each letter individually or split into 3 and check if not 'SoS'
 * @param {string} s - string representing the received communication.
 * 
 */

module.exports = function marsExploration(s: string): number {
  const numOfDataPackets = s.split("").length / 3;
  console.log("Number of data packets received: ", numOfDataPackets);

  let numCorruptedData = 0;
  const splitIntoPackets = s.match(/.{1,3}/g);

  splitIntoPackets?.forEach((packet) => {
    const splitPacket = packet.split("");

    splitPacket.forEach((char, index) => {
      if (char !== "S" && index === 0) {
        numCorruptedData += 1;
      } else if (char !== "O" && index === 1) {
        numCorruptedData += 1;
      } else if (char !== "S" && index === 2) {
        numCorruptedData += 1;
      }
    });
  });

  console.log("Number of data characters corrupted: ", numCorruptedData);
  return numCorruptedData;
};
