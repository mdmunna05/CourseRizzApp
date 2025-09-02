/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
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
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        category
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRecommendation = /* GraphQL */ `
  query GetRecommendation($id: ID!) {
    getRecommendation(id: $id) {
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
export const listRecommendations = /* GraphQL */ `
  query ListRecommendations(
    $filter: ModelRecommendationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecommendations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        studentEmail
        courseID
        reason
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const recommendationsByStudent = /* GraphQL */ `
  query RecommendationsByStudent(
    $studentEmail: String!
    $sortDirection: ModelSortDirection
    $filter: ModelRecommendationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    recommendationsByStudent(
      studentEmail: $studentEmail
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        studentEmail
        courseID
        reason
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const recommendationsByCourse = /* GraphQL */ `
  query RecommendationsByCourse(
    $courseID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRecommendationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    recommendationsByCourse(
      courseID: $courseID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        studentEmail
        courseID
        reason
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
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
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        name
        interests
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const studentByEmail = /* GraphQL */ `
  query StudentByEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    studentByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        email
        name
        interests
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
