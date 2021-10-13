const API_KEY = '04078249137e5ede8cd1016b1cef0b93'
const API_BASE = 'https://api.themoviedb.org/3'


//função que pega o json da url
const converttFetch = async (endpoint) =>{
    const req = await fetch(`${API_BASE}${endpoint}`) //requisicao para um servico externo
    const json = await req.json(); //resposta vem para o json, wait espera a resposta do async
    return json;
}

//exportar um json que tem as informações
//cada tópico uma consulta diferente
/*  -originais da netflix
    -recomendados
    -em alta
    -ação
    -comédia
    -terror
    -romance
    -documentarios
*/

export default {
    getListaHome: async () => {
        return [
            {
                clas: 'originais',
                titulo: 'Originais da Netflix',
                itens: await converttFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`) //https://developers.themoviedb.org/3/movies/get-movie-details
            },
            {
                clas: 'recomendados',
                titulo: 'Recomendados da Netflix',
                items: await converttFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            }, 
            {
                clas: "Em alta",
                titulo: "Em Alta na Netflix",
                items: await converttFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            }, 
            {
                clas: "acao",
                titulo: "Ação",
                items: await converttFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                clas: "comedia",
                titulo: "Comédia",
                items: await converttFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                clas: "terror",
                titulo: "Terror",
                items: await converttFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                clas: "romance",
                titulo: "Romance",
                items: await converttFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                clas: "documentarios",
                titulo: "Documentários",
                items: await converttFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ]
    }
}