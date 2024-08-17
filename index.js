/**
 * ai-lyrics
 * A JavaScript library to fetch song lyrics from the web.
 * 
 * Credits:
 * Author: KHAOUITI ABDELHAKIM
 * Repository: https://github.com/khaouitiabdelhakim/AILyrics-JS
 * 
 * Copyright:
 * Copyright (c) [Year], KHAOUITI ABDELHAKIM
 * 
 * Last Date: 13 March 2024
 */

const puppeteer = require('puppeteer');
const { htmlToText } = require('html-to-text');

/**
 * LyricsAI - Object containing methods to fetch song lyrics.
 */
const LyricsAI = {
    MIN_LENGTH: 200,

    /**
     * findLyricsBySongTitle - Fetches lyrics by song title.
     * @param {string} title - The title of the song.
     * @returns {Promise<string>} - The lyrics of the song.
     */
    findLyricsBySongTitle: async function (title) {
        return this.find(title);
    },

    /**
     * findLyricsBySongTitleAndArtist - Fetches lyrics by song title and artist.
     * @param {string} title - The title of the song.
     * @param {string} artist - The artist of the song.
     * @returns {Promise<string>} - The lyrics of the song.
     */
    findLyricsBySongTitleAndArtist: async function (title, artist) {
        return this.find(`${title} ${artist}`);
    },

    /**
     * find - Finds lyrics based on the provided information.
     * @param {string} info - The information to search for.
     * @returns {Promise<string>} - The lyrics found.
     */
    find: async function (info) {
        try {
            const browser = await puppeteer.launch({ headless: "new" }); // Specify Headless mode as "new"
            const page = await browser.newPage();

            const myUrl = `https://www.google.com/search?q=${encodeURIComponent(`${info} lyrics`)}`;
            await page.goto(myUrl);

            const lyricsElement = await page.$('div[jsname="WbKHeb"]');
            if (lyricsElement) {
                const lyrics = await lyricsElement.evaluate(element => element.innerHTML); // Return HTML content instead of text content
                await browser.close();
                var text = htmlToText(lyrics, {
                    wordwrap: 130
                });
                text = text.replace(/"/g, ''); // Replace all occurrences of double quotes with an empty string
                return text;
            }

            const links = await this.links(info);

            for (const link of links) {
                try {
                    await page.goto(link);
                    const divWithMostBr = await page.evaluate(() => {
                        const divElements = Array.from(document.querySelectorAll('*:not(:has(div))'));
                        let divWithMostBr = null;
                        let maxBrCount = 0;
                        for (const divElement of divElements) {
                            const brCount = divElement.querySelectorAll('br').length;
                            if (brCount >= maxBrCount && divElement.textContent.length > 600) {
                                maxBrCount = brCount;
                                divWithMostBr = divElement.innerHTML;
                            }
                        }
                        var text = htmlToText(divWithMostBr, {
                            wordwrap: 130
                        });
                        text = text.replace(/"/g, ''); // Replace all occurrences of double quotes with an empty string
                        return text;
                    });

                    if (!lyricsElement && !divWithMostBr) {
                        throw new Error(`No lyrics found for ${info}`);
                    }

                    if (divWithMostBr) {
                        await browser.close();
                        var text = htmlToText(divWithMostBr, {
                            wordwrap: 130
                        });
                        text = text.replace(/"/g, ''); // Replace all occurrences of double quotes with an empty string
                        return text;
                    }
                } catch (error) {
                    throw new Error(error)
                }
            }

            await browser.close();
            return '';
        } catch (error) {
            throw new Error(error)
        }
    },

    /**
     * links - Retrieves links related to the search information.
     * @param {string} info - The information to search for.
     * @returns {Promise<string[]>} - Array of links.
     */
    links: async function (info) {
        const browser = await puppeteer.launch({ headless: "new" });
        const page = await browser.newPage();

        const encodedInfo = encodeURIComponent(`${info} lyrics`);
        const myUrl = `https://www.google.com/search?q=${encodedInfo}&num=15`;
        await page.goto(myUrl);

        const linksToSong = await page.evaluate(() => {
            const links = Array.from(document.querySelectorAll('div.yuRUbf a'));
            return links.map(link => link.href);
        });

        await browser.close();
        return this.removeDuplicates(linksToSong);
    },

    /**
     * removeDuplicates - Removes duplicate links from the list.
     * @param {string[]} list - Array of links.
     * @returns {string[]} - Array of unique links.
     */
    removeDuplicates: function (list) {
        return [...new Set(list)];
    },
};

module.exports = LyricsAI;
