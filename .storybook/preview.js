import '../src/bemit/main.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  // controls: {
  //   matchers: {
  //     color: /(background|color)$/i,
  //     date: /Date$/,
  //   },
  // },
  layout: 'centered',
}

export const argTypes = {
  darkmode: {
    table: {
      category: "Try in dark mode",
      type: { summary: "ligth | dark" },
      defaultValue: { summary: "light" }
    },
    control: 'radio',
    options: ["dark", "light"],
    description: "Component test in dark mode"
  },
  as: { table: { disable: true } },
  sx: { table: { disable: true } },
  ref: { table: { disable: true } },
  style: { table: { disable: true } },
  className: { table: { disable: true } }
}

export const args = {
  darkmode: 'light'
}