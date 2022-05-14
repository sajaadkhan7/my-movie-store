//loading state reducer for managing if movies are still loading
export default (LoadingState = false, action) => {
    switch (action.type) {
        case 'DONE':
            return true;
        case 'NOT_DONE':
            return false;
        default:
            return false;
    }
}