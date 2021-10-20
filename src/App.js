import './App.css';
import LinhaFilmes from './components/LinhaFilmes'
import React, {useEffect, useState} from 'react'
import Tmdb from './Tmdb';
import DestaqueMovie from './components/Destaque';
import Header from './components/Header';

export default() => {
  const [movieList, setMovieList] = useState([]);
  const [destaqueData, setDestaqueData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(()=>{ //carrega oq eu quiser quando a tela carregar
    const carregarTudo = async () => {
      //pegando a lista dos filmes
      let lista = await Tmdb.getHomeList()
      setMovieList(lista)

      //após carregar a lista, tem que pegar o filme em destaque 
      let originals = lista.filter(i => i.slug === "originals")
      let aleatorio = Math.floor(Math.random() * (originals[0].items.results.length -1));
      let escolhido = originals[0].items.results[aleatorio]
      let escolhidoInfo = await Tmdb.getMovieInfo(escolhido.id, 'tv');
      
      setDestaqueData(escolhidoInfo);
    }
    carregarTudo();
  }, []);

  useEffect(()=>{
    const scroll = () => {
      if(window.scrollY > 10){
        setBlackHeader(true)
      }
      else{
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scroll)
    return()=> {
      window.removeEventListener('scroll',scroll)
    }
  },[])


  return (
    <div className = "page">

      <Header  black = {blackHeader}/>
      
      {destaqueData && <DestaqueMovie item ={destaqueData}/>}

      <section className = "listas">
        {movieList.map((item, key)=>(
            <LinhaFilmes key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Direitos de Imagem para Netflix <br/>
        Projeto feito em React :)
      </footer>
      
      {movieList.length <= 0 &&
      <div className = "load"><img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Loading" /> </div>}
    </div> 
  );
}

