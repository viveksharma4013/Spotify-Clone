var authorize = "https://accounts.spotify.com/authorize"
const redirectUri = "http://localhost:3000"
const clientId = "e8fe5d0258c74aa0976a995bdd32de7b"

const scopes = [
    "user-read-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-top-read",
    "user-modify-playback-state"
]

export const getAccessToken = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1])
            return initial;
        }, {});
}

export const loginUrl = `${authorize}?client_id=${clientId}&
redirect_uri=${redirectUri}&
scope=${scopes.join("%20")}&
response_type=token&
show_dialog=true`