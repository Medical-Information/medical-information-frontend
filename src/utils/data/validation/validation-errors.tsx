export const validationErrors = Object.freeze({
  user: {
    email: {
      acceptableSymbols:
        'Поле может содержать только прописные и строчные буквы (A-z), цифры, точку, дефис, @, нижнее подчеркивание',
      unacceptableLength: 'Недопустимая длина',
      duplicate: 'Пользователь с таким email уже зарегистрирован',
      required: 'Поле обязательно к заполнению',
    },

    password: {
      unacceptableSymbols: 'Поле не должно содержать символы % ; . * ^ ) _ @ !',
      unacceptableLength: 'Пароль должен содержать 6–20 символов',
      wrong:
        'Неверный пароль. Повторите попытку или нажмите на ссылку «Забыли пароль?», чтобы восстановить его',
      cofirmation: 'Пароли должны совпадать',
      required: 'Поле обязательно к заполнению',
    },

    name: {
      unacceptableSymbols: 'Поле не должно содержать символы % ; . * ^ ) _ @ !',
      unacceptableLength: 'Имя может содержать 1-50 символов',
      required: 'Поле обязательно к заполнению',
    },

    surname: {
      unacceptableSymbols: 'Поле не должно содержать символы % ; . * ^ ) _ @ !',
      unacceptableLength: 'Имя может содержать 1-50 символов',
      required: 'Поле обязательно к заполнению',
    },
  },
});
