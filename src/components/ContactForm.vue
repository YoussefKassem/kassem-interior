<template>
  <div id="contact-section">
    <transition name="fade">
      <div v-if="showForm" id="contact-form">
        <div class="section-one">
          <h4>Contact Us</h4>
          <p v-if="hideFormText">We will do our best to answer your question as soon as possible</p>
          <div class="form-images">
            <div>
              <img src="../assets/team/claudia.png" />
              <span>Claudia</span>
            </div>
            <div>
              <img src="../assets/team/maarten.png" />
              <span>Maarten</span>
            </div>
            <div>
              <img src="../assets/team/youssef.png" />
              <span>Youssef</span>
            </div>
            <div>
              <img src="../assets/team/stan.png" />
              <span>Stan</span>
            </div>
            <div>
              <img src="../assets/team/sven.png" />
              <span>Sven</span>
            </div>
          </div>
          <svg
            @click="showForm = !showForm"
            class="close-button"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g id="Icons/Cross" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <path
                d="M6.20611652,6.20611652 C6.6617282,5.75050485 7.38154862,5.72013074 7.87238813,6.11499419 L7.97388348,6.20611652 L17.7928761,16.0251091 C18.2810314,16.5132645 18.2810314,17.3047207 17.7928761,17.7928761 C17.3372644,18.2484877 16.617444,18.2788618 16.1266045,17.8839984 L16.0251091,17.7928761 L6.20611652,7.97388348 C5.71796116,7.48572811 5.71796116,6.69427189 6.20611652,6.20611652 Z"
                id="Path-4"
                fill="#2F1C50"
              />
              <path
                d="M6.18308331,6.23921938 C6.63869498,5.7836077 7.3585154,5.75323359 7.84935491,6.14809704 L7.95085026,6.23921938 L17.7698428,16.058212 C18.2579982,16.5463673 18.2579982,17.3378236 17.7698428,17.8259789 C17.3142312,18.2815906 16.5944108,18.3119647 16.1035712,17.9171013 L16.0020759,17.8259789 L6.18308331,8.00698633 C5.69492794,7.51883096 5.69492794,6.72737474 6.18308331,6.23921938 Z"
                id="Path-4-Copy"
                fill="#2F1C50"
                transform="translate(11.976463, 12.032599) scale(-1, 1) translate(-11.976463, -12.032599) "
              />
            </g>
          </svg>
        </div>
        <!-- message="this email is invalid" type="is-danger"  -->
        <div class="section-two">
          <div class="input-box">
            <div class="input-box-one">
              <p class="body-2">Email</p>
              <span class="caption-2">required</span>
            </div>
            <b-field id="email-input">
              <b-input
                v-model.lazy="$v.formData.formEmail.$model"
                placeholder="ex:mailbox@amsterdam.nl"
                value
                maxlength="30"
              ></b-input>
            </b-field>
            <div v-if="errors">
              <p
                class="error-msg"
                message="this field is required"
                v-if="!$v.formData.formEmail.required"
              >this field is required</p>
              <p
                class="error-msg"
                message="this field is required"
                v-if="!$v.formData.formEmail.email"
              >this field should contain a valid email</p>
            </div>
          </div>

          <div class="input-box">
            <div class="input-box-one">
              <p class="body-2">Message</p>
              <span class="caption-2">required</span>
            </div>
            <b-field id="text-input">
              <b-input
                v-model.lazy="$v.formData.formMessage.$model"
                placeholder="type message"
                maxlength="100"
                type="textarea"
              ></b-input>
            </b-field>
            <div v-if="errors">
              <p
                class="error-msg"
                message="this field is required"
                v-if="!$v.formData.formMessage.required"
              >this field is required</p>
            </div>
            <div v-if="messageSent" id="contact-feedback">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g id="Icons/Check" stroke="none" stroke-width="1" fill fill-rule="evenodd">
                  <path
                    d="M18.3050227,6.62611652 C18.7931781,6.13796116 19.5846343,6.13796116 20.0727897,6.62611652 C20.5284013,7.0817282 20.5587755,7.80154862 20.163912,8.29238813 L20.0727897,8.39388348 L11.2351441,17.2315291 C10.5919276,17.8747456 9.57257605,17.9125818 8.88510839,17.3450379 L8.76027032,17.2315291 L4.91611652,13.3873753 C4.42796116,12.8992199 4.42796116,12.1077637 4.91611652,11.6196083 C5.3717282,11.1639967 6.09154862,11.1336225 6.58238813,11.528486 L6.68388348,11.6196083 L9.997,14.933 L18.3050227,6.62611652 Z"
                    id="Path-3"
                    fill="#37C88B"
                  />
                </g>
              </svg>
              <p class="mssg-sent">Message sent</p>
            </div>
            <div v-if="messageSent === false" id="contact-feedback">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g id="Icons/Cross" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <path
                    d="M6.20611652,6.20611652 C6.6617282,5.75050485 7.38154862,5.72013074 7.87238813,6.11499419 L7.97388348,6.20611652 L17.7928761,16.0251091 C18.2810314,16.5132645 18.2810314,17.3047207 17.7928761,17.7928761 C17.3372644,18.2484877 16.617444,18.2788618 16.1266045,17.8839984 L16.0251091,17.7928761 L6.20611652,7.97388348 C5.71796116,7.48572811 5.71796116,6.69427189 6.20611652,6.20611652 Z"
                    id="Path-4"
                    fill="#C83737"
                  />
                  <path
                    d="M6.18308331,6.23921938 C6.63869498,5.7836077 7.3585154,5.75323359 7.84935491,6.14809704 L7.95085026,6.23921938 L17.7698428,16.058212 C18.2579982,16.5463673 18.2579982,17.3378236 17.7698428,17.8259789 C17.3142312,18.2815906 16.5944108,18.3119647 16.1035712,17.9171013 L16.0020759,17.8259789 L6.18308331,8.00698633 C5.69492794,7.51883096 5.69492794,6.72737474 6.18308331,6.23921938 Z"
                    id="Path-4-Copy"
                    fill="#C83737"
                    transform="translate(11.976463, 12.032599) scale(-1, 1) translate(-11.976463, -12.032599) "
                  />
                </g>
              </svg>
              <p class="mssg-failed">Message was not sent. Please try again</p>
            </div>
          </div>
          <!-- <p>{{ formData }}</p> -->

          <!-- <b-button id="submit-btn" rounded @click="sendEmail()">SEND</b-button> -->
        </div>
      </div>
    </transition>

    <div>
      <button v-if="!showForm" @click="showForm = !showForm" class="contact-button">
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g id="Icons/Contact" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <path
              d="M2.9995452,6.671 L10.5051814,13.343716 L10.6432509,13.457067 C11.4917041,14.099389 12.6871932,14.0616053 13.4948186,13.343716 L13.4948186,13.343716 L20.9995452,6.672 L21,17.5 C21,18.3284271 20.3284271,19 19.5,19 L4.5,19 C3.67157288,19 3,18.3284271 3,17.5 L2.9995452,6.671 Z M20.1325452,5 L12,12.327 L3.8675452,5 L20.1325452,5 Z"
              id="Combined-Shape"
              fill="#fff"
            />
          </g>
        </svg>
      </button>
      <button v-else class="contact-button">
        <!-- :class="{ disabled :$v.formData.$invalid}" -->
        <svg
          @click="sendEmail()"
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g id="Icons/Send" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <path
              d="M5.74741617,4.39840078 L19.1617917,11.1056555 C19.6557692,11.3526468 19.8559912,11.9533206 19.609,12.4472981 C19.5122355,12.6408251 19.3553124,12.797747 19.1617846,12.8945099 L5.74742871,19.6016209 C5.25344922,19.8486082 4.65277698,19.6483814 4.40578971,19.1544019 C4.26117404,18.8651677 4.26534767,18.5238558 4.41699267,18.2382443 L6.889,13.5818261 L11.9506425,12 L6.889,10.4178261 L4.41696911,5.76176644 C4.15798056,5.27397204 4.34346435,4.66858484 4.83125875,4.40959629 C5.11687139,4.2579537 5.45818319,4.25378285 5.74741617,4.39840078 Z"
              id="Combined-Shape"
              fill="#fff"
            />
          </g>
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      errors: false,
      messageSent: null,
      showForm: false,
      hideFormText: true,
      labelPosition: "on-border",
      mailKey: process.env.VUE_APP_SENDGRID_KEY,
      formData: {
        formEmail: "",
        formMessage: ""
      },
      requestHeaders: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.VUE_APP_SLACK_API_TOKEN
      }
    };
  },
  validations: {
    formData: {
      formEmail: {
        required,
        email
      },
      formMessage: {
        required
      }
    }
  },
  http: {
    headers: {
      Authorization: "Bearer " + process.env.VUE_APP_SLACK_API_TOKEN,
      "Content-type": "application/json"
    }
  },
  methods: {
    sendEmail() {
      let endpoint = process.env.VUE_APP_NODE_API + "/email";
      if (!this.$v.formData.$invalid) {
        this.$http.post(endpoint, this.formData).then(
          response => {
            console.log(response);
          },
          error => {
            console.log(error);
          }
        );

        this.sendMessageToSlack();
        this.formData.formEmail = "";
        this.formData.formMessage = "";
        this.messageSent = true;
        this.errors = false;
        console.log("email sent");
      } else {
        this.messageSent = false;
        this.errors = this.$v.formData.$invalid;
        console.log("form is invalid");
      }
    },
    sendMessageToSlack() {
      let slackEndpoint = process.env.VUE_APP_SLACK_HOOK;
      let payload = {
        blocks: [
          {
            type: "context",
            elements: [
              {
                type: "mrkdwn",
                text: "*Email:*" + this.formData.formEmail
              }
            ]
          },
          {
            type: "divider"
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: this.formData.formMessage + ":ghost: :fire: :smiley_cat:"
            }
          }
        ]
      };
      let jsonPayload = JSON.stringify(payload);
      fetch(slackEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: jsonPayload
      })
        .then(response => response.json())
        .then(data => {
          console.log("Success:", data);
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }
  },
  mounted() {
    if (window.innerWidth <= 1023) {
      this.hideFormText = !this.hideFormText;
    }
  }
};
</script>
 
