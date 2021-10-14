import './App.css';
import React, {useEffect} from 'react'
import Tmdb from './Tmdb';

export default() => {
  
  useEffect(()=>{ //carrega oq eu quiser quando a tela carregar
    const carregarTudo = async () => {
      //pegando a lista dos filmes
      let lista = await Tmdb.getListaHome()
      console.log(lista)
      console.log("oie")
      console.log("teste")
      
    }
    carregarTudo();

  }, []);


  return (
    <div>
      hello
    </div> 
  );
}

