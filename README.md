# Azerbaijani Messages for React-Admin

Azerbaijani messages for [react-admin](https://github.com/marmelab/react-admin), the frontend framework for building admin applications on top of REST/GraphQL services.

![react-admin demo](http://static.marmelab.com/react-admin.gif)

## Installation

```sh
npm install --save ra-language-azerbaijani
```

## Usage

```js
import azerbaijaniMessages from 'ra-language-azerbaijani';

const messages = {
    'az': azerbaijaniMessages,
};

const i18nProvider = locale => messages[locale];

<Admin locale="az" i18nProvider={i18nProvider}>
  ...
</Admin>
```

## License

This translation is licensed under the MIT License.
