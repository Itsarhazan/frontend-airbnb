import { httpService } from './http-service.js'
const ENDPOINT = 'auth'

export const userService = {
  login,
  signup,
  logout,
  getGuestUser,
}

async function login(cred) {
  console.log('login', cred);
  return await httpService.post(ENDPOINT + '/login', cred)
}

async function signup(cred) {
  console.log('signed up', cred);
  return await httpService.post(ENDPOINT + '/signup', cred)
}

async function logout() {
  return await httpService.post(ENDPOINT + '/logout')
}

function getGuestUser() {
  return {
    fullname: 'Guest User',
    username: 'guest',
    password: 'guest',
    isAdmin: true,
  }
}
