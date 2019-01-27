import axios from 'axios'

//Haves
export const getHaves = () => {
  axios
    .get('/haves/all')
}