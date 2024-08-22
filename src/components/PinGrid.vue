<template>
      <div class="grid grid-cols-5 gap-4 p-4">
        <div v-for="(column, columnIndex) in columns" :key="columnIndex" class="flex flex-col gap-4">
          <div v-for="(item, itemIndex) in column" :key="itemIndex" class="relative group">
            <div class="bg-white rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105"
                 :style="{ height: item.height }">
              <img :src="item.image" :alt="item.title" class="w-full h-full object-cover rounded-lg">
              <div class="p-4">
                <h3 class="font-bold text-lg mb-2">{{ item.title }}</h3>
                <p class="text-gray-700 text-sm">{{ item.description }}</p>
              </div>
              <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button class="bg-[#e60023] text-white px-4 py-2 rounded-full font-bold hover:bg-[#e60023] transition-colors duration-300">
                  View Details
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
export default {
  name: 'PinterestGrid',
  data() {
    return {
    items : [
  { id: 1, title: 'Item 1', description: 'Description 1', height: '200px', image: 'https://picsum.photos/200/50' },
  { id: 2, title: 'Item 2', description: 'Description 2', height: '250px', image: 'https://picsum.photos/200/100' },
  { id: 3, title: 'Item 3', description: 'Description 3', height: '300px', image: 'https://picsum.photos/200/150' },
  { id: 4, title: 'Item 4', description: 'Description 4', height: '350px', image: 'https://picsum.photos/200/200' },
  { id: 5, title: 'Item 5', description: 'Description 5', height: '400px', image: 'https://picsum.photos/200/250' },
  { id: 6, title: 'Item 6', description: 'Description 6', height: '400px', image: 'https://picsum.photos/200/300' },
  { id: 7, title: 'Item 7', description: 'Description 7', height: '350px', image: 'https://picsum.photos/200/350' },
  { id: 8, title: 'Item 8', description: 'Description 8', height: '350px', image: 'https://picsum.photos/200/400' },
  { id: 9, title: 'Item 9', description: 'Description 9', height: '300px', image: 'https://picsum.photos/200/450' },
  { id: 10, title: 'Item 10', description: 'Description 10', height: '350px', image: 'https://picsum.photos/200/500' },
  { id: 11, title: 'Item 11', description: 'Description 11', height: '400px', image: 'https://picsum.photos/200/550' },
  { id: 12, title: 'Item 12', description: 'Description 12', height: '350px', image: 'https://picsum.photos/200/600' },
  { id: 13, title: 'Item 13', description: 'Description 13', height: '250px', image: 'https://picsum.photos/200/650' },
  { id: 14, title: 'Item 14', description: 'Description 14', height: '300px', image: 'https://picsum.photos/200/700' },
  { id: 15, title: 'Item 15', description: 'Description 15', height: '350px', image: 'https://picsum.photos/200/750' },
  { id: 16, title: 'Item 16', description: 'Description 16', height: '400px', image: 'https://picsum.photos/200/800' },
  { id: 17, title: 'Item 17', description: 'Description 17', height: '350px', image: 'https://picsum.photos/200/850' },
  { id: 18, title: 'Item 18', description: 'Description 18', height: '250px', image: 'https://picsum.photos/200/900' },
  { id: 19, title: 'Item 19', description: 'Description 19', height: '550px', image: 'https://picsum.photos/200/950' },
  { id: 20, title: 'Item 20', description: 'Description 20', height: '340px', image: 'https://picsum.photos/200/1000' },
  { id: 21, title: 'Item 21', description: 'Description 21', height: '400px', image: 'https://picsum.photos/200/1050' },
  { id: 22, title: 'Item 22', description: 'Description 22', height: '500px', image: 'https://picsum.photos/200/1100' },
  { id: 23, title: 'Item 23', description: 'Description 23', height: '650px', image: 'https://picsum.photos/200/1150' },
  { id: 24, title: 'Item 24', description: 'Description 24', height: '300px', image: 'https://picsum.photos/200/1200' },
  { id: 25, title: 'Item 25', description: 'Description 25', height: '365px', image: 'https://picsum.photos/200/1250' },
  { id: 26, title: 'Item 26', description: 'Description 26', height: '200px', image: 'https://picsum.photos/200/1300' },
  { id: 27, title: 'Item 27', description: 'Description 27', height: '250px', image: 'https://picsum.photos/200/1350' },
  { id: 28, title: 'Item 28', description: 'Description 28', height: '300px', image: 'https://picsum.photos/200/1400' },
  { id: 29, title: 'Item 29', description: 'Description 29', height: '350px', image: 'https://picsum.photos/200/1450' },
  { id: 30, title: 'Item 30', description: 'Description 30', height: '400px', image: 'https://picsum.photos/200/1500' },
  { id: 31, title: 'Item 31', description: 'Description 31', height: '400px', image: 'https://picsum.photos/200/1550' },
  { id: 32, title: 'Item 32', description: 'Description 32', height: '350px', image: 'https://picsum.photos/200/1600' },
  { id: 33, title: 'Item 33', description: 'Description 33', height: '350px', image: 'https://picsum.photos/200/1650' },
  { id: 34, title: 'Item 34', description: 'Description 34', height: '300px', image: 'https://picsum.photos/200/1700' },
  { id: 35, title: 'Item 35', description: 'Description 35', height: '350px', image: 'https://picsum.photos/200/1750' },
  { id: 36, title: 'Item 36', description: 'Description 36', height: '400px', image: 'https://picsum.photos/200/1800' },
  { id: 37, title: 'Item 37', description: 'Description 37', height: '350px', image: 'https://picsum.photos/200/1850' },
  { id: 38, title: 'Item 38', description: 'Description 38', height: '250px', image: 'https://picsum.photos/200/1900' },
  { id: 39, title: 'Item 39', description: 'Description 39', height: '350px', image: 'https://picsum.photos/200/1950' },
  { id: 40, title: 'Item 40', description: 'Description 40', height: '340px', image: 'https://picsum.photos/200/2000' },
  { id: 41, title: 'Item 41', description: 'Description 41', height: '400px', image: 'https://picsum.photos/200/2050' },
  { id: 42, title: 'Item 42', description: 'Description 42', height: '500px', image: 'https://picsum.photos/200/2100' },
  { id: 43, title: 'Item 43', description: 'Description 43', height: '650px', image: 'https://picsum.photos/200/2150' },
  { id: 44, title: 'Item 44', description: 'Description 44', height: '300px', image: 'https://picsum.photos/200/2200' },
  { id: 45, title: 'Item 45', description: 'Description 45', height: '365px', image: 'https://picsum.photos/200/2250' },
  { id: 46, title: 'Item 40', description: 'Description 40', height: '340px', image: 'https://picsum.photos/200/2300' },
  { id: 47, title: 'Item 41', description: 'Description 41', height: '400px', image: 'https://picsum.photos/200/2350' },
  { id: 48, title: 'Item 42', description: 'Description 42', height: '300px', image: 'https://picsum.photos/200/2400' },
  { id: 49, title: 'Item 43', description: 'Description 43', height: '650px', image: 'https://picsum.photos/200/2450' },
  { id: 50, title: 'Item 44', description: 'Description 44', height: '300px', image: 'https://picsum.photos/200/2500' },
  { id: 51, title: 'Item 45', description: 'Description 45', height: '365px', image: 'https://picsum.photos/200/2550' },
  { id: 52, title: 'Item 40', description: 'Description 40', height: '340px', image: 'https://picsum.photos/200/2600' },
  { id: 53, title: 'Item 41', description: 'Description 41', height: '400px', image: 'https://picsum.photos/200/2650' },
  { id: 54, title: 'Item 42', description: 'Description 42', height: '500px', image: 'https://picsum.photos/200/2700' },
  { id: 55, title: 'Item 43', description: 'Description 43', height: '350px', image: 'https://picsum.photos/200/2750' },
  { id: 56, title: 'Item 44', description: 'Description 44', height: '300px', image: 'https://picsum.photos/200/2800' },
  { id: 57, title: 'Item 45', description: 'Description 45', height: '365px', image: 'https://picsum.photos/200/2850' },
  { id: 58, title: 'Item 40', description: 'Description 40', height: '340px', image: 'https://picsum.photos/200/2900' },
  { id: 59, title: 'Item 41', description: 'Description 41', height: '400px', image: 'https://picsum.photos/200/2950' },
  { id: 60, title: 'Item 42', description: 'Description 42', height: '500px', image: 'https://picsum.photos/200/3000' },
  { id: 61, title: 'Item 43', description: 'Description 43', height: '550px', image: 'https://picsum.photos/200/3050' },
  { id: 62, title: 'Item 44', description: 'Description 44', height: '300px', image: 'https://picsum.photos/200/3100' },
  { id: 63, title: 'Item 45', description: 'Description 45', height: '365px', image: 'https://picsum.photos/200/3150' },
  { id: 64, title: 'Item 42', description: 'Description 42', height: '500px', image: 'https://picsum.photos/200/3200' },
  { id: 65, title: 'Item 43', description: 'Description 43', height: '350px', image: 'https://picsum.photos/200/3250' },
  { id: 66, title: 'Item 44', description: 'Description 44', height: '300px', image: 'https://picsum.photos/200/3300' },
  { id: 67, title: 'Item 45', description: 'Description 45', height: '365px', image: 'https://picsum.photos/200/3350' },
  { id: 68, title: 'Item 40', description: 'Description 40', height: '340px', image: 'https://picsum.photos/200/3400' },
  { id: 69, title: 'Item 41', description: 'Description 41', height: '400px', image: 'https://picsum.photos/200/3450' },
  { id: 70, title: 'Item 42', description: 'Description 42', height: '500px', image: 'https://picsum.photos/200/3500' },
  { id: 71, title: 'Item 43', description: 'Description 43', height: '350px', image: 'https://picsum.photos/200/3650' },
  { id: 72, title: 'Item 44', description: 'Description 44', height: '300px', image: 'https://picsum.photos/200/3700' },
  { id: 73, title: 'Item 45', description: 'Description 45', height: '365px', image: 'https://picsum.photos/200/3750' },
  { id: 74, title: 'Item 42', description: 'Description 42', height: '500px', image: 'https://picsum.photos/200/3800' },
  { id: 75, title: 'Item 43', description: 'Description 43', height: '350px', image: 'https://picsum.photos/200/3850' },
  { id: 76, title: 'Item 44', description: 'Description 44', height: '300px', image: 'https://picsum.photos/200/3900' },
  { id: 77, title: 'Item 45', description: 'Description 45', height: '365px', image: 'https://picsum.photos/200/3950' },
  { id: 78, title: 'Item 42', description: 'Description 42', height: '300px', image: 'https://picsum.photos/200/4000' },
  { id: 79, title: 'Item 43', description: 'Description 43', height: '350px', image: 'https://picsum.photos/200/4050' },
  { id: 80, title: 'Item 44', description: 'Description 44', height: '300px', image: 'https://picsum.photos/200/4100' },
  { id: 81, title: 'Item 45', description: 'Description 45', height: '365px', image: 'https://picsum.photos/200/4150' },
  { id: 82, title: 'Item 40', description: 'Description 40', height: '340px', image: 'https://picsum.photos/200/4200' },
  { id: 83, title: 'Item 42', description: 'Description 42', height: '365px', image: 'https://picsum.photos/200/4250' },
  { id:84, title: 'Item 44', description: 'Description 44', height: '300px', image: 'https://picsum.photos/200/4300' },
  { id: 85, title: 'Item 45', description: 'Description 45', height: '365px', image: 'https://picsum.photos/200/4350' },
  { id: 86, title: 'Item 44', description: 'Description 44', height: '300px', image: 'https://picsum.photos/200/4400' },
  { id:87, title: 'Item 44', description: 'Description 44', height: '300px', image: 'https://picsum.photos/200/4450' },
  { id:88, title: 'Item 1', description: 'Description 1', height: '200px', image: 'https://picsum.photos/200/4500' },
  { id: 89, title: 'Item 2', description: 'Description 2', height: '250px', image: 'https://picsum.photos/200/4550' },
  { id: 90, title: 'Item 4', description: 'Description 4', height: '350px', image: 'https://picsum.photos/200/4600' },
  { id: 91, title: 'Item 45', description: 'Description 45', height: '365px', image: 'https://picsum.photos/200/4650' },
  { id: 9, title: 'Item 40', description: 'Description 40', height: '340px', image: 'https://picsum.photos/200/4700' },
  { id: 93, title: 'Item 42', description: 'Description 42', height: '320px', image: 'https://picsum.photos/200/4750' },
  { id:94, title: 'Item 44', description: 'Description 44', height: '300px', image: 'https://picsum.photos/200/4800' },
  { id: 95, title: 'Item 45', description: 'Description 45', height: '365px', image: 'https://picsum.photos/200/4850' },
  { id: 96, title: 'Item 44', description: 'Description 44', height: '250px', image: 'https://picsum.photos/200/4900' },
  { id:97, title: 'Item 44', description: 'Description 44', height: '250px', image: 'https://picsum.photos/200/4950' },
  { id: 98, title: 'Item 2', description: 'Description 2', height: '250px', image: 'https://picsum.photos/200/5000' },
  
]

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
  }
}
</script>