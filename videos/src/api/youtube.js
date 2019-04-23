import axios from 'axios';

const KEY = 'AIzaSyBL-Pff6Aw7G0bZotEO5zcwXVy-OtpfKQA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});