import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom';

import UserForm from './user-form.vue';

import { describe, test, expect } from 'vitest';

describe('<UserForm />', () => {
  test('Показываются значения по умолчанию', () => {
    render(UserForm, {
      props: {
        defaultName: 'DefaultName',
        defaultDescr: 'DefaultDescr',
      },
    });

    const nameInput = screen.getByTestId('username-input') as HTMLInputElement;
    const descrInput = screen.getByTestId('descr-input') as HTMLTextAreaElement;

    expect(nameInput.value).toBe('DefaultName');
    expect(descrInput.value).toBe('DefaultDescr');
  });

  test('Сбрасываются значения при resetOnSubmit', async () => {
    render(UserForm, {
      props: {
        defaultName: 'DefaultName',
        defaultDescr: 'DefaultDescr',
        resetOnSubmit: true,
      },
    });

    const nameInput = screen.getByTestId('username-input') as HTMLInputElement;
    const descrInput = screen.getByTestId('descr-input') as HTMLTextAreaElement;

    expect(nameInput.value).toBe('DefaultName');
    expect(descrInput.value).toBe('DefaultDescr');

    const submitBtn = screen.getByTestId('submit-btn') as HTMLButtonElement;

    await userEvent.click(submitBtn);

    expect(nameInput.value).toBe('');
    expect(descrInput.value).toBe('');
  });

  test('Всё дизейблится при disableAll', () => {
    render(UserForm, {
      props: {
        disableAll: true,
      },
    });

    const nameInput = screen.getByTestId('username-input') as HTMLInputElement;
    const descrInput = screen.getByTestId('descr-input') as HTMLTextAreaElement;
    const submitBtn = screen.getByTestId('submit-btn') as HTMLButtonElement;

    expect(nameInput).toHaveAttribute('disabled');
    expect(descrInput).toHaveAttribute('disabled');
    expect(submitBtn).toHaveAttribute('disabled');
  });
});
