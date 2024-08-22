<template>
  <HeaderProfile />
  <div id="app" class="flex justify-center items-center flex-col mt-8">
    <img src="../assets/pfp.jpg" alt="pfp" class="rounded-full w-[130px] h-[130px] mt-8">
    <div class="text-center mt-4">
      <h1 class="text-4xl font-semibold">Asma ACHIRI</h1>
      <span class="flex items-center justify-center text-gray-500 mt-2">
        <svg aria-hidden="true" aria-label="" class="gUZ U9O kVc" height="18" role="img" viewBox="0 0 24 24" width="18">
          <path
            d="M7.55 23.12c-.15-1.36-.04-2.67.25-3.93L9 14.02a7 7 0 0 1-.34-2.07c0-1.68.8-2.88 2.08-2.88.88 0 1.53.62 1.53 1.8q0 .57-.22 1.28l-.53 1.73q-.15.5-.15.91c0 1.2.92 1.88 2.09 1.88 2.08 0 3.57-2.16 3.57-4.96 0-3.12-2.04-5.11-5.06-5.11-3.36 0-5.49 2.19-5.49 5.23 0 1.23.38 2.37 1.11 3.15-.24.4-.5.48-.88.48-1.2 0-2.34-1.7-2.34-4 0-3.99 3.2-7.16 7.68-7.16 4.7 0 7.66 3.28 7.66 7.33 0 4.07-2.88 7.13-5.98 7.13a3.8 3.8 0 0 1-3.07-1.47l-.61 2.5c-.33 1.28-.83 2.5-1.62 3.67A12 12 0 0 0 24 11.99 12 12 0 1 0 7.55 23.12">
          </path>
        </svg>
        &nbsp;asmaachirii
      </span>
      <p class="font-semibold mt-2">5 abonnés · 22 abonnements</p>
      <div class="mt-4 flex justify-center space-x-4">
        <button class="w-[100px] h-[50px] bg-gray-200 rounded-full hover:bg-gray-400 font-semibold">Partager</button>
        <button class="w-[150px] h-[50px] bg-gray-200 rounded-full hover:bg-gray-400 font-semibold">Modifier le
          profil</button>
      </div>
      <div class="mt-12 flex justify-center space-x-8">
        <button class="font-semibold hover:underline">Créées</button>
        <button class="font-semibold hover:underline">Enregistrées</button>
      </div>
    </div>
  </div>
  <div class="ml-10 mt-14 flex justify-between w-[1450px]">
    <i class="fi fi-br-bars-sort text-2xl text-gray-400 font-bold"></i>
    <i class="fi fi-br-plus text-2xl text-gray-400 font-bold"></i>
  </div>
  <div class="ml-10 mt-8">
    <h2 class="font-semibold text-xl">Gardez une trace de ce qui vous inspire</h2>
    <p class="mt-2 ">Les tableaux vous permettent d’organiser les Épingles que vous enregistrez en collections. Démarrez
      à partir d’un cluster ci-dessous ou créez le vôtre.</p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 p-10">
    <!-- Photoset 1 -->
    <div class="photoset w-64 h-64  flex flex-wrap rounded-3xl overflow-hidden group relative">
      <img src="https://78.media.tumblr.com/a8158f5113ac52008eb3fe86bc87eadd/tumblr_p773r1ugkd1wd32uro2_400.jpg"
        alt="Image 1" class="photo  rounded-tl-3xl object-cover w-1/2 h-1/2">
      <img src="https://78.media.tumblr.com/5091ebebffe12dd2b7b6e510ccfd141e/tumblr_p773r1ugkd1wd32uro3_400.jpg"
        alt="Image 2" class="photo rounded-tr-3xl object-cover w-1/2 h-1/2">
      <img src="https://78.media.tumblr.com/7e95258e791956cfb963f99748084064/tumblr_p773r1ugkd1wd32uro4_400.jpg"
        alt="Image 3" class="photo  rounded-bl-3xl object-cover w-1/2 h-1/2">
      <img src="https://78.media.tumblr.com/81caa127eb8502865c3f4fb9cc710de7/tumblr_p773r1ugkd1wd32uro5_400.jpg"
        alt="Image 4" class="photo  rounded-br-3xl object-cover w-1/2 h-1/2">
      <div
        class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 opacity-100 transition-opacity duration-300">
        <button
          class="bg-white text-gray-800 px-3 py-2 rounded-full font-bold hover:bg-[#e60023] hover:text-white transition-colors duration-300">
          Créer
        </button>
      </div>
    </div>

    <div class="photoset w-64 h-64  flex flex-wrap rounded-3xl overflow-hidden group relative">
      <img src="https://78.media.tumblr.com/a8158f5113ac52008eb3fe86bc87eadd/tumblr_p773r1ugkd1wd32uro2_400.jpg"
        alt="Image 1" class="photo  rounded-tl-3xl object-cover w-1/2 h-1/2">
      <img src="https://78.media.tumblr.com/5091ebebffe12dd2b7b6e510ccfd141e/tumblr_p773r1ugkd1wd32uro3_400.jpg"
        alt="Image 2" class="photo rounded-tr-3xl object-cover w-1/2 h-1/2">
      <img src="https://78.media.tumblr.com/7e95258e791956cfb963f99748084064/tumblr_p773r1ugkd1wd32uro4_400.jpg"
        alt="Image 3" class="photo  rounded-bl-3xl object-cover w-1/2 h-1/2">
      <img src="https://78.media.tumblr.com/81caa127eb8502865c3f4fb9cc710de7/tumblr_p773r1ugkd1wd32uro5_400.jpg"
        alt="Image 4" class="photo  rounded-br-3xl object-cover w-1/2 h-1/2">
      <div
        class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 opacity-100 transition-opacity duration-300">
        <button
          class="bg-white text-gray-800 px-3 py-2 rounded-full font-bold hover:bg-[#e60023] hover:text-white transition-colors duration-300">
          Créer
        </button>
      </div>
    </div>

    <div class="photoset w-64 h-64  flex flex-wrap rounded-3xl overflow-hidden group relative">
      <img src="https://78.media.tumblr.com/a8158f5113ac52008eb3fe86bc87eadd/tumblr_p773r1ugkd1wd32uro2_400.jpg"
        alt="Image 1" class="photo  rounded-tl-3xl object-cover w-1/2 h-1/2">
      <img src="https://78.media.tumblr.com/5091ebebffe12dd2b7b6e510ccfd141e/tumblr_p773r1ugkd1wd32uro3_400.jpg"
        alt="Image 2" class="photo rounded-tr-3xl object-cover w-1/2 h-1/2">
      <img src="https://78.media.tumblr.com/7e95258e791956cfb963f99748084064/tumblr_p773r1ugkd1wd32uro4_400.jpg"
        alt="Image 3" class="photo  rounded-bl-3xl object-cover w-1/2 h-1/2">
      <img src="https://78.media.tumblr.com/81caa127eb8502865c3f4fb9cc710de7/tumblr_p773r1ugkd1wd32uro5_400.jpg"
        alt="Image 4" class="photo  rounded-br-3xl object-cover w-1/2 h-1/2">
      <div
        class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 opacity-100 transition-opacity duration-300">
        <button
          class="bg-white text-gray-800 px-3 py-2 rounded-full font-bold hover:bg-[#e60023] hover:text-white transition-colors duration-300">
          Créer
        </button>
      </div>
    </div>

    <div class="photoset w-64 h-64  flex flex-wrap rounded-3xl overflow-hidden group relative">
      <img src="https://78.media.tumblr.com/a8158f5113ac52008eb3fe86bc87eadd/tumblr_p773r1ugkd1wd32uro2_400.jpg"
        alt="Image 1" class="photo  rounded-tl-3xl object-cover w-1/2 h-1/2">
      <img src="https://78.media.tumblr.com/5091ebebffe12dd2b7b6e510ccfd141e/tumblr_p773r1ugkd1wd32uro3_400.jpg"
        alt="Image 2" class="photo rounded-tr-3xl object-cover w-1/2 h-1/2">
      <img src="https://78.media.tumblr.com/7e95258e791956cfb963f99748084064/tumblr_p773r1ugkd1wd32uro4_400.jpg"
        alt="Image 3" class="photo  rounded-bl-3xl object-cover w-1/2 h-1/2">
      <img src="https://78.media.tumblr.com/81caa127eb8502865c3f4fb9cc710de7/tumblr_p773r1ugkd1wd32uro5_400.jpg"
        alt="Image 4" class="photo  rounded-br-3xl object-cover w-1/2 h-1/2">
      <div
        class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 opacity-100 transition-opacity duration-300">
        <button
          class="bg-white text-gray-800 px-3 py-2 rounded-full font-bold hover:bg-[#e60023] hover:text-white transition-colors duration-300">
          Créer
        </button>
      </div>
    </div>

    <div class="photoset w-64 h-64  flex flex-wrap rounded-3xl overflow-hidden group relative">
      <img src="https://78.media.tumblr.com/a8158f5113ac52008eb3fe86bc87eadd/tumblr_p773r1ugkd1wd32uro2_400.jpg"
        alt="Image 1" class="photo  rounded-tl-3xl object-cover w-1/2 h-1/2">
      <img src="https://78.media.tumblr.com/5091ebebffe12dd2b7b6e510ccfd141e/tumblr_p773r1ugkd1wd32uro3_400.jpg"
        alt="Image 2" class="photo rounded-tr-3xl object-cover w-1/2 h-1/2">
      <img src="https://78.media.tumblr.com/7e95258e791956cfb963f99748084064/tumblr_p773r1ugkd1wd32uro4_400.jpg"
        alt="Image 3" class="photo  rounded-bl-3xl object-cover w-1/2 h-1/2">
      <img src="https://78.media.tumblr.com/81caa127eb8502865c3f4fb9cc710de7/tumblr_p773r1ugkd1wd32uro5_400.jpg"
        alt="Image 4" class="photo  rounded-br-3xl object-cover w-1/2 h-1/2">
      <div
        class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 opacity-100 transition-opacity duration-300">
        <button
          class="bg-white text-gray-800 px-3 py-2 rounded-full font-bold hover:bg-[#e60023] hover:text-white transition-colors duration-300">
          Créer
        </button>
      </div>
    </div>

    <div class="photoset w-64 h-64  flex flex-wrap rounded-3xl overflow-hidden group relative">
      <img src="https://78.media.tumblr.com/a8158f5113ac52008eb3fe86bc87eadd/tumblr_p773r1ugkd1wd32uro2_400.jpg"
        alt="Image 1" class="photo  rounded-tl-3xl object-cover w-1/2 h-1/2">
      <img src="https://78.media.tumblr.com/5091ebebffe12dd2b7b6e510ccfd141e/tumblr_p773r1ugkd1wd32uro3_400.jpg"
        alt="Image 2" class="photo rounded-tr-3xl object-cover w-1/2 h-1/2">
      <img src="https://78.media.tumblr.com/7e95258e791956cfb963f99748084064/tumblr_p773r1ugkd1wd32uro4_400.jpg"
        alt="Image 3" class="photo  rounded-bl-3xl object-cover w-1/2 h-1/2">
      <img src="https://78.media.tumblr.com/81caa127eb8502865c3f4fb9cc710de7/tumblr_p773r1ugkd1wd32uro5_400.jpg"
        alt="Image 4" class="photo  rounded-br-3xl object-cover w-1/2 h-1/2">
      <div
        class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 opacity-100 transition-opacity duration-300">
        <button
          class="bg-white text-gray-800 px-3 py-2 rounded-full font-bold hover:bg-[#e60023] hover:text-white transition-colors duration-300">
          Créer
        </button>
      </div>
    </div>

    <div class="photoset w-64 h-64  flex flex-wrap rounded-3xl overflow-hidden group relative">
      <img src="https://78.media.tumblr.com/a8158f5113ac52008eb3fe86bc87eadd/tumblr_p773r1ugkd1wd32uro2_400.jpg"
        alt="Image 1" class="photo  rounded-tl-3xl object-cover w-1/2 h-1/2">
      <img src="https://78.media.tumblr.com/5091ebebffe12dd2b7b6e510ccfd141e/tumblr_p773r1ugkd1wd32uro3_400.jpg"
        alt="Image 2" class="photo rounded-tr-3xl object-cover w-1/2 h-1/2">
      <img src="https://78.media.tumblr.com/7e95258e791956cfb963f99748084064/tumblr_p773r1ugkd1wd32uro4_400.jpg"
        alt="Image 3" class="photo  rounded-bl-3xl object-cover w-1/2 h-1/2">
      <img src="https://78.media.tumblr.com/81caa127eb8502865c3f4fb9cc710de7/tumblr_p773r1ugkd1wd32uro5_400.jpg"
        alt="Image 4" class="photo  rounded-br-3xl object-cover w-1/2 h-1/2">
      <div
        class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 opacity-100 transition-opacity duration-300">
        <button
          class="bg-white text-gray-800 px-3 py-2 rounded-full font-bold hover:bg-[#e60023] hover:text-white transition-colors duration-300">
          Créer
        </button>
      </div>
    </div>


  </div>


  <div class="grid grid-cols-5 gap-4 p-10 mt-[-35px]">
    <div v-for="(column, columnIndex) in columns" :key="columnIndex" class="flex flex-col gap-4">
      <div v-for="(item, itemIndex) in column" :key="itemIndex" class="relative group">
        <div class="bg-white rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105"
          :style="{ height: item.height }">
          <img :src="item.image" :alt="item.title" class="w-full h-full object-cover rounded-lg">
          <div class="p-4">
            <h3 class="font-bold text-lg mb-2">{{ item.title }}</h3>
            <p class="text-gray-700 text-sm">{{ item.description }}</p>
          </div>
          <div
            class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              class="bg-white text-gray-800 px-3 py-2 rounded-full font-bold hover:bg-[#e60023] hover:text-white transition-colors duration-300">
              <i class="fi fi-sr-pen-clip"></i>
            </button>
            <button
              class="bg-white text-gray-800 px-3 py-2 rounded-full font-bold hover:bg-[#e60023] hover:text-white transition-colors duration-300 ml-3">
              <i class="fi fi-sr-file-upload"></i>
            </button>
          </div>
        </div>
        <div class="flex items-center mt-4">
          <img src="../assets/pfp.jpg" alt="Profile Image" class="w-10 h-10 rounded-full mr-4">
          <div>
            <p class="font-semibold">ProfileName {{ item.id }}</p>
            <p class="text-gray-600">title {{ item.id }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import HeaderProfile from '../components/HeaderProfile.vue';

export default {
  name: 'ProfilePage',
  components: {
    HeaderProfile,
  },
  data() {
    return {
      isActive: false,
      items: [
        { id: 1, title: 'Item 1', description: 'Description 1', height: '300px', image: 'https://picsum.photos/200/300' },
        { id: 2, title: 'Item 2', description: 'Description 2', height: '250px', image: 'https://picsum.photos/200/250' },
        { id: 3, title: 'Item 3', description: 'Description 3', height: '150px', image: 'https://picsum.photos/200/150' },
        { id: 4, title: 'Item 4', description: 'Description 4', height: '250px', image: 'https://picsum.photos/200/250' },
        { id: 5, title: 'Item 5', description: 'Description 5', height: '300px', image: 'https://picsum.photos/200/300' },
        { id: 6, title: 'Item 6', description: 'Description 6', height: '200px', image: 'https://picsum.photos/200/200' },
        { id: 7, title: 'Item 7', description: 'Description 7', height: '250px', image: 'https://picsum.photos/200/250' },
        { id: 8, title: 'Item 8', description: 'Description 8', height: '350px', image: 'https://picsum.photos/200/350' },
        { id: 9, title: 'Item 9', description: 'Description 9', height: '250px', image: 'https://picsum.photos/200/250' },
        { id: 10, title: 'Item 10', description: 'Description 10', height: '200px', image: 'https://picsum.photos/200/200' },
      ],
      isDropdownOpen: false,
    }
  },
  computed: {
    columns() {
      const cols = [[], [], [], [], []];
      this.items.forEach((item, index) => {
        cols[index % 5].push(item);
      });
      return cols;
    }
  },

};
</script>