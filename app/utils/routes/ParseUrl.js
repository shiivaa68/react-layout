
  function ParseUrl(url) {
    const parsedURL = {};

  
        parsedURL.url = url.split('/')[3];
        if (url.indexOf('details') > 0) {
            parsedURL.id = parsedURL.url.split('?id=')[1];
            parsedURL.kind = 'MOVIE';
        } else if (url.indexOf('series') > 0) {
            parsedURL.id = parsedURL.url.split('?id=')[1];
            parsedURL.kind = 'SERIES';
        } else if (url.indexOf('page') > 0) {
            parsedURL.id = parsedURL.url.split('?id=')[1];
            parsedURL.kind = 'PAGE';
        }
 
   
    return parsedURL;
}

export default ParseUrl;