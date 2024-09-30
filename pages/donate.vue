<template>
  <div class="background-container">
    <div class="closeButton">
      <ButtonComponent buttonName="Close" navigate="/" />
    </div>
    <div class="donateContent">
      <div class="title">
        <h1>Donate please,</h1>
        <p>we need your support like never before</p>
      </div>
      <div class="payment">
        <p>Single payment</p>
        <p>Card number : <b>4731 2196 1647 4239 </b></p>
        <p>
          Card number :
          <a href="https://pay.fondy.eu/s/EdDlsY6XgRHV"
            ><b>pay.fondy.eu/s/EdDlsY6XgRHV</b></a
          >
        </p>
      </div>
      <div class="subscribe">
        <div
          style="
            display: flex;
            flex-direction: row;
            gap: 10px;
            align-items: center;
          "
        >
          <p>Subscribe and be our regular patron</p>
          <img
            style="width: 100px; height: 50px"
            src="https://uploads-ssl.webflow.com/62640d8cb86529032eccb9d1/62717f49023fd7bcf525eaec_kindpng_351793.png"
          />
        </div>
        <div style="display: flex; flex-direction: row; gap: 20px">
          <ButtonComponent
            buttonName="Fondy"
            navigate="https://pay.fondy.eu/merchants/a95a93dbcde498dc4c904ec89f3bc9d61e9e98af/ec8e43cd8fd7ded5115c1ffa5f30e20a/index.html?button=ea62b31b7e7469d1c4ffda9b0c77e194d14436a4"
          />
          <ButtonComponent
            buttonName="Patreon"
            navigate="https://www.patreon.com/join/isa_co_ua"
          />
        </div>
      </div>
      <div class="crypto">
        <p><b>BTC</b> 1JzRCN5copEPkE1ncuT7z5eTbPZBxvPYb3</p>
        <p><b>ETH</b> 0x7b8916382387d2c34b4bcd38daf7071a1bb30dba</p>
      </div>
      <div class="paypal">
        <p>PayPal</p>
        <p><b>‍paypal@isa.co.ua</b></p>
      </div>
        <div class="bankDetail" v-for="(detail, index) in bankDetails" :key="index">
          <p>SWIFT in {{ detail.currency }}</p>
          <div>
            <p><b>Beneficiary:</b></p>
            <p>
              Account (IBAN): <b>{{ detail.beneficiary.account.iban }}</b>
            </p>
            <p>{{ detail.beneficiary.name }}</p>
            <p>Address: {{ detail.beneficiary.address }}</p>
            <p><b>Correspondent Bank:</b></p>
            <p>
              BIC (SWIFT) CODE:
              {{ detail.beneficiary.correspondentBank.bic }}
            </p>
            <p>
              Bank Name: {{ detail.beneficiary.correspondentBank.name }}
            </p>
            <p>
              Account: {{ detail.beneficiary.correspondentBank.account }}
            </p>
            <p><b>Beneficiary's Bank:</b></p>
            <p v-if="detail.beneficiary.beneficiaryBank">
              BIC (SWIFT) CODE:
              {{ detail.beneficiary.beneficiaryBank.bic }}
            </p>
            <p v-if="detail.beneficiary.beneficiaryBank">
              Bank Name: {{ detail.beneficiary.beneficiaryBank.name }}
            </p>
            <p v-if="detail.beneficiary.beneficiaryBank">
              Bank Address:
              {{ detail.beneficiary.beneficiaryBank.address }}
            </p>
          </div>
          <hr />
        </div>
    </div>
  </div>
  <FooterComponent/>
</template>

<script lang="ts" setup>
import ButtonComponent from "@/component/ButtonComponent.vue";
import FooterComponent from "@/component/FooterComponent.vue";

// Array dengan detail bank yang telah dibuat sebelumnya
const bankDetails = [
  {
    currency: "Euro (EUR)",
    beneficiary: {
      name: "CO “CF “INNOVATIVE SOLUTIONS FOR ANIMALS”",
      account: {
        iban: "UA143123560000026007300972110",
      },
      address:
        "Ukraine, Kiev, Sagaidachnogo Petra str, 25-B, floor 6, office 603",
      correspondentBank: {
        bic: "DEUTDEFF",
        name: "DEUTSCHE BANK AG, Frankfurt am Main",
        account: "947057610",
      },
      beneficiaryBank: {
        bic: "COSBUAUKZAK",
        name: "JCS STATE SAVINGS BANK OF UKRAINE",
        address: "KIEV, UKRAINE",
      },
    },
  },
  {
    currency: "US dollars (USD)",
    beneficiary: {
      name: "CO “CF “INNOVATIVE SOLUTIONS FOR ANIMALS”",
      account: {
        iban: "UA143123560000026007300972110",
      },
      address:
        "Ukraine, Kiev, Sagaidachnogo Petra str, 25-B, floor 6, office 603",
      correspondentBank: {
        bic: "BKTRUS33",
        name: "Deutsche Bank Trust Company Americas, New York, USA",
        account: "04-095-334",
      },
      beneficiaryBank: {
        bic: "COSBUAUKZAK",
        name: "JCS STATE SAVINGS BANK OF UKRAINE UZHHOROD BRANCH",
        address: "KIEV, UKRAINE",
      },
    },
  },
];
</script>

<style>
.background-container {
  font-family: sans-serif;
  background-color: transparent;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8)
    ),
    url("https://uploads-ssl.webflow.com/62640d8cb86529032eccb9d1/62645696be0723edc0b15145_pattern-small.svg");
  background-size: 50px;
  background-repeat: repeat;
  height: auto;
  padding-bottom:5rem
}
.closeButton {
  padding-top: 5em;
  padding-left: 5em; /* Posisi dari kiri */
}
.donateContent {
  margin: 1em 5em;
  border: 3px solid black;
  background-color: #ff97d0;
}
.donateContent .title,
.payment,
.subscribe,
.crypto,
.paypal,
.bankDetail {
  border-bottom: 3px solid black;
  padding: 1em;
}
.title h1 {
  margin: 0;
}
P {
  margin: 10px;
  font-size: x-large;
  font-weight: 500;
}
.payment a {
  color: black;
  text-decoration: none;
}

.payment a:hover {
  text-decoration: underline;
}
</style>
