import React from 'react'

const Controls = ({
    controlsStyle,
    handleControlsDropdown,
    onBlurControlsDropdown,
    onBlurCategoriesList,
    handleOpenCategoriesList,
    onSort,
    categoriesList,
    open,
    categoriesItems,
    onPriceFilter}) => {


    return (
        <div className={controlsStyle}
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

               {open && <div className="dropDownList-items">{categoriesItems}</div> }
               
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
    )
}

export default Controls