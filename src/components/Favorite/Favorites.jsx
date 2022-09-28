import Favorite from './Favorite';
import './Favorites.css';

const Favorites = ({ favorites }) => {
  return (
    <div className='favorite-container'>
      <h2 className='fav-title'>Mis Favoritos</h2>

      {
        favorites.length === 0 ? (
          <span>No hay paletas por aqui...</span>
        ): (
          favorites.map((favorite) => (
            <Favorite key={favorite.id} favorite={favorite}/>
          ))
        )
      }
    </div>
  );
};

export default Favorites;
