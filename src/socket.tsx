import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
const URL = 'http://192.168.115.166:5000/plinko';

export const socket = io(URL);