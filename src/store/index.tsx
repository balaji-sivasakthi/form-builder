import { useContext } from "react"
import { Context } from "../App"

export default function useStore(){
    const context = useContext(Context)
    if(!context){
        return []
    }
    return [context.store, context.setStore]
}