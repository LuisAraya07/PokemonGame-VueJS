<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">

  
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    
    <h1 style="color:red;">¿Quién es este Pokemón?</h1>
    <!-- IMG -->
    <pokemonPicture :pokemon-id="pokemon.id" :show-pokemon="showPokemon"/>


    <!-- Opciones -->
    <pokemon-options :pokemons = "pokemonArr"
    @selection-pokemon="checkAnswer"/>

    <template v-if="showAnswer">
      <h2  class="fade-in">{{ message }}</h2>
      <button v-if="!correcto" class="btn btn-outline-primary" @click="newGame">Nuevo Juego</button>
    </template>
    
  </div>
  <div>

  </div>
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions.vue'
import PokemonPicture from '../components/PokemonPicture.vue'
import getPokemonOptions from '@/helpers/getPokemonOptions'
import Swal from 'sweetalert2'


export default {
  components: { PokemonOptions, PokemonPicture },
  data (){
    return {
      pokemonArr : [],
      pokemon : null,
      showPokemon : false,
      showAnswer: false,
      message: '',
      contador : 0,
      correcto : false,
    }
  },

  methods:{
    async mixPokemonArray (){
      this.showPokemon = this.showAnswer = false
      this.pokemon = null
      this.pokemonArr = await getPokemonOptions()
      const rndInt = Math.floor( Math.random() * 4 )
      this.pokemon = this.pokemonArr[rndInt]


    },

    checkAnswer(id){
      this.showPokemon = this.showAnswer = true;
      this.correcto = this.pokemon.id == id;
      if(this.correcto){
        this.contador++
        
        this.message = `Correcto!!!!, ${ this.pokemon.name }`
        setTimeout(() => {
          this.mixPokemonArray()
        }, 3000);
      }else{
        this.message = `Oops!!, era ${this.pokemon.name}`
      }
      
    },

    newGame(){
      Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Su puntuación ha sido ${this.contador}`,
          showConfirmButton: false,
          timer: 2000
      })
      this.contador = 0
      this.mixPokemonArray()
    },
  },
  mounted(){
    this.mixPokemonArray()
  },
}
</script>

