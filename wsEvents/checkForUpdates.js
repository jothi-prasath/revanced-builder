const { getDownloadLink } = require('../utils/FileDownloader.js');

<<<<<<< HEAD
const currentVersion = 'v3.9.3';
=======
const currentVersion = 'v3.9.2';
>>>>>>> c514187 (Bump to 3.9.2.)

/**
 * @param {import('ws').WebSocket} ws
 */
module.exports = async function checkForUpdates(ws) {
  const builderVersion = (
    await getDownloadLink({ owner: 'reisxd', repo: 'revanced-builder' })
  ).version;

  if (builderVersion !== currentVersion)
    ws.send(
      JSON.stringify({
        event: 'notUpToDate',
        builderVersion,
        currentVersion
      })
    );
  else {
    ws.send(
      JSON.stringify({
        event: 'upToDate',
        currentVersion
      })
    );
  }
};

module.exports.currentVersion = currentVersion;
