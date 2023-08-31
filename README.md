# Zod-to-Admin

Zod-to-Admin is a project that showcases the generation of forms and data tables directly from Zod schemas. Strongly Based on Shadcn-ui, Zod and react-hook-form. 

Right now it's still a proof-of-concept (POC).

## Project Stack

- [React](https://react.dev): The project is built using the React library, which provides a powerful framework for creating user interfaces.

- [Vitejs](https://vitejs.dev): Development tool that comes with a dev server and is used for modern web applications. Was preferred to Create React App. 

- [Tailwind CSS](https://tailwindcss.com): Tailwind CSS is used for components styling. It's a utility-first CSS framework that allows you to rapidly build custom designs.

- [Radix UI](https://www.radix-ui.com): Radix UI components used to enhance the user interface and interaction, with a strong focus on accessibility.

- [Shadcn UI](https://ui.shadcn.com): Collection of re-usable components that you can copy and paste into your apps. Use Radix-ui and TailwindCSS.

- [react-hook-form](https://www.react-hook-form.com): This library is used for handling forms in React. It simplifies form validation, management, and submission.

- [Zod](https://zod.dev): Zod is a TypeScript-first schema validation library. In this project, Zod schemas are used to define the structure and validation rules for form fields.

## Motivation

### Goal

The main goal of this project is to demonstrate how Zod schemas can be used to automatically generate forms and data tables in a React application. 

By defining the schema once, developers can easily create forms with appropriate validation and data presentation components without repetitive coding.

### Milestone of my actual work & mindset.

Starting a few months ago, I had to hardly focus on Form builders and Form mappers, alongside some daily utilization of Shadcn-ui.
You can find some relative work in my [Github Gists](https://gist.github.com/Thisisjuke).

This repository is like a milestone using all the tool that I used this last months, so feel free to start discussion or contribute if you have things to say!

## Getting Started

To run the project locally, follow these steps:

Clone the repository:
```bash
git clone git@github.com:Thisisjuke/zod-to-form.git
cd zod-to-admin
```

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

Open your browser and navigate to http://localhost:5173 to see the application in action.

## Usage

### TLDR: what does it do ?

The project provides a convenient way to generate forms and data tables from Zod schemas. You can define your schema following the format demonstrated in the provided code snippet. The userInformationSchema function creates a Zod schema for user information, and the userInformationSchemaFormatter function handles the API call when the user finishes editing.

For each field in the schema, if there is no "customType" specified, the project will automatically render a row in read mode and a corresponding form field in edit mode.

### Defining Schemas and Handling Form Submissions

In the Zod to Admin project, creating dynamic forms and data tables is made intuitive through the use of Zod schemas and custom formatting functions. Let's break down the process of defining schemas, handling form submissions, and integrating these components into your application.

### Schema Definition

A typical schema is structured as an object where each key represents a data field. The value associated with each key is a Zod schema that describes the validation and structure of that field. For instance, consider the userInformationSchema function:

```typescript jsx
export function userInformationSchema({ genders }: { [key: string]: SelectableFields }) {
const GENDERS_ENUM = toTypedZodEnum(genders);

    return ({
        'contact.firstName': z.string().optional().describe(JSON.stringify({
            label: 'Prénom',
        })),
        // ... Other fields ...
        'residenceAddress': z.object({
            address1: z.string(),
            // ... Other fields ...
        }).optional().describe(JSON.stringify({
            label: 'Adresse de résidence',
            customType: 'address',
        })),
    });
}
``` 
Here, userInformationSchema generates a schema for user information, with labels, optional fields, and special customType information for complex types like addresses. The toTypedZodEnum function is used to format enum data for Zod compatibility.

### Form Submission Handling

To handle form submissions, you need to define a corresponding formatting function. For instance, in the case of the userInformationSchema, you would have:

```typescript jsx
export function userInformationSchemaFormatter(userId: string, data: any) {
   return patchUserById({
      id: userId,
      data,
   });
}
```

In this function, you can perform any necessary formatting on the data before submitting it to the API. Once the data is ready, the patchUserById function is called to update the user's information.

### Integrating into Components

To integrate the schemas and form submission handling into your components, you can use the provided components such as AdminForm and ContainerCard.

```typescript jsx
<ContainerCard
    title={"Informations générales"}
    ctaElement={ 
      <EditButtonWithValidationPanel
         onSubmit={(data) => userInformationSchemaFormatter(user.id, data).then(() => refetch())}
      >
         <AdminForm schema={userInformationSchema(enums)} values={user} />
      </EditButtonWithValidationPanel>
   }
>
   <AdminForm
      schema={userInformationSchema(enums)}
      values={user}
      editable={false}
   />
</ContainerCard>;
```

The AdminForm component empowers you to effortlessly generate forms and data tables based on Zod schemas. It accepts the following props, ensuring type safety and enhanced developer experience:

- schema: `Record<string, Zod.Schema<object>>` (required)
  - Description: The Zod schema you defined earlier, which outlines the structure and validation rules for the form fields.
  - Type: An object with many Zod schema that validates and describes the expected shape of the form data.
        - Key of the object: `string` that represents the format awaited by the API for the value of this field (ex: `firstname`, `address.country`)

- editable: `boolean` (required)
  - Description: Determines whether the form is rendered in an editable mode (input fields) or as a read-only data table.
  - Type: A `boolean` value (`true` for editable input fields, `false` for read-only data presentation).
  - Default Value: `true`
  
- values: object (required)
  - Description: The default values populated in the form fields when it's initially rendered. Typically, these values are fetched from the API.
  - Type: An `Object` representing the initial values for the form fields, conforming to the structure outlined in the schema.

  - Here's an example of how you might use the AdminForm component:

```typescript jsx
<AdminForm
    schema={userInformationSchema(enums)}
    values={user}
    editable={true}
/>
```

In this example, the form is based on the userInformationSchema, the values are populated with the user data from the API, and the form is in editable mode, allowing users to input and modify data.

By leveraging these strongly-typed props, you can seamlessly integrate Zod schemas into your forms and data tables, ensuring correctness and enhancing your development workflow.

### Reusable Components

The project incorporates components from @/lib/primitives, sourced from shadcn-ui, for enhanced UI elements. 

You'll also find tailored components within @/modules/crud/components, like ContainerCard, AdminForm, and more. These components offer functionalities to manage data presentation, editing, and validation panels.

### User Flow

To utilize this approach in your application:

- Define a schema using the Zod schema builder.
- Create a corresponding formatting function for API interaction.
- Integrate the schema into your components using AdminForm and other tailored components as needed.
- This process empowers you to generate forms and data tables effortlessly based on Zod schemas, streamlining your application's data management and UI interactions.

## What's missing ? 

At the moment, it's a part of one of my app that I refactored to run in a Standalone Vitejs project. In reality, it has to be a pakcage where the website (react-router-dom + homepage + SEO + doc) is split from the actual components and logic.

- Publish components as a lib.
- Create a dedicated website.
- Refactor quite a bunch of Typescript.
- Rename things in a more ubiquitous way.
- Finish to polish stories.

## Next.js

This project has been originally built on [Next.js](https://nextjs.org) app and split from it to keep this repository as clear as possible. 

You should have no problem using this project in a NextJS context as long as you follow the Shadcn-ui documentation

## Contributing

Contributions to the project are welcome! If you find any issues or have ideas for improvements, feel free to submit pull requests or open issues on the GitHub repository.

## License

This project is licensed under the MIT License.

