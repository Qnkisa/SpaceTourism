import React,{useState} from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div className='home-container'>
      <div className="home-container-helper">
        <div className="home-container-content">
          <h1>So, you want to travel to <br /> <span>Space</span></h1>
          <p>Let&#39;s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
        <div className="home-container-cta">
          <Link to="/destination">Explore</Link>
        </div>
      </div>
    </div>
  )
}
