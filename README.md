<h1 align="center">
  CommerceX - TAL Apparel
</h1>
<p align="center">
 Storefront for E-Commerce with NextJS</p>

## Introduction

This project is developed to manage the frontend and, ci/cd pipeline, and document for the Storefront of E-Commerce. This project is used Containerization for deployment to support development and deploy any where.

## Local Development

### Prerequisites

- Install NodeJS >= 17 with [nvm](https://github.com/nvm-sh/nvm): `nvm install 17` or `nvm install`
- To use this one, you should have a Medusa server running locally on port 9000.
  - Check out [backend repostory](https://gitlab.techvify.dev/g1/tal-apparel/commercex-backend/) for more details to setup the Medusa server at local.
### Overview

The Storefront is built with:

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Typescript](https://www.typescriptlang.org/)

Features include:

- Full ecommerce support:
  - Product Detail Page
  - Product Overview Page
  - Search with Algolia
  - Product Collections
  - Cart
  - Checkout with Payment Gateway
  - User Accounts
  - Order Details
- Full Next.js 14 support:
  - App Router
  - Next fetching/caching
  - Server Components
  - Server Actions
  - Streaming
  - Static Pre-Rendering

### Setting up the environment variables

Navigate into your projects directory and get your environment variables ready:

```shell
cd nextjs-starter-medusa/
mv .env.template .env.local
```

### Install dependencies

Use Yarn to install all dependencies.

```shell
yarn
```

### Start developing

You are now ready to start up your project.

```shell
yarn dev
```

### Open the code and start customizing

Your site is now running at http://localhost:8000!

## App structure

For the new version, the main folder structure remains unchanged. The contents have changed quite a bit though.

```
.
└── src
    ├── app
    ├── lib
    ├── modules
    ├── styles
    ├── types
    └── middleware.ts

```

### `/app` directory

The app folder contains all Next.js App Router pages and layouts, and takes care of the routing.

```
.
└── [countryCode]
    ├── (checkout)
        └── checkout
    └── (main)
        ├── account
        │   ├── addresses
        │   └── orders
        │       └── details
        │           └── [id]
        ├── cart
        ├── categories
        │   └── [...category]
        ├── collections
        │   └── [handle]
        ├── order
        │   └── confirmed
        │       └── [id]
        ├── products
        │   └── [handle]
        ├── results
        │   └── [query]
        ├── search
        └── store
```

The app router folder structure represents the routes of the Starter. In this case, the structure is as follows:

- The root directory is represented by the `[countryCode]` folder. This indicates a dynamic route based on the country code. The this will be populated by the countries you set up in your Medusa server. The param is then used to fetch region specific prices, languages, etc.
- Within the root directory, there two Route Groups: `(checkout)` and `(main)`. This is done because the checkout flow uses a different layout.  All other parts of the app share the same layout and are in subdirectories of the `(main)` group. Route Groups do not affect the url.
- Each of these subdirectories may have further subdirectories. For instance, the `account` directory has `addresses` and `orders` subdirectories. The `orders` directory further has a `details` subdirectory, which itself has a dynamic `[id]` subdirectory.
- This nested structure allows for specific routing to various pages within the application. For example, a URL like `/account/orders/details/123` would correspond to the `account > orders > details > [id]` path in the router structure, with `123` being the dynamic `[id]`.

This structure enables efficient routing and organization of different parts of the Starter.

### `/lib` **directory**

The lib directory contains all utilities like the Medusa JS client functions, util functions, config and constants. 

The most important file here is `/lib/data/index.ts`. This file defines various functions for interacting with the Medusa API, using the JS client. The functions cover a range of actions related to shopping carts, orders, shipping, authentication, customer management, regions, products, collections, and categories. It also includes utility functions for handling headers and errors, as well as some functions for sorting and transforming product data.

These functions are used in different Server Actions.

### `/modules` directory

This is where all the components, templates and Server Actions are, grouped by section. Some subdirectories have an `actions.ts` file. These files contain all Server Actions relevant to that section of the app.

### `/styles` directory

`global.css` imports Tailwind classes and defines a couple of global CSS classes. Tailwind and Medusa UI classes are used for styling throughout the app.

### `/types` directory

Contains global TypeScript type defintions.

### `middleware.ts`

Next.js Middleware, which is basically an Edge function that runs before (almost) every request. In our case it enforces a `countryCode` in the url. So when a user visits any url on your storefront without a `countryCode` param, it will redirect the user to the url for the most relevant region.

The region will be decided as follows:

- When deployed on Vercel and you’re active in the user’s current country, it will use the country code from the `x-vercel-ip-country` header.
- Else, if you have defined a `NEXT_PUBLIC_DEFAULT_REGION` environment variable, it will redirect to that.
- Else, it will redirect the user to the first region it finds on your Medusa server.

If you want to use the `countryCode` param in your code, there’s two ways to do that:

1. On the server in any `page.tsx` - the `countryCode` is in the `params` object:
    
    ```tsx
    export default async function Page({
      params: { countryCode },
    }: {
      params: { countryCode: string }
    }) {
      const region = await getRegion(countryCode)
    
    // rest of code
    ```
    
2. From client components, with the `useParam` hook:
    
    ```tsx
    import { useParams } from "next/navigation"
    
    const Component = () => {
    	const { countryCode } = useParams()
    	
    	// rest of code
    ```
    

The middleware also sets a cookie based on the onboarding status of a user. This is related to the Medusa Admin onboarding flow, and may be safely removed in your production storefront.