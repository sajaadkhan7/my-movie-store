export default (LoadingState= false, action) => {
    switch (action.type) {
        case 'DONE':
            return true;
        case 'NOT_DONE':
            return false;
        default:
            return false;
    }
}