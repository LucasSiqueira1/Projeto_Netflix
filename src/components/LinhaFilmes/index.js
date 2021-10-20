import React from 'react';
import './LinhaFilmes.css'



export default ({title, items}) => {
    return(
        <div className="movieRow">
            <h2>{title}</h2>
            <div className = "movieRow-area"> 
                <div className = "movieRow-lista">
                {items.results.length > 0 && items.results.map((item,key)=>(
                    <div key={key} className="movieRow-item">
                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}/>
                    </div>
                ))}
                </div>
            </div>
            
        </div>
    )
}
