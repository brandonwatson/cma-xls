/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CMACreateFormInputValues = {
    sk?: string;
    client_name?: string;
    cma_label?: string;
};
export declare type CMACreateFormValidationValues = {
    sk?: ValidationFunction<string>;
    client_name?: ValidationFunction<string>;
    cma_label?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CMACreateFormOverridesProps = {
    CMACreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    sk?: PrimitiveOverrideProps<TextFieldProps>;
    client_name?: PrimitiveOverrideProps<TextFieldProps>;
    cma_label?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CMACreateFormProps = React.PropsWithChildren<{
    overrides?: CMACreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CMACreateFormInputValues) => CMACreateFormInputValues;
    onSuccess?: (fields: CMACreateFormInputValues) => void;
    onError?: (fields: CMACreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CMACreateFormInputValues) => CMACreateFormInputValues;
    onValidate?: CMACreateFormValidationValues;
} & React.CSSProperties>;
export default function CMACreateForm(props: CMACreateFormProps): React.ReactElement;
