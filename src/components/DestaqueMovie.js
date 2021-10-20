import React from 'react';
import './DestaqueMovie.css'

export default ( {item} ) => {

    let firstDate = new Date(item.first_air_date)
    let genres = [];

    for(let i in item.genres){
        genres.push(item.genres[i].name);
    }
    console.log(genres);

    return (
        <section className="destaque" style={{backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`}}>
            <div className="destaque-vertical">
                <div className="destaque-horizontal">
                    <div className="destaque-nome">{item.original_name}</div>
                    <div className="destaque-info">
                        <div className="destaque-point">{item.vote_average} pontos</div>
                        <div className="destaque-ano">{firstDate.getFullYear()}</div>
                        <div className="destaque-temp">{item.number_of_seasons} temporada{item.number_of_seasons > 1 ? 's' : ''}</div>
                    </div>
                    <div className="destaque-descr">{item.overview}</div>
                    <div className="destaque-botao">
                        <a href={`/watch/${item.id}`} className="destaque-watchbotao">▶ Assistir </a>
                        <a href={`/list/add${item.id}`} className="destaque-listbotao">+ Minha Lista </a>
                    </div>
                    <div className="destaque-generos"><strong>Gêneros: </strong>{genres.join(', ')}</div>
                </div>
            </div> 
        </section>
    )
}