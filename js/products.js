const products = [
  // ===== MEN =====
  { // Men Hoodies
    id: 1001,
    name: "VYRA Essential Hoodie",
    brand: "VYRA",
    section: "Men",
    category: "Hoodies",
    price: 699.99,
    salePrice: 549.99,
    stock: 10,
    image: "images/men-hoodie.jpg",
    description: "Premium cotton hoodie with relaxed fit.",
    sizes: {
    S: 2,
    M: 4,
    L: 3,
    XL: 1,
    XXL: 0
  }
  },
  {
     id: 1002,
    name: "VYRA Plain Sweater",
    brand: "VYRA",
    section: "Men",
    category: "Hoodies",
    price: 800.00,
    salePrice: 798.99,
    stock: 10,
    image: "images/men-sweater.jpg",
    description: "Plain cotton sweater.",
    sizes: {
    S: 2,
    M: 4,
    L: 3,
    XL: 1,
    XXL: 0
  }
  },
  {
     id: 1003,
    name: "VYRA Grey Zipper",
    brand: "VYRA",
    section: "Men",
    category: "Hoodies",
    price: 500.00,
    salePrice: null,
    stock: 10,
    image: "images/men-zipper.jpg",
    description: "Comfy zipper jacket.",
    sizes: {
    S: 2,
    M: 4,
    L: 3,
    XL: 1,
    XXL: 0
  }
  },
  {
     id: 1004,
    name: "VYRA Graphic Hoodie",
    brand: "VYRA",
    section: "Men",
    category: "Hoodies",
    price: 699.99,
    salePrice: 456.00,
    stock: 10,
    image: "images/men-hoodietwo.jpg",
    description: "Styled graphic desgined hoodie.",
    sizes: {
    S: 2,
    M: 4,
    L: 3,
    XL: 1,
    XXL: 0
  }
  },
  {
     id: 1005,
    name: "VYRA Quarter Zip",
    brand: "VYRA",
    section: "Men",
    category: "Hoodies",
    price: 999.99,
    salePrice: 899.99,
    stock: 10,
    image: "images/men-quarter.jpg",
    description: "Modern quarter zipper.",
    sizes: {
    S: 2,
    M: 4,
    L: 3,
    XL: 1,
    XXL: 0
  }
  },
  {
     id: 1006,
    name: "VYRA Fleece Zip Up",
    brand: "VYRA",
    section: "Men",
    category: "Hoodies",
    price: 399.99,
    salePrice: null,
    stock: 10,
    image: "images/men-fleece.jpg",
    description: "Fury fleeced zip up.",
    sizes: {
    S: 2,
    M: 4,
    L: 3,
    XL: 1,
    XXL: 0
  }
  },
  {
     id: 1007,
    name: "VYRA Grey Hoodie",
    brand: "VYRA",
    section: "Men",
    category: "Hoodies",
    price: 789.99,
    salePrice: 549.99,
    stock: 10,
    image: "images/men-greyhoodie.jpg",
    description: "Natural grey hoodie.",
    sizes: {
    S: 2,
    M: 4,
    L: 3,
    XL: 1,
    XXL: 0
  }
  },
  {
     id: 1008,
    name: "VYRA Comfy Sweater",
    brand: "VYRA",
    section: "Men",
    category: "Hoodies",
    price: 699.99,
    salePrice: 454.99,
    stock: 10,
    image: "images/men-comfy.jpg",
    description: "Comfy casual fit.",
    sizes: {
    S: 2,
    M: 4,
    L: 3,
    XL: 1,
    XXL: 0
  }
  },
  {
     id: 1009,
    name: "VYRA Mens Jacket",
    brand: "VYRA",
    section: "Men",
    category: "Hoodies",
    price: 700.00,
    salePrice: null,
    stock: 10,
    image: "images/men-jacket.jpg",
    description: "Styled fury jacket.",
    sizes: {
    S: 2,
    M: 4,
    L: 3,
    XL: 1,
    XXL: 0
  }
  },
  {
     id: 1010,
    name: "VYRA Mens Zipper",
    brand: "VYRA",
    section: "Men",
    category: "Hoodies",
    price: 599.99,
    salePrice: 499.99,
    stock: 10,
    image: "images/men-zipperr.jpg",
    description: "Artsy Zipper Jacket.",
    sizes: {
    S: 2,
    M: 4,
    L: 3,
    XL: 1,
    XXL: 0
  }
  },
  

  { // Mens Pants 
    id: 1011,
    name: "VYRA Slim Fit Jeans",
    brand: "VYRA",
    section: "Men",
    category: "Pants",
    price: 799.99,
    salePrice: null,
    stock: 8,
    image: "images/men-jeans.jpg",
    description: "Modern slim fit denim.",
    sizes: {
    S: 2,
    M: 4,
    L: 3,
    XL: 1,
    XXL: 0
  }
  },
  {  
    id: 1012,
    name: "VYRA loose Sweatpants",
    brand: "VYRA",
    section: "Men",
    category: "Pants",
    price: 499.99,
    salePrice: null,
    stock: 8,
    image: "images/men-sweats.jpg",
    description: "Comfy sweatpants.",
    sizes: {
    S: 2,
    M: 4,
    L: 3,
    XL: 1,
    XXL: 0
  }
  },
  {
    id: 1013,
    name: "VYRA Black Washed Jeans",
    brand: "VYRA",
    section: "Men",
    category: "Pants",
    price: 879.99,
    salePrice: 800.00,
    stock: 11,
    image: "images/men-blackjean.jpg",
    description: "Modern slim fit denim.",
    sizes: {
    S: 2,
    M: 4,
    L: 3,
    XL: 1,
    XXL: 0
  }
  },
  {
    id: 1014,
    name: "VYRA Dark Washed Jorts",
    brand: "VYRA",
    section: "Men",
    category: "Pants",
    price: 900.00,
    salePrice: 600.00,
    stock: 9,
    image: "images/men-jort.jpg",
    description: "Modern slim fit denim.",
    sizes: {
    S: 2,
    M: 4,
    L: 3,
    XL: 1,
    XXL: 0
  }
  },
  {
    id: 1015,
    name: "VYRA Mens Grey Cargo",
    brand: "VYRA",
    section: "Men",
    category: "Pants",
    price: 540.00,
    salePrice: null,
    stock: 10,
    image: "images/men-grey.jpg",
    description: "Modern slim fit denim.",
    sizes: {
    S: 2,
    M: 4,
    L: 3,
    XL: 1,
    XXL: 0
  }
  },
  {
    id: 1016,
    name: "VYRA Mens Black Cargo",
    brand: "VYRA",
    section: "Men",
    category: "Pants",
    price: 940.00,
    salePrice: 876.79,
    stock: 9,
    image: "images/men-black.jpg",
    description: "Modern slim fit denim.",
    sizes: {
    S: 2,
    M: 4,
    L: 3,
    XL: 1,
    XXL: 0
  }
  },
  {
    id: 1017,
    name: "VYRA Tracksuit Pants",
    brand: "VYRA",
    section: "Men",
    category: "Pants",
    price: 499.99,
    salePrice: null,
    stock: 10,
    image: "images/men-track.jpg",
    description: "Modern slim fit denim.",
    sizes: {
    S: 2,
    M: 4,
    L: 3,
    XL: 1,
    XXL: 0
  }
  },
  {
    id: 1018,
    name: "VYRA Mens Wide-Leg Pants",
    brand: "VYRA",
    section: "Men",
    category: "Pants",
    price: 649.99,
    salePrice: 549.99,
    stock: 7,
    image: "images/men-wide.jpg",
    description: "Wide leg black pants.",
    sizes: {
    S: 2,
    M: 4,
    L: 3,
    XL: 1,
    XXL: 0
  }
  },
  {
    id: 1019,
    name: "VYRA Denim Washed Jean",
    brand: "VYRA",
    section: "Men",
    category: "Pants",
    price: 899.99,
    salePrice: null,
    stock: 10,
    image: "images/men-jeantwo.jpg",
    description: "Modern baggy denim.",
    sizes: {
    S: 2,
    M: 4,
    L: 3,
    XL: 1,
    XXL: 0
  }
},
{
      id: 1020,
    name: "VYRA Grey Short",
    brand: "VYRA",
    section: "Men",
    category: "Pants",
    price: 250.99,
    salePrice: null,
    stock: 10,
    image: "images/men-greyshort.jpg",
    description: "Plain grey shorts.",
    sizes: {
    S: 2,
    M: 4,
    L: 3,
    XL: 1,
    XXL: 0
  }
},

{    // Mens Shoes
    id: 1021,
    name: "VYRA Mens Loafers",
    brand: "VYRA",
    section: "Men",
    category: "Shoes",
    price: 1500.00,
    salePrice: 1300.00,
    stock: 5,
    image: "images/shoetwo.jpg",
    description: "Styled loafers.",
    sizes: {
    UK: 6,
    UK: 7,
    UK: 8,
    UK: 9,
    UK: 10
  }
},
{
    id: 1022,
    name: "VYRA White Sneakers",
    brand: "VYRA",
    section: "Men",
    category: "Shoes",
    price: 1000.00,
    salePrice: 899.99,
    stock: 5,
    image: "images/shoethree.jpg",
    description: "Plain White sneakers.",
   sizes: {
    UK: 6,
    UK: 7,
    UK: 8,
    UK: 9,
    UK: 10
  }
},
{
    id: 1023,
    name: "VYRA Samba Shoes",
    brand: "VYRA",
    section: "Men",
    category: "Shoes",
    price: 2000.00,
    salePrice: null,
    stock: 5,
    image: "images/shoefour.jpg",
    description: "Classic samba shoes.",
    sizes: {
    UK: 6,
    UK: 7,
    UK: 8,
    UK: 9,
    UK: 10
  }
},
{
    id: 1024,
    name: "VYRA High Tops",
    brand: "VYRA",
    section: "Men",
    category: "Shoes",
    price: 899.99,
    salePrice: 699.99,
    stock: 5,
    image: "images/shoefive.jpg",
    description: "Relaxed fit high tops.",
    sizes: {
    UK: 6,
    UK: 7,
    UK: 8,
    UK: 9,
    UK: 10
  }
},
{
    id: 1025,
    name: "VYRA trainers",
    brand: "VYRA",
    section: "Men",
    category: "Shoes",
    price: 1788.99,
    salePrice: 999.99,
    stock: 5,
    image: "images/shoesix.jpg",
    description: "Mens trainers.",
    sizes: {
    UK: 6,
    UK: 7,
    UK: 8,
    UK: 9,
    UK: 10
  }
},
{
    id: 1026,
    name: "VYRA Mens Flip Flops",
    brand: "VYRA",
    section: "Men",
    category: "Shoes",
    price: 1199.99,
    salePrice: 899.99,
    stock: 5,
    image: "images/shoeseven.jpg",
    description: "Summer vibes men sandals.",
    sizes: {
    UK: 6,
    UK: 7,
    UK: 8,
    UK: 9,
    UK: 10
  }
},
{
    id: 1027,
    name: "VYRA Dunked Sneakers",
    brand: "VYRA",
    section: "Men",
    category: "Shoes",
    price: 3500.00,
    salePrice: null,
    stock: 5,
    image: "images/shoeeight.jpg",
    description: "Stylish fit sneakers.",
    sizes: {
    UK: 6,
    UK: 7,
    UK: 8,
    UK: 9,
    UK: 10
  }
},
{
    id: 1028,
    name: "VYRA Retro Nines",
    brand: "VYRA",
    section: "Men",
    category: "Shoes",
    price: 2500.00,
    salePrice: 1700.00,
    stock: 5,
    image: "images/shoenine.jpg",
    description: "Vintage sneakers for a vintage look.",
    sizes: {
    UK: 6,
    UK: 7,
    UK: 8,
    UK: 9,
    UK: 10
  }
},
{
    id: 1029,
    name: "VYRA Mens Sandals",
    brand: "VYRA",
    section: "Men",
    category: "Shoes",
    price: 999.99,
    salePrice: 799.99,
    stock: 5,
    image: "images/shoeten.jpg",
    description: "Flat everyday sandals.",
    sizes: {
    UK: 6,
    UK: 7,
    UK: 8,
    UK: 9,
    UK: 10
  }
},



  // ===== WOMEN =====
  {
    id: 2001,
    name: "VYRA Ribbed Top",
    brand: "VYRA",
    section: "Women",
    category: "Tops",
    price: 399.99,
    salePrice: null,
    stock: 12,
    image: "images/women-top.jpg",
    description: "Soft ribbed everyday top.",
    sizes: {
    XS: 1,
    S: 2,
    M: 3,
    L: 0,
    XL: 0,
    XXL: 0
  }
  },
  {
    id: 2002,
    name: "VYRA Flow Dress",
    brand: "VYRA",
    section: "Women",
    category: "Dresses",
    price: 899.99,
    salePrice: 699.99,
    stock: 6,
    image: "images/women-dress.jpg",
    description: "Lightweight flowing dress.",
    sizes: {
    XS: 1,
    S: 2,
    M: 3,
    L: 0,
    XL: 0,
    XXL: 0
  }
  },
  {
    id: 2003,
    name: "VYRA Midi Skirt",
    brand: "VYRA",
    section: "Women",
    category: "Skirts",
    price: 499.99,
    salePrice: null,
    stock: 9,
    image: "images/women-skirt.jpg",
    description: "Elegant midi skirt.",
    sizes: {
    XS: 1,
    S: 2,
    M: 3,
    L: 0,
    XL: 0,
    XXL: 0
  }
  },

  // Women Tops 
{
    id: 2004,
    name: "VYRA Short Sleeve Tee",
    brand: "VYRA",
    section: "Women",
    category: "Tops",
    price: 299.99,
    salePrice: null,
    stock: 12,
    image: "images/women-toptwo.jpg",
    description: "Short sleeve top.",
    sizes: {
    XS: 1,
    S: 2,
    M: 3,
    L: 0,
    XL: 0,
    XXL: 0
  }
  },
  {
    id: 2005,
    name: "VYRA Graphic Tee",
    brand: "VYRA",
    section: "Women",
    category: "Tops",
    price: 499.99,
    salePrice: 399.99,
    stock: 12,
    image: "images/women-topthree.jpg",
    description: "Stylish graphic tee.",
    sizes: {
    XS: 1,
    S: 2,
    M: 3,
    L: 0,
    XL: 0,
    XXL: 0
  }
  },
  {
    id: 2006,
    name: "VYRA Comfy Hoodie",
    brand: "VYRA",
    section: "Women",
    category: "Tops",
    price: 799.99,
    salePrice: 699.99,
    stock: 12,
    image: "images/women-topfour.jpg",
    description: "Comfy wear hoodie.",
    sizes: {
    XS: 1,
    S: 2,
    M: 3,
    L: 0,
    XL: 0,
    XXL: 0
  }
  },
  {
    id: 2007,
    name: "VYRA Oversized Tee",
    brand: "VYRA",
    section: "Women",
    category: "Tops",
    price: 999.99,
    salePrice: 799.99,
    stock: 12,
    image: "images/women-topfive.jpg",
    description: "Women oversized t-shirt.",
    sizes: {
    XS: 1,
    S: 2,
    M: 3,
    L: 0,
    XL: 0,
    XXL: 0
  }
  },
  {
    id: 2008,
    name: "VYRA sweater",
    brand: "VYRA",
    section: "Women",
    category: "Tops",
    price: 599.99,
    salePrice: null,
    stock: 12,
    image: "images/women-topsix.jpg",
    description: "Modern everyday sweater.",
    sizes: {
    XS: 1,
    S: 2,
    M: 3,
    L: 0,
    XL: 0,
    XXL: 0
  }
  },
  {
    id: 2009,
    name: "VYRA Long Sleeved Tee",
    brand: "VYRA",
    section: "Women",
    category: "Tops",
    price: 399.99,
    salePrice: 299.99,
    stock: 12,
    image: "images/women-topseven.jpg",
    description: "Perfect relaxed long tee.",
    sizes: {
    XS: 1,
    S: 2,
    M: 3,
    L: 0,
    XL: 0,
    XXL: 0
  }
  },
  {
    id: 2010,
    name: "VYRA Button Tee",
    brand: "VYRA",
    section: "Women",
    category: "Tops",
    price: 799.99,
    salePrice: null,
    stock: 12,
    image: "images/women-topeight.jpg",
    description: "Cute buttoned t-shirt.",
    sizes: {
    XS: 1,
    S: 2,
    M: 3,
    L: 0,
    XL: 0,
    XXL: 0
  }
  },
  {
    id: 2011,
    name: "VYRA Cropped Tee",
    brand: "VYRA",
    section: "Women",
    category: "Tops",
    price: 698.99,
    salePrice: 599.99,
    stock: 12,
    image: "images/women-topnine.jpg",
    description: "Stylish cropped women t-shirt.",
    sizes: {
    XS: 1,
    S: 2,
    M: 3,
    L: 0,
    XL: 0,
    XXL: 0
  }
  },
  {
    id: 2012,
    name: "VYRA Tank Tops",
    brand: "VYRA",
    section: "Women",
    category: "Tops",
    price: 899.99,
    salePrice: 699.99,
    stock: 12,
    image: "images/women-topten.jpg",
    description: "Summer women tank tops.",
    sizes: {
    XS: 1,
    S: 2,
    M: 3,
    L: 0,
    XL: 0,
    XXL: 0
  }
  },

 // ==== Women Dresses =====
 {
    id: 2013,
    name: "VYRA Summer Dress",
    brand: "VYRA",
    section: "Women",
    category: "Dresses",
    price: 1000.00,
    salePrice: 899.99,
    stock: 6,
    image: "images/women-dresstwo.jpg",
    description: "Lightweight summer dress.",
    sizes: {
    XS: 1,
    S: 2,
    M: 3,
    L: 0,
    XL: 0,
    XXL: 0
  }
  },
  {
    id: 2014,
    name: "VYRA Evening Dress",
    brand: "VYRA",
    section: "Women",
    category: "Dresses",
    price: 899.99,
    salePrice: 699.99,
    stock: 6,
    image: "images/women-dressthree.jpg",
    description: "Classy evening dress.",
    sizes: {
    XS: 1,
    S: 2,
    M: 3,
    L: 0,
    XL: 0,
    XXL: 0
  }
  },
  {
    id: 2015,
    name: "VYRA Cute Short Dress",
    brand: "VYRA",
    section: "Women",
    category: "Dresses",
    price: 699.99,
    salePrice: 599.99,
    stock: 6,
    image: "images/women-dressfour.jpg",
    description: "Cotton short dress.",
    sizes: {
    XS: 1,
    S: 2,
    M: 3,
    L: 0,
    XL: 0,
    XXL: 0
  }
  },
  {
    id: 2016,
    name: "VYRA Body Tight Dress",
    brand: "VYRA",
    section: "Women",
    category: "Dresses",
    price: 799.99,
    salePrice: 699.99,
    stock: 6,
    image: "images/women-dressfive.jpg",
    description: "Sophisticated body tight dress.",
    sizes: {
    XS: 1,
    S: 2,
    M: 3,
    L: 0,
    XL: 0,
    XXL: 0
  }
  },
  {
    id: 2017,
    name: "VYRA Satin Dress",
    brand: "VYRA",
    section: "Women",
    category: "Dresses",
    price: 799.99,
    salePrice: null,
    stock: 6,
    image: "images/women-dresssix.jpg",
    description: "Evening satin dress.",
    sizes: {
    XS: 1,
    S: 2,
    M: 3,
    L: 0,
    XL: 0,
    XXL: 0
  }
  },
  {
    id: 2018,
    name: "VYRA Strapless Dress",
    brand: "VYRA",
    section: "Women",
    category: "Dresses",
    price: 1200.00,
    salePrice: 1000.00,
    stock: 6,
    image: "images/women-dressseven.jpg",
    description: "Body con dress without straps.",
    sizes: {
    XS: 1,
    S: 2,
    M: 3,
    L: 0,
    XL: 0,
    XXL: 0
  }
  },
  {
    id: 2019,
    name: "VYRA Flower Pinic Dress",
    brand: "VYRA",
    section: "Women",
    category: "Dresses",
    price: 699.99,
    salePrice: 399.99,
    stock: 6,
    image: "images/women-dresseight.jpg",
    description: "Flowery designed dress.",
    sizes: {
    XS: 1,
    S: 2,
    M: 3,
    L: 0,
    XL: 0,
    XXL: 0
  }
  },
  {
    id: 2020,
    name: "VYRA Casual Dress",
    brand: "VYRA",
    section: "Women",
    category: "Dresses",
    price: 899.99,
    salePrice: 699.99,
    stock: 6,
    image: "images/women-dressnine.jpg",
    description: "Simple relaxed dress.",
    sizes: {
    XS: 1,
    S: 2,
    M: 3,
    L: 0,
    XL: 0,
    XXL: 0
  }
  },
  {
    id: 2021,
    name: "VYRA Denim Dress",
    brand: "VYRA",
    section: "Women",
    category: "Dresses",
    price: 1500.00,
    salePrice: null,
    stock: 6,
    image: "images/women-dressten.jpg",
    description: "Denim styled women dress.",
    sizes: {
    XS: 1,
    S: 2,
    M: 3,
    L: 0,
    XL: 0,
    XXL: 0
  }
  },

  // ==== Women Skirts ==== //
  {
    id: 2022,
    name: "VYRA Flowy Skirt",
    brand: "VYRA",
    section: "Women",
    category: "Skirts",
    price: 699.99,
    salePrice: 599.99,
    stock: 9,
    image: "images/women-skirttwo.jpg",
    description: "Summer flowy skirt.",
    sizes: {
    XS: 1,
    S: 2,
    M: 3,
    L: 0,
    XL: 0,
    XXL: 0
  }
  },
  {
    id: 2023,
    name: "VYRA Long Satin Skirt",
    brand: "VYRA",
    section: "Women",
    category: "Skirts",
    price: 799.99,
    salePrice: 699.99,
    stock: 9,
    image: "images/women-skirtthree.jpg",
    description: "Evening wear skirt.",
    sizes: {
    XS: 1,
    S: 2,
    M: 3,
    L: 0,
    XL: 0,
    XXL: 0
  }
  },
  {
    id: 2024,
    name: "VYRA Mini Skirt",
    brand: "VYRA",
    section: "Women",
    category: "Skirts",
    price: 599.99,
    salePrice: null,
    stock: 9,
    image: "images/women-skirtfour.jpg",
    description: "Cute mini skirt.",
    sizes: {
    XS: 1,
    S: 2,
    M: 3,
    L: 0,
    XL: 0,
    XXL: 0
  }
  },
  {
    id: 2025,
    name: "VYRA Long Slit Skirt",
    brand: "VYRA",
    section: "Women",
    category: "Skirts",
    price: 999.99,
    salePrice: 899.99,
    stock: 9,
    image: "images/women-skirtfive.jpg",
    description: "Long simple skirt with slit.",
    sizes: {
    XS: 1,
    S: 2,
    M: 3,
    L: 0,
    XL: 0,
    XXL: 0
  }
  },
  {
    id: 2026,
    name: "VYRA Denim Skirt",
    brand: "VYRA",
    section: "Women",
    category: "Skirts",
    price: 799.99,
    salePrice: 499.99,
    stock: 9,
    image: "images/women-skirtsix.jpg",
    description: "Relaxed denim skirt.",
    sizes: {
    XS: 1,
    S: 2,
    M: 3,
    L: 0,
    XL: 0,
    XXL: 0
  }
  },
  {
    id: 2027,
    name: "VYRA Flower Skirt",
    brand: "VYRA",
    section: "Women",
    category: "Skirts",
    price: 999.99,
    salePrice: null,
    stock: 9,
    image: "images/women-skirtseven.jpg",
    description: "Summer flowery skirt.",
    sizes: {
    XS: 1,
    S: 2,
    M: 3,
    L: 0,
    XL: 0,
    XXL: 0
  }
  },
  {
    id: 2028,
    name: "VYRA Body Tight Skirt",
    brand: "VYRA",
    section: "Women",
    category: "Skirts",
    price: 399.99,
    salePrice: 299.99,
    stock: 9,
    image: "images/women-skirteight.jpg",
    description: "Long skirt that hold and shapes body.",
    sizes: {
    XS: 1,
    S: 2,
    M: 3,
    L: 0,
    XL: 0,
    XXL: 0
  }
  },
  {
    id: 2029,
    name: "VYRA Long Denim Skirt",
    brand: "VYRA",
    section: "Women",
    category: "Skirts",
    price: 599.99,
    salePrice: 499.99,
    stock: 9,
    image: "images/women-skirtnine.jpg",
    description: "Modern denim skirt.",
    sizes: {
    XS: 1,
    S: 2,
    M: 3,
    L: 0,
    XL: 0,
    XXL: 0
  }
  },
  {
    id: 2030,
    name: "VYRA Pleated Skirt",
    brand: "VYRA",
    section: "Women",
    category: "Skirts",
    price: 799.99,
    salePrice: null,
    stock: 9,
    image: "images/women-skirtten.jpg",
    description: "Everday wear pleated skirt.",
    sizes: {
    XS: 1,
    S: 2,
    M: 3,
    L: 0,
    XL: 0,
    XXL: 0
  }
  },

  // Womens Pants //
  {
    id: 2031,
    name: "VYRA Denim Jean",
    brand: "VYRA",
    section: "Women",
    category: "Pants",
    price: 799.99,
    salePrice: null,
    stock: 9,
    image: "images/women-pantsone.jpg",
    description: "Stylish denim pants.",
    sizes: {
    XS: 1,
    S: 2,
    M: 3,
    L: 0,
    XL: 0,
    XXL: 0
  }
  },
  {
    id: 2032,
    name: "VYRA Formal Pants",
    brand: "VYRA",
    section: "Women",
    category: "Pants",
    price: 899.99,
    salePrice: 799.99,
    stock: 9,
    image: "images/women-pantstwo.jpg",
    description: "Formal pants for formal occasions.",
    sizes: {
    XS: 1,
    S: 2,
    M: 3,
    L: 0,
    XL: 0,
    XXL: 0
  }
  },
  {
    id: 2033,
    name: "VYRA Cargo Pants",
    brand: "VYRA",
    section: "Women",
    category: "Pants",
    price: 699.99,
    salePrice: 599.99,
    stock: 9,
    image: "images/women-pantsthree.jpg",
    description: "Comfy cargo never goes worng.",
    sizes: {
    XS: 1,
    S: 2,
    M: 3,
    L: 0,
    XL: 0,
    XXL: 0
  }
  },
  {
    id: 2034,
    name: "VYRA Women's Jorts",
    brand: "VYRA",
    section: "Women",
    category: "Pants",
    price: 399.99,
    salePrice: null,
    stock: 9,
    image: "images/women-pantsfour.jpg",
    description: "Women's casual jorts.",
    sizes: {
    XS: 1,
    S: 2,
    M: 3,
    L: 0,
    XL: 0,
    XXL: 0
  }
  },
  {
    id: 2035,
    name: "VYRA Casual Pants",
    brand: "VYRA",
    section: "Women",
    category: "Pants",
    price: 1999.99,
    salePrice: 1000.00,
    stock: 9,
    image: "images/women-pantsfive.jpg",
    description: "Casual pants for everyday wear.",
    sizes: {
    XS: 1,
    S: 2,
    M: 3,
    L: 0,
    XL: 0,
    XXL: 0
  }
  },
  {
    id: 2036,
    name: "VYRA Flowy Riac",
    brand: "VYRA",
    section: "Women",
    category: "Pants",
    price: 600.00,
    salePrice: 550.00,
    stock: 9,
    image: "images/women-pantssix.jpg",
    description: "Cute flowy pants.",
    sizes: {
    XS: 1,
    S: 2,
    M: 3,
    L: 0,
    XL: 0,
    XXL: 0
  }
  },
  {
    id: 2037,
    name: "VYRA Stripped Pants",
    brand: "VYRA",
    section: "Women",
    category: "Pants",
    price: 800.00,
    salePrice: 700.00,
    stock: 9,
    image: "images/women-pantsseven.jpg",
    description: "Comfy stripped pants.",
    sizes: {
    XS: 1,
    S: 2,
    M: 3,
    L: 0,
    XL: 0,
    XXL: 0
  }
  },
  {
    id: 2038,
    name: "VYRA Oversized Pants",
    brand: "VYRA",
    section: "Women",
    category: "Pants",
    price: 900.00,
    salePrice: 850.00,
    stock: 9,
    image: "images/women-pantseight.jpg",
    description: "Casual oversized pants.",
    sizes: {
    XS: 1,
    S: 2,
    M: 3,
    L: 0,
    XL: 0,
    XXL: 0
  }
  },
  {
    id: 2039,
    name: "VYRA Fleeted Pants",
    brand: "VYRA",
    section: "Women",
    category: "Pants",
    price: 999.99,
    salePrice: 900.00,
    stock: 9,
    image: "images/women-pantsnine.jpg",
    description: "Fleeted pants virac.",
    sizes: {
    XS: 1,
    S: 2,
    M: 3,
    L: 0,
    XL: 0,
    XXL: 0
  }
  },
  {
    id: 2040,
    name: "VYRA Reasce Migro",
    brand: "VYRA",
    section: "Women",
    category: "Pants",
    price: 800.00,
    salePrice: 500.00,
    stock: 9,
    image: "images/women-pantsten.jpg",
    description: "Stunning reasce migro.",
    sizes: {
    XS: 1,
    S: 2,
    M: 3,
    L: 0,
    XL: 0,
    XXL: 0
  }
  },


  // Womens Shoes //
  {
    id: 2041,
    name: "VYRA Brown Straps",
    brand: "VYRA",
    section: "Women",
    category: "Shoes",
    price: 799.99,
    salePrice: null,
    stock: 9,
    image: "images/women-shoeone.jpg",
    description: "Everyday wear sandals.",
    sizes: {
    UK: 3,
    UK: 4,
    UK: 5,
    UK: 6,
    UK: 7,
    UK: 8
  }
  },
  {
    id: 2042,
    name: "VYRA Brown heels",
    brand: "VYRA",
    section: "Women",
    category: "Shoes",
    price: 699.99,
    salePrice: 599.99,
    stock: 9,
    image: "images/women-shoetwo.jpg",
    description: "Elegant brown heels.",
    sizes: {
    UK: 3,
    UK: 4,
    UK: 5,
    UK: 6,
    UK: 7,
    UK: 8
  }
  },
  {
    id: 2043,
    name: "VYRA Carabona Shoes",
    brand: "VYRA",
    section: "Women",
    category: "Shoes",
    price: 999.99,
    salePrice: 899.99,
    stock: 9,
    image: "images/women-shoethree.jpg",
    description: "Comfortable sneakers.",
    sizes: {
    UK: 3,
    UK: 4,
    UK: 5,
    UK: 6,
    UK: 7,
    UK: 8
  }
  },
  {
    id: 2044,
    name: "VYRA Birenkstock",
    brand: "VYRA",
    section: "Women",
    category: "Shoes",
    price: 599.99,
    salePrice: 499.99,
    stock: 9,
    image: "images/women-shoefour.jpg",
    description: "Comfy slip on shoes.",
    sizes: {
    UK: 3,
    UK: 4,
    UK: 5,
    UK: 6,
    UK: 7,
    UK: 8
  }
  },
  {
    id: 2045,
    name: "VYRA Long Boots",
    brand: "VYRA",
    section: "Women",
    category: "Shoes",
    price: 599.99,
    salePrice: 399.99,
    stock: 9,
    image: "images/women-shoefive.jpg",
    description: "Long boots suit everything.",
    sizes: {
    UK: 3,
    UK: 4,
    UK: 5,
    UK: 6,
    UK: 7,
    UK: 8
  }
  },
  {
    id: 2045,
    name: "VYRA Kenitle Sandals",
    brand: "VYRA",
    section: "Women",
    category: "Shoes",
    price: 888.99,
    salePrice: 799.99,
    stock: 9,
    image: "images/women-shoesix.jpg",
    description: "Chic kenitle summer sandals .",
    sizes: {
    UK: 3,
    UK: 4,
    UK: 5,
    UK: 6,
    UK: 7,
    UK: 8
  }
  },
  {
    id: 2046,
    name: "VYRA Comfy Trainers",
    brand: "VYRA",
    section: "Women",
    category: "Shoes",
    price: 499.99,
    salePrice: null,
    stock: 9,
    image: "images/women-shoeseven.jpg",
    description: "Comfy foot trainers.",
    sizes: {
    UK: 3,
    UK: 4,
    UK: 5,
    UK: 6,
    UK: 7,
    UK: 8
  }
  },
  {
    id: 2047,
    name: "VYRA Women Sneakers",
    brand: "VYRA",
    section: "Women",
    category: "Shoes",
    price: 699.99,
    salePrice: 500.00,
    stock: 9,
    image: "images/women-shoeeight.jpg",
    description: "Comfy women sneakers.",
    sizes: {
    UK: 3,
    UK: 4,
    UK: 5,
    UK: 6,
    UK: 7,
    UK: 8
  }
  },
  {
    id: 2048,
    name: "VYRA Simuale Flats",
    brand: "VYRA",
    section: "Women",
    category: "Shoes",
    price: 799.99,
    salePrice: null,
    stock: 9,
    image: "images/women-shoenine.jpg",
    description: "Cute flats for cute everyday look.",
    sizes: {
    UK: 3,
    UK: 4,
    UK: 5,
    UK: 6,
    UK: 7,
    UK: 8
  }
  },
  {
    id: 2049,
    name: "VYRA Cosmica",
    brand: "VYRA",
    section: "Women",
    category: "Shoes",
    price: 999.99,
    salePrice: null,
    stock: 9,
    image: "images/women-shoeten.jpg",
    description: "Stunning bright classy cosmicas.",
    sizes: {
    UK: 3,
    UK: 4,
    UK: 5,
    UK: 6,
    UK: 7,
    UK: 8
  }
  },




  // ===== KIDS =====
  // Kids Tops //
  {
    id: 3001,
    name: "VYRA Girls' Hoodies",
    brand: "VYRA",
    section: "Kids",
    category: "Tops",
    price: 349.99,
    salePrice: null,
    stock: 10,
    image: "images/kids-hoodie.jpg",
    description: "Comfortable hoodie for kids.",
    sizes: {
    "1Y": 2,
    "2Y": 3,
    "4Y": 1,
    "6Y": 0,
    "8Y": 2,
    "10Y": 0,
    "12Y": 1,
    "14Y": 0
  }
  },
 {
    id: 3002,
    name: "VYRA Boys' Hoodies",
    brand: "VYRA",
    section: "Kids",
    category: "Tops",
    price: 500.00,
    salePrice: 499.99,
    stock: 10,
    image: "images/kids-hoodietwo.jpg",
    description: "Relaxed Kids Tees.",
    sizes: {
    "1Y": 2,
    "2Y": 3,
    "4Y": 1,
    "6Y": 0,
    "8Y": 2,
    "10Y": 0,
    "12Y": 1,
    "14Y": 0
  }
  },
  {
    id: 3003,
    name: "VYRA Girls'Graphic tees ",
    brand: "VYRA",
    section: "Kids",
    category: "Tops",
    price: 699.99,
    salePrice: 599.99,
    stock: 10,
    image: "images/kids-hoodieeight.jpg",
    description: "Cool girls grpahic tees.",
    sizes: {
    "1Y": 2,
    "2Y": 3,
    "4Y": 1,
    "6Y": 0,
    "8Y": 2,
    "10Y": 0,
    "12Y": 1,
    "14Y": 0
  }
  },
  {
    id: 3004,
    name: "VYRA Boys' Graphic tees",
    brand: "VYRA",
    section: "Kids",
    category: "Tops",
    price: 899.99,
    salePrice: 799.99,
    stock: 10,
    image: "images/kids-hoodiethree.jpg",
    description: "Graphical kids tees.",
    sizes: {
    "1Y": 2,
    "2Y": 3,
    "4Y": 1,
    "6Y": 0,
    "8Y": 2,
    "10Y": 0,
    "12Y": 1,
    "14Y": 0
  }
  },
  {
    id: 3005,
    name: "VYRA Girls Sweaters",
    brand: "VYRA",
    section: "Kids",
    category: "Tops",
    price: 799.99,
    salePrice: 699.99,
    stock: 10,
    image: "images/kids-hoodienine.jpg",
    description: "Cozy sweaters for girls.",
    sizes: {
    "1Y": 2,
    "2Y": 3,
    "4Y": 1,
    "6Y": 0,
    "8Y": 2,
    "10Y": 0,
    "12Y": 1,
    "14Y": 0
  }
  },
  {
    id: 3006,
    name: "VYRA Boys' Sweaters",
    brand: "VYRA",
    section: "Kids",
    category: "Tops",
    price: 799.99,
    salePrice: null,
    stock: 10,
    image: "images/kids-hoodiefour.jpg",
    description: "Cozy kids sweaters.",
    sizes: {
    "1Y": 2,
    "2Y": 3,
    "4Y": 1,
    "6Y": 0,
    "8Y": 2,
    "10Y": 0,
    "12Y": 1,
    "14Y": 0
  }
  },
  {
    id: 3007,
    name: "VYRA Girls' Tank Tops",
    brand: "VYRA",
    section: "Kids",
    category: "Tops",
    price: 699.99,
    salePrice: 599.99,
    stock: 10,
    image: "images/kids-hoodiefive.jpg",
    description: "Summer relaxed kids tops.",
    sizes: {
    "1Y": 2,
    "2Y": 3,
    "4Y": 1,
    "6Y": 0,
    "8Y": 2,
    "10Y": 0,
    "12Y": 1,
    "14Y": 0
  }
  },
  {
    id: 3008,
    name: "VYRA Kids Unisex Zip Up's",
    brand: "VYRA",
    section: "Kids",
    category: "Tops",
    price: 459.99,
    salePrice: 399.99,
    stock: 10,
    image: "images/kids-hoodiesix.jpg",
    description: "Kids zip up to keep them warm.",
    sizes: {
    "1Y": 2,
    "2Y": 3,
    "4Y": 1,
    "6Y": 0,
    "8Y": 2,
    "10Y": 0,
    "12Y": 1,
    "14Y": 0
  }
  },
  {
    id: 3009,
    name: "VYRA Boys Dunk tees",
    brand: "VYRA",
    section: "Kids",
    category: "Tops",
    price: 999.99,
    salePrice: 899.99,
    stock: 10,
    image: "images/kids-hoodieseven.jpg",
    description: "Designed tees for kids.",
    sizes: {
    "1Y": 2,
    "2Y": 3,
    "4Y": 1,
    "6Y": 0,
    "8Y": 2,
    "10Y": 0,
    "12Y": 1,
    "14Y": 0
  }
  },
  
  {
    id: 3010,
    name: "VYRA Boys Tank Tops",
    brand: "VYRA",
    section: "Kids",
    category: "Tops",
    price: 699.99,
    salePrice: 599.99,
    stock: 10,
    image: "images/kids-hoodieten.jpg",
    description: "Cool boys tankies.",
    sizes: {
    "1Y": 2,
    "2Y": 3,
    "4Y": 1,
    "6Y": 0,
    "8Y": 2,
    "10Y": 0,
    "12Y": 1,
    "14Y": 0
  }
  },
  

  // Kids Pants //

{
    id: 3011,
    name: "VYRA Boys' Denim Jeans",
    brand: "VYRA",
    section: "Kids",
    category: "Pants",
    price: 699.99,
    salePrice: 599.99,
    stock: 10,
    image: "images/kids-pantsone.jpg",
    description: "Realxed boys denim jeans.",
    sizes: {
    "1Y": 2,
    "2Y": 3,
    "4Y": 1,
    "6Y": 0,
    "8Y": 2,
    "10Y": 0,
    "12Y": 1,
    "14Y": 0
  }
  },
  {
    id: 3012,
    name: "VYRA Girls' Denim Jeans",
    brand: "VYRA",
    section: "Kids",
    category: "Pants",
    price: 699.99,
    salePrice: 599.99,
    stock: 10,
    image: "images/kids-pantstwo.jpg",
    description: "Relaxed girls denim jeans.",
    sizes: {
    "1Y": 2,
    "2Y": 3,
    "4Y": 1,
    "6Y": 0,
    "8Y": 2,
    "10Y": 0,
    "12Y": 1,
    "14Y": 0
  }
  },
  {
    id: 3013,
    name: "VYRA Unisex pants",
    brand: "VYRA",
    section: "Kids",
    category: "Pants",
    price: 799.99,
    salePrice: 699.99,
    stock: 10,
    image: "images/kids-pantseight.jpg",
    description: "Cozy unisex sweatpants.",
    sizes: {
    "1Y": 2,
    "2Y": 3,
    "4Y": 1,
    "6Y": 0,
    "8Y": 2,
    "10Y": 0,
    "12Y": 1,
    "14Y": 0
  }
  },
  {
    id: 3014,
    name: "VYRA Boys' Shorts",
    brand: "VYRA",
    section: "Kids",
    category: "Pants",
    price: 599.99,
    salePrice: 499.99,
    stock: 10,
    image: "images/kids-pantsthree.jpg",
    description: "Comfortable toddler shorts.",
    sizes: {
    "1Y": 2,
    "2Y": 3,
    "4Y": 1,
    "6Y": 0,
    "8Y": 2,
    "10Y": 0,
    "12Y": 1,
    "14Y": 0
  }
  },
  {
    id: 3015,
    name: "VYRA Girls' Shorts",
    brand: "VYRA",
    section: "Kids",
    category: "Pants",
    price: 599.99,
    salePrice: null,
    stock: 10,
    image: "images/kids-pantsfour.jpg",
    description: "Cute girl shorts.",
    sizes: {
    "1Y": 2,
    "2Y": 3,
    "4Y": 1,
    "6Y": 0,
    "8Y": 2,
    "10Y": 0,
    "12Y": 1,
    "14Y": 0
  }
  },
  {
    id: 3016,
    name: "VYRA Unisex toddlers trackpants",
    brand: "VYRA",
    section: "Kids",
    category: "Pants",
    price: 999.99,
    salePrice: 899.99,
    stock: 10,
    image: "images/kids-pantsfive.jpg",
    description: "Styled unisex trackpants.",
    sizes: {
    "1Y": 2,
    "2Y": 3,
    "4Y": 1,
    "6Y": 0,
    "8Y": 2,
    "10Y": 0,
    "12Y": 1,
    "14Y": 0
  }
  },
  {
    id: 3017,
    name: "VYRA Girls' Skirts",
    brand: "VYRA",
    section: "Kids",
    category: "Pants",
    price: 799.99,
    salePrice: 699.99,
    stock: 10,
    image: "images/kids-pantssix.jpg",
    description: "Cute toddler skirt.",
    sizes: {
    "1Y": 2,
    "2Y": 3,
    "4Y": 1,
    "6Y": 0,
    "8Y": 2,
    "10Y": 0,
    "12Y": 1,
    "14Y": 0
  }
  },
  {
    id: 3018,
    name: "VYRA Boys cargo",
    brand: "VYRA",
    section: "Kids",
    category: "Pants",
    price: 499.99,
    salePrice: null,
    stock: 10,
    image: "images/kids-pantsseven.jpg",
    description: "Comfortable boys cargo.",
    sizes: {
    "1Y": 2,
    "2Y": 3,
    "4Y": 1,
    "6Y": 0,
    "8Y": 2,
    "10Y": 0,
    "12Y": 1,
    "14Y": 0
  }
  },
  
  {
    id: 3019,
    name: "VYRA Girls' Dresses",
    brand: "VYRA",
    section: "Kids",
    category: "Pants",
    price: 499.99,
    salePrice: 399.99,
    stock: 10,
    image: "images/kids-pantsnine.jpg",
    description: "Toddlers pretty summer dresses.",
    sizes: {
    "1Y": 2,
    "2Y": 3,
    "4Y": 1,
    "6Y": 0,
    "8Y": 2,
    "10Y": 0,
    "12Y": 1,
    "14Y": 0
  }
  },
  {
    id: 3020,
    name: "VYRA Toddlers Unisex Tights",
    brand: "VYRA",
    section: "Kids",
    category: "Pants",
    price: 699.99,
    salePrice: null,
    stock: 10,
    image: "images/kids-pantsten.jpg",
    description: "Comfy tights to wear underneath.",
    sizes: {
    "1Y": 2,
    "2Y": 3,
    "4Y": 1,
    "6Y": 0,
    "8Y": 2,
    "10Y": 0,
    "12Y": 1,
    "14Y": 0
  }
  },

  // Accessories //
  {
    id: 4001,
    name: "VYRA Gold Necklace",
    brand: "VYRA",
    section: "Accessories",
    category: "Accessories",
    price: 599.99,
    salePrice: 499.99,
    stock: 5,
    image: "images/necklace.jpg",
    description: "Elegant gold necklace."
  },
  {
    id: 4002,
    name: "VYRA Diamond Earrings",
    brand: "VYRA",
    section: "Accessories",
    category: "Accessories",
    price: 499.99,
    salePrice: 399.99,
    stock: 5,
    image: "images/earring.jpg",
    description: "Platinum diamond earrings."
  },
  {
    id: 4003,
    name: "VYRA Mens Silver Rings",
    brand: "VYRA",
    section: "Accessories",
    category: "Accessories",
    price: 799.99,
    salePrice: 699.99,
    stock: 5,
    image: "images/rings.jpg",
    description: "Sophisticated stylish silver rings."
  },

  {
    id: 4004,
    name: "VYRA Rose Gold Bracelet",
    brand: "VYRA",
    section: "Accessories",
    category: "Accessories",
    price: 499.99,
    salePrice: null,
    stock: 5,
    image: "images/bracelets.jpg",
    description: "Stunning rose gold bracelets."
  },
  {
    id: 4005,
    name: "VYRA Fitted Cap",
    brand: "VYRA",
    section: "Accessories",
    category: "Accessories",
    price: 799.99,
    salePrice: 750.00,
    stock: 5,
    image: "images/cap.jpg",
    description: "Street-style caps."
  },
  {
    id: 4006,
    name: "VYRA Sunflower Hat",
    brand: "VYRA",
    section: "Accessories",
    category: "Accessories",
    price: 299.99,
    salePrice: 230.00,
    stock: 5,
    image: "images/hat.jpg",
    description: "Summer sunflower hats."
  },
  {
    id: 4007,
    name: "VYRA Doci Glasses",
    brand: "VYRA",
    section: "Accessories",
    category: "Accessories",
    price: 999.99,
    salePrice: 899.99,
    stock: 5,
    image: "images/glasses.jpg",
    description: "Classy chic glasses."
  },
  {
    id: 4008,
    name: "VYRA Unisex Parana Glasses",
    brand: "VYRA",
    section: "Accessories",
    category: "Accessories",
    price: 300.00,
    salePrice: null,
    stock: 5,
    image: "images/glassestwo.jpg",
    description: "Cool everday look glasses."
  },
  {
    id: 4009,
    name: "VYRA Stylish Scarf",
    brand: "VYRA",
    section: "Accessories",
    category: "Accessories",
    price: 599.99,
    salePrice: 499.99,
    stock: 5,
    image: "images/scarfs.jpg",
    description: "Designed scarf goes with every look."
  },
  {
    id: 4010,
    name: "VYRA Unisex Bandana",
    brand: "VYRA",
    section: "Accessories",
    category: "Accessories",
    price: 179.99,
    salePrice: null,
    stock: 5,
    image: "images/scarftwo.jpg",
    description: "Unisex street style."
  },
  
  // Sale Section//
  {
    id: 1030,
    name: "VYRA Street Sneakers",
    brand: "VYRA",
    section: "Men",
    category: "Shoes",
    price: 1199.99,
    salePrice: 899.99,
    stock: 5,
    image: "images/sneakers.jpg",
    description: "Street-style sneakers.",
    sizes: {
    "6": 1,
    "7": 1,
    "8": 1,
    "9": 1,
    "10": 1
  }
  }
];
