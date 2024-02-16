# AI-Lyrics
![alt text](https://github.com/khaouitiabdelhakim/AILyrics-JS/blob/main/LyricsAI.png)

```
If you find this repository useful or it has helped you,
please don't forget to leave a ⭐️, or even follow my GitHub account.
Your support motivates me to continue providing helpful resources.
Thank you for your appreciation! 🌟🚀💖😊👍

If you'd like to support further, consider buying me a coffee:
```
[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee--yellow.svg?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/kh.abdelhakim)

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

Running this example will log the lyrics of the song "Lily" by Alan Walker.
```
Lily was a little girl
Afraid of the big, wide world
She grew up within her castle walls
Now and then, she tried to run
...
Just let me in, ooh
```


## Notes

- Make sure you have Node.js installed on your system.
- Please be aware of web scraping regulations and respect the terms of service of the websites from which you are scraping lyrics.


## Author

This library is authored by KHAOUITI ABDELHAKIM.

For more information, visit the [GitHub repository](https://github.com/khaouitiabdelhakim/AILyrics-JS).

## Contribution

```
Fork this repository if you wish to make changes or contribute improvements.
```

## License

```
Copyright 2024 KHAOUITI ABDELHAKIM

Licensed under the MIT License
You may obtain a copy of the License at

http://opensource.org/licenses/MIT

Unless required by applicable law or agreed to in writing, software
distributed under the MIT License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the MIT License.
```
