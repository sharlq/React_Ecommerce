import React ,{useState,useEffect,useRef} from 'react'
import Product from './product/product'
import MainControl from './controls/controls'

const Products = ({products,categorys,onAdd,searchTerm,openProductPage,onPriceFilter,onCategory,onSort}) => {
const [categoriesItems, setCategoriesItems] = useState([])
const [open, setOpen] = useState(false)
const [controlsStyle,setControlsStyle] = useState("mainControls")
const categoriesList = useRef()


useEffect(()=>{if(categorys){
     setCategoriesItems(()=>categorys.data.map((i)=><li className="" onClick={()=>onCategory(i.name)}>{i.name}</li> ))
}},[products,categorys])


const handleControlsDropdown = () =>{
    setControlsStyle("mainControls drop")
}
const onBlurControlsDropdown = () =>{
    setTimeout(()=>{
    if (document.activeElement !== categoriesList.current) {
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
     if(searchTerm==""){
         return val
     }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){return val}
 }).map(i  => <Product item={i} onAdd={onAdd} openProductPage={openProductPage} /> );
   
 
 
 return (
        <di className="home">
            <MainControl
             controlsStyle={controlsStyle}
             handleControlsDropdown={handleControlsDropdown} 
             onBlurControlsDropdown={onBlurControlsDropdown}
             onBlurCategoriesList={onBlurCategoriesList} 
             handleOpenCategoriesList={handleOpenCategoriesList} 
             onSort={onSort}
             categoriesList={categoriesList}
             open={open}
             categoriesItems={categoriesItems}
             onPriceFilter={onPriceFilter}
             />
        {/* <div className={controlsStyle}
         onClick={()=>handleControlsDropdown()}
         onBlur={()=>onBlurControlsDropdown()}
         tabIndex="0">
            <h4 className="title">Controls <i class="fas fa-caret-down arrow "></i></h4>
            <div className="categoryes">
                <div 
                ref={categoriesList}
                 onBlur={()=>onBlurCategoriesList()}
                 tabIndex="0">

                <div  className="dropDownList" 
                onClick={()=>handleOpenCategoriesList()}>
                <p>Categoryes</p> <i class="fas fa-caret-down arrow"></i>
                </div>

                {open && <div className="dropDownList-items">{categorysButtons}</div> }
                
                </div>
            </div>

            <div className="sorting">
            <h3>Sorting</h3>
            <button className="btn" onClick={()=>onSort("incremental")}>Sort by price incremental</button>
            <button className="btn" onClick={()=>onSort("decremental")}>Sort by price decremental</button>
            </div>

            <div className="sorting">
            <h3>Price filter</h3>
            <button className="btn" onClick={()=>onPriceFilter(100)}>Product &lt; 100$</button>
            <button className="btn" onClick={()=>onPriceFilter(1000)}>Product &lt; 1000$</button>
            </div>

        </div> */}
        <div className="products">
            
            {prod}
        </div>
        </di>
    )
}

export default Products
