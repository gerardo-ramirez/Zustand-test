import { create } from 'zustand'
interface Post{
    id: number,
    title:string,
   body: string
}
export interface CounterState {
    count: number,
    title: string,
    increment: (value: number) => void,
    //probando asincronia:
    posts: Post[],
    getPost:() =>Promise<void>,
    clearStore: ()=>void
    //pobando get de zustand
    multiply: (value: number)=>void



    
}
export const useCounterStore= create<CounterState>((set,get)=>({
count: 10,
title:"este es un contador desde el store",
posts:[],
//creamos funciones para actualizar estados
increment:(value:number)=>{
    set(state=> ({count: state.count + value}))
},
clearStore:()=>{
    set({},true)
},
    //probando asincronia:
getPost:async()=>{
    const res= await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts= await res.json();
    set(state => ({...state, posts: posts }))


},
//probando get de zustand
multiply: (value: number)=>{
const {count}= get()
set({count: count * value})
}
})); 
//dif con redux:
/*1-no hay un provider 
2-las funciones (actions reducers en redux) se pueden
crear en el mismo objeto de state
*/