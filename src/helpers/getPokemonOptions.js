import pokemonApi from "../api/pokemonApi"


const getPokemons = () =>{



    const pokemonsArr =  Array.from(Array(650))

    return pokemonsArr.map( (_ , index) => index + 1)


}



const getPokemonsOptions = async () =>{
    const mixedPokemons = getPokemons().sort( () => Math.random() - 0.5 )

    const pokemons = await getPokemonNames( mixedPokemons.splice(0,4) )
    
    return pokemons
}


const  getPokemonNames = async( [a,b,c,d] = [] ) => {

   // const resp = await pokemonApi.get(`/1`)
    const promiseArr = [
        pokemonApi.get(`/${ a }`),
        pokemonApi.get(`/${ b }`),
        pokemonApi.get(`/${ c }`),
        pokemonApi.get(`/${ d }`)
    ]
    const [p1, p2 , p3, p4] = await Promise.all(promiseArr)
    return [
        {name : jsUcfirst(p1.data.name), id: p1.data.id},
        {name : jsUcfirst(p2.data.name), id: p2.data.id},
        {name : jsUcfirst(p3.data.name), id: p3.data.id},
        {name : jsUcfirst(p4.data.name), id: p4.data.id},
    ]


}


const jsUcfirst = (string)  =>
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}


export default getPokemonsOptions