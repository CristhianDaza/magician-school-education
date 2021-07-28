<template>
  <div v-if="characterInfo" class="characterNameInfo">
    <p v-if="characterInfo.name !== ''"><strong>Name: </strong>{{ characterInfo.name }}</p>
    <p v-if="characterInfo.species !== ''"><strong>Species: </strong>{{ characterInfo.species }}</p>
    <p v-if="characterInfo.gender !== ''"><strong>Gender: </strong>{{ characterInfo.gender }}</p>
    <p v-if="characterInfo.house !== ''"><strong>House: </strong>{{ characterInfo.house }}</p>
    <p v-if="characterInfo.dateOfBirth !== ''"><strong>Date of Birth: </strong>{{ characterInfo.dateOfBirth }}</p>
    <p v-if="characterInfo.yearOfBirth !== ''"><strong>Years: </strong>{{ year }} years old</p>
    <p v-if="characterInfo.ancestry !== ''"><strong>Ancestry: </strong>{{ characterInfo.ancestry }}</p>
    <p v-if="characterInfo.hairColour !== ''"><strong>Hair Colour: </strong>{{ characterInfo.hairColour }}</p>
    <p v-if="characterInfo.eyeColour !== ''"><strong>Eye Colour: </strong>{{ characterInfo.eyeColour }}</p>
    <p v-if="characterInfo.patronus !== ''"><strong>Patronus: </strong>{{ characterInfo.patronus }}</p>
    <p v-if="characterInfo.alive !== ''"><strong>Alive: </strong>{{ characterInfo.alive ? 'Yes' : 'No'}}</p>
  </div>
</template>

<script>
export default {
  name: 'CharacterNameInfo',
  props: {
    characterInfo: {
      type: Object,
      required: true
    }
  },
  computed: {
    year () {
      return new Date().getFullYear() - this.characterInfo.yearOfBirth
    }
  }
}
</script>

<style>
  .characterNameInfo {
    margin-left: 50px;
  }

  .characterNameInfo p {
    text-transform: capitalize;
  }

  .characterNameInfo p strong {
    font-size: 1.1rem;
  }

  @media (max-width: 425px) {
    .characterNameInfo {
      margin: 10px 0 0 0;
      text-align: center;
    }
  }
</style>
