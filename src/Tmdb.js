const API_KEY = '04078249137e5ede8cd1016b1cef0b93'
const API_BASE = 'https://api.themoviedb.org/3/'


//função que pega o json da url
const fetch = async function(conect){
    const requisicao = await fetch(`${API_BASE} ${conect}`) //requisicao para um servico externo
    const json = await requisicao.json() //resposta vem para o json, wait espera a resposta do async
    return json
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
    getListaHome: async function () {
        return [
            {
                clas: 'originais',
                titulo: 'Originais da Netflix',
                itens: await fetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`) //https://developers.themoviedb.org/3/movies/get-movie-details
            },
            {
                clas: 'recomendados',
                titulo: 'Recomendados da Netflix',
                itens: await fetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            }, 
            {
                clas: "Em alta",
                titulo: "Em Alta na Netflix",
                itens: await fetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            }, 
            {
                clas: "acao",
                titulo: "Ação",
                itens: await fetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                clas: "comedia",
                titulo: "Comédia",
                itens: await fetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                clas: "terror",
                titulo: "Terror",
                itens: await fetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                clas: "romance",
                titulo: "Romance",
                itens: await fetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                clas: "documentarios",
                titulo: "Documentários",
                itens: await fetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ]
    }
}