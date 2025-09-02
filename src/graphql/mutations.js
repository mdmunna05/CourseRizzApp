/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
      id
      title
      description
      category
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
      id
      title
      description
      category
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
      id
      title
      description
      category
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createRecommendation = /* GraphQL */ `
  mutation CreateRecommendation(
    $input: CreateRecommendationInput!
    $condition: ModelRecommendationConditionInput
  ) {
    createRecommendation(input: $input, condition: $condition) {
      id
      studentEmail
      courseID
      reason
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateRecommendation = /* GraphQL */ `
  mutation UpdateRecommendation(
    $input: UpdateRecommendationInput!
    $condition: ModelRecommendationConditionInput
  ) {
    updateRecommendation(input: $input, condition: $condition) {
      id
      studentEmail
      courseID
      reason
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteRecommendation = /* GraphQL */ `
  mutation DeleteRecommendation(
    $input: DeleteRecommendationInput!
    $condition: ModelRecommendationConditionInput
  ) {
    deleteRecommendation(input: $input, condition: $condition) {
      id
      studentEmail
      courseID
      reason
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
      id
      email
      name
      interests
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
      id
      email
      name
      interests
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
      id
      email
      name
      interests
      createdAt
      updatedAt
      __typename
    }
  }
`;
