import useStore from "../store";

function FormPreview(){
    const [store, setStore] =  useStore()
    console.log(store)
    return <div>Preview</div>
}
export default FormPreview;