<template>
  <header class="top-0 left-0 w-full h-[75px] bg-white border-b-2 flex items-center">
    <div>
      <svg aria-hidden="true" aria-label="" class="g_1 gUZ U9O kVc ml-8" height="35" role="img" viewBox="0 0 24 24"
        width="35">
        <path
          d="M7.55 23.12c-.15-1.36-.04-2.67.25-3.93L9 14.02a7 7 0 0 1-.34-2.07c0-1.68.8-2.88 2.08-2.88.88 0 1.53.62 1.53 1.8q0 .57-.22 1.28l-.53 1.73q-.15.5-.15.91c0 1.2.92 1.88 2.09 1.88 2.08 0 3.57-2.16 3.57-4.96 0-3.12-2.04-5.11-5.06-5.11-3.36 0-5.49 2.19-5.49 5.23 0 1.23.38 2.37 1.11 3.15-.24.4-.5.48-.88.48-1.2 0-2.34-1.7-2.34-4 0-3.99 3.2-7.16 7.68-7.16 4.7 0 7.66 3.28 7.66 7.33 0 4.07-2.88 7.13-5.98 7.13a3.8 3.8 0 0 1-3.07-1.47l-.61 2.5c-.33 1.28-.83 2.5-1.62 3.67A12 12 0 0 0 24 11.99 12 12 0 1 0 7.55 23.12">
        </path>
      </svg>
    </div>
    <div class="ml-1" style="letter-spacing: -1px">
      <h1 class="text-xl font-semibold g_1">Pinterest</h1>
    </div>
    <div class="ml-12  w-[100px] h-[50px] flex items-center justify-center">
      <h1 class="text-base font-semibold "><router-link to="/">Accueil</router-link></h1>
    </div>
    <div class="ml-8">
      <h1 class="text-base font-semibold">Créer</h1>
    </div>
    <div class="ml-12 w-[890px] h-[50px] rounded-full bg-gray-100 flex items-center">
      <i class="fi fi-br-search ml-4 text-gray-500"></i>
      <input type="text" name="" id="" placeholder="Rechercher dans vos Epingles"
        class="bg-transparent ml-4 w-[800px] h-full rounded-r-full focus:outline-none" />
      <div class="flex items-center space-x-8 p-2 ">
        <select name="epingls" id="ep"
          class="bg-gray-300  rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold ">
          <option value="vos-epingles" class="mb-2">Vos épingles</option>
          <option value="toutes-les-epingles" class="mb-2">Toutes les épingles</option>
        </select>
      </div>

    </div>
    <div class="ml-8 flex items-center">
      <i class="fi fi-sr-bell text-2xl text-gray-400"></i>
      <div
        class="w-5 h-5 rounded-full bg-[#e60023] mt-[-38px] ml-[-08px] flex items-center justify-center text-white text-[12px] font-bold">
        3
      </div>
      <i class="fi fi-sr-comment-alt-dots text-2xl text-gray-400 ml-4 dropdown" @click="toggleDropdown"></i>
      <div
        class="w-5 h-5 rounded-full bg-[#e60023] mt-[-38px] ml-[-05px] flex items-center justify-center text-white text-[12px] font-bold">
        3
      </div>

    </div>
      <router-link to="/profile"><img src="../assets/pfp.jpg" alt="pfp" class="ml-[15px] rounded-full w-10 h-10" /></router-link>

      <div class="dropdown ml-[-10px] flex items-center">
        <button class="dropbtn" @click="toggleDropdown">
          <i class="fi fi-sr-angle-small-down text-lg text-gray-300 ml-2"></i>
        </button>
        <div class="dropdown-content rounded-2xl custom-scrollbar" ref="dropdownContent">
          <p class="m-4 text-xs">Actuellement connecté</p>
          <div class="flex w-[385px] h-[85px] bg-gray-200  flex items-center rounded-2xl m-2">
            <img src="../assets/pfp.jpg" alt="pfp" class="rounded-full w-[67px] h-[67px] ml-2">
            <div class="ml-4">
              <p class="font-semibold">Asma ACHIRI</p>
              <p class="text-[14px] font-normal text-gray-600">Personnel</p>
              <p class="text-[14px] font-normal text-gray-600">achiri.asma.oeb@gmail.com</p>
            </div>
            <i class="fi fi-sr-check text-lg text-gray-400 ml-20"></i>
          </div>
          <p class="m-4 text-xs leading-none">Vos comptes</p>
          <a href="#" class="leading-none font-semibold hover:bg-gray-200 hover:rounded-xl hover:m-2">Ajouter un
            compte</a>
          <a href="#" class="leading-none font-semibold hover:bg-gray-200 hover:rounded-xl hover:m-2">Convertir en
            compte professionnel</a>
          <p class="m-4 text-xs leading-non ">Plus d'options</p>
          <a href="#" class="leading-none font-semibold hover:bg-gray-200 hover:rounded-xl hover:m-2">Paramétres</a>
          <a href="#" class="leading-none font-semibold hover:bg-gray-200 hover:rounded-xl hover:m-2">Installer
            l'application windows</a>
          <a href="#" class="leading-none font-semibold hover:bg-gray-200 hover:rounded-xl hover:m-2">Centre de
            signalements et d'infractions</a>
          <a href="#"
            class="leading-none font-semibold hover:bg-gray-200 hover:rounded-xl hover:m-2">Confidentialité</a>
          <a href="#" class="leading-none font-semibold hover:bg-gray-200 hover:rounded-xl hover:m-2">Centre d'aide</a>
          <a href="#" class="leading-none font-semibold hover:bg-gray-200 hover:rounded-xl hover:m-2">Conditions
            d'utilisation</a>
          <a href="#" class="leading-none font-semibold hover:bg-gray-200 hover:rounded-xl hover:m-2">Politiques de
            Confidentialité</a>
          <a href="#" class="leading-none font-semibold hover:bg-gray-200 hover:rounded-xl hover:m-2">Devenir testeur de
            versions béta</a>
          <a href="#" class="leading-none font-semibold hover:bg-gray-200 hover:rounded-xl hover:m-2">Se déconnecter</a>
        </div>
      </div>
    
  </header>
