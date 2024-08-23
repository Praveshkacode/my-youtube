import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';


const Head = () => {

  const dispatch = useDispatch();

  const toggleMenuHandler = ()=>{
    dispatch(toggleMenu());
  }

  return (
    <div className="grid grid-flow-col p-5 m-3 shadow-lg">
        <div className="flex col-span-1">
            <img 
            onClick={()=>toggleMenuHandler()}
            alt='menu'
            className="h-14 cursor-pointer"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADPz89LS0uWlpb39/eCgoKQkJCxsbH29vZiYmI4ODh0dHTX19empqbFxcXr6+sQEBDh4eEbGxu7u7s0NDR6enpXV1egoKDJyclvb28ODg6IiIhcXFwfHx8ZGRnwNjATAAACZUlEQVR4nO3dCW7CMBCFYRdIw75vbSm9/y2rqKgUVRo72NJoxv93gveUkGBj7BAAAAAAAAAAAAAAAAAAoAKrdjq0Y9qu+tVbH1/sOa7TC7baYZ/UJvZrZtpJnzZrkgputHNm2KRUPGinzHKIF3zVzpjpNVZwq50w2zbScKodMNtULjjRzlfARGw41o5XwFhsONeOV8BcbGj3ZX83Extqpyui8oY77XQFXMWGJ+14BZzEhlbHTX/JY6iBdrwCFmJDD48auWBYaufLtow0NP803cUKhoV2xEyRT6H9+zR6j3bO2ikznFMKhrDSzvm05GnhxuYgap40l3izHlmbcpuNekx53y7kdmDHts/lAwAAAAAAAAAAxjRvy5Edy7e+P1zsh9q/JfU23PfoN7hqx33KdZBa0O5i9ugy9h+f2jkzfKYUfNdOmeU9XtD6Sm95lXfwsFhfXqofwkU7YLZLpKF2vgLkgnYXC93Jy4bsvgrv5JeivS9r/w3Fhh/a8QrYiA210xVR+TX0/zn0/yz1/z708KiRC1bwvdT+2CI6JeV+fFjBGL+CeRrLT5vEubYK5kuD/znvjvffLQAAAAAAAAAAgCHO94myt9fXoddeXxOj+7XFFkD/srtsKHHPPff7Jrrf+9L//qVf2hEzRfegtX2PdmL3qXa+AuSC/vfz9r8nu/999a3v5t2Rn6ba6YqovKH/c2ZsDpseyWcFWV/l3ZFXettfqh/9I7D7c9cqODvP/H+7EhazW5tke5RwhmVoLI+Bk84h9X+WbLA7hko9DzhUcKZzx/m53AAAAAAAAAAAAAAAAABg0zfn21Nf0tdOJAAAAABJRU5ErkJggg=="
            />
            <a href='/'>
            <img className="h-14 mx-4 text-center" alt="youtube" src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" />
            </a>
        </div>
        <div className='col-span-10 px-10'>
            <input  className="w-1/2 border border-gray-500 p-2 rounded-l-full" type="text" />
            <button className="border  px-5 py-2 rounded-r-full bg-gray-200">🔎</button>
        </div>
        <img className="h-10 col-span-1"
        alt="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
    </div>
  )
}

export default Head
