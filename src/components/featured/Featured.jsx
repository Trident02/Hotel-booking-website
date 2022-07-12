import "./featured.css";

const Featured = () => {
    return(
        <div className="featured">
            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/37008203.webp?k=5308094deff49e9874a8df8f5881add3883f2f5256c5130769e48c776796e38f&o=&s=1" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Dublin</h1>
                    <h2>483 properties</h2>
                </div>
            </div>

            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/264720132.webp?k=4f1925615a0cb7cd6bd5ddde48a88692d31db7c9053be1ae9e3fbb0384d83af2&o=&s=1" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Austin</h1>
                    <h2>705 properties</h2>
                </div>
            </div>

            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/264602522.webp?k=3945bc712dd647ebeb5840f2e7bab96bbf8971fd85f23a34bd84ad31c9a1613d&o=&s=1" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Rome</h1>
                    <h2>2784 properties</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured