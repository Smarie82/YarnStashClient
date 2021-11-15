let APIURL = '';

switch (window.location.hostname) {
    // this is the local host name of your react app
    case 'yarnstash' || '127.0.0.1':
        // this is the local host name of your API
        APIURL = 'http://localhost:3000';
        break;
    // this is the deployed react application
    case 'https://yarnstash-client.herokuapp.com/':
        // this is the full url of your deployed API
        APIURL = 'https://yarnstash-client.herokuapp.com/'
}

export default APIURL;