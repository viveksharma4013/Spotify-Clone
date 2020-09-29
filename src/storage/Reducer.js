export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    playlist: null,
    playlistId: null,
    item: null,
    token: null
};
const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLIST':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_SELECTED_PLAYLIST':
            return {
                ...state,
                playlist: action.playlist
            }
        case 'SET_PLAYING':
            return {
                ...state,
                playing: action.playing
            }
        case 'SET_ITEM':
            return {
                ...state,
                item: action.item
            }
        case 'SET_PLAYLIST_ID':
            return {
                ...state,
                playlistId: action.playlist
            }
        default:
            return state;
    }
}
export default reducer;