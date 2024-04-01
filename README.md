
# Prueba técnica de Cavela (By Héctor Matías)

In this project the challenge of quote selection is solved. The main challenge was to simplify the process of choosing quotes, an aspect that was often overwhelming for users due to the number and lack of perfect matches between the available options. This website is an interactive solution using React, featuring a simplified shortlist of quotes and a detailed view for deeper selection. Implemented mockups that allow users to easily view preconfigured options and customize their choices using a detailed modal. To offer a smoother experience, I added subtle animations. The result is deployed in Netlify: https://cavela-test-hector-matias.netlify.app/



## 🚀 Deployment
⚠️ I have decided to use 🧅 [bun](https://bun.sh/) instead of npm since You can replace npm run with bun run to save over 150ms milliseconds every time you run a command. If you don't have it installed you can download it here ([link](https://bun.sh/docs/installation))

To run the application, follow these steps:
- Clone this repository to your local machine.
- Make sure you have Node.js installed on your system.
- Open a terminal and navigate to the root folder of the project.
- Run the following command to install the project dependencies

```bash
  bun install
```

- Once the installation is complete, run the following command to start the application

```bash
  bun run dev
```

- Open your web browser and visit the following URL: http://localhost:5173/
- Now you will be able to see the application working


## 🔨 Build

To build the application we only have to execute the following bun command


```bash
   bun run build
```

A dist folder will be generated with the project ready to publish
## 🧪 Running Tests

I have written the tests using vitest as the main engine along with the testing library and you can run them as follows:

```bash
  bun run test
```


## 📚 Tech Stack

- React
- Redux 
- TailwindCSS
- framer-motion
- vite
- vitest



## 🤔 Assumptions that were made regarding the problem specification.

🟩 🟨 🟥 In this project I have assumed that the colors of the cards vary depending on the rating of a quote, a good one being that with a minimum of 4.5 points, an average one being that with a minimum of 4 points and anything lower than this will be bad.

🎨 Although the test mentioned the use of CSS, when using tailwindcss all the styles are defined in the classes but, as you can see, these can be migrated to CSS with styled components.
This would be an example


**Tailwindcss**
```html
    <h3 className="text-2xl leading-6 font-medium text-gray-900">Create Quote</h3>
```

**Styled Components**
```ts
    import styled from 'styled-components';

    const StyledH3 = styled.h3`
        font-size: 1.5rem;
        line-height: 1.5rem;
        font-weight: 500;
        color: #1f2937;
    `;

    <StyledH3>Create Quote</StyledH3>
```