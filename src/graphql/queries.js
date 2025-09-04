/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSurvey = /* GraphQL */ `
  query GetSurvey($id: ID!) {
    getSurvey(id: $id) {
      id
      currentDoing
      mainGoal
      learningStyles
      interests
      personalGoal
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSurveys = /* GraphQL */ `
  query ListSurveys(
    $filter: ModelSurveyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSurveys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        currentDoing
        mainGoal
        learningStyles
        interests
        personalGoal
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
