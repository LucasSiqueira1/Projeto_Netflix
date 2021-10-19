import './App.css';
import LinhaFilmes from './components/LinhaFilmes'
import React, {useEffect, useState} from 'react'
import Tmdb from './Tmdb';
import DestaqueMovie from './components/DestaqueMovie';

export default() => {
  const [movieList, setMovieList] = useState([]);
  const [destaqueData, setDestaqueData] = useState(null);

  useEffect(()=>{ //carrega oq eu quiser quando a tela carregar
    const carregarTudo = async () => {
      //pegando a lista dos filmes
      let lista = await Tmdb.getHomeList()
      setMovieList(lista)

      //após carregar a lista, tem que pegar o filme em destaque 
      let originals = lista.filter(i => i.slug === "originals")
      let aleatorio = Math.floor(Math.random() * (originals[0].items.results.length -1));
      console.log(aleatorio)
      let escolhido = originals[0].items.results[aleatorio]
      console.log(escolhido)

      
    }
    carregarTudo();
  }, []);


  return (
    <div className = "page">
      {destaqueData && <DestaqueMovie item ={destaqueData}/>}

      <section className = "listas">
        {movieList.map((item, key)=>(
            <LinhaFilmes key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div> 
  );
}

