<template>
  <form class="p-8 w-5/6 bg-white md:p-16 relative shadow-md md:w-4/5 lg:w-3/5 xl:w-2/5 text-gray-700" id="contact-form" @submit.prevent="sendEmail" ref="form">
    <h4 v-if="this.$route.name !== 'contact'" class="pb-2 text-xl md:text-2xl lg:text-3xl text-gray-600">Contact Us</h4>
    <svg
      v-if="this.$route.name !== 'contact'"
      width="62px"
      height="3px"
      class="mb-4"
      viewBox="0 0 62 3"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="IE_mobile_SEM"
          transform="translate(-62.000000, -1120.000000)"
          fill="#4BBFE1"
        >
          <g id="SEO" transform="translate(16.000000, 1030.000000)">
            <g
              id="Group-2"
              transform="translate(14.000000, 14.000000)"
            >
              <polygon
                id="Rectangle"
                points="32 76 73.5535038 76 94 76 94 79 32 79"
              ></polygon>
            </g>
          </g>
        </g>
      </g>
    </svg>
    <!-- company name -->
    <div class="field mb-2 w-full">
      <label class="uppercase text-xs" for="">Company Name*</label><br>
      <input
        id="companyName"
        type="text"
        placeholder="Eg. Google"
        class="input px-2 py-2 my-2 rounded-sm border-gray-300 border lg:border-transparent lg:focus:outline-none focus:ring-2 focus:ring-ie-dark-blue lg:focus:border-transparent shadow w-full" 
        name="companyName"
        v-model="form.companyName"
        required
      />
      <p v-if="!this.companyNameValid" class="error-message">Your company name is required</p>
    </div>
    <!-- name -->
    <div class="field mb-2">
      <label class="uppercase text-xs pb-4" for="">Name*</label><br>
      <div class="flex flex-direction-column md:flex-direction-row">
        <input
          id="firstName"
          type="text"
          placeholder="Eg. Anne"
          class="input px-2 py-2 my-2 input py-2 my-2 rounded-sm border-gray-300 border lg:border-transparent focus:outline-none focus:ring-2 focus:ring-ie-dark-blue focus:border-transparent shadow w-full md:w-2/4 mr-2" 
          name="firstName"
          v-model="form.firstName"
          required
        />
        <input
          id="lastName"
          type="text"
          placeholder="Eg. Smith"
          class="input px-2 py-2 my-2 input py-2 my-2 rounded-sm border-gray-300 border lg:border-transparent focus:outline-none focus:ring-2 focus:ring-ie-dark-blue focus:border-transparent shadow w-full md:w-2/4" 
          name="lastName"
          v-model="form.lastName"
          required
        />
      </div>
      <p v-if="!this.firstNameValid && !this.lastNameValid" class="error-message">Your first and last name is required</p>
    </div>
    <!-- title -->
    <div class="field mb-2 w-full">
      <label class="uppercase text-xs" for="">Title*</label><br>
      <input
        id="title"
        type="text"
        placeholder="Eg. Brand Manager"
        class="input px-2 py-2 my-2 input py-2 my-2 rounded-sm border-gray-300 border lg:border-transparent focus:outline-none focus:ring-2 focus:ring-ie-dark-blue focus:border-transparent shadow w-full" 
        name="title"
        v-model="form.title"
        required
      />
      <p v-if="!this.titleValid" class="error-message">Your title is required</p>
    </div>
    <!-- Email -->
    <div class="field mb-2">
      <label class="uppercase text-xs" for="">Email*</label><br>
      <input
        id="email"
        type="email"
        placeholder="Eg. email123@gmail.com"
        class="input px-2 py-2 my-2 input py-2 my-2 rounded-sm border-gray-300 border lg:border-transparent focus:outline-none focus:ring-2 focus:ring-ie-dark-blue focus:border-transparent shadow w-full" 
        name="email"
        v-model="form.email"
        required
      />
      <p v-if="!this.emailValid" class="error-message">Your email is required</p>
    </div>
    <!-- Phone -->
    <div class="field mb-2">
      <label class="uppercase text-xs" for="">Phone</label><br>
      <input
        type="text"
        placeholder="Eg. 800-000-0000"
        class="input px-2 py-2 my-2 input py-2 my-2 rounded-sm border-gray-300 border lg:border-transparent focus:outline-none focus:ring-2 focus:ring-ie-dark-blue focus:border-transparent shadow w-full" 
        name="phone"
        v-model.number="form.phone"
      />
    </div>
    <!-- Preferred contact -->
    <div class="field mb-2 w-full">
      <label class="label uppercase text-xs">Preferred method of contact</label><br>
      <div class="flex flex-direction-row w-full mt-2">
        <label class="container uppercase text-xs pt-1">Phone
          <input
            type="checkbox"
            class="input shadow"
            checked="checked"
            name="prefPhone"
            v-model="form.prefPhone"
          />
          <span class="checkmark"></span>
        </label>
        <label class="container uppercase text-xs pt-1">Email
          <input 
            type="checkbox"
            class="input shadow"
            checked="checked"
            name="prefEmail"
            v-model="form.prefEmail"
          />
          <span class="checkmark"></span>
        </label>
      </div>
    </div>
    <!-- Industry -->
    <div class="field mb-2 w-full">
      <label class="uppercase text-xs" for="">Industry*</label><br>
      <input
        id="industry"
        type="text"
        placeholder="Eg. Healthcare"
        class="input px-2 py-2 my-2 input py-2 my-2 rounded-sm border-gray-300 border lg:border-transparent focus:outline-none focus:ring-2 focus:ring-ie-dark-blue focus:border-transparent shadow w-full" 
        name="industry"
        v-model="form.industry"
        required
      />
      <p v-if="!this.industryValid" class="error-message">Your industry is required</p>
    </div>
    <div class="field mb-2 w-full">
    <!-- Description -->
      <label class="uppercase text-xs" for="">Short description of what you're looking for</label><br>
      <textarea
        name="description"
        rows="4"
        cols="50"
        v-model="form.description"
        placeholder="Eg. Looking to build out an application for a medical device..."
        class="input px-2 py-2 my-2 rounded-sm border-gray-300 border lg:border-transparent focus:outline-none focus:ring-2 focus:ring-ie-dark-blue focus:border-transparent shadow w-full" 
      />
    </div>

    <!-- submit button -->
    <div class="field flex justify-center">
      <button
        type="submit"
        class="button p-3 rounded-lg text-white uppercase w-100 my-4 text-lg bg-ie-blue hover:bg-ie-dark-blue focus:outline-none focus:ring-2 focus:ring-ie-dark-blue focus:ring-opacity-50"
        :disabled="!formIsValid"
      >
        Submit
      </button>
    </div>
    <p id="submitMessage" class="hidden text-center text-gray-600">Thank you! We will be in touch with you shortly.</p>
  </form>
