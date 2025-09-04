/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSurvey = /* GraphQL */ `
  mutation CreateSurvey(
    $input: CreateSurveyInput!
    $condition: ModelSurveyConditionInput
  ) {
    createSurvey(input: $input, condition: $condition) {
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
export const updateSurvey = /* GraphQL */ `
  mutation UpdateSurvey(
    $input: UpdateSurveyInput!
    $condition: ModelSurveyConditionInput
  ) {
    updateSurvey(input: $input, condition: $condition) {
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
export const deleteSurvey = /* GraphQL */ `
  mutation DeleteSurvey(
    $input: DeleteSurveyInput!
    $condition: ModelSurveyConditionInput
  ) {
    deleteSurvey(input: $input, condition: $condition) {
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
