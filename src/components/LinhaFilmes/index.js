import React, {useState} from 'react';
import './LinhaFilmes.css'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


export default ({title, items}) => {
    const [scrollX, setScrollX] = useState(0);

    const setaEsquerda = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        
        if(x>0){
            x = 0;
        }
        setScrollX(x);
    }

    const setaDireita = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;

        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) -60;
        }
        setScrollX(x);
    }

    return(
        <div className="movieRow">
            <h2>{title}</h2>

            <div className="movieRow-left" onClick={setaEsquerda}>
                < NavigateBeforeIcon style={{fontSize: 50}}/>
            </div> 

            <div className="movieRow-right" onClick={setaDireita}>
                < NavigateNextIcon style={{fontSize: 50}}/>
            </div> 

            <div className = "movieRow-area"> 
                <div className = "movieRow-lista" style={{marginLeft: scrollX, width: items.results.length * 150}}>

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
