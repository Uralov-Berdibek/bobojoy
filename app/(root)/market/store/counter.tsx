import {create} from 'zustand'

type Count={
    count:number;
    increment:()=> void;
    decrement:()=>void;
}


const useCount = create <Count>((set)=>({
    count:1,
    increment:()=>set((state:any)=>({
      count: state.count +1
    })),
    decrement:()=>set((state:any)=>({
        count: state.count > 1 ? state.count - 1 : 1
      }))
}))

export default useCount