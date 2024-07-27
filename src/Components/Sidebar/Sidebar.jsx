import React from 'react'
import './sidebar.css'


export const Sidebar = ({sidebar, category, setCategory}) => {
  return (
    <div className={`sidebar ${sidebar ? '' : 'small-sidebar'}`}>
        <div className="shortcut-links">
            <div className={`side-link ${category === 0 ? 'active' : ''}`} onClick={() => setCategory(0)}>
                <img src="./home.png" alt="" /><p>Home</p>
            </div>
            <div className={`side-link ${category === 20 ? 'active' : ''}`} onClick={() => setCategory(20)}>
                <img src="./game_icon.png" alt="" /><p>Gaming</p>
            </div>
            <div className={`side-link ${category === 2 ? 'active' : ''}`} onClick={() => setCategory(2)}>
                <img src="./automobiles.png" alt="" /><p>Automobiles</p>
            </div>
            <div className={`side-link ${category === 17 ? 'active' : ''}`} onClick={() => setCategory(17)}>
                <img src="./sports.png" alt="" /><p>Sports</p>
            </div>
            <div className={`side-link ${category === 24 ? 'active' : ''}`} onClick={() => setCategory(24)}>
                <img src="./entertainment.png" alt="" /><p>Entertainment</p>
            </div>
            <div className={`side-link ${category === 28 ? 'active' : ''}`} onClick={() => setCategory(28)}>
                <img src="./tech.png" alt="" /><p>Technology</p>
            </div>
            <div className={`side-link ${category === 10 ? 'active' : ''}`} onClick={() => setCategory(10)}>
                <img src="./music.png" alt="" /><p>Music</p>
            </div>
            <div className={`side-link ${category === 22 ? 'active' : ''}`} onClick={() => setCategory(22)}>
                <img src="./blogs.png" alt="" /><p>Blogs</p>
            </div>
            <div className={`side-link ${category === 25 ? 'active' : ''}`} onClick={() => setCategory(25)}>
                <img src="./news.png" alt="" /><p>News</p>
            </div>
            <hr />
        </div>
        <div className="subscribed-list">
            <h3>Subscribed</h3>
            <div className="side-link">
                <img src="jack.png" alt="" /><p>PewDiePie</p>
            </div>
            <div className="side-link">
                <img src="simon.png" alt="" /><p>Mr.Beast</p>
            </div>
            <div className="side-link">
                <img src="megan.png" alt="" /><p>5 minutes crafts</p>
            </div>
            <div className="side-link">
                <img src="tom.png" alt="" /><p>Justin Beiber</p>
            </div>
            <div className="side-link">
                <img src="cameron.png" alt="" /><p>Nas Daily</p>
            </div>
        </div>
    </div>
  )
}