<style scoped>
h4 {
  font-size: 1.5rem !important; /*24 px  */
  font-weight: 400; /*regular */
  line-height: 2.0625rem; /*33 px  */
  color: var(--dark-blue-color);
  font-family: "Open Sans", sans-serif;
  padding-bottom: 0.5rem;
}

p {
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: var(--dark-blue-color);
}

.body-2 {
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.875rem;
  color: var(--dark-blue-color);
}

.caption-2 {
  font-size: 0.75rem;
  font-family: "Open Sans", sans-serif;
  color: var(--dark-blue-color);
  font-weight: 400;
  line-height: 1.125rem;
  opacity: 0.7;
  display: inline-block;
}

.section-one {
  background: var(--yellow-color);
  padding: 1rem;
  width: 100%;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  box-shadow: 0px 1px 10px 0px rgba(47, 28, 80, 0.2);
}

.section-one p {
  padding-bottom: 1rem;
}

.section-two {
  padding: 1rem;
  background: var(--white-color);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  box-shadow: 0px 1px 10px 0px rgba(47, 28, 80, 0.2);
}

#contact-section {
  position: absolute;
  z-index: 20;
  bottom: 8rem;
  right: 8rem;
  display: flex;
}

.form-images {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

.form-images div {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.form-images div span {
  font-size: 0.75rem;
}

.form-images img {
  border-radius: 50%;
  height: 50px;
  width: 50px;
  background: transparent;
  margin-bottom: 0.5rem;
}

.contact-button:hover {
  background: #d35f7f !important;
}

.close-button {
  position: absolute;
  right: 5%;
  top: 5%;
  cursor: pointer;
}

.input-box {
  display: flex;
  flex-direction: column;
}

.input-box-one {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.5rem;
}

.email-input {
  width: 100% !important;
}

.error-msg {
  color: var(--error-color);
  position: relative;
  bottom: 1rem;
  left: 0.3rem;
  font-size: 0.75rem;
  font-weight: 400;
}

.mssg-sent {
  color: var(--success-color);
}

.mssg-failed {
  color: var(--error-color);
}

#contact-feedback {
  display: flex;
  align-items: center;
}

.disabled {
  cursor: not-allowed;
  opacity: 0.7;
}

/deep/ .field:not(:last-child) {
  margin-bottom: 0;
}

/deep/ .is-danger.input {
  border-color: var(--error-color);
}

/deep/ .has-text-danger {
  color: var(--error-color) !important;
}

/deep/ .help.is-danger {
  color: var(--error-color);
}

/deep/ .input:active {
  box-shadow: none;
}

/deep/ .input:focus {
  border-color: var(--dark-blue-color);
  box-shadow: none;
}

/deep/ .textarea:focus {
  border-color: var(--dark-blue-color);
  box-shadow: none;
}

/deep/ .text-input {
  box-shadow: none;
}

#submit-btn {
  margin-top: 30px;
  background: var(--yellow-color);
  color: var(--second-purple-color);
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  font-weight: 600; /*semi- bold */
  line-height: 22px;
}

@keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}

#contact-form {
  position: fixed;
  height: 23rem;
  width: 21rem;
  right: 5rem;
  bottom: 20.5rem;
  z-index: 20;
}

.contact-button {
  height: 60px;
  width: 60px;
  background: var(--pink-color);
  border: none;
  border-radius: 50%;
  position: fixed;
  outline: none;
  right: 5rem;
  bottom: 5%;
  box-shadow: 0px 1px 10px 0px rgba(47, 28, 80, 0.5);
  animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.fade-enter-active {
  animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
    transform: translateY(1000px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@media only screen and (max-width: 1200px) {
  .contact-button {
    right: 5rem;
    bottom: 5%;
  }
  #contact-form{
    right: 5rem;
  }
}

@media only screen and (max-width: 1023px) {
  .contact-button {
    position: fixed;
    left: 80%;
    bottom: 4%;
  }

  h4{
  padding-bottom: 1rem;

  }

  #contact-form {
    margin: auto;
    left: 0;
    right: 0;
    bottom: 40%;
    z-index: 20;
  }
}
</style>
