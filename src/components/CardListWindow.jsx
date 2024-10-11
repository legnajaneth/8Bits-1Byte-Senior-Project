import React, { useEffect, useState } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import { v4 as uuidv4 } from 'uuid';

export default function CardListWindow({ onCardClick, searchResults }) {

  const cards = searchResults.length;

  const windowStyle = {
    display: "flex",
    height: "46.4375rem",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1.563rem",
    maxWidth: "30rem"
  };
  const cardListStyle = {
    display: "flex",
    width: "30rem",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1.563rem",
    overflowY: "scroll",
    overflowX: "hidden"
  }

  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  useEffect(() => {
    setSelectedCardIndex(0);
    onCardClick(searchResults);
  }, [searchResults]);

  const cardsArray = searchResults.map((result, index) => {
    const uuid = uuidv4();
    return(
      <Card
      key={uuid}
      id={result.question1 || "N/A"}
      title={result.question6 || "N/A"}
      location={result.question7 || "N/A"}
      duration={result.question11 || "Pay: N/A"}
      onClick={() => handleCardClick(index)} 
      isSelected={index === selectedCardIndex}
     />
    )
   
  })
    
    
  

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(51);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = cardsArray.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleCardClick = (index) => {
    if (selectedCardIndex !== index) {
      setSelectedCardIndex(index);
      onCardClick(searchResults[index]); 
    }
  };

  return (
    <div style={windowStyle}>
      <div style={cardListStyle}>
        {currentPosts}
      </div>
      
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={cards}
        paginate={paginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

