/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse($filter: ModelSubscriptionCourseFilterInput) {
    onCreateCourse(filter: $filter) {
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
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse($filter: ModelSubscriptionCourseFilterInput) {
    onUpdateCourse(filter: $filter) {
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
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse($filter: ModelSubscriptionCourseFilterInput) {
    onDeleteCourse(filter: $filter) {
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
export const onCreateRecommendation = /* GraphQL */ `
  subscription OnCreateRecommendation(
    $filter: ModelSubscriptionRecommendationFilterInput
  ) {
    onCreateRecommendation(filter: $filter) {
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
export const onUpdateRecommendation = /* GraphQL */ `
  subscription OnUpdateRecommendation(
    $filter: ModelSubscriptionRecommendationFilterInput
  ) {
    onUpdateRecommendation(filter: $filter) {
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
export const onDeleteRecommendation = /* GraphQL */ `
  subscription OnDeleteRecommendation(
    $filter: ModelSubscriptionRecommendationFilterInput
  ) {
    onDeleteRecommendation(filter: $filter) {
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
export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent(
    $filter: ModelSubscriptionStudentFilterInput
    $email: String
  ) {
    onCreateStudent(filter: $filter, email: $email) {
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
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent(
    $filter: ModelSubscriptionStudentFilterInput
    $email: String
  ) {
    onUpdateStudent(filter: $filter, email: $email) {
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
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent(
    $filter: ModelSubscriptionStudentFilterInput
    $email: String
  ) {
    onDeleteStudent(filter: $filter, email: $email) {
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
