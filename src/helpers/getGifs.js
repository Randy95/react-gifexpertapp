
const api_key = 'axv6bb881YLZcFfh3ow5eKr426kxOl9i';

export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=${ api_key }`
    const resp = await fetch( url );

    const {data} = await resp.json();

    const gifs = data.map( img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    return gifs;
}