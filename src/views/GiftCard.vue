<script setup>
import { useSession } from "../../composables/session";
import { useRouter } from "vue-router";

useSession();
const router = useRouter();

function handleGiftcard() {
  router.push("/payment");
}
</script>

<template>
  <div class="wrap">
    <header class="main-header">
      <div class="main-header__top">
        <div class="main-header__inner">
          <a
            aria-label="LeoList"
            class="main-header__logo"
            href="https://www.leolist.cc/fr"
          >
            <img
              alt="LeoList Logo"
              height="52"
              src="https://www.leolist.cc/static/min/img/logo-white-short.svg"
              width="145"
            />
          </a>

          <nav class="main-header-subnav">
            <button
              class="burger-menu"
              id="js-burger"
              data-testid="burger-menu-button"
              aria-label="Menu"
            >
              <span class="item"></span>
              <span class="item"></span>
              <span class="item"></span>
            </button>
          </nav>
        </div>
      </div>
    </header>

    <div id="page-body">
      <div class="user-menu hidden-print">
        <a href="https://www.leolist.cc/user/manage" class="user-menu__item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill="#a6a6a6"
          >
            <path
              d="M726.67-446.67v-66.66H880v66.66H726.67ZM776-160l-123.33-92 40-53.33 123.33 92L776-160Zm-81.33-495.33-40-53.34L776-800l40 53.33-121.33 91.34ZM206.67-200v-160h-60q-27.5 0-47.09-19.58Q80-399.17 80-426.67v-106.66q0-27.5 19.58-47.09Q119.17-600 146.67-600H320l200-120v480L320-360h-46.67v160h-66.66Zm246.66-158v-244L338-533.33H146.67v106.66H338L453.33-358ZM560-346v-268q27 24 43.5 58.5T620-480q0 41-16.5 75.5T560-346ZM300-480Z"
            />
          </svg>
          Manage
        </a>
        <a
          href="https://www.leolist.cc/fr/benefits#companions"
          class="user-menu__item"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill="#a6a6a6"
          >
            <path
              d="m345.33-60-76-129.33-148.66-31.34 16-147.33L40-480l96.67-111.33-16-147.34L269.33-770l76-130L480-839.33 614.67-900l76.66 130 148 31.33-16 147.34L920-480l-96.67 112 16 147.33-148 31.34L614.67-60 480-120.67 345.33-60Zm29.34-86.67L480-191.33l108 44.66 63.33-98.66L766-274l-11.33-116.67L833.33-480l-78.66-91.33L766-688l-114.67-26.67L586-813.33l-106 44.66-108-44.66-63.33 98.66L194-688l11.33 116.67L126.67-480l78.66 89.33L194-272l114.67 26.67 66 98.66ZM480-480Zm-42.67 136L664-569.33 615.33-616l-178 176.67-92-94L296-484.67 437.33-344Z"
            />
          </svg>
          Get Verified
        </a>
        <a
          class="user-menu__item"
          href="https://www.leolist.cc/fr/user/verified"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill="#a6a6a6"
          >
            <path
              d="M186.67-226.67q58-55 132.43-88.16Q393.53-348 479.93-348t160.9 33.17q74.5 33.16 132.5 88.16v-546.66H186.67v546.66Zm294.66-200.66q58 0 98.34-40.34Q620-508 620-566t-40.33-98.33q-40.34-40.34-98.34-40.34T383-664.33Q342.67-624 342.67-566T383-467.67q40.33 40.34 98.33 40.34ZM186.67-120q-27 0-46.84-19.83Q120-159.67 120-186.67v-586.66q0-27 19.83-46.84Q159.67-840 186.67-840h586.66q27 0 46.84 19.83Q840-800.33 840-773.33v586.66q0 27-19.83 46.84Q800.33-120 773.33-120H186.67Zm51.66-66.67H721q-56-48.33-116.83-71.5-60.84-23.16-124.17-23.16t-124.5 23.16q-61.17 23.17-117.17 71.5Zm243-307.33q-30 0-51-21t-21-51q0-30 21-51t51-21q30 0 51 21t21 51q0 30-21 51t-51 21Zm-1.33-6.33Z"
            />
          </svg>
          Directory
        </a>

        <a
          href="https://www.leolist.cc/user/giftcard"
          class="user-menu__item user-menu__item--active"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill="#a6a6a6"
          >
            <path
              d="M146.67-278v91.33h666.66V-278H146.67Zm0-442h112.66q-5-9-7.5-21.33-2.5-12.34-2.5-23.34 0-48.05 33.67-81.69T364-880q30.49 0 56.41 15.5 25.92 15.5 42.26 39.17l17.66 26 17.67-26Q514.67-850 540.01-865q25.34-15 54.59-15 48.73 0 82.4 33.33 33.67 33.34 33.67 82.24 0 10.76-2.17 21.43t-7.17 23h112q27 0 46.84 19.83Q880-680.33 880-653.33v466.66q0 27-19.83 46.84Q840.33-120 813.33-120H146.67q-27 0-46.84-19.83Q80-159.67 80-186.67v-466.66q0-27 19.83-46.84Q119.67-720 146.67-720Zm0 330.67h666.66v-264h-234L674-522.67l-53.33 39.34L480-676.67 339.33-483.33 286-522.67l94-130.66H146.67v264Zm218-326.67q20.33 0 34.5-14.17 14.16-14.16 14.16-34.5 0-20.33-14.16-34.5-14.17-14.16-34.5-14.16-20.34 0-34.5 14.16Q316-785 316-764.67q0 20.34 14.17 34.5Q344.33-716 364.67-716Zm230 0q20.96 0 35.15-14.17Q644-744.33 644-764.67q0-20.33-14.18-34.5-14.19-14.16-35.15-14.16-19.67 0-33.84 14.16-14.16 14.17-14.16 34.5 0 20.34 14.16 34.5Q575-716 594.67-716Z"
            />
          </svg>
          Gift Card
        </a>
      </div>

      <div id="menu-cont">
        <div class="gift-card mb30">
          <div class="gift-intro gift-card__content-box text-center">
            <div class="gift-intro__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                viewBox="0 -960 960 960"
                width="40px"
                fill="#63889b"
              >
                <path
                  d="M160-80v-443.33H80v-233.34h216q-7-11-10.17-23.33-3.16-12.33-3.16-25.33 0-47.78 33.44-81.23Q349.56-920 397.33-920q23.67 0 45.34 9.5 21.66 9.5 37.33 27.17 15.67-18 37.33-27.34Q539-920 562.67-920q47.77 0 81.22 33.44 33.44 33.45 33.44 81.23 0 13-3.33 25.16-3.33 12.17-10 23.5h216v233.34h-80V-80H160Zm402.71-773.33q-20.38 0-34.21 13.78-13.83 13.79-13.83 34.17 0 20.38 13.78 34.21 13.79 13.84 34.17 13.84 20.38 0 34.21-13.79 13.84-13.79 13.84-34.17 0-20.38-13.79-34.21-13.79-13.83-34.17-13.83Zm-213.38 47.95q0 20.38 13.79 34.21 13.79 13.84 34.17 13.84 20.38 0 34.21-13.79 13.83-13.79 13.83-34.17 0-20.38-13.78-34.21-13.79-13.83-34.17-13.83-20.38 0-34.21 13.78-13.84 13.79-13.84 34.17ZM146.67-690v100h300v-100h-300Zm300 543.33v-376.66h-224v376.66h224Zm66.66 0h224v-376.66h-224v376.66Zm300-443.33v-100h-300v100h300Z"
                />
              </svg>
            </div>

            <p class="gift-card__balance__expire">
              Expires&nbsp;<time datetime=" le sept., 13 2025">
                on Sep, 13 2025
              </time>
            </p>
          </div>

          <div
            class="panel-group panel-group--no-padding"
            id="accordion"
            role="tablist"
            aria-multiselectable="true"
          >
            <div class="panel-group__header">
              <h3 class="gift-card__tab__subtitle">
                Top Up $300 And You Receive +$300
              </h3>
              <a
                href="https://www.leolist.cc/user/giftcard#"
                class="gift-card__history-btn"
                id="transactions-history-btn"
              >
                History
              </a>
            </div>

            <div class="panel-group__content">
              <div
                @click.prevent="handleGiftcard"
                class="gift-card__options js-gift-card-container"
              >
                <div class="gift-card-panel">
                  <div
                    class="gift-card-panel-heading"
                    role="tab"
                    id="headingOne"
                  >
                    <h4 class="panel-title">
                      <a
                        class="gift-card__tab text-center"
                        id="crypto-opener"
                        role="button"
                      >
                        <span class="gift-card__tab__group">
                          <h2 class="gift-card__tab__header">Litecoin</h2>
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="40px"
                          viewBox="0 -960 960 960"
                          width="40px"
                          fill="#fffff"
                        >
                          <path
                            d="M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z"
                          />
                        </svg>
                      </a>
                    </h4>
                  </div>
                </div>
              </div>

              <div class="crypto-panel" id="crypto-panel">
                <div id="crypto-container"></div>
                <!--code start-->
                <div class="crypto-panel__inner" id="bcprovider">
                  <div class="p30 bcprovider-spinner" style="display: none">
                    <p>Chargement des détails de paiement en cours...</p>
                    <div class="bcprovider-spinner__container">
                      <span class="bcprovider-spinner__item"></span>
                    </div>
                  </div>

                  <div class="p30 bcprovider-app-error" style="display: none">
                    Ce mode de paiement est temporairement indisponible.
                    Veuillez réessayer dans une minute.
                    <button class="P-btn P-btn-transparent mt20">
                      Réessayer
                    </button>
                  </div>
                  <!-- bcprovider widget-->
                  <div class="bcprovider-app" style="">
                    <div class="bcprovider-container">
                      <div class="bcprovider">
                        <a
                          href="https://www.leolist.cc/user/giftcard#"
                          class="bcprovider__back P-Payment__bcprovider__back"
                          style="display: none"
                        >
                          <i class="icon-crypto icon-crypto--back-button"></i>
                        </a>
                        <a
                          href="https://www.leolist.cc/user/giftcard#"
                          id="bcprovider__close"
                          class="bcprovider__close P-Payment__bcprovider__close"
                          style="display: none"
                        >
                          <i class="icon-crypto icon-crypto--close"></i>
                        </a>
                        <!-- Select currency -->
                        <div
                          class="BCPROVIDER__Icons"
                          data-text-title="Choisissez la devise"
                          data-text-disable="Désactivé de façon permanente"
                          data-text-loading="Chargement"
                          style="display: none"
                        >
                          <h1 class="bcprovider__title hidden">
                            Choisissez la devise
                          </h1>
                        </div>
                        <!-- Content -->
                        <div class="P-Payment P-box">
                          <!-- Header of content-->
                          <div
                            class="P-Payment__header bcprovider__status"
                            id="payment-header"
                          >
                            <div
                              class="P-Payment__header__timer"
                              style="display: none"
                            >
                              --
                            </div>
                            <div
                              class="P-Payment__header__check"
                              style="display: none"
                            ></div>
                            <div class="P-Payment__header__text">
                              <div class="flex-box">
                                <div
                                  class="P-Payment__header__title"
                                  data-text-waiting="En attente de paiement"
                                  data-text-expiring="Window Expiring Soon"
                                  data-text-expired="Payment Window Expired"
                                  data-text-confirming="Confirming Payment"
                                >
                                  En attente de paiement
                                </div>
                                <button
                                  class="P-Payment__header__question flex-box"
                                  style="display: none"
                                >
                                  <i
                                    class="icon-crypto icon-crypto--question-mark"
                                  ></i>
                                </button>
                              </div>
                              <div
                                class="P-Payment__header__helper"
                                data-text-expired="Taux expiré"
                                data-text-confirmation="Confirmation"
                                data-text-confirmations="Confirmations"
                              >
                                <p
                                  class="P-Payment__header__helper__checkout mbn mtn"
                                  data-text-locked="Tarif verrouillé"
                                >
                                  Tarif verrouillé 1 LTC : $81.34
                                </p>
                                <p
                                  class="P-Payment__header__helper__giftcard mbn mtn"
                                  data-text-current="TARIF ACTUEL"
                                >
                                  TARIF ACTUEL 1 LTC : $81.34
                                </p>
                              </div>
                            </div>
                            <a
                              aria-label="Back to Gift Card view"
                              class="crypto-panel__close"
                              id="crypto-close"
                            >
                              <i
                                class="icon icon-arrow-left crypto-panel__icon"
                              ></i>
                            </a>
                          </div>

                          <div class="P-box__inner">
                            <!-- First payment step -->
                            <h1
                              class="P-box__inner__title"
                              data-text-paywith="Payer avec des"
                            >
                              Payer avec des <span>Litecoin (LTC)</span>
                            </h1>
                            <div class="P-Payment__start">
                              <div
                                class="P-Tabs__Tab-panel bcprovider__section"
                              >
                                <h2 class="bcprovider__section__header">
                                  <b>Scannez ce code QR</b> avec votre
                                  application de portemonnaie
                                </h2>
                                <div
                                  class="P-Payment__qr"
                                  title="LSBNQn2MRADp9uwCPjmmiMfUe8c43Ca5G2"
                                >
                                  <canvas
                                    width="180"
                                    height="180"
                                    style="display: none"
                                  ></canvas
                                  ><img
                                    src="data:image/png;base64,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"
                                    style="display: block"
                                  />
                                </div>
                              </div>
                              <div class="bcprovider__section-divider"></div>
                              <div class="bcprovider__section">
                                <div
                                  class="P-Payment__value P-Payment__value--flex"
                                >
                                  <div
                                    class="P-Payment__value__icon crypto-panel__section crypto-panel__section--centered"
                                  >
                                    <h2
                                      class="bcprovider__section__header bold"
                                    >
                                      Envoyer des Litecoin (LTC) à l’adresse
                                      ci-dessous
                                    </h2>
                                    <div
                                      class="P-Payment__address bcprovider__section__address"
                                    >
                                      <div
                                        class="bcprovider__section__copy-box"
                                      >
                                        <code id="address-code"
                                          >LSBNQn2MRADp9uwCPjmmiMfUe8c43Ca5G2</code
                                        >
                                      </div>

                                      <a
                                        class="P-btn-block P-btn-copy-address bcprovider__section__copy-button"
                                        data-text-copy="Copier l’adresse"
                                        data-text-copied="Copié !"
                                      >
                                        <span class="P-btn-block__inner">
                                          <span
                                            class="P-btn-block__helper"
                                            style="display: none"
                                            >LSB
                                            <span class="P-dots"><i></i></span>
                                            5G2</span
                                          >
                                          Copier l’adresse
                                        </span>
                                      </a>
                                      <div
                                        class="P-Payment__header__helper__giftcard"
                                      >
                                        <div
                                          class="flex-box justify-center crypto-panel__info"
                                        >
                                          <i class="icon icon-timer"></i>
                                          <div
                                            class="P-Payment__min-value gift-card__info-alert--cc mbn"
                                          >
                                            Les paiements Litecoin (LTC)
                                            prennent 1-4 minutes et sont
                                            automatiquement crédités en $ dans
                                            votre carte-cadeau.
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="P-Payment__value__section">
                                    <div class="flex-box">
                                      <div
                                        class="P-Payment__value__pay flex-box"
                                      >
                                        <span
                                          class="P-Payment__value__coins d-block bcprovider__section__copy-box"
                                          id="coins-value"
                                          >NaN</span
                                        >
                                        <span
                                          class="P-Payment__value__code bcprovider__section__code"
                                          >LTC</span
                                        >
                                      </div>
                                      <div
                                        class="P-Payment__value__price"
                                        style="display: none; color: black"
                                      >
                                        ---
                                      </div>
                                    </div>
                                    <a
                                      class="P-btn-block P-Payment__value__copy bcprovider__section__copy-button"
                                      data-text-copy="Copier le montant"
                                      data-text-copied="Copié !"
                                    >
                                      <span class="P-btn-block__inner">
                                        <span
                                          class="P-btn-block__helper"
                                          style="display: none"
                                          >NaN&nbsp;LTC</span
                                        >
                                        Copier le montant
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>

                              <div
                                class="P-Tabs"
                                id="bcprovider-tabs"
                                style="display: none"
                              >
                                <!-- <ul class="P-Tabs__Tab-list P-Tabs__Tab-list--second">
                                    <li role="tab" class="P-Tabs__Tab P-Tabs__Tab--wallet">Portemonnaie</li>
                                    <li role="tab" class="P-Tabs__Tab P-Tabs__Tab--selected">Copier</li>
                                    <li role="tab" class="P-Tabs__Tab">Scanner</li>
                                </ul> -->
                                <!--                                <div class="P-Payment__address">-->
                                <!--                                    <div class="P-Payment__address__text">---</div>-->
                                <!--                                    <code>---</code>-->
                                <!--                                    <a class="P-btn-block P-btn-copy-address">-->
                                <!--                                        <span class="P-btn-block__inner">-->
                                <!--                                            <span class="P-btn-block__helper" style="display: none">--</span>-->
                                <!--                                            -->
                                <!--                                        </span>-->
                                <!--                                    </a>-->
                                <!--                                </div>-->
                                <div
                                  class="P-Tabs__Tab-panel P-Tabs__Tab-panel--wallet"
                                  style="display: none"
                                >
                                  <h1 style="color: black">Wallet</h1>
                                  <div>
                                    <a
                                      href="litecoin:%s?amount=%s"
                                      class="P-btn-block P-wallet-btn"
                                    >
                                      <span class="P-btn-block__inner">
                                        <span class="P-btn-block__text"
                                          >Ouvrir dans le portemonnaie</span
                                        >
                                      </span>
                                    </a>
                                  </div>
                                </div>

                                <div
                                  class="P-Tabs__Tab-panel P-Tabs__Tab-panel--selected"
                                  style="display: none"
                                >
                                  <h1 style="color: black">Copier</h1>
                                  <div class="P-buttons-flex">
                                    <a class="P-btn-block P-btn-copy-address">
                                      <span class="P-btn-block__copied-text">
                                        <svg
                                          height="11"
                                          viewBox="0 0 13 11"
                                          width="13"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="m4.42775177 7.85005539 5.97311463-5.97311463c.5359766-.53597656 1.4049663-.53597656 1.9409428 0 .5359766.53597657.5359766 1.40496628 0 1.94094285l-6.93193869 6.93193869c-.5029721.5029721-1.29920739.5339442-1.83829672.0929164-.06892267-.0472373-.13449273-.1014683-.19571746-.1626931l-2.71766557-2.71766553c-.53597656-.53597657-.53597656-1.40496628 0-1.94094285.53597657-.53597656 1.40496628-.53597656 1.94094285 0z"
                                            fill-rule="evenodd"
                                            fill="#4FBDA6"
                                            transform="translate(0 -1)"
                                          ></path>
                                        </svg>
                                        Copié dans le presse-papiers!
                                      </span>
                                      <span class="P-btn-block__inner">
                                        <span class="P-btn-block__helper"
                                          >--</span
                                        >
                                        Copier l’adresse dans le presse-papiers
                                      </span>
                                    </a>
                                    <a
                                      class="P-btn-block P-Payment__value__copy"
                                    >
                                      <span class="P-btn-block__copied-text">
                                        <svg
                                          height="11"
                                          viewBox="0 0 13 11"
                                          width="13"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="m4.42775177 7.85005539 5.97311463-5.97311463c.5359766-.53597656 1.4049663-.53597656 1.9409428 0 .5359766.53597657.5359766 1.40496628 0 1.94094285l-6.93193869 6.93193869c-.5029721.5029721-1.29920739.5339442-1.83829672.0929164-.06892267-.0472373-.13449273-.1014683-.19571746-.1626931l-2.71766557-2.71766553c-.53597656-.53597657-.53597656-1.40496628 0-1.94094285.53597657-.53597656 1.40496628-.53597656 1.94094285 0z"
                                            fill-rule="evenodd"
                                            fill="#4FBDA6"
                                            transform="translate(0 -1)"
                                          ></path>
                                        </svg>
                                        Copié dans le presse-papiers!
                                      </span>
                                      <span class="P-btn-block__inner">
                                        <span class="P-btn-block__helper"
                                          >--</span
                                        >
                                        Copier le montant
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- Payment confirming step -->
                            <div
                              class="P-Payment__unpaid"
                              style="display: none"
                            >
                              <div class="P-Content">
                                <div class="P-Content__icon">
                                  <div class="Confirming__icon"></div>
                                </div>
                                <h2 class="P-Payment__confirmed__title">
                                  Vous n’avez pas assez payé
                                  <span
                                    class="P-Payment__unpaid__underpaid"
                                  ></span
                                  >!
                                </h2>
                                <div class="P-Payment__unpaid__block clearfix">
                                  <div>
                                    <div
                                      class="P-Payment__unpaid__block__header"
                                    >
                                      Montant
                                    </div>
                                    <span
                                      class="P-Payment__unpaid__block__value P-Payment__unpaid__due"
                                    ></span>
                                  </div>
                                  <div>
                                    <div
                                      class="P-Payment__unpaid__block__header"
                                    >
                                      Vous avez payé
                                    </div>
                                    <span
                                      class="P-Payment__unpaid__block__value P-Payment__unpaid__paid"
                                    ></span>
                                  </div>
                                  <div>
                                    <div
                                      class="P-Payment__unpaid__block__header color--red"
                                    >
                                      Pas assez payé
                                    </div>
                                    <span
                                      class="P-Payment__unpaid__block__value color--red P-Payment__unpaid__underpaid"
                                    ></span>
                                  </div>
                                </div>
                                <p class="P-Payment__confirmed__desc">
                                  Ne vous inquiétez pas, nous avons crédité
                                  <span class="P-Payment__unpaid__paid"></span>
                                  (<span
                                    class="P-Payment__unpaid__paidFiat"
                                  ></span
                                  >) sur votre
                                  <a
                                    href="https://www.leolist.cc/user/giftcard#"
                                    class="P-Payment__link"
                                  >
                                    Carte-cadeau Leolist.</a
                                  >
                                </p>
                                <div>
                                  <a
                                    href="https://www.leolist.cc/user/giftcard#"
                                    class="P-btn P-btn--primary P-btn-green"
                                  >
                                    Continuer
                                  </a>
                                </div>
                              </div>
                            </div>
                            <!-- Payment expired step -->
                            <div
                              class="P-Payment__expired"
                              style="display: none"
                            >
                              <div class="P-Content">
                                <h2 class="box-status__header">
                                  Votre fenêtre de paiement a expiré.
                                </h2>
                                <p class="box-status__text">
                                  Cliquez sur le bouton Actualiser ci-dessous
                                  pour verrouiller un nouveau taux de change et
                                  recommencer.
                                </p>
                                <div>
                                  <a
                                    href="https://www.leolist.cc/fr"
                                    class="P-btn P-btn-green"
                                  >
                                    <i
                                      class="P-btn__icon P-btn__icon--refresh-white"
                                    ></i
                                    >Actualiser
                                  </a>
                                </div>
                                <button
                                  style="display: none"
                                  class="P-Payment__helper"
                                >
                                  Qu’est-ce qu’une fenêtre de paiement?
                                </button>
                              </div>
                            </div>
                            <!-- Payment expired step: Help screen -->
                            <div
                              class="P-Payment__expired-helper"
                              style="display: none"
                            >
                              <div class="P-Content">
                                <h2 class="box-status__header">
                                  Qu’est-ce qu’une fenêtre de paiement?
                                </h2>
                                <p class="box-status__text">
                                  La fenêtre de paiement est ouverte pendant un
                                  certain laps de temps (habituellement 15
                                  minutes) durant lequel le taux de change est
                                  verrouillé afin d'assurer un taux juste aux
                                  clients et commerçants.
                                </p>
                                <div>
                                  <button
                                    class="P-btn P-btn-green center-block mt10 P-btn-green--close-info"
                                  >
                                    J’ai compris!
                                  </button>
                                </div>
                              </div>
                            </div>
                            <!-- Payment confirming step -->
                            <div
                              class="P-Payment__confirming"
                              style="display: none"
                            >
                              <div class="P-Content">
                                <div class="Confirming__icon"></div>
                                <h2
                                  class="P-Payment__confirmed__title P-confirmations"
                                >
                                  Traitement de la commande en cours…
                                </h2>
                                <p class="P-Payment__confirmed__desc">
                                  Votre commande sera bientôt traitée. Vous
                                  pouvez laisser cet onglet ouvert jusqu’à ce
                                  que votre paiement soit confirmé, ou le fermer
                                  et attendre une confirmation email.com
                                </p>
                                <div class="mt24">
                                  <button class="P-btn P-btn-transparent">
                                    Fermer la fenêtre
                                  </button>
                                </div>
                                <button
                                  style="display: none"
                                  class="P-Payment__helper"
                                >
                                  Qu’est-ce que cela signifie?
                                </button>
                              </div>
                              <!-- Payment confirming step: Help screen -->
                              <div
                                class="P-Payment__confirming-helper"
                                style="display: none"
                              >
                                <div class="P-Content">
                                  <div class="P-Content__icon">
                                    <img
                                      style="display: none"
                                      src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI4MCIgdmlld0JveD0iMCAwIDI1NCAyODAiIHdpZHRoPSIyNTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMi42ODc1IC0yKSI+PHBhdGggZD0ibTI0Mi4xNzUyNyA4NC44MTg4NDIxIDE0LjA5Mjg3Ny0xNC4wOTIzNzg5LTQyLjI3ODEzMy00Mi4yNzgxMzM0LTE0LjA5MjM3OSAxNC4wOTI4NzcyIDcuMDQ2MTkgNy4wNDYxODk1LTE1LjM0MzQ3NCAxNS4zNDM0NzM3Yy0xNC4zOTM4MTgtMTAuMjQ3OTE1OC0zMS4xMzQzNzItMTcuMzM3NDUyNy00OS4yODE5NzItMjAuMzg5MjA3di0yMS43MjI1MTIzaDkuOTY0OTEydi0xOS45Mjk4MjQ1OGgtNTkuNzg5NDczNXYxOS45Mjk4MjQ1OGg5Ljk2NDkxMjV2MjEuNzIzMDEwNWMtNTYuNTMzOTM3IDkuNTA1NTI5OC05OS42NDkxMjI5OCA1OC41NDk4Mzg2LTk5LjY0OTEyMjk4IDExNy43ODU3NjE2IDAgNjYuMDQxOTU4IDUzLjUzNjk4OTQ4IDExOS41Nzg5NDcgMTE5LjU3ODk0Njk4IDExOS41Nzg5NDcgNjYuMDQxOTU4IDAgMTE5LjU3ODk0OC01My41MzY5ODkgMTE5LjU3ODk0OC0xMTkuNTc4OTQ3IDAtMjUuODIxMDgxLTguMjY2ODkxLTQ5LjY2NjYxOC0yMi4xODE4OTUtNjkuMjExNzk2N2wxNS4zNDM0NzQtMTUuMzQzNDczN3oiIGZpbGw9IiNjZGQ3ZGUiLz48cGF0aCBkPSJtMTIyLjM4ODU1NCA0Mi43NDg5NzU0YzYuODA2MDM1IDAgMTMuNDM0Njk1LjcwMDUzMzQgMTkuOTI5ODI1IDEuNzkzMTg2di0yMS42MTI0LS4xMTA2MTA1aC0zOS44NTk2NDl2NC45ODI0NTYxaDE5LjkyOTgyNHoiIGZpbGw9IiNiOGM1Y2YiLz48cGF0aCBkPSJtMjA2Ljk0MzgyNSA3Ny43NzI2NTI2YzQuNzE4Mzg2IDQuNzE4Mzg2IDguOTYxNDQ1IDkuODkzMTY0OSAxMi44NDE3ODIgMTUuMzQzNDczN2wxNS4yNjQ3NTEtMTUuMjY0NzUwOS4wNzgyMjQtLjA3ODIyNDUtMjguMTg1MjU2LTI4LjE4NTI1NjItMy41MjM1OTMgMy41MjM1OTMgMTQuMDkyODc4IDE0LjA5MjM3OXoiIGZpbGw9IiNiOGM1Y2YiLz48cGF0aCBkPSJtMTIyLjEzMzk1MSAyNDIuMDQ3MjIxYy00My45NTcyMjEyIDAtNzkuNzE5Mjk4NC0zNS43NjIwNzctNzkuNzE5Mjk4NC03OS43MTkyOThzMzUuNzYyMDc3Mi03OS43MTkyOTg0IDc5LjcxOTI5ODQtNzkuNzE5Mjk4NGM0My45NTcyMjEgMCA3OS43MTkyOTggMzUuNzYyMDc3NCA3OS43MTkyOTggNzkuNzE5Mjk4NHMtMzUuNzYyMDc3IDc5LjcxOTI5OC03OS43MTkyOTggNzkuNzE5Mjk4eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Im0xOTEuODYzNDI1IDE2Mi4zMzgzODZjLS4wMTE5NTgtMzguMzYxNDI1LTMxLjIyNTA1My02OS41ODg5Njg1LTY5LjU4ODk2OS02OS41ODg5Njg1djY5LjU2NzU0MzV6IiBmaWxsPSIjZDVlMmYyIi8+PHBhdGggZD0ibTEyMi4yMDQyMDQgMTQ0LjIwMDI1M2MtOS44OTg2NDYgMC0xNy45MzY4NDMgOC4wMzgxOTYtMTcuOTM2ODQzIDE3LjkzNjg0MiAwIDkuOTIxMDY2IDguMDM4MTk3IDE3LjkzNjg0MiAxNy45MzY4NDMgMTcuOTM2ODQyIDEuNjIzMjg0IDAgMy4xOTA3NjQtLjIxNDI0NiA0LjY2NzU2NC0uNjA4ODU2bDU1LjExODQyMS0xNC4yMzg4NjNjMy4xOTA3NjUtLjgyMzEwMiAzLjE5MDc2NS01LjM1NTE0NCAwLTYuMTc4MjQ2bC01NS4xMTg0MjEtMTQuMjE2NDQyYy0xLjQ4ODI1OS0uNDA2MDctMy4wNDQyOC0uNjMxMjc3LTQuNjY3NTY0LS42MzEyNzd6IiBmaWxsPSIjZDY0MjMwIi8+PGNpcmNsZSBjeD0iMTIyLjQ3NDc1MSIgY3k9IjE2Mi4xMjUxMzciIGZpbGw9IiNhOTM1MmEiIHI9IjcuNDczNjg0Ii8+PC9nPjwvc3ZnPg=="
                                    />
                                  </div>
                                  <h2 class="box-status__header">
                                    Pourquoi dois-je attendre?
                                  </h2>
                                  <ul>
                                    <li class="box-status__text">
                                      Les paiements en cryptomonnaie doivent
                                      être confirmés par plusieurs ordinateurs
                                      sur le réseau, connu sous le nom de chaîne
                                      de blocs.
                                    </li>
                                    <li class="box-status__text">
                                      Les paiements sont généralement
                                      entièrement confirmés en quelques minutes.
                                      Ou jusqu’à une heure dans des cas extrêmes
                                    </li>
                                    <li class="box-status__text">
                                      Ne vous inquiétez pas, votre
                                      <strong class="box-status__text"
                                        >payment sera traité automatiquement
                                        même si vous fermez cette
                                        fenêtre</strong
                                      >.
                                    </li>
                                    <li
                                      class="box-status__text"
                                      style="display: none"
                                    >
                                      Vous pouvez suivre la progression de votre
                                      paiement à l’aide d’un explorateur de
                                      <a
                                        class="P-block-explorer"
                                        target="_blank"
                                        href="https://www.leolist.cc/user/giftcard#"
                                        >block<svg
                                          height="14"
                                          viewBox="0 0 14 14"
                                          width="14"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="m333.875 38c-.482562 0-.875-.392-.875-.875v-12.25c0-.483.392438-.875.875-.875h5.6875c.241938 0 .4375.1955625.4375.4375v.875c0 .2419375-.195562.4375-.4375.4375h-4.8125v10.5h10.5v-4.8125c0-.2419375.195562-.4375.4375-.4375h.875c.241938 0 .4375.1955625.4375.4375v5.6875c0 .483-.392438.875-.875.875zm12.690554-14c .240249 0 .434446.1933285.434446.4344461v4.3444615c0 .1746474-.10557.3340891-.268053.4005594-.053872.0230256-.11035.0338868-.166393.0338868-.112956 0-.224174-.0443135-.307154-.1272927l-1.557489-1.5579239-4.344027 4.3444615c-.169869.1698684-.444438.1698684-.615176 0l-.614307-.6143069c-.169868-.1698684-.169868-.4444384 0-.6143068l4.344462-4.3444615-1.557924-1.5579239c-.124252-.1246861-.161614-.3114979-.094275-.4735463.066905-.1629173.225912-.2680533.401428-.2680533z"
                                            fill="#b9b9b9"
                                            transform="translate(-333 -24)"
                                          ></path></svg
                                      ></a>
                                    </li>
                                    <li class="box-status__text">
                                      Si, pour une raison quelconque, la
                                      confirmation de votre paiement échoue,
                                      votre argent sera automatiquement renvoyé
                                      sur votre portemonnaie.
                                    </li>
                                  </ul>
                                  <div>
                                    <button
                                      class="P-btn P-btn-green center-block mt10"
                                    >
                                      J’ai compris!
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <!-- Payment confirmed step -->
                            </div>
                            <div
                              class="P-Payment__confirmed"
                              style="display: none"
                              data-text-overpay="Oups, vous avez trop payé:"
                            >
                              <div class="P-Content">
                                <div class="P-Content__icon"></div>
                                <h2 class="P-Payment__confirmed__title">
                                  Paiement traité!
                                </h2>
                                <!--                                <h2>-->
                                <!--</h2>-->
                                <p
                                  class="P-Payment__confirmed__desc"
                                  data-text-redirect="Vous serez redirigé dans :seconds secondes."
                                  data-text-credit="Mais ne vous inquiétez pas, nous avons crédité le montant excédentaire sur votre carte-cadeau Leolist."
                                ></p>
                                <div>
                                  <a
                                    href="https://www.leolist.cc/user/giftcard#"
                                    class="P-btn P-btn-green"
                                  >
                                    Rediriger maintenant
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--code end-->
                <div
                  class="modal bitcoin-alert-modal text-center fade"
                  id="bitcoin-alert"
                  tabindex="-1"
                  role="dialog"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <button
                        type="button"
                        class="close icon-times"
                        data-dismiss="modal"
                      ></button>
                      <div class="modal-body modal-lg">
                        <div class="mt20 mb30">
                          <h3 class="mn min_error P-Payment__confirmed__desc">
                            Due to the higher fees charged by the Bitcoin
                            system, we are not able to take payments less than
                            EUR&nbsp;€10. We have given you a quick option of
                            increasing your order to €10. The remainder will be
                            added to your LeoList Giftcard and will be used on
                            your next order automatically.
                          </h3>
                        </div>
                        <div class="row mb">
                          <a
                            href="https://www.leolist.cc/user/giftcard/add/amount/20"
                            id="bitcoin-add-link"
                            class="btn btn-black-outline active btn-block min_error P-btn-green"
                          >
                            <span class="text" style=""
                              >Continuer avec
                              <span class="bitcoin-alert-amount"
                                >your montant</span
                              >
                              + <span class="bitcoin-add-amount">$5</span> de la
                              carte-cadeau</span
                            >
                          </a>
                          <a
                            href="https://www.leolist.cc/user/giftcard#"
                            id="bitcoin-add-link"
                            class="btn btn-black-outline active btn-block no_error hide btn-toggle-bitcoin P-btn-green"
                          >
                            Continuer
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="gift-card__info-box">
                <h2 class="gift-card__info-box__heading">Payment Tutorials</h2>
                <p class="gift-card__info-box__paragraph">
                  Find out how to top up your LeoList Giftcard with Credit Card,
                  Cash ATM and Interac Email.
                </p>
                <a
                  href="https://www.leolist.cc/fr/tutorials/payments/litecoin"
                  class="gift-card__info-box__button"
                >
                  More Info
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal modal--fullscreen gift-card-transactions"
        role="dialog"
        aria-hidden="true"
        id="transaction-history-modal"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <div class="transactions" id="transactions-container">
                <div class="transactions__header">
                  Historique
                  <div
                    class="button transactions__close"
                    id="transactions-history-btn-close"
                  ></div>
                </div>

                <div class="transactions__body" id="transactions">
                  <div id="transactions-list">
                    <div class="transaction">
                      <div class="transaction__details">
                        <div
                          class="transaction__description js-transaction-description"
                        >
                          <a
                            href="https://www.leolist.cc/user/giftcard#"
                            class="order-link js-order-link"
                            data-order-id="37350324"
                            >Dépenses pour la commande 37350324</a
                          >
                        </div>
                        <div class="transaction__helper">
                          <time datetime="22/09/2024  14:40:01">
                            22/09/2024 14:40:01
                          </time>
                        </div>
                      </div>
                      <div class="transaction__amount">
                        -$15<span class="point">.77</span>
                      </div>
                    </div>
                    <div class="transaction">
                      <div class="transaction__details">
                        <div
                          class="transaction__description js-transaction-description"
                        >
                          <a
                            href="https://www.leolist.cc/user/giftcard#"
                            class="order-link js-order-link"
                            data-order-id="37132735"
                            >Dépenses pour la commande 37132735</a
                          >
                        </div>
                        <div class="transaction__helper">
                          <time datetime="13/09/2024  00:05:59">
                            13/09/2024 00:05:59
                          </time>
                        </div>
                      </div>
                      <div class="transaction__amount">
                        -$14<span class="point">.98</span>
                      </div>
                    </div>
                    <div class="transaction">
                      <div class="transaction__details">
                        <div
                          class="transaction__description js-transaction-description"
                        >
                          <a
                            href="https://www.leolist.cc/user/giftcard#"
                            class="order-link js-order-link"
                            data-order-id="37132722"
                            >Achat de cartes-cadeaux via alfa:ltc</a
                          >
                        </div>
                        <div class="transaction__helper">
                          <time datetime="13/09/2024  00:05:08">
                            13/09/2024 00:05:08
                          </time>
                        </div>
                      </div>
                      <div class="transaction__amount">
                        $26<span class="point">.53</span>
                      </div>
                    </div>
                    <div class="transaction">
                      <div class="transaction__details">
                        <div
                          class="transaction__description js-transaction-description"
                        >
                          <a
                            href="https://www.leolist.cc/user/giftcard#"
                            class="order-link js-order-link"
                            data-order-id="34250280"
                            >Dépenses pour la commande 34250280</a
                          >
                        </div>
                        <div class="transaction__helper">
                          <time datetime="02/05/2024  16:31:29">
                            02/05/2024 16:31:29
                          </time>
                        </div>
                      </div>
                      <div class="transaction__amount">
                        -$7<span class="point">.48</span>
                      </div>
                    </div>
                    <div class="transaction">
                      <div class="transaction__details">
                        <div
                          class="transaction__description js-transaction-description"
                        >
                          <a
                            href="https://www.leolist.cc/user/giftcard#"
                            class="order-link js-order-link"
                            data-order-id="33760701"
                            >Dépenses pour la commande 33760701</a
                          >
                        </div>
                        <div class="transaction__helper">
                          <time datetime="09/04/2024  11:00:21">
                            09/04/2024 11:00:21
                          </time>
                        </div>
                      </div>
                      <div class="transaction__amount">
                        -$12<span class="point">.38</span>
                      </div>
                    </div>
                  </div>

                  <div class="transactions__pagination paginator">
                    <i
                      id="giftcard-prev"
                      class="icon icon-chevron-left text-grey transactions__pagination-chevron"
                    >
                    </i>
                    <div>
                      <span id="transactions-current">1</span> de
                      <span id="transactions-total">28</span>
                    </div>
                    <i
                      id="giftcard-next"
                      class="icon icon-chevron-right transactions__pagination-chevron transactions__pagination-chevron--right enabled"
                    >
                    </i>
                  </div>
                </div>
              </div>

              <div
                class="transaction-details"
                id="transaction-details"
                role="dialog"
                aria-hidden="true"
              >
                <div class="transaction-details__header">
                  <button
                    class="transaction-details__button"
                    id="close-transaction-details"
                  >
                    <i
                      id="giftcard-prev"
                      class="icon icon-chevron-left text-grey"
                    >
                    </i>
                  </button>
                  <div>
                    Commande #<span id="transaction-details-order-id"></span>
                  </div>
                  <button
                    class="transaction-details__button"
                    data-dismiss="modal"
                  ></button>
                </div>
                <div
                  class="transaction-details__content"
                  data-initial-content="Chargement des détails..."
                  id="transaction-details-content"
                >
                  Chargement des détails...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal" role="dialog" aria-hidden="true" id="success-modal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <h2>Le solde de votre carte-cadeau est maintenant à jour !</h2>
              <h4>
                Votre carte-cadeau sera automatiquement utilisée lors de vos
                achats
              </h4>
              <div class="clearfix mt20 text-center">
                <a
                  href="https://www.leolist.cc/user/giftcard#"
                  class="btn btn-success btn-tall pull-left"
                  data-dismiss="modal"
                >
                  Merci
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <footer>
    <div class="copy">
      <ul>
        <li>
          <a
            href="https://www.leolist.cc/user/giftcard?language=en"
            hreflang="en"
            >In English</a
          >
        </li>
        <li>
          <a
            href="https://www.leolist.cc/user/giftcard?language=zh"
            hreflang="zh"
            style="font-family: Arial, Helvetica, sans-serif"
            >中文</a
          >
        </li>
        <li>
          <a href="https://www.leolist.cc/user/giftcard?mobile=0"
            ><i class="icon icon-monitor mr"></i>Site pour ordinateur de
            bureau</a
          >
        </li>
      </ul>
    </div>
    <ul>
      <li>
        <a href="https://www.leolist.cc/fr/policy"
          >Politique de confidentialité</a
        >
      </li>
      <li>
        <a href="https://www.leolist.cc/fr/refundpolicy" rel="nofollow"
          >Politique de remboursement</a
        >
      </li>
      <li>
        <a href="https://www.leolist.cc/fr/terms">Conditions générales</a>
      </li>
      <li><a href="https://www.leolist.cc/blog/fr/">Blogue</a></li>
      <li>
        <a href="https://www.leolist.cc/fr/tutorials/payments/litecoin"
          >Tutoriaux de paiement</a
        >
      </li>
      <li>
        <a href="https://www.leolist.cc/fr/contact#dmca"
          >Signaler : Violation des droits d’auteur (DMCA)</a
        >
      </li>
    </ul>
    <div class="copy">
      <ul>
        <li>© 2013-2024</li>
      </ul>
    </div>
  </footer>

  <div class="sliding-alert-rail" id="alert-rails" data-text-view="Voir"></div>

  <div class="sliding-nav" data-testid="burger-menu-content">
    <div class="sliding-nav__inner">
      <div class="sliding-nav__list">
        <a
          href="https://www.leolist.cc/fr/personals/female-escorts/greater-montreal"
          class="js-ad-list-link sliding-nav__list__item active"
        >
          Liste
        </a>
        <a
          href="https://www.leolist.cc/fr/directory/greater-montreal"
          class="js-directory-link sliding-nav__list__item"
        >
          Annuaire
        </a>
        <a
          href="https://www.leolist.cc/blog/fr/"
          class="sliding-nav__list__item"
        >
          Blogue
        </a>
        <a
          href="https://www.leolist.cc/fr/tutorials/payments/litecoin"
          class="sliding-nav__list__item"
        >
          Tutoriaux de paiement
        </a>
      </div>

      <div class="sliding-nav__buttons">
        <a
          class="sliding-nav__button sliding-nav__button--primary"
          href="https://www.leolist.cc/user/manage"
          ><i class="icon icon-ad-center"></i> Centre des annonces</a
        >
        <a
          class="sliding-nav__button post-new"
          data-testid="mobile-post-ad"
          href="https://www.leolist.cc/post/new"
          ><i class="icon icon-post-ad"></i> Publier Annonce</a
        >
      </div>
      <div class="sliding-nav__links">
        <a
          href="https://www.leolist.cc/user/giftcard"
          class="sliding-nav__link sliding-nav__link--gift-card gift-card"
        >
          <i class="icon-bm-giftcard"></i> Carte-cadeau
          <span class="gift-val js-giftcard-balance">CAD $2.42</span>
          <i class="icon-bm-giftcard-add"></i>
        </a>
        <a
          href="https://www.leolist.cc/benefits#companions"
          class="sliding-nav__link"
        >
          <i class="icon-bm-verified"></i>
          Vous faire vérifier
        </a>

        <a
          href="https://www.leolist.cc/user/favourites"
          class="sliding-nav__link"
        >
          <i class="icon-bm-favourites"></i>
          Favoris
        </a>

        <a
          href="https://www.leolist.cc/user/giftcard#"
          class="sliding-nav__link sliding-nav__link--language js-show-mobile-nav-modal"
          data-target="#change-language-modal"
        >
          <i class="icon-bm-language"></i>
          <span>Langue</span>
          <u>Français</u>
        </a>

        <a href="https://www.leolist.cc/fr/kb" class="sliding-nav__link">
          <i class="icon-bm-support"></i>
          Assistance
        </a>

        <a
          href="https://www.leolist.cc/user/security"
          class="sliding-nav__link"
        >
          <i class="icon-bm-settings"></i>
          <span>Paramètres</span>
        </a>

        <a
          href="https://www.leolist.cc/fr/user/login/logout"
          class="sliding-nav__link"
          id="logout-link"
        >
          <i class="icon-bm-logout"></i>
          Déconnexion (kenzaa212)
        </a>
      </div>
    </div>

    <div class="sliding-nav__modal" id="change-language-modal">
      <div class="sliding-nav__modal__body">
        <button type="button" class="sliding-nav__modal__close">
          <i class="icon-close"></i>
        </button>
        <ul class="sliding-nav__language">
          <li class="sliding-nav__language__item">
            <a
              href="https://www.leolist.cc/user/giftcard?language=en"
              hreflang="en"
              class="sliding-nav__language__link"
            >
              English
            </a>
          </li>
          <li class="sliding-nav__language__item">
            <a
              href="https://www.leolist.cc/user/giftcard?language=fr"
              hreflang="fr"
              class="sliding-nav__language__link sliding-nav__language__link--active"
            >
              Français
              <i class="icon-bm-active"></i>
            </a>
          </li>

          <li class="sliding-nav__language__item">
            <a
              href="https://www.leolist.cc/user/giftcard?language=zh"
              hreflang="zh"
              class="sliding-nav__language__link"
            >
              中文
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="sliding-nav__modal" id="posting-restricted-modal">
      <div class="sliding-nav__modal__body">
        <button type="button" class="sliding-nav__modal__close">
          <i class="icon-close"></i>
        </button>
        <div class="sliding-nav__modal__content">
          Votre compte est en cours de validation, vous devez attendre
          <span></span> pour publier à nouveau.
          <button type="button" class="sliding-nav__modal__button">
            J’ai compris !
          </button>
        </div>
      </div>
    </div>

    <div class="sliding-nav__modal" id="posting-restricted-modal-client">
      <div class="sliding-nav__modal__body">
        <button type="button" class="sliding-nav__modal__close">
          <i class="icon-close"></i>
        </button>
        <div class="sliding-nav__modal__content">
          Votre compte a été enregistré en tant que <b>client</b>. La fonction
          Publier une annonce est donc désactivée. <br /><br />
          <a href="https://www.leolist.cc/fr/user/login/logout"
            >Fermez la session</a
          >
          et créez un compte d’annonceur, ou
          <a href="https://www.leolist.cc/fr/kb#contact">contactez-nous</a>.
          <button type="button" class="sliding-nav__modal__button">
            J’ai compris !
          </button>
        </div>
      </div>
    </div>
  </div>

  <span
    id="contacts-view-captcha"
    data-sitekey="6Lf-oikUAAAAAOycMFTZ_wSrrLJhcLPW-s6Vq2yQ"
  ></span>

  <div
    id="title-text"
    data-text-in-region="dans %1$s"
    data-text-in-city-region="dans %1$s, %2$s"
    data-text-in-region-other="dans %1$s - autres régions "
  ></div>

  <!-- Yandex.Metrika counter -->
  <noscript>
    <div>
      <img
        src="https://mc.yandex.com/watch/82878265"
        style="position: absolute; left: -9999px"
        alt=""
      />
    </div>
  </noscript>
  <!-- /Yandex.Metrika counter -->

  <div
    id="refiner-widget-wrapper"
    style="
      width: 0px;
      height: 0px;
      max-height: 100%;
      display: block;
      position: fixed;
      background: transparent;
      backface-visibility: hidden;
      z-index: 100000;
      margin: 0px;
      padding: 0px;
      transition: all;
      inset: auto auto 0px 0px;
    "
  >
    <iframe
      id="refiner-widget-frame"
      name="User feedback survey"
      aria-hidden="true"
      scrolling="no"
      style="
        width: 100%;
        height: 100%;
        max-height: 100%;
        border: none;
        display: block;
        margin: 0px;
        padding: 0px;
        background: transparent;
        backface-visibility: hidden;
        transition: all;
      "
    ></iframe>
  </div>
</template>
