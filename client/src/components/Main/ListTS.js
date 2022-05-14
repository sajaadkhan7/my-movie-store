//import user defined component..
import Tmdb from "./Tmdb";

const ListTS = () => {
   // const tvshowsURL = 'https://api.themoviedb.org/3/search/tv?api_key=c1ec99bca4a799530c16fb945021413e&language=en-US&page=1&query=popular&include_adult=false';
    return (
        <>
             <h2 className="container mt-3"> Popular Tv Shows </h2>
            <Tmdb keywordQ="popular" category="tv"/> 
            
        </>
    );
}
export default ListTS;