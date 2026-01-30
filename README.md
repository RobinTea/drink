# DrinkShop - Angular Drink Shop Web Application

A modern, responsive drink shop web application built with Angular 19+ using standalone components, plain CSS, and localStorage for data persistence.

## 🚀 Features

- **Home Page** with hero section and parallax scrolling effect
- **Product Grid** displaying 8 pre-populated drinks in a 4x2 layout
- **Search Page** with live filtering by name, type, and color
- **Product Detail Pages** with quantity selection and add to cart functionality
- **Shopping Cart** with item management, quantity adjustment, and checkout
- **User Authentication** with login/register pages and localStorage persistence
- **Protected Routes** using Angular guards
- **Responsive Design** optimized for mobile and desktop
- **Modern UI** with smooth animations and hover effects

## 🛠️ Tech Stack

- **Framework**: Angular 19 (Standalone Components)
- **Styling**: Plain CSS (no frameworks)
- **Storage**: localStorage for users, cart, and session management
- **Routing**: Angular Router with guards
- **Forms**: Reactive Forms for authentication

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

The application will be available at `http://localhost:4200`

## 🎯 Default Demo Account

- **Email**: demo@drinkshop.com
- **Password**: demo123

## 📱 Pages

- `/` - Home page with hero and product grid
- `/search` - Search drinks by name, type, or color
- `/product/:id` - Product detail page
- `/login` - User login
- `/register` - User registration
- `/account` - User account settings (protected)
- `/cart` - Shopping cart

## 🍹 Pre-populated Drinks

1. **CoolDrink1** - Premium Edition, Black, $18 (2% discount)
2. **OceanWave** - Classic, Blue, $12
3. **FireBurst** - Limited Edition, Red, $25 (5% discount)
4. **NatureFresh** - Standard, Green, $10
5. **GrapeBlast** - Premium Edition, Purple, $20 (3% discount)
6. **SunriseMix** - Classic, Orange, $14 (1% discount)
7. **BerryDream** - Limited Edition, Pink, $22 (4% discount)
8. **LemonZest** - Standard, Yellow, $9

## 🏗️ Project Structure

```
src/
├── app/
│   ├── components/        # Reusable components
│   │   ├── header/
│   │   ├── hero/
│   │   ├── drink-card/
│   │   └── side-menu/
│   ├── pages/            # Page components
│   │   ├── home/
│   │   ├── search/
│   │   ├── product-detail/
│   │   ├── login/
│   │   ├── register/
│   │   ├── account/
│   │   └── cart/
│   ├── services/         # Business logic services
│   │   ├── auth.service.ts
│   │   ├── cart.service.ts
│   │   └── drink.service.ts
│   ├── models/           # TypeScript interfaces
│   │   ├── drink.model.ts
│   │   ├── user.model.ts
│   │   └── cart-item.model.ts
│   ├── guards/           # Route guards
│   │   └── auth.guard.ts
│   └── app.routes.ts     # Route configuration
└── styles.css            # Global styles
```

## ✨ Key Features

### Parallax Hero Section
The hero section features a parallax scrolling effect where the drink image follows the scroll until the section is out of view.

### Live Search
Real-time search filtering across drink names, types, and colors without page reload.

### Cart Management
- Add items to cart
- Adjust quantities
- Remove items
- See real-time total with discount calculations
- Cart badge showing item count

### User Authentication
- Register new users
- Login with email or username
- Session persistence with localStorage
- Protected routes requiring authentication

### Responsive Design
Mobile-first responsive design that adapts to all screen sizes.

## 📸 Screenshots

### Home Page
![Homepage](https://github.com/user-attachments/assets/e3120dc0-940e-4ef2-a2e4-04894e0b8e98)

### Search Page
![Search](https://github.com/user-attachments/assets/642af8e8-d697-4909-8e5b-ea1de2fa548e)

### Product Detail
![Product Detail](https://github.com/user-attachments/assets/fd4e694c-b187-44b9-9404-a26aff6bfa4b)

### Shopping Cart
![Cart](https://github.com/user-attachments/assets/954e28f4-247c-4f9f-9bae-30b1ab022985)

## 📄 License

MIT

## 👨‍💻 Development

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.2.

For more information on using the Angular CLI, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
