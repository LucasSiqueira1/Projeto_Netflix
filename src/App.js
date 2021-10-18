import './App.css';
import LinhaFilmes from './components/LinhaFilmes'
import React, {useEffect, useState} from 'react'
import Tmdb from './Tmdb';

export default() => {
  const [movieList, setMovieList] = useState([])

  useEffect(()=>{ //carrega oq eu quiser quando a tela carregar
    const carregarTudo = async () => {
      //pegando a lista dos filmes
      let lista = await Tmdb.getHomeList()
      setMovieList(lista)
    }
    carregarTudo();
  }, []);


  return (
    <div className = "page">
      <section className = "listas">
        {movieList.map((item, key)=>(
            <LinhaFilmes key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div> 
  );
}

