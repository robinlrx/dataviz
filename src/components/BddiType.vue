<template>
  <div class="container">
    <ul>
      <li>Âge : 21 ans</li>
      <li>Budget /mois : 100€ à 500€</li>
    </ul>
    <ul>
      <h3>AU BAR :</h3>
      <li>Sort souvent boire</li>
      <li>Le vendredi et le samedi</li>
      <li>Dépense environ 50€ à 100€ dans les bars</li>
      <li>Préfère la bière</li>
      <li>Commande des fois à manger</li>
      <li>Se souvient de ses soirées</li>
      <li>Rentre en milieu de soirée</li>
    </ul>
    <ul>
      <h3>EN SOIRÉE :</h3>
      <li>Il ramène à boire et à manger</li>
      <li>Il peut autant se faire inviter que recevoir</li>
      <li>Il ne dors pas sur place</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BddiType'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .container{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  ul{
    // border: solid red;
    width: 30%;
    font-family: 'Brandon Grotesque';
    text-align: justify;
    color: #0E34E5;
    font-size: 1.125rem;
    margin-bottom: 0;
  }
  h3{
    margin-bottom: 0;
    font-weight: 800;
  }
</style>
