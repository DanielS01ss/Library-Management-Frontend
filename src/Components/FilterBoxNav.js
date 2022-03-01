import React from "react";
import "../Styles/LeftNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownWideShort } from "@fortawesome/free-solid-svg-icons";

const FilterBox = ()=>{

    return(
        <div className="filter-box">
          <div className="py-5 px-3">
            <p className="text-xl font-bold"><FontAwesomeIcon icon={faArrowDownWideShort} className="px-3"/>Filter</p>
            <div className="px-5 py-3">
              <p className="text-lg font-bold">Category</p>
              <div className="new">
              <form>
                  <div className="form-group">
                      <input type="checkbox" id="romance"/>
                      <label for="romance">Romance</label>
                  </div>
                  <div className="form-group">
                      <input type="checkbox" id="health"/>
                      <label for="health">Health</label>
                  </div>
                  <div className="form-group">
                         <input type="checkbox" id="history"/>
                      <label for="history">History</label>
                    </div>
                    <div className="form-group">
                           <input type="checkbox" id="fantasy"/>
                        <label for="fantasy">Fantasy</label>
                    </div>
                  </form>
                </div>
              </div>
          </div>
        </div>
    );
};

export default FilterBox;
