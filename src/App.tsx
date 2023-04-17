import  { useEffect } from 'react'
import { useCounterStore } from './store/counter.store'
import { shallow} from 'zustand/shallow';
//shallow se usa cuando accedes a multiples valores
//para que no haga la comparacion {}==={} sino que mire sus claves
const App = () => {
  //valores atomicos de retorno : no accedo a todo  el estado, solo a una parte
 const count =  useCounterStore((state)=>state.count); 
  const title = useCounterStore((state)=>state.title);
//accedo a multiples valores:

const values = useCounterStore((state)=>({
  contador: state.count,
  titulo:state.title,
  posts: state.posts
}),shallow);
console.log(values)
  const increment = useCounterStore((state) => state.increment); 
  //tambien se puede recibir así :
  //const {increment} = useCounterStore()
//importamos la funciones que cambian el store
  const { getPost, clearStore, multiply } = useCounterStore()
  useEffect(() => {
   getPost()
  }, [])
  

 return (
    <div>hello word
      <h1>{title}</h1>
      <h2>counter: {count}</h2>
      <button onClick={()=>increment(1)}>
        Increment 
      </button>
     <button onClick={() => multiply(2)}>
       Multiply
     </button>
     <button onClick={() => clearStore()}>
        clearStore
      </button>
      <hr></hr>
     {JSON.stringify(values.posts)}
    </div>
  )
}

export default App