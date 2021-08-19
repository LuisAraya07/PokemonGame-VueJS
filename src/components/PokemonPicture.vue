<template>
<div class="row">
  <div class="col-0 col-sm-4">
  
  
  </div>
  <div class="col-12 col-sm-4 pokemon-container">
  
    <img :src="imgSrc" alt="Pokemon"
    class="hidden-pokemon">
    <img v-if="showPokemon" :src="imgSrc" class="fade-in" alt="Pokemon">
    
  </div>
  <div class="col-0 col-sm-4">
  
  
  </div>
</div>
</template>

<script>
export default {
  props:{
        pokemonId: {
            type : Number,
            required: true,
            default: 1,

        },
        showPokemon: {
            type : Boolean,
            required: true,
            default: false,

        },
    },
  // data(){
  //   return{
  //     pokemonId : this.pokemonId,
  //     showPokemon: this.showPokemon 
  //   }
  // },
  computed:{
    imgSrc(){
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
    }
  }
}
</script>

<style scoped>
  /* Pokemon Picture */
.pokemon-container {
  display: flex;
  justify-content: flex-start;
  height: 400px;
  margin-bottom: 10px;


  background-image: url(https://i.ytimg.com/vi/3cLbFhxYPFY/maxresdefault.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: inherit;
  background-size: cover;
  background-color: #999;
  border-radius: 50px;
}
img {
    height: 250px;
    position: absolute;
    user-select: none;
    margin-top: 5rem;
    margin-left: 4.5rem;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
.hidden-pokemon {
    filter: brightness(0);
}
@media only screen and (max-width: 600px) {
  img {
    margin-left: 0rem;
}
}


</style>