</template>

<script>
export default {
  name: "HeaderProfile",
  methods: {
    toggleDropdown() {
      const dropdownContent = this.$refs.dropdownContent;
      dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target) && !event.target.matches('.dropdown-button')) {
        this.$refs.dropdownContent.style.display = "none";
      }
    },
  },
  mounted() {
    window.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    window.removeEventListener("click", this.handleClickOutside);
  }
};
</script>

<style>
@import url("https://cdn-uicons.flaticon.com/2.5.1/uicons-bold-rounded/css/uicons-bold-rounded.css");
@import url("https://cdn-uicons.flaticon.com/2.5.1/uicons-solid-rounded/css/uicons-solid-rounded.css");

.kVc {
  display: block;
}

.g_1 {
  color: #e60023;
}

.gUZ {
  fill: currentColor;
  stroke-width: 0;
  vertical-align: middle;
}

.PUS,
._74 {
  color: inherit;
}

.BG7 {
  cursor: pointer;
}

.dropbtn {
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  margin-left: -355px;
  width: 410px;
  height: 670px;
  background-color: #ffffff;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  overflow-y: auto;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
  /* Width of the scrollbar */
}

.custom-scrollbar::-webkit-scrollbar-track {
  background-color: #f1f1f1;
  /* Background of the scrollbar track */
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #a0aec0;
  /* Scrollbar color */
}

/* Firefox scrollbar customization */
.custom-scrollbar {
  scrollbar-width: thin;
  /* Thin scrollbar for Firefox */
  scrollbar-color: #a0aec0 #f1f1f1;
  /* Scrollbar thumb and track colors */

}
</style>
