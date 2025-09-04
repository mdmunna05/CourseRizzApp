/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createSurvey } from "../graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function SurveyCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    currentDoing: "",
    mainGoal: "",
    learningStyles: [],
    interests: [],
    personalGoal: "",
  };
  const [currentDoing, setCurrentDoing] = React.useState(
    initialValues.currentDoing
  );
  const [mainGoal, setMainGoal] = React.useState(initialValues.mainGoal);
  const [learningStyles, setLearningStyles] = React.useState(
    initialValues.learningStyles
  );
  const [interests, setInterests] = React.useState(initialValues.interests);
  const [personalGoal, setPersonalGoal] = React.useState(
    initialValues.personalGoal
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCurrentDoing(initialValues.currentDoing);
    setMainGoal(initialValues.mainGoal);
    setLearningStyles(initialValues.learningStyles);
    setCurrentLearningStylesValue("");
    setInterests(initialValues.interests);
    setCurrentInterestsValue("");
    setPersonalGoal(initialValues.personalGoal);
    setErrors({});
  };
  const [currentLearningStylesValue, setCurrentLearningStylesValue] =
    React.useState("");
  const learningStylesRef = React.createRef();
  const [currentInterestsValue, setCurrentInterestsValue] = React.useState("");
  const interestsRef = React.createRef();
  const validations = {
    currentDoing: [{ type: "Required" }],
    mainGoal: [{ type: "Required" }],
    learningStyles: [],
    interests: [],
    personalGoal: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          currentDoing,
          mainGoal,
          learningStyles,
          interests,
          personalGoal,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createSurvey.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "SurveyCreateForm")}
      {...rest}
    >
      <TextField
        label="Current doing"
        isRequired={true}
        isReadOnly={false}
        value={currentDoing}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              currentDoing: value,
              mainGoal,
              learningStyles,
              interests,
              personalGoal,
            };
            const result = onChange(modelFields);
            value = result?.currentDoing ?? value;
          }
          if (errors.currentDoing?.hasError) {
            runValidationTasks("currentDoing", value);
          }
          setCurrentDoing(value);
        }}
        onBlur={() => runValidationTasks("currentDoing", currentDoing)}
        errorMessage={errors.currentDoing?.errorMessage}
        hasError={errors.currentDoing?.hasError}
        {...getOverrideProps(overrides, "currentDoing")}
      ></TextField>
      <TextField
        label="Main goal"
        isRequired={true}
        isReadOnly={false}
        value={mainGoal}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              currentDoing,
              mainGoal: value,
              learningStyles,
              interests,
              personalGoal,
            };
            const result = onChange(modelFields);
            value = result?.mainGoal ?? value;
          }
          if (errors.mainGoal?.hasError) {
            runValidationTasks("mainGoal", value);
          }
          setMainGoal(value);
        }}
        onBlur={() => runValidationTasks("mainGoal", mainGoal)}
        errorMessage={errors.mainGoal?.errorMessage}
        hasError={errors.mainGoal?.hasError}
        {...getOverrideProps(overrides, "mainGoal")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              currentDoing,
              mainGoal,
              learningStyles: values,
              interests,
              personalGoal,
            };
            const result = onChange(modelFields);
            values = result?.learningStyles ?? values;
          }
          setLearningStyles(values);
          setCurrentLearningStylesValue("");
        }}
        currentFieldValue={currentLearningStylesValue}
        label={"Learning styles"}
        items={learningStyles}
        hasError={errors?.learningStyles?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("learningStyles", currentLearningStylesValue)
        }
        errorMessage={errors?.learningStyles?.errorMessage}
        setFieldValue={setCurrentLearningStylesValue}
        inputFieldRef={learningStylesRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Learning styles"
          isRequired={false}
          isReadOnly={false}
          value={currentLearningStylesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.learningStyles?.hasError) {
              runValidationTasks("learningStyles", value);
            }
            setCurrentLearningStylesValue(value);
          }}
          onBlur={() =>
            runValidationTasks("learningStyles", currentLearningStylesValue)
          }
          errorMessage={errors.learningStyles?.errorMessage}
          hasError={errors.learningStyles?.hasError}
          ref={learningStylesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "learningStyles")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              currentDoing,
              mainGoal,
              learningStyles,
              interests: values,
              personalGoal,
            };
            const result = onChange(modelFields);
            values = result?.interests ?? values;
          }
          setInterests(values);
          setCurrentInterestsValue("");
        }}
        currentFieldValue={currentInterestsValue}
        label={"Interests"}
        items={interests}
        hasError={errors?.interests?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("interests", currentInterestsValue)
        }
        errorMessage={errors?.interests?.errorMessage}
        setFieldValue={setCurrentInterestsValue}
        inputFieldRef={interestsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Interests"
          isRequired={false}
          isReadOnly={false}
          value={currentInterestsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.interests?.hasError) {
              runValidationTasks("interests", value);
            }
            setCurrentInterestsValue(value);
          }}
          onBlur={() => runValidationTasks("interests", currentInterestsValue)}
          errorMessage={errors.interests?.errorMessage}
          hasError={errors.interests?.hasError}
          ref={interestsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "interests")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Personal goal"
        isRequired={false}
        isReadOnly={false}
        value={personalGoal}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              currentDoing,
              mainGoal,
              learningStyles,
              interests,
              personalGoal: value,
            };
            const result = onChange(modelFields);
            value = result?.personalGoal ?? value;
          }
          if (errors.personalGoal?.hasError) {
            runValidationTasks("personalGoal", value);
          }
          setPersonalGoal(value);
        }}
        onBlur={() => runValidationTasks("personalGoal", personalGoal)}
        errorMessage={errors.personalGoal?.errorMessage}
        hasError={errors.personalGoal?.hasError}
        {...getOverrideProps(overrides, "personalGoal")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
