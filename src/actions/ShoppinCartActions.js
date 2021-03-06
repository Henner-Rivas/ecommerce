import { ADD_TO_CART,SET_PAYMENT_MESSAGE,SET_SHIPPINGDATA, CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART, SET_USER } from "../types";



export const addTocart= (id)=> ({type:ADD_TO_CART,payload:id})
export const delFromCart=(id,all=false)=>(all ? {type:REMOVE_ALL_FROM_CART,payload:id}: {type:REMOVE_ONE_FROM_CART,payload:id})
export const clearCard=()=>({type:CLEAR_CART})
export const setUser=(user)=>({type:SET_USER,payload:user})

export const setShoppingData=(data)=>({type:SET_SHIPPINGDATA,payload:data})

export const setPaymentMessage=(message)=>({type:SET_PAYMENT_MESSAGE,payload:message})