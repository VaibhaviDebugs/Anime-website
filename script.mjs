// ESM
import { ANIME } from '@consumet/extensions';
const gogoanime = new ANIME.Gogoanime();

gogoanime.search("One Piece").then(data => {
    const ids = data.results.map(anime => anime.id);
    console.log(ids);
});
