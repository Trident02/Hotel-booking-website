import "./searchItem.css";

const SearchItem = () => {
    return(
       <div className="searchItem">
          <img src="https://cf.bstatic.com/xdata/images/hotel/square600/236602105.webp?k=6cefeda14e757cf39bb69805531e05ed22b5e1d95f8299c83a573f759a7b8cd0&o=&s=1" alt="" className="siImg" />
          <div className="siDesc">
              <h1 className="siTitle">Ok Hostel Madrid</h1>
              <span className="siDistance">0.7 km from center</span>
              <span className="siTaxiOp">Subway Access</span>
              <span className="siSubTitle">
              Featuring free WiFi throughout the property and set 656 feet from La Latina Metro Station, Ok Hostel Madrid offers accommodations in Madrid. The property offers a bar and shared kitchen.
              </span>
              <span className="siFeatures">
                Entire studio • 1 Bathroom • 21 sq.mt • 1 Full Bed
              </span>
              <span className="siCancelOp">Free Cancellation</span>
              <span className="siCancelOpSubtitle">
                You can cancel later, so lock in this great pice today !
              </span>
          </div>
          <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>

            <div className="siDetailTexts">
                <span className="siPrice">
                ₹ 6,168 
                </span>
                <span className="siTaxOp">
                   Includes taxes and fees
                </span>
                <button className="siCheckButton" >See Availability</button>
            </div>
          </div>
       </div>
    )
}

export default SearchItem