import React ,{useState,useEffect} from 'react'
import Product from './product/product'


const Products = ({products,categorys,onAdd,searchTerm,openProductPage,onPriceFilter,onCategory,onSort}) => {
const [categorysButtons, setCategorysButtons] = useState([])
const [open, setOpen] = useState(false)

useEffect(()=>{if(categorys){
     setCategorysButtons(()=>categorys.data.map((i)=><li className="" onClick={()=>onCategory(i.name)}>{i.name}</li> ))
}},[products,categorys])


    


 const prod =products.filter((val)=>{
     if(searchTerm==""){
         return val
     }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){return val}
 }).map(i  => <Product item={i} onAdd={onAdd} openProductPage={openProductPage} /> );
   
 
 
 return (
        <di className="home">
        <div className="mainControls">
            <div className="categoryes">
                <div onBlur={()=>setOpen(false)} tabIndex="0">

                <div className="dropDownList" 
                onClick={()=>setOpen((prev)=>!prev)}>
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

        </div>
        <div className="products">
            
            {prod}
        </div>
        </di>
    )
}

export default Products
