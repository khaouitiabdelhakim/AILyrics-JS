const LyricsAI = require('./index');

(async function() {
    try {
        const songTitle = "Lily";
        const artist = "Alan Wlaker";
        //find with Title and Artist
        const lyricsByTitleAndArtist = await LyricsAI.findLyricsBySongTitleAndArtist(songTitle, artist);

        //find with just Title
        const lyricsByTitle = await LyricsAI.findLyricsBySongTitle(songTitle);
        console.log(`Find with Title and Artist ${lyricsByTitleAndArtist}`, `Find with Title ${lyricsByTitle}`);
    } catch (error) {
        console.error("Error:", error);
    }
})();