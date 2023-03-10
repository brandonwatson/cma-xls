/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CMA } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CMAUpdateFormInputValues = {
    sk?: string;
    client_name?: string;
    cma_label?: string;
};
export declare type CMAUpdateFormValidationValues = {
    sk?: ValidationFunction<string>;
    client_name?: ValidationFunction<string>;
    cma_label?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CMAUpdateFormOverridesProps = {
    CMAUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    sk?: PrimitiveOverrideProps<TextFieldProps>;
    client_name?: PrimitiveOverrideProps<TextFieldProps>;
    cma_label?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CMAUpdateFormProps = React.PropsWithChildren<{
    overrides?: CMAUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    cMA?: CMA;
    onSubmit?: (fields: CMAUpdateFormInputValues) => CMAUpdateFormInputValues;
    onSuccess?: (fields: CMAUpdateFormInputValues) => void;
    onError?: (fields: CMAUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CMAUpdateFormInputValues) => CMAUpdateFormInputValues;
    onValidate?: CMAUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CMAUpdateForm(props: CMAUpdateFormProps): React.ReactElement;
