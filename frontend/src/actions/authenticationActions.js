import axios form 'axios'

//Login
export const loginUser = (userData) => dispatch => {
  axios
    .post('/api/users/login', userData)
    .then(
      //Do some things
    )
    .catch(err =>
    
  )
}