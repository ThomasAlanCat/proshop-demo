# install bootstrap library in the frontend

> npm i react-bootstrap
> npm i bootstrap

# PAYPAL

https://developer.paypal.com/home/

sandbox

1.  Testing Tools -> Sandbox Accounts
    'buisness@example' is the account that gets the money
    'personal@example' is the account that I use to pay with

2.  Apps and credentials
    create app -> get 'CLIENT ID'
    .env -> PAYPAL_CLIENT_ID=AQl0KhpfPZ.....

3.  server.js
    ...
    app.get("/api/config/paypal", (req, res) =>
    res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
    );
    ...

4.  Inside the frontend file download package:

    > npm i @paypal/react-paypal-js

5.  wrap our app in the provider
    index.js
    import { PayPalScriptProvider } from "@paypal/react-paypal-js";
    <Provider store={store}>
    <PayPalScriptProvider deferLoading={true}>
    <RouterProvider router={router} />
    </PayPalScriptProvider>
    </Provider>

6.  ordersApiSlice
    getPaypalClientId: builder.query({
    query: => ({
    url: "/api/config/paypal",
    }),
    keepUnusedDataFor: 5,
    }),

7.uploadRoutes
upload.single('image')
is a middlewarre that allows to upload ONLY one file with default name 'image'


8. HELMET
>npm install react-helmet-async --legacy-peer-deps