import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { FavoritesContext } from '../../context/FavoriteContext';
import './Palette.css';

const Palette = ({ palette }) => {
    const { id, name, colors, liked } = palette
    const { favorites, setFavorites } = useContext(FavoritesContext);
    const [isFavorite, setIsFavorite] = useState(liked);
  

  const handleFavorite = () => {
    setIsFavorite((isFavorite) => !isFavorite);

    //busco si la paleta ya esta en favoritos
    const foundIndex = favorites.findIndex(fav => fav.id === id);

    //para agregar a favoritos (-1 significa que no existe)
    if (foundIndex === -1) {
      setFavorites([...favorites, palette])
      return
    }

    //Quitar de favoritos
    setFavorites(
      favorites.filter((fav) => fav.id !== id )//!==
    );
  }



  return (
<div className='palette-container'>
      <div className='palette'>
        <h3>{name}</h3>
        {colors.map((color) => {
          return (
            <div
              key={color}
              className='color'
              style={{ backgroundColor: color }}
            >
              <span>{color}</span>
            </div>
          );
        })}
      </div>
      <div className='fav'>
        {isFavorite ? (
          <FaHeart className='fav heart' onClick={handleFavorite}/>
        ) : (
          <FaRegHeart className='fav' onClick={handleFavorite}/>
        )}
      </div>
    </div>

  );
}

export default Palette
