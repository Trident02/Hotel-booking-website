import "./featuredProperties.css";

const FeaturedProperties = () => {
    return (
        <div className="fp">
          <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max500/38437078.jpg?k=241519692574af90306f0dbec0121eacfddc9a183df3ea34a7b7c8f2b4f5febb&o=" alt="" className="fpImg" />
            <span className="fpName">Unique Design Apartments</span>
            <span className="fpCity">Lisbon</span>
            <span className="fpPrice">Starting from ₹ 43,663</span>
            <div className="fpRating">
                <button>9.4</button>
                <span>Wonderful</span>
            </div>
          </div>  

          <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max500/48243386.jpg?k=9891532fb6d24d301b65659650e79812c426f46de905fba30bb8a8c5fea52d85&o=" alt="" className="fpImg" />
            <span className="fpName">LivinParis - Luxury 3 Grands</span>
            <span className="fpCity">Paris</span>
            <span className="fpPrice">Starting from ₹ 19,690</span>
            <div className="fpRating">
                <button>7.7</button>
                <span>Good</span>
            </div>
          </div> 

          <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max500/62261541.jpg?k=3ef9943ed49b4959b2cb9fbbb4f75ee2a7a6c9460bbfd7634b6fcd23674863f3&o=" alt="" className="fpImg" />
            <span className="fpName">Midtown Apartments</span>
            <span className="fpCity">Barcelona</span>
            <span className="fpPrice">Starting from ₹ 24,190</span>
            <div className="fpRating">
                <button>9.4</button>
                <span>Wonderful</span>
            </div>
          </div> 

          <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max500/109169996.jpg?k=82bee70e09800d9254479024406baebaf45c1482c6627ef44ee35e1df5110dc5&o=" alt="" className="fpImg" />
            <span className="fpName">Terrace Apartments</span>
            <span className="fpCity">Budapest</span>
            <span className="fpPrice">Starting from ₹ 20,803</span>
            <div className="fpRating">
                <button>9.6</button>
                <span>Exceptional</span>
            </div>
          </div> 

        </div>
    )
}

export default FeaturedProperties