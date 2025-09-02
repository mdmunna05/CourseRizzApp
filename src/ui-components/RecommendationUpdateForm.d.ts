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
export declare type RecommendationUpdateFormInputValues = {
    studentEmail?: string;
    courseID?: string;
    reason?: string;
    createdAt?: string;
    updatedAt?: string;
};
export declare type RecommendationUpdateFormValidationValues = {
    studentEmail?: ValidationFunction<string>;
    courseID?: ValidationFunction<string>;
    reason?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RecommendationUpdateFormOverridesProps = {
    RecommendationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    studentEmail?: PrimitiveOverrideProps<TextFieldProps>;
    courseID?: PrimitiveOverrideProps<TextFieldProps>;
    reason?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RecommendationUpdateFormProps = React.PropsWithChildren<{
    overrides?: RecommendationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    recommendation?: any;
    onSubmit?: (fields: RecommendationUpdateFormInputValues) => RecommendationUpdateFormInputValues;
    onSuccess?: (fields: RecommendationUpdateFormInputValues) => void;
    onError?: (fields: RecommendationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RecommendationUpdateFormInputValues) => RecommendationUpdateFormInputValues;
    onValidate?: RecommendationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RecommendationUpdateForm(props: RecommendationUpdateFormProps): React.ReactElement;
