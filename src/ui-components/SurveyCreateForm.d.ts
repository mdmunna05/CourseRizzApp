/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SurveyCreateFormInputValues = {
    currentDoing?: string;
    mainGoal?: string;
    learningStyles?: string[];
    interests?: string[];
    personalGoal?: string;
};
export declare type SurveyCreateFormValidationValues = {
    currentDoing?: ValidationFunction<string>;
    mainGoal?: ValidationFunction<string>;
    learningStyles?: ValidationFunction<string>;
    interests?: ValidationFunction<string>;
    personalGoal?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SurveyCreateFormOverridesProps = {
    SurveyCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    currentDoing?: PrimitiveOverrideProps<TextFieldProps>;
    mainGoal?: PrimitiveOverrideProps<TextFieldProps>;
    learningStyles?: PrimitiveOverrideProps<TextFieldProps>;
    interests?: PrimitiveOverrideProps<TextFieldProps>;
    personalGoal?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SurveyCreateFormProps = React.PropsWithChildren<{
    overrides?: SurveyCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SurveyCreateFormInputValues) => SurveyCreateFormInputValues;
    onSuccess?: (fields: SurveyCreateFormInputValues) => void;
    onError?: (fields: SurveyCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SurveyCreateFormInputValues) => SurveyCreateFormInputValues;
    onValidate?: SurveyCreateFormValidationValues;
} & React.CSSProperties>;
export default function SurveyCreateForm(props: SurveyCreateFormProps): React.ReactElement;
