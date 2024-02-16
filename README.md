# ai-lyrics

## Description

`ai-lyrics` is a JavaScript library that allows you to easily fetch song lyrics from various sources on the web. It utilizes Puppeteer, a headless browser automation tool, to scrape lyrics from search results and provides methods to retrieve lyrics by song title or by both song title and artist.

## Installation

You can install `ai-lyrics` via npm:

```bash
npm install ai-lyrics
```

## Usage

```javascript
const LyricsAI = require('ai-lyrics');

(async function() {
    try {
        // Specify the song title and artist
        const songTitle = "Lily";
        const artist = "Alan Walker";

        // Fetch lyrics by song title and artist
        const lyricsByTitleAndArtist = await LyricsAI.findLyricsBySongTitleAndArtist(songTitle, artist);
        console.log(lyricsByTitleAndArtist);
    } catch (error) {
        console.error("Error:", error);
    }
})();
```

This will output the lyrics of the specified song.

## Example

```javascript
const LyricsAI = require('ai-lyrics');

(async function() {
    try {
        // Specify the song title and artist
        const songTitle = "Lily";
        const artist = "Alan Walker";

        // Fetch lyrics by song title and artist
        const lyricsByTitleAndArtist = await LyricsAI.findLyricsBySongTitleAndArtist(songTitle, artist);
        console.log(lyricsByTitleAndArtist);
    } catch (error) {
        console.error("Error:", error);
    }
})();
```

Running this example will log the lyrics of the song "Lily" by Alan Walker.

## Notes

- Make sure you have Node.js installed on your system.
- Ensure that Puppeteer is installed as a dependency (`npm install puppeteer`) since `ai-lyrics` utilizes Puppeteer for web scraping.
- Please be aware of web scraping regulations and respect the terms of service of the websites from which you are scraping lyrics.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

This library is authored by KHAOUITI ABDELHAKIM.

For more information, visit the [GitHub repository](https://github.com/example/ai-lyrics).

---

Feel free to contribute, report issues, or suggest enhancements! We appreciate your support. 🎶
