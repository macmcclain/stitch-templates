const axios = require('axios');
require('dotenv').config()
import stitch from 'stitch-client';


// get the token.
const token = stitch.storage.get("Authorization");

const instance = axios.create({
  baseURL: process.env.VUE_APP_API,
  headers: {'Authorization': token}
});

export default instance;
