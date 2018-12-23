import decode from 'jwt-decode';
import axios from 'axios';

export default class AuthService {
    constructor(domain) {
        this.domain = domain || '/api/auth';
        this.fetch = this.fetch.bind(this);
        this.login = this.login.bind(this);
        this.getProfile = this.getProfile.bind(this);
    }

    login(login, password) {
        return axios.post(`/api/auth/login`, { login, password })
            .then(response => {
                this.setToken(response.data.token);
                return Promise.resolve(response)
            });
    }

    logout() {

        localStorage.clear();
        window.location.replace('/');
    }

    fetch(url, method, data = null) {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        if (this.loggedIn())
            headers['Authorization'] = 'Bearer ' + this.getToken();
        else {
            localStorage.clear();
            window.location.replace('/login');
        }

        return axios({
            method: method,
            url: url,
            data: data || null,
            headers: headers
        })
            .then(this._checkStatus)
            .then(response => response.data)
            .catch(res => console.log(res))
    }

    loggedIn() {
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000)
                return true;
            else
                return false;
        }
        catch (err) {
            return false
        }
    }

    setToken(idToken) {
        localStorage.setItem('id_token', idToken);
    }

    getToken() {
        return localStorage.getItem('id_token');
    }

    getProfile() {
        return decode(this.getToken());
    }

    _checkStatus(response) {
        if (response.status >= 200 && response.status < 300) { 
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }
}
const root = 'https://localhost:44362/';