</template>

<script>
// import { required, email } from '@vuelidate/validators'
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from 'emailjs-com';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// export function validName(name) {
//   let validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
//   if (validNamePattern.test(name)){
//     return true;
//   }
//   return false;
// }

export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        companyName: '',
        firstName: '',
        lastName: '',
        title: '',
        email: '',
        phone: '',
        prefPhone: '',
        prefEmail: '',
        industry: '',
        description: '',
      },
    }
  },
  // watch: {
  //   email(value){
  //     this.email = value;
  //     this.validateEmail(value);
  //   },
  // },
  // validations: {
    // form: {
    //   companyName: { required },
    //   firstName: { 
    //     required, name_validation: {
    //       $validator: validName,
    //       $message: 'Invalid Name. Valid name only contain letters, dashes (-) and spaces'
    //     } 
    //   },
    //   lastName: { 
    //     required, name_validation: {
    //       $validator: validName,
    //       $message: 'Invalid Name. Valid name only contain letters, dashes (-) and spaces'
    //     } 
    //   },
    //   email: { required, email },
    //   password: { required },
    //   confirmPassword: { required }
    // },
  // },
  computed: {
  },
  // watch: {
  //   email(value){
  //     // binding this to the data value in the email input
  //     this.email = value;
  //     this.validateEmail(value);
  //   },
  //   password(value){
  //     this.password = value;
  //     this.validatePassword(value);
  //   }
  // },
  methods: {
    companyNameValid() {
      return !!this.form.companyName && this.inputTouched;
    },
    firstNameValid() {
      return !!this.form.firstName;
    },
    lastNameValid() {
      return !!this.form.lastName;
    },
    emailValid() {
      return !!this.form.email;
    },
    titleValid() {
      return !!this.form.title;
    },
    industryValid() {
      return !!this.form.industry;
    },
    formIsValid() {
      return this.companyNameValid &&
        this.firstNameValid &&
        this.lastNameValid &&
        this.emailValid &&
        this.titleValid &&
        this.industryValid
    },
    // inputTouched() {
    //   const input = document.querySelector('input')
    //     input.addEventListener('input', evt => {
    //       console.log('heyyyy');
    //   })
    // },
    sendEmail() {
        if (this.formIsValid) {
          emailjs.sendForm(
            'service_4abj34h',
            'template_hmv49er',
            this.$refs.form,
            'user_XypTG85C21ZDwxNlgJIlj'
          )
          .then((result) => {
              console.log('SUCCESS!', result.text);
              let thanksMessage = document.getElementById("submitMessage");
              thanksMessage.classList.remove('hidden');
              this.form.companyName = '';
              this.form.firstName = '';
              this.form.lastName = '';
              this.form.title = '';
              this.form.email = '';
              this.form.phone = '';
              this.form.prefPhone = '';
              this.form.prefEmail = '';
              this.form.industry = '';
              this.form.description = '';
          }, (error) => {
              console.log('FAILED...', error.text);
          });
        }
      }
    }
  };
</script>

<style scoped>
h4 {
  font-family: "Inter SemiBold";
}

.error-message {
  color: #C03D37
}

@media screen and (max-width: 1100px) {
  input[type="text"],
  input[type="email"],
  textarea { 
      border: 1px solid #7E818B;
  }
}

  .container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 23px;
  width: 23px;
  background-color: #eee;
}

.container:hover input ~ .checkmark {
  background-color: #ccc;
}

.container input:checked ~ .checkmark {
  background-color: #4BBFE1
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: block;
}

.container .checkmark:after {
  left: 8px;
  top: 4px;
  width: 7px;
  height: 13px;
  border: 1px solid white;
  border-width: 0 3px 3px 0;
  border-radius: 10%;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.error {
  border: 1px solid #E34040;
  transition: all .2s;
}

.disabled {
  opacity: .7;
  pointer-events: none;
}
</style>