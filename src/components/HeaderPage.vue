<template>
  <header class="top-0 left-0 w-full h-[75px] bg-white border-b-2 flex items-center">
    <div>
      <svg aria-hidden="true" aria-label="" class="g_1 gUZ U9O kVc ml-8" height="35" role="img" viewBox="0 0 24 24" width="35">
        <path
          d="M7.55 23.12c-.15-1.36-.04-2.67.25-3.93L9 14.02a7 7 0 0 1-.34-2.07c0-1.68.8-2.88 2.08-2.88.88 0 1.53.62 1.53 1.8q0 .57-.22 1.28l-.53 1.73q-.15.5-.15.91c0 1.2.92 1.88 2.09 1.88 2.08 0 3.57-2.16 3.57-4.96 0-3.12-2.04-5.11-5.06-5.11-3.36 0-5.49 2.19-5.49 5.23 0 1.23.38 2.37 1.11 3.15-.24.4-.5.48-.88.48-1.2 0-2.34-1.7-2.34-4 0-3.99 3.2-7.16 7.68-7.16 4.7 0 7.66 3.28 7.66 7.33 0 4.07-2.88 7.13-5.98 7.13a3.8 3.8 0 0 1-3.07-1.47l-.61 2.5c-.33 1.28-.83 2.5-1.62 3.67A12 12 0 0 0 24 11.99 12 12 0 1 0 7.55 23.12">
        </path>
      </svg>
    </div>
    <div class="ml-1" style="letter-spacing: -1px">
      <h1 class="text-xl font-semibold g_1">Pinterest</h1>
    </div>
    <div class="ml-12 rounded-full bg-black w-[100px] h-[50px] flex items-center justify-center">
      <h1 class="text-base font-semibold text-white"><router-link to="/">Accueil</router-link></h1>
    </div>
    <div class="ml-8">
      <h1 class="text-base font-semibold">Créer</h1>
    </div>
    <div class="ml-12 w-[890px] h-[50px] rounded-full bg-gray-100 flex items-center">
      <i class="fi fi-br-search ml-4 text-gray-500"></i>
      <input type="text" name="" id="" placeholder="Rechercher" class="bg-transparent ml-4 w-full h-full rounded-r-full focus:outline-none" />
    </div>
    <div class="ml-8 flex items-center">
      <i class="fi fi-sr-bell text-2xl text-gray-400"></i>
      <div class="w-5 h-5 rounded-full bg-[#e60023] mt-[-38px] ml-[-08px] flex items-center justify-center text-white text-[12px] font-bold">
        3
      </div>
      <i class="fi fi-sr-comment-alt-dots dropdown1 text-2xl text-gray-400 ml-4" @click="toggleDropdown1"></i>
      <div class="w-5 h-5 rounded-full bg-[#e60023] mt-[-38px] ml-[-5px] flex items-center justify-center text-white text-[12px] font-bold">
        3
      </div>
      <div class="dropdown-content1 rounded-2xl custom-scrollbar" ref="dropdownContent1">
        <div class="flex items-center justify-start ml-4 mt-3">
          <i class="fi fi-br-cross-small text-3xl mr-6 mt-2 flex-shrink-0"></i>
          <p class="text-xl font-bold mr-48">Boite de réception</p>
          <i class="fi fi-br-menu-dots text-2xl mt-3"></i>
        </div>
        <div class="flex items-center mt-7 ml-3 hover:w-[455px] hover:h-[65px] hover:bg-gray-200 hover:p-2 rounded-2xl">
          <div class="w-12 h-12 bg-[#e60023] rounded-full flex items-center justify-center">
            <i class="fi fi-sr-file-edit text-xl text-white"></i>
          </div>
          <p class="font-semibold ml-4" style="font-size: 17px;">Nouveau message</p>
        </div>

        <div>
          <p class=" ml-4 mt-7 text-xs text-gray-600" style="font-size: 16px;">Messages</p>
          <div class="flex items-center ml-4 mt-6 hover:w-[455px] hover:h-[95px] hover:bg-gray-200 rounded-2xl hover:p-1">
            <img src="../assets/pfp.jpg" alt="pfp" class="rounded-full w-13 h-13">
            <div class="ml-5">
              <h2 class="font-semibold mt-[-15px]" style="font-size: 17px;">Halo Design - Your digital partner</h2>
              <p class="text-gray-600 mt-3 font-medium"> Vous avez envoyé une publication</p>
            </div>
            <div class="ml-10 mt-[-55px] font-semibold text-gray-500">
              1 mois
            </div>
          </div>
          <div class="flex items-center ml-4 mt-6 hover:w-[455px] hover:h-[95px] hover:bg-gray-200 rounded-2xl hover:p-1">
            <img src="../assets/pfp.jpg" alt="pfp" class="rounded-full w-13 h-13">
            <div class="ml-5">
              <h2 class="font-semibold mt-[-15px]" style="font-size: 17px;">Halo Design - Your digital partner</h2>
              <p class="text-gray-600 mt-3 font-medium"> Vous avez envoyé une publication</p>
            </div>
            <div class="ml-10 mt-[-55px] font-semibold text-gray-500">
              1 mois
            </div>
          </div>
          <div class="flex items-center ml-4 mt-6 hover:w-[455px] hover:h-[95px] hover:bg-gray-200 rounded-2xl hover:p-1">
            <img src="../assets/pfp.jpg" alt="pfp" class="rounded-full w-13 h-13">
            <div class="ml-5">
              <h2 class="font-semibold mt-[-15px]" style="font-size: 17px;">Halo Design - Your digital partner</h2>
              <p class="text-gray-600 mt-3 font-medium"> Vous avez envoyé une publication</p>
            </div>
            <div class="ml-10 mt-[-55px] font-semibold text-gray-500">
              1 mois
            </div>
          </div>
          <p class=" ml-4 mt-7 text-xs text-gray-600" style="font-size: 16px;">Suggestions</p>
          <div class="flex items-center ml-4 mt-6 hover:w-[455px] hover:h-[75px] hover:bg-gray-200 rounded-2xl hover:p-1">
            <img src="../assets/pfp.jpg" alt="pfp" class="rounded-full w-12 h-12">
            <div class="ml-5">
              <h2 class="font-semibold " style="font-size: 17px;">Halo Design - Your digital partner</h2>
              <p class="text-gray-600 mt-1 font-semibold"> @halo-design</p>
            </div>
          </div>
          <div class="flex items-center ml-4 mt-6 hover:w-[455px] hover:h-[75px] hover:bg-gray-200 rounded-2xl hover:p-1">
            <img src="../assets/pfp.jpg" alt="pfp" class="rounded-full w-12 h-12">
            <div class="ml-5">
              <h2 class="font-semibold " style="font-size: 17px;">Halo Design - Your digital partner</h2>
              <p class="text-gray-600 mt-1 font-semibold"> @halo-design</p>
            </div>
          </div>
          <div class="flex items-center ml-4 mt-6 hover:w-[455px] hover:h-[75px] hover:bg-gray-200 rounded-2xl hover:p-1">
            <img src="../assets/pfp.jpg" alt="pfp" class="rounded-full w-12 h-12">
            <div class="ml-5">
              <h2 class="font-semibold " style="font-size: 17px;">Halo Design - Your digital partner</h2>
              <p class="text-gray-600 mt-1 font-semibold"> @halo-design</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <router-link to="/profile">
      <img src="../assets/pfp.jpg" alt="pfp" class="ml-[15px] rounded-full w-10 h-10" />
    </router-link>

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
  name: "HeaderPage",
  methods: {
    toggleDropdown() {
      const dropdownContent = this.$refs.dropdownContent;
      const dropdownContent1 = this.$refs.dropdownContent1;

      if (dropdownContent) {
        const isDropdownOpen = dropdownContent.style.display === "block";
        dropdownContent.style.display = isDropdownOpen ? "none" : "block";
        
        // Close the other dropdown if it's open
        if (dropdownContent1 && !isDropdownOpen) {
          dropdownContent1.style.display = "none";
        }
      }
    },
    toggleDropdown1() {
      const dropdownContent1 = this.$refs.dropdownContent1;
      const dropdownContent = this.$refs.dropdownContent;

      if (dropdownContent1) {
        const isDropdown1Open = dropdownContent1.style.display === "block";
        dropdownContent1.style.display = isDropdown1Open ? "none" : "block";
        
        // Close the other dropdown if it's open
        if (dropdownContent && !isDropdown1Open) {
          dropdownContent.style.display = "none";
        }
      }
    },
    handleClickOutside(event) {
      const dropdownContent = this.$refs.dropdownContent;
      const dropdownContent1 = this.$refs.dropdownContent1;

      if (dropdownContent && !dropdownContent.contains(event.target) && !event.target.closest('.dropbtn')) {
        dropdownContent.style.display = "none";
      }

      if (dropdownContent1 && !dropdownContent1.contains(event.target) && !event.target.closest('.dropdown1')) {
        dropdownContent1.style.display = "none";
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmoun() {
    document.removeEventListener("click", this.handleClickOutside);
  }
};
</script>

<style scoped>
.dropdown-content,
.dropdown-content1 {
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  top: 60px;
  right: 0;
  padding: 15px 0;
  max-height: 650px;
  overflow-y: auto;
}

.dropdown-content1 {
  right: 10px;
  width: 490px;
}
.dropdown-content {
  right: 05px;
  width: 420px;
}

.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #e60023 #f5f5f5;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #e60023;
  border-radius: 10px;
}
</style>
