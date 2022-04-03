import {
    ADD_TO_CART,
    CLEAR_CART,
    REMOVE_ALL_FROM_CART,
    REMOVE_ONE_FROM_CART,
  } from "../types";
  
  export const initialState = {
     products : [
        {
          id: 1,
          name: "Shoes Jardan",
          productType: "Running Shoes",
          price: "50",
          rating: 4,
          image:"https://img.freepik.com/foto-gratis/zapatos-moda-zapatillas_1203-7529.jpg?w=900&t=st=1648848120~exp=1648848720~hmac=3fc774c7eab178337e73da2392d07716e31783a824917f6c31a8ed95c829e655",
          description: "Nike air is our iconic innovation htat use pressurized air in a duable, flexible menobrane ",
        },
        {
          id: 2,
          name: "Sandalias",
          productType: "Running sandalias",
          price: "50",
          rating: 4,
          image:"https://img.freepik.com/foto-gratis/par-flips-flops-amarillo-aislado-sobre-fondo-blanco_1101-1998.jpg?w=900&t=st=1648848210~exp=1648848810~hmac=01e9fa2af97ed3805c1bd920d3e51d38f8d83bd627dc372cbc70dd7532ef3e03",
          description:
            "Nike air is our iconic innovation htat use pressurized air in a duable, flexible menobrane ",
        },
      
        {
          id: 3,
          name: "Botas mujer",
          productType: "Running boot",
          price: "250",
          rating: 4,
          image: "https://img.freepik.com/foto-gratis/botas-calcetin-terciopelo-purpura-primer-plano_53876-102950.jpg?w=740&t=st=1648848247~exp=1648848847~hmac=845684f7b63aec0fd28719ab7b299555abcc4a44318ab96ed5931c651df8f467",
          description:
            "Nike air is our iconic innovation htat use pressurized air in a duable, flexible menobrane ",
        },
      
        {
          id: 4,
          name: "Tacones",
          productType: "Running tacones",
          price: "40",
          rating: 2,
          image:
            "https://img.freepik.com/foto-gratis/tacones-terciopelo-negro_53876-102771.jpg?size=338&ext=jpg&uid=R36466886&ga=GA1.2.332660370.1644876294",
          description:
            "Nike air is our iconic innovation htat use pressurized air in a duable, flexible menobrane ",
        },
      ]
      ,
    cart: [],
  };
  
  export default function shoppingReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_TO_CART:
        let newItem = state.products.find(
          (product) => product.id === action.payload
        );
        let iteminCart = state.cart.find((item) => item.id === newItem.id);
        return iteminCart
          ? {
              ...state,
              cart: state.cart.map((item) =>
                item.id === newItem.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            }
          : {
              ...state,
              cart: [...state.cart, { ...newItem, quantity: 1 }],
            };
      case REMOVE_ONE_FROM_CART:
        let itemToDelete = state.cart.find((item) => item.id === action.payload);
        return itemToDelete.quantity > 1
          ? {
              ...state,
              cart: state.cart.map((item) =>
                item.id === itemToDelete.id
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              ),
            }
          : {
              ...state,
              cart: state.cart.filter((item) => item.id !== action.payload),
            };
      case REMOVE_ALL_FROM_CART: {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload),
        };
      }
      case CLEAR_CART:
        return initialState;
      default:
        return state;
    }
  }
  