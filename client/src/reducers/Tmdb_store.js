export default (Tmdb_store = [], action) => {
    switch (action.type) {
        case 'TMDB_STORE':
            return action.payload;
        default:
            return Tmdb_store;
    }
}
