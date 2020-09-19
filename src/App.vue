<template>
  <form @submit.prevent="submitHandler()">
  <h1>Создание клиента</h1>
    <div class="input-box">
      <label for="last_name">Фамилия*</label>
      <input
          id="last_name"
          type="text"
          v-model="lastName"
          placeholder="Иванов"
          @blur="$v.lastName.$touch()"
      >
      <div class="error-message" v-if="$v.lastName.$invalid">
        Введите Фамилию клиента
      </div>
    </div>

    <div class="input-box">
      <label for="first_name">Имя*</label>
      <input
          id="first_name"
          type="text"
          v-model="firstName"
          placeholder="Иван"
          @blur="$v.firstName.$touch()"
      >
      <div class="error-message" v-if="$v.firstName.$invalid">
        Введите Имя клиента
      </div>
    </div>

    <div class="input-box">
      <label for="second_name">Отчество</label>
      <input
          id="second_name"
          type="text"
          placeholder="Иванович"
      >
    </div>

    <div class="input-box">
      <label for="birth_date">Дата рождения*</label>
      <input
          id="birth_date"
          type="text"
          v-model="birthDate"
          placeholder="ДД.ММ.ГГГГ"
          @blur="$v.birthDate.$touch()"
      >

      <div class="error-message" v-if="$v.birthDate.$error">
        Дата рождения должна быть в формате ДД.ММ.ГГГГ
      </div>
    </div>

    <div class="input-box">
      <label for="passport_data">Серия и номер паспорта</label>
      <input
          id="passport_data"
          type="text"
          v-model="passportData"
          placeholder="1234 567890"
      >

      <div class="error-message" v-if="$v.passportData.$invalid">
        Серия и номер паспорта должны быть в формате 1234 567890
      </div>
    </div>

    <div class="input-box">
      <label for="tel_number">Номер телефона</label>
      <input
          id="tel_number"
          type="tel"
          v-model="telNumber"
          placeholder="7 ___ ___ __ __"
      >
      <div class="error-message" v-if="$v.telNumber.$invalid">
        Телефон в формате 7 ХХХ ХХХ ХХ ХХ
      </div>
    </div>

    <div class="input-radio">
      <label>Пол:</label>
      <input type="radio" name="sex" value="male">
      <label>Мужской</label>
      <input type="radio" name="sex" value="female">
      <label>Женский</label>
      <input type="radio" name="sex" value="other">
      <label>Другое</label>
    </div>

    <div class="input-inline input-box">
      <label>Группа клиентов*</label>
      <select id="select_group">
        <option value="value1">VIP</option>
        <option value="value2">Проблемные</option>
        <option value="value3">ОМС</option>
      </select>
    </div>

    <button :disabled="$v.$invalid">
      Создать
    </button>
  </form>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import moment from "moment";

export default {
  data() {
    return {
      lastName: "",
      firstName: "",
      passportData: null,
      birthDate: null,
      telNumber: null,
    };
  },

  validations: {
    lastName: {
      required,
    },
    firstName: {
      required,
    },
    passportData: {
      required,
      validFormat: val => /^\d{4} \d{6}$/.test(val),
    },
    birthDate: {
      required,
      validDate: val => moment(val, "DD.MM.YYYY", true).isValid(),
    },
    telNumber: {
      minLength: minLength(11),
      validFormat: val => /7[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}/.test(val),
    }
  },

  methods: {
    submitHandler() {
      alert('Форма отправлена');
    },
  },
};
</script>
