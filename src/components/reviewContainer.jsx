import React from "react";
import { colors } from "../colors";
import { questionsJson } from "../questionsJson";
import {Text, Heading} from '@chakra-ui/react'

const QuestionComponent = ({question, response}) => {
  return(
    <div>
      <Heading size='md'>{question}</Heading>
      {Array.isArray(response) ? (
        response.map((item, index) => (
          <Text fontSize='md' key={index}>{item}</Text>
        ))
      ) : (
        <Text fontSize='md'>{response || "N/A"}</Text>
    )}
  </div>
  )
}

const ReviewContainer = ({survey}) => {
  
  return (
    <div className="review-container" style={{ maxHeight: '95%', overflowY: 'auto'}}>
      <div style={{
        paddingBottom: "1rem"
      }}>
        <Heading size='xl'>Survey Entry Responses:</Heading>
      </div>
      
      {Object.keys(questionsJson).map((questionKey) => (
        <QuestionComponent
          key={questionKey}
          question={questionsJson[questionKey]}
          response={survey[questionKey]}
        />
      ))}
    </div>
  );
};

export default ReviewContainer;
