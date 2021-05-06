import React ,{useState,useEffect,useRef} from 'react'
import Product from './product/product'
import MainControl from './controls/controls'

const Products = ({
    products,
    categorys,
    onAdd,
    searchTerm,
    openProductPage,
    onPriceFilter,
    onCategory,
    onSort,
    onViewAll
    }) => {

const [categoriesItems, setCategoriesItems] = useState([])
const [open, setOpen] = useState(false)
const [controlsStyle,setControlsStyle] = useState("mainControls")
const refsArray = useRef([])



useEffect(()=>{if(categorys){
     setCategoriesItems(()=>categorys.data.map((i)=><li key={i.slug} className="" onClick={()=>onCategory(i.name)}>{i.name}</li> ))
}},[products,categorys,onCategory])


const handleControlsDropdown = () =>{
    setControlsStyle("mainControls drop")
}
const onBlurControlsDropdown = () =>{
    setTimeout(()=>{
    if (!refsArray.current.includes(document.activeElement)) {
        setControlsStyle("mainControls")      }
    },50)       
}
const onBlurCategoriesList = () => {
    setOpen(false)
}
const handleOpenCategoriesList = () =>{
    setOpen((prev)=>!prev)
}


 const prod =products.filter((val)=>{
     if(searchTerm===""){
         return val
     }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){return val}
 }).map(i  => <Product key={i.id} item={i} onAdd={onAdd} openProductPage={openProductPage} /> );
   
 console.log(refsArray.current,refsArray.current.includes(document.activeElement))
 
 return (
        <div className="home">
            <MainControl
             controlsStyle={controlsStyle}
             handleControlsDropdown={handleControlsDropdown} 
             onBlurControlsDropdown={onBlurControlsDropdown}
             onBlurCategoriesList={onBlurCategoriesList} 
             handleOpenCategoriesList={handleOpenCategoriesList} 
             onSort={onSort}
             refsArray={refsArray}
             open={open}
             onPriceFilter={onPriceFilter}
             categoriesItems={categoriesItems}
             onViewAll={onViewAll}
             />
        
        <div className="products">
            
            {prod}
        </div>
        </div>
    )
}

export default Products
