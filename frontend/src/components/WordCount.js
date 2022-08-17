import React  from "react";

export const WordCount = ({ word_count }) => {
    return (
        <div>
          <p>Number of words: { word_count }</p>
        </div>
      );
}