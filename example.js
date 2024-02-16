const LyricsAI = require('./index');

(async function() {
    try {
        const songTitle = "Lily";
        const artist = "Alan Wlaker";
        const lyricsByTitleAndArtist = await LyricsAI.findLyricsBySongTitleAndArtist(songTitle, artist);
        console.log(lyricsByTitleAndArtist);
    } catch (error) {
        console.error("Error:", error);
    }
})();