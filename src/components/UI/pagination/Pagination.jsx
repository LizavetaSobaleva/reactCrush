import React from "react";
import { getPagesArray } from "../../../utils/pages";

const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = getPagesArray(totalPages);

  return (
    <div className="center pagination">
      {pagesArray.map((p) => (
        <button 
            className={page === p ? 'page current' : 'page'} 
            onClick={() => changePage(p)} 
            key={p} 

        >
          {p}
        </button>
        
      ))}
    </div>
  );
};

export default Pagination;
