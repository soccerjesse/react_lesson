import Circle from 'react-circle';
// import { useEffect, useReducer } from "react";
// import axios from "axios";
// import { skillReducer, initialState, actionTypes } from '../reducers/skillReducer';
import { requestStates } from '../constants';
import { useSkills } from '../customHooks/useSkills';

export const Skills = () => {
  const [sortedLanguageList, fetchRequestState, converseCountToPercentage] = useSkills();

  // const converseCountToPercentage = (count) => {
  //   if (count > 10) { return 100; }
  //   return count * 10;
  // };

  // const sortedLanguageList = () => (
  //   state.languageList.sort((firstLang, nextLang) =>  nextLang.count - firstLang.count)
  // )

  return (
    <div id="skills">
      <div className="container">
        <div className="heading">
          <h2>Skills</h2>
        </div>
        <div className="skills-container">
          {
            fetchRequestState === requestStates.loading && (
              <p className="description">取得中...</p>
            )
          }

          {
            fetchRequestState === requestStates.success && (
              sortedLanguageList().map((item, index) => (
                <div className="skill-item" key={index}>
                  <p><strong>{item.language}</strong></p>
                  <Circle
                    animate
                    progress={converseCountToPercentage(item.count)}
                  />
                </div>
              ))
            )
          }

          {
            fetchRequestState === requestStates.error && (
              <p className="description">エラーが発生しました</p>
            )
          }
        </div>
      </div>
    </div>
  );
};
