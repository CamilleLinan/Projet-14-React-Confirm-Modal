# react-modal-confirmation component

The `react-modal-confirmation` is a reusable confirmation modal component built with React and Ant Design. It allows you to display a customizable confirmation dialog with multiple buttons and callback actions.

## Installation
To use the `react-modal-confirmation`, first install the required dependencies:
```bash
npm install react
```

Install this package:
```bash
npm install @camlin/react-modal-confirmation
```

## Usage
Here’s how you can use the `react-modal-confirmation` in your React project:

```javascript
import React, { useState } from 'react';
import { ConfirmModal } from '@camlin/react-confirm-modal';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleConfirm = () => {
    setModalOpen(false);
    console.log("Confirmed!");
  };

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>Show Modal</button>
      
      <ConfirmModal
        open={modalOpen}
        title="Confirmation Required"
        content="Are you sure you want to proceed?"
        footerButtons={[
          { text: 'OK', type: 'primary', onClick: () => {} },
          { text: 'Cancel', type: 'default', onClick: () => setModalOpen(false) },
        ]}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default App;
```

## Props
The `react-modal-confirmation` component accepts the following props:


| Prop          | Type                                  | Required | Default   | Description                                                                 |
| ------------- | ------------------------------------- | -------- | --------- | --------------------------------------------------------------------------- |
| `visible`     | `boolean`                             | **Yes**  | `false`   | Controls the visibility of the modal.                                       |
| `title`       | `ReactNode`                              | No       | `""`      | The title of the modal dialog.                                               |
| `content`     | `ReactNode`                              | No       | `""`      | The content of the modal body.                                               |
| `footerButtons` | `ButtonProps[]`                       | No       | `[]`      | Array of button configurations to display in the modal footer.              |
| `onConfirm`   | `() => void`                          | No  | `null`    | Callback function triggered when the modal is confirmed or closed.          |

### ButtonProps
The `footerButtons` prop accepts an array of objects with the following properties:

| Prop     | Type                                                 | Required | Default   | Description                                                          |
| -------- | ---------------------------------------------------- | -------- | --------- | -------------------------------------------------------------------- |
| `text`   | `string`                                             | **Yes**  | `""`      | The label of the button.                                              |
| `type`   | `'primary' \| 'default' \| 'dashed' \| 'link' \| 'text'` | No       | `'default'` | The Ant Design button type.                                          |
| `onClick`| `() => void`                                         | No  | `null`    | Function to be executed when the button is clicked.                  |

## Example

Here’s an example of passing different button configurations to the `footerButtons` prop:

```javascript
<ConfirmModal
  visible={modalVisible}
  title="Delete Confirmation"
  content="Are you sure you want to delete this item?"
  footerButtons={[
    { text: 'Yes', type: 'primary', onClick: handleConfirm },
    { text: 'No', type: 'default', onClick: () => setModalVisible(false) },
    { text: 'More Info', type: 'link', onClick: () => alert('More information') },
  ]}
  onConfirm={handleConfirm}
/>
```

In this example:
- The modal displays three buttons: "Yes", "No", and "More Info".
- Each button has its own action, such as closing the modal or triggering a confirmation.

## Styling
You can customize the styles of the modal and buttons by overriding the default Ant Design styles. Make sure to include your own SCSS or CSS file if you wish to customize the look and feel.

```scss
// Example of overriding Ant Design styles in your SCSS file
.ant-modal {
  background-color: #f5f5f5;
}

.ant-btn-primary {
  background-color: #ff4d4f;
}
```

## Environnement
- **Node.js Version** : `v21.5.0`
- **Éditeur de texte** : [Visual Studio Code](https://code.visualstudio.com/)

## License
This project is licensed under the MIT License.
