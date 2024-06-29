<script setup lang="ts">
import { defineProps, defineEmits, ref, computed } from 'vue';

const props = defineProps<{
  submitText: string;
  defaultName?: string;
  defaultDescr?: string;
  disableIfDefaults?: boolean;
  resetOnSubmit?: boolean;
  disableAll?: boolean;
}>();

const emit = defineEmits<{
  (e: 'submit', value: Omit<IUser, 'id'>): void;
}>();

const username = ref(props.defaultName || '');
const descr = ref(props.defaultDescr || '');

const isSubmitBtnDisabled = computed(() => {
  return (
    [username.value, descr.value].some((el) => el.length === 0) ||
    (props.disableIfDefaults &&
      username.value === props.defaultName &&
      descr.value === props.defaultDescr) ||
    props.disableAll
  );
});

function submitForm() {
  const user: Omit<IUser, 'id'> = {
    name: username.value,
    descr: descr.value,
  };

  emit('submit', user);

  if (props.resetOnSubmit) {
    username.value = '';
    descr.value = '';
  }
}
</script>

<template>
  <form class="user-form" @submit.prevent="submitForm">
    <div class="user-form__row">
      <label class="user-form__label">
        <span class="user-form__text">Имя пользователя:</span>
        <input
          :disabled="disableAll"
          v-model.trim="username"
          class="user-form__input"
          type="text"
          formControlName="name"
          data-testid="username-input"
        />
      </label>
    </div>

    <div class="user-form__row">
      <label class="user-form__label">
        <span class="user-form__text">Описание:</span>
        <textarea
          :disabled="disableAll"
          v-model.trim="descr"
          class="user-form__input user-form__input_textarea"
          formControlName="descr"
          data-testid="descr-input"
        ></textarea>
      </label>
    </div>

    <div class="user-form__row user-form__bottom-actions">
      <button
        :disabled="isSubmitBtnDisabled"
        class="user-form__submit-btn"
        type="submit"
        data-testid="submit-btn"
      >
        {{ props.submitText }}
      </button>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.user-form {
  max-width: 540px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 15px;

  &__label {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
  }

  &__text {
    font-size: 18px;
  }

  &__input {
    border-radius: 4px;
    border: 1px solid var(--accent-color-1);
    padding: 5px 10px;
    font-size: 18px;

    &_textarea {
      height: 180px;
      resize: none;
    }
  }

  &__bottom-actions {
    display: flex;
    justify-content: flex-end;
  }

  &__submit-btn {
    padding: 10px 25px;
    background: var(--accent-color-1);
    color: #fff;
    border-radius: 4px;
    text-decoration: none;
    cursor: pointer;
    border: none;

    &:hover {
      opacity: 0.7;
    }

    &:active {
      opacity: 0.4;
    }

    &:disabled {
      pointer-events: none;
      opacity: 0.5;
    }
  }
}
</style>
