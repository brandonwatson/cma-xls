/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { CMA } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CMAUpdateForm(props) {
  const {
    id: idProp,
    cMA,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    sk: "",
    client_name: "",
    cma_label: "",
  };
  const [sk, setSk] = React.useState(initialValues.sk);
  const [client_name, setClient_name] = React.useState(
    initialValues.client_name
  );
  const [cma_label, setCma_label] = React.useState(initialValues.cma_label);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = cMARecord
      ? { ...initialValues, ...cMARecord }
      : initialValues;
    setSk(cleanValues.sk);
    setClient_name(cleanValues.client_name);
    setCma_label(cleanValues.cma_label);
    setErrors({});
  };
  const [cMARecord, setCMARecord] = React.useState(cMA);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(CMA, idProp) : cMA;
      setCMARecord(record);
    };
    queryData();
  }, [idProp, cMA]);
  React.useEffect(resetStateValues, [cMARecord]);
  const validations = {
    sk: [{ type: "Required" }],
    client_name: [],
    cma_label: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
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
          sk,
          client_name,
          cma_label,
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
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            CMA.copyOf(cMARecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CMAUpdateForm")}
      {...rest}
    >
      <TextField
        label="Sk"
        isRequired={true}
        isReadOnly={false}
        value={sk}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sk: value,
              client_name,
              cma_label,
            };
            const result = onChange(modelFields);
            value = result?.sk ?? value;
          }
          if (errors.sk?.hasError) {
            runValidationTasks("sk", value);
          }
          setSk(value);
        }}
        onBlur={() => runValidationTasks("sk", sk)}
        errorMessage={errors.sk?.errorMessage}
        hasError={errors.sk?.hasError}
        {...getOverrideProps(overrides, "sk")}
      ></TextField>
      <TextField
        label="Client name"
        isRequired={false}
        isReadOnly={false}
        value={client_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sk,
              client_name: value,
              cma_label,
            };
            const result = onChange(modelFields);
            value = result?.client_name ?? value;
          }
          if (errors.client_name?.hasError) {
            runValidationTasks("client_name", value);
          }
          setClient_name(value);
        }}
        onBlur={() => runValidationTasks("client_name", client_name)}
        errorMessage={errors.client_name?.errorMessage}
        hasError={errors.client_name?.hasError}
        {...getOverrideProps(overrides, "client_name")}
      ></TextField>
      <TextField
        label="Cma label"
        isRequired={false}
        isReadOnly={false}
        value={cma_label}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sk,
              client_name,
              cma_label: value,
            };
            const result = onChange(modelFields);
            value = result?.cma_label ?? value;
          }
          if (errors.cma_label?.hasError) {
            runValidationTasks("cma_label", value);
          }
          setCma_label(value);
        }}
        onBlur={() => runValidationTasks("cma_label", cma_label)}
        errorMessage={errors.cma_label?.errorMessage}
        hasError={errors.cma_label?.hasError}
        {...getOverrideProps(overrides, "cma_label")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || cMA)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || cMA) || Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
