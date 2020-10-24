<template>
  <div>
    <h1>DataAlcool</h1>
    <p>À quel point un BDDI est-il alcoolique ?</p>
    <a href="#tobottom"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.61 53.61">
  <g id="up-arrow-svgrepo-com" transform="translate(53.611 53.61) rotate(180)">
    <g id="Groupe_42" data-name="Groupe 42" transform="translate(0.001)">
      <path id="Tracé_86" data-name="Tracé 86" d="M26.806,0A26.805,26.805,0,1,0,53.611,26.8,26.805,26.805,0,0,0,26.806,0ZM38.9,33.916a2.5,2.5,0,0,1-3.54,0L26.737,25.29l-8.671,8.67a2.5,2.5,0,1,1-3.539-3.539l10.059-10.06a2.527,2.527,0,0,1,.337-.423,2.549,2.549,0,0,1,3.962.423L38.9,30.376A2.5,2.5,0,0,1,38.9,33.916Z" transform="translate(-0.001)" fill='#fff'/>
    </g>
  </g>
</svg>
</a>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  div{
    height: 100vh;
    width: 100%;
    background-image: url('../assets/img/fond_home.png'), linear-gradient(to bottom, #FAFAFA, #FCD3D3);
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // position: relative;
    // z-index: 2;

    & h1, p{
      color: white;
      margin: 0;
    }

    & h1{
      font-size: 8rem;
      font-family: 'monokill';
      text-shadow: 5px 6px #0E34E5;
      margin-top: 6%;
    }
    & p{
      font-family: 'Brandon Grotesque';
      font-size: 1.2rem;
      text-shadow: 3px 1px 2px #0E34E5;
      // text-shadow: 3px 1px 2px #E74A27;
      position: relative;
      top: -2%;
    }
  }
  a{
    width: 40px;
    & svg:hover path{
    fill: #0E34E5;
  }
  }
</style>
