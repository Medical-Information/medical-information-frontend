import type { Meta, StoryObj } from '@storybook/react';
import FilterTab from './filter-tab';

// for visualization in Storybook
const iconDentistry = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
  >
    <path
      d="M9.69807 4.45825C9.05418 4.22291 8.44427 4 7.5 4C5.5 4 4.5 6 4.5 8.5C4.5 10.0985 4.90885 11.0838 5.33441 12.1093C5.5744 12.6877 5.81971 13.2788 6 14C6.149 14.596 6.2092 15.4584 6.27321 16.3755C6.42401 18.536 6.596 21 8 21C8.89898 21 9.29286 19.5857 9.72652 18.0286C10.2576 16.1214 10.8485 14 12.5 14C14.1515 14 14.7423 16.1214 15.2735 18.0286C15.7071 19.5857 16.101 21 17 21C18.404 21 18.576 18.536 18.7268 16.3755C18.7908 15.4584 18.851 14.596 19 14C19.1803 13.2788 19.4256 12.6877 19.6656 12.1093C20.0912 11.0838 20.5 10.0985 20.5 8.5C20.5 6 19.5 4 17.5 4C16.5557 4 15.9458 4.22291 15.3019 4.45825C14.582 4.72136 13.8197 5 12.5 5C11.1803 5 10.418 4.72136 9.69807 4.45825Z"
      stroke="#838091"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const meta: Meta<typeof FilterTab> = {
  title: 'uikit/Checkboxes/FilterTab',
  component: FilterTab,
  tags: ['autodocs'],
  argTypes: {
    extraClass: {
      description: 'Дополнительные стили',
      type: 'string',
      defaultValue: undefined,
    },

    id: {
      description: 'Идентификатор',
      type: 'string',
    },

    label: {
      description: 'Название и значение кнопки',
      type: 'string',
    },

    icon: {
      description: 'Иконка',
      icon: 'string',
    },

    isChecked: {
      description: 'Автоматический выбор',
      type: 'boolean',
      options: [true, false],
      defaultValue: false,
      control: {
        type: 'radio',
      },
    },

    onChange: {
      description: 'Добавить фильтр либо убрать',
      type: 'function',
    },
  },
};

export default meta;
type TStory = StoryObj<typeof meta>;

export const Default: TStory = {
  args: {
    id: 'template',
    label: 'Стоматология',
    icon: iconDentistry,
    isChecked: false,
  },
};
