import axios from 'axios';

const token = '17|2bjIThBL1nVrE8fDjPTygHbp8GtTyuTO8NMdmsmx';

axios.defaults.headers =  {
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + token
    }
}

axios.get('https://toram-id.info/api/v1/items')
.then((response) => console.log(response.data))
.catch((err) => console.error(err));