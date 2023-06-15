import styled from "styled-components";

export default function ContactInput({
  labelTitle,
  type,
  id,
  htmlfor,
  name,
  placeholder,
}: {
  [key: string]: string;
}) {
  if (type === "textarea") {
    return (
      <StyledContactInputWrap className="inputWrap">
        <label htmlFor={htmlfor}>{labelTitle}</label>
        <textarea
          name={name}
          id={id}
          placeholder={placeholder}
          cols={30}
          rows={7}
        />
      </StyledContactInputWrap>
    );
  } else {
    return (
      <StyledContactInputWrap className="inputWrap">
        <label htmlFor={htmlfor}>{labelTitle}</label>
        <input type={type} id={id} name={name} placeholder={placeholder} />
      </StyledContactInputWrap>
    );
  }
}

const StyledContactInputWrap = styled.div`
  position: relative;
  & + .inputWrap {
    margin-top: 1.5rem;
  }
  label {
    position: absolute;
    background-color: var(--bgColor);
    padding: 0 0.5rem;
    top: 0;
    left: 1rem;
    transform: translate(0, -50%);
    font-size: var(--text-xxxsm);
    color: var(--gray);
  }
  input {
    box-sizing: border-box;
    width: 100%;
    padding: 1rem;
    background-color: var(--bgColor);
    border: 1px solid var(--gray);
    border-radius: 0.75rem;
    font-size: var(--text-sm);
    color: var(--dark);
    &::placeholder {
      color: var(--gray);
    }
    &:focus {
      outline: none;
      border: 1px solid rgb(28, 119, 255);
    }
  }
  textarea {
    box-sizing: border-box;
    width: 100%;
    padding: 1rem;
    background-color: var(--bgColor);
    border: 1px solid var(--gray);
    border-radius: 0.75rem;
    font-size: var(--text-sm);
    color: var(--dark);
    &::placeholder {
      color: var(--gray);
    }
    &:focus {
      outline: none;
      border: 1px solid rgb(28, 119, 255);
    }
  }
`;
