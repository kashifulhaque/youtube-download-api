const app = require("express")();
const ytdl = require("ytdl-core");

app.get("/api", async (req, res) => {
  const { url } = await req.query;
  const { formats } = await ytdl.getInfo(url);

  const stats = formats.map((format) => {
    const { qualityLabel, url, hasVideo, hasAudio } = format;
    const obj = {
      qualityLabel: qualityLabel,
      downloadUrl: url,
      hasVideo: hasVideo,
      hasAudio: hasAudio,
    };

    return obj;
  });

  res.json(stats);
});

module.exports = app;
