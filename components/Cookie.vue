<template>
  <div id="cookieNotice" ref="cookieNotice" class="flex flex-1 h-16 bg-gray-200 w-full fixed bottom-0 z-2 items-center px-2 text-xs lg:text-sm lg:px-36 cookieNotice">
      <p class="flex-grow">By continuing to browse or by clicking Accept, you agree to the storing of cookies on your device.</p>
      <button id="cookieBtn" ref="cookieBtn" class="border-2 border-gray-400 py-1 px-3 rounded bg-gray-300 hover:bg-gray-500 hover:border-gray-500 hover:text-white transition-colors cookieBtn">
        Accept
      </button>
  </div>
</template>

<script>
import gsap from 'gsap';

export default {
  mounted() {
    const storageType = localStorage;
    const consentPropertyName = 'ie_consent';

    // const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
    const saveToStorage = () => storageType.setItem(consentPropertyName, true);

    const cookieNotice = document.getElementById('cookieNotice')
    const cookieBtn = document.getElementById("cookieBtn");

    storageType.setItem(consentPropertyName, false);

    const acceptFn = event => {
      saveToStorage(storageType);
      cookieGoAway();
    };

    cookieBtn.addEventListener('click', acceptFn);

    if (consentPropertyName === false) {
      console.log(storageType.getItem(consentPropertyName));
      gsap.from(cookieNotice, { opacity: 0, height: 0, ease: 'ease', duration: 1 });
    }

    function cookieGoAway() {
      gsap.to(cookieNotice, { height: 0, opacity: 0, ease: 'ease', duration: 1 })
      document.getElementById('cookieNotice').classList.add('hidden');
      
      console.log(storageType.getItem(consentPropertyName));
    }
  }
}
</script>

<style>
  .cookieNotice .hidden {
    display: none;
  }
</style>