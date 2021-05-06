import React from 'react'

const Controls = ({
    controlsStyle,
    handleControlsDropdown,
    onBlurControlsDropdown,
    onBlurCategoriesList,
    handleOpenCategoriesList,
    onSort,
    refsArray,
    open,
    categoriesItems,
    onPriceFilter,
    onViewAll}) => {


    return (
        <div className={controlsStyle}
        key="controls1"
        ref={(element)=>{if(!refsArray.current.includes(element)&&element){refsArray.current.push(element)}}}
        onClick={()=>handleControlsDropdown()}
        onBlur={()=>onBlurControlsDropdown()}
        tabIndex="0">
           <h4 className="title">Controls <i class="fas fa-caret-down arrow "></i></h4>
           <div className="categoryes">
               <div 
               key="controls2"
               ref={(element)=>{if(!refsArray.current.includes(element)&&element){refsArray.current.push(element)}}}
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
           <button key="controls3" ref={(element)=>{if(!refsArray.current.includes(element)&&element){refsArray.current.push(element)}}} 
           className="btn" onClick={()=>onSort("decremental")}>Sort by price decremental</button>
           
           <button key="controls4" ref={(element)=>{if(!refsArray.current.includes(element)&&element){refsArray.current.push(element)}}}
            className="btn" onClick={()=>onSort("incremental")}>Sort by price incremental</button>
           </div>

           <div className="sorting">
           <h3>Price filter</h3>
           <button key="controls5" ref={(element)=>{if(!refsArray.current.includes(element)&&element){refsArray.current.push(element)}}}
            className="btn" onClick={()=>onPriceFilter(100)}>Product &lt; 100$</button>

           <button key="controls6" ref={(element)=>{if(!refsArray.current.includes(element)&&element){refsArray.current.push(element)}}}
            className="btn" onClick={()=>onPriceFilter(1000)}>Product &lt; 1000$</button>

           <button key="controls7" ref={(element)=>{if(!refsArray.current.includes(element)&&element){refsArray.current.push(element)}}}
            className="btn " onClick={()=>onViewAll()}>View All</button>
           </div>
           
       </div>
    )
}

export default Controls
