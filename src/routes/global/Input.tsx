import { Visibility } from "@mui/icons-material";
import styles from "../../styles/routes/global/Input.module.scss";
import { useRef, useState } from "react";

interface Props {
  type: string;
  placeholder?: string;
  defaultValue?: string;
  svg?: React.ReactElement;
  id?: string;
  label?: string;
  className?: string;
  disabled?: boolean;
  autoComplete?: "on" | "off";
  isClientError?: boolean;
  isServerError?: boolean;
  clientErrorMessage?: string;
  serverErrorMessage?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlurCapture?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
}

const Input = ({
  type,
  placeholder,
  defaultValue,
  svg,
  id,
  label,
  className,
  disabled,
  autoComplete,
  isClientError,
  isServerError,
  clientErrorMessage,
  serverErrorMessage,
  onChange,
  onBlurCapture,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [visibilityOn, setVisibilityOn] = useState(false);
  
  const handleVisibility = () => {
    setVisibilityOn(state => !state);
  }
  
  return (
    <div className={className}>
      <div className={styles.labelContainer}>
        {label && <label htmlFor={id}>{label}</label>}
        <span className={styles.error}>
          {isClientError
            ? clientErrorMessage
            : isServerError
            ? serverErrorMessage
            : ""}
        </span>
      </div>
      <div className={styles.inputContainer}>
        {svg && svg}
        <input
          type={id == "password" && visibilityOn ? "text" : type}
          name={id}
          id={id}
          ref={inputRef}
          placeholder={placeholder}
          defaultValue={defaultValue ? defaultValue : ""}
          disabled={disabled}
          autoComplete={autoComplete || "on"}
          className={isClientError || isServerError ? styles.inputError : ""}
          onChange={onChange}
          onBlurCapture={onBlurCapture}
        />
        {id == "password" && (<Visibility className={`${visibilityOn ? styles.darken : ""} ${styles.visibleIcon}` } onClick={handleVisibility} />)}
      </div>
    </div>
  );
};

export default Input;
