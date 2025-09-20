<template>
  <div class="min-h-screen p-6 bg-gray-100 flex">
    <div class="flex-1 bg-white shadow-xl rounded-2xl p-8 overflow-y-auto">
      <h1 class="text-4xl font-bold mb-4 text-gray-900">National Crisis</h1>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        A national crisis is not merely a political challenge but a defining
        moment that reshapes the collective conscience of a nation. It tests
        the resilience of its people, the accountability of its leaders, and
        the strength of its institutions. Throughout history, crises have
        come in many forms: political upheaval, natural disasters, economic
        recessions, or social unrest. Each has carried with it the potential
        to either divide a society or unite it toward a renewed vision of
        hope and progress.
      </p>
    </div>
    <div class="w-72 ml-6 relative">
      <div class="fixed top-6 right-6 w-72 bg-white shadow-md rounded-2xl p-4 flex items-center justify-center min-h-[300px]">
        <div v-if="showAd && currentAd" class="relative w-full h-full flex items-center justify-center">
          <img :src="currentAd" alt="Advertisement" class="max-h-[400px] max-w-full rounded-lg shadow" />
          <button @click="handleCancel" class="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full hover:bg-black">
            X
          </button>
        </div>
        <p v-else class="text-gray-400">No Advertisement</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const ads = [
  "https://img.freepik.com/free-psd/delicious-burger-food-menu-instagram-facebook-story-template_106176-1402.jpg?semt=ais_hybrid&w=740&q=80",
  "https://www.gourmetads.com/wp-content/uploads/2019/05/fast-food-ads-burger-king-300x600.jpg",
  "https://i.pinimg.com/736x/48/fd/d5/48fdd54398bac199f778ed4ccd515fc7.jpg",
  "https://adsofbd.com/wp-content/uploads/2024/08/Pusti-Ghee-800x615.jpg",
  "https://adsofbd.com/wp-content/uploads/2019/03/Drinko.jpg",
  "https://adsofbd.com/wp-content/uploads/2019/03/Drinko1.jpg",
];

const currentAd = ref(null);
const showAd = ref(false);
let adInterval = null;
let initialTimer = null;

const showRandomAd = () => {
  const randomIndex = Math.floor(Math.random() * ads.length);
  currentAd.value = ads[randomIndex];
  showAd.value = true;
};

const handleCancel = () => {
  showAd.value = false;
  currentAd.value = null;
  clearInterval(adInterval);
};

onMounted(() => {
  initialTimer = setTimeout(showRandomAd, Math.random() * 1000 + 3000);
  adInterval = setInterval(() => {
    if (showAd.value) {
      const randomIndex = Math.floor(Math.random() * ads.length);
      currentAd.value = ads[randomIndex];
    }
  }, 3000);
});

onBeforeUnmount(() => {
  clearInterval(adInterval);
  clearTimeout(initialTimer);
});
</script>
