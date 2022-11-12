# MERN Stacks Shoes Shop

Welcome to my React and Node to build a fully-functional e-commerce website exactly like shopify. This e-commerce website using MERN stack (MongoDB, ExpressJS, React and Node.JS). This project was built about 1 month and it is inspired on a top rated ecommerce developer.
</br>
</br>

![Image](https://res.cloudinary.com/dfaejacdn/image/upload/v1668135812/danz-shop-image/danz-header_ykoqof.png)

# Details Image Preview

<details>
  <summary>Shop Client Preview</summary>

### Header

![Image](https://res.cloudinary.com/dfaejacdn/image/upload/v1668135812/danz-shop-image/danz-header_ykoqof.png)

### Shop Page

![Image](https://res.cloudinary.com/dfaejacdn/image/upload/v1668139461/danz-shop-image/danz-shop_qfxpik.png)

### Single Product

![Image](https://res.cloudinary.com/dfaejacdn/image/upload/v1668139505/danz-shop-image/danz-singleProduct_hxi3jt.png)

### Shopping Cart

![Image](https://res.cloudinary.com/dfaejacdn/image/upload/v1668139395/danz-shop-image/danz-cart_xpca3x.png)

#### Place Order

![Image](https://res.cloudinary.com/dfaejacdn/image/upload/v1668139295/danz-shop-image/danz-placeOrder_kccnqc.png)

### Payment

![Image](https://res.cloudinary.com/dfaejacdn/image/upload/v1668139551/danz-shop-image/danz-thanhtoan_oy0k7y.png)

### Contact

![Image](https://res.cloudinary.com/dfaejacdn/image/upload/v1668139185/danz-shop-image/Screenshot_2022-11-11_at_10.59.23_yetvbo.png)

</details>
<details>
  <summary>Shop Admin Dashboard Preview</summary>

### Home

![Image](https://res.cloudinary.com/dfaejacdn/image/upload/v1668138837/danz-shop-image/dAdmin-home_ekjtuw.png)

### Product

![Image](https://res.cloudinary.com/dfaejacdn/image/upload/v1668138834/danz-shop-image/dAdmin-products_ji2tox.png)

### Add Product

![Image](https://res.cloudinary.com/dfaejacdn/image/upload/v1668138834/danz-shop-image/dAdmin-addProduct_pfsvb3.png)

### Category

![Image](https://res.cloudinary.com/dfaejacdn/image/upload/v1668138834/danz-shop-image/dAdmin-category_owtm4q.png)

### All Order

![Image](https://res.cloudinary.com/dfaejacdn/image/upload/v1668138834/danz-shop-image/dAdmin-allOrder_tzdp8c.png)

### All User

![Image](https://res.cloudinary.com/dfaejacdn/image/upload/v1668138838/danz-shop-image/dAdmin-allUser_fhsjev.png)

</details>

### Live Preview

👉 Vercel Client : https://shop-client-danz.vercel.app

👉 Vercel Admin Dashboard: http://admin-ecommerce-mern.vercel.app

👉 Heroku Backend : https://shop-server-danz.herokuapp.com

#### Clone repo & Run locally

#### Client

```
$ git clone git@github.com:ledidan/client-ecommerce-MERN.git
$ cd client-ecommerce-MERN
$ npm install
$ npm start
```

#### Admin

```
$ git clone git@github.com:ledidan/admin-ecommerce-MERN.git
$ cd admin-ecommerce-MERN
$ npm install
$ npm start
```

#### Backend

```
$ git clone git@github.com:ledidan/server-ecommere-MERN.git
$ cd server-ecommere-MERN
$ npm install
$ npm run dev
```

## Important Guide

### About `.env` file in client and admin folder

- You need to change your Server URL, where you deploy at

```
REACT_APP_SERVER_URL = YOUR_SERVER_URL
```

### About `.env` file in NodeJS Backend

\*\* Install Cors before starting server or you must use proxy localhost to connect with server in `package.json`

👉 [Install Cors](https://www.npmjs.com/package/cors)

```
$ npm i cors

```

1. In Server.js

```
const cors = require("cors");
app.use(cors());
```

2.  `.env` file

```
PORT = YOUR_PORT
NODE_ENV = development
MONGO_URL = YOUR_MONGO_URL_DATABASE
JWT_SECRET = TEST_JWT_PASSWORD
PAYPAL_CLIENT_ID = YOUR_PAYPAL_CLIENT_ID

EMAIL_SERVICE = YOUR_EMAIL_SERVICE
EMAIL_USERNAME = YOUR_EMAIL_USERNAME
EMAIL_PASSWORD = YOUR_EMAIL_PASSWORD
SMTP_HOST= YOUR_SMTP_HOST
SMTP_TYPE = SMTP
SMTP_PORT= YOUR_PORT
EMAIL_SENDER = YOUR_EMAIL_SENDER
```

### Specific Guide

👉 [How to create Paypal Sanbox App & Get Client ID with Secret Key](https://www.youtube.com/watch?v=7s4lxhO4lwM)

👉 [How to you Nodemailer to recieve email](https://www.youtube.com/watch?v=nF9g1825mwk)

👉 [How to deploy ReactJS App on Vercel](https://www.youtube.com/watch?v=lAJ6LyvW_cw&t=65s)

👉 [How to deploy NodeJS or ReactJS on Heroku](https://www.youtube.com/watch?v=r2S89Hm1Uq0)

👉 [How to set up & connect MongoDB with NodeJS Server](https://www.youtube.com/watch?v=bhiEJW5poHU)

# About Project

### Project Techs Used

- HTML5 and CSS3: Semantic Elements, CSS Grid, Flexbox
- CSS Library: Chakra UI, Bootstrap 5, Styled Components
- React: Components, Props, Events, Hooks, Router, Axios, js-cookie,
- Context API: Store, Reducers, Actions, Redux Thunk
- Node & Express: Rest API, Body Parser, Auth JWT, Bcryptjs, Concurrently, Cors, Eexpress-async-handler, Nodemailer
- MongoDB: Mongoose, Aggregation
- Development: ESLint, Babel, Git, Github,
- Deployment: Heroku, Vercel
