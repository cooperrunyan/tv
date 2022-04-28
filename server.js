const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/retro-music'));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/retro-music/index.html'));
});
app.listen(process.env.PORT || 8080, () => console.log(`listening on ${process.env.PORT || 8080}`));
