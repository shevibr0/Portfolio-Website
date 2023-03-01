import React, { useState } from 'react'
import "./portfolio.css"
import Menu from './Menu';

const Portfolio = () => {
  const[items,setItems]=useState(Menu);
  const filterItem= (categoryItem)=>{
    const updateItems = Menu.filter((curelem)=>{
      return curelem.category==categoryItem
    })
    setItems(updateItems)
  }

  return (
    <section className='work container section' id="portfolio">
      <h2 className="section__title">Recent Projects</h2>

      <div className="work__filters">
        <span className="work__item" onClick={()=>setItems(Menu)}>Everything</span>
        <span className="work__item" onClick={()=>filterItem("Basic Projects")}>Basic Projects</span>
        <span className="work__item" onClick={()=>filterItem("Advanced projects")}>Advanced projects</span>
        <span className="work__item"  onClick={()=>filterItem("Large-Scale Projects")}>Large-Scale Projects</span>
        
        </div>    
         <div className="work__container grid">
          {items.map((elem)=>{
            const{id,image,title,category}=elem
            return(
              <div className="work__card" key={id}>
                <div className="work__thumbnail">
                  <img src={image} alt="" className="work__img" />
                  <div className="work__mask"></div>
                </div>
                <span className="work__category">{category}</span>
                <h3 className="work__title">{title}</h3>
                <a href="https://github.com/shevibr0/Personal-blog-2" className="work__button">
                  <i className="icon-link work__button-icon"></i>
                </a>
              </div>
            )
          })}
         </div>
    </section>
  )
}

export default Portfolio