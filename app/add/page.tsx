"use client";
import styled from "styled-components";

export default function Add() {
  return (
    <StyledAddContainer>
      <form action="/api/works/addWorks" method="POST">
        <input type="text" name="id" placeholder="Id (ex. 1,2,3...)" />
        <input type="text" name="img" placeholder="Img src" />
        <input type="text" name="alt" placeholder="Img alt" />
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="desc" placeholder="Description" />
        <input type="text" name="github" placeholder="Github address" />
        <input type="text" name="demo" placeholder="Demo address" />
        <input
          type="text"
          name="cartagorize"
          placeholder="Cartagorize (team, individual, toy)"
        />
        <button type="submit">Add Data</button>
      </form>
    </StyledAddContainer>
  );
}

const StyledAddContainer = styled.div`
  padding: 150px 0;
  form {
    display: flex;
    flex-flow: column nowrap;
    max-width: 400px;
    margin: 0 auto;
    padding: 0 24px;
    box-sizing: border-box;
    gap: 12px;
    input {
      font-size: var(--text-xxsm);
      border: 1px solid var(--lightgray);
      padding: 10px 12px;
      color: var(--dark);
      &::placeholder {
        color: var(--gray);
      }
    }
    button {
      border: none;
      background-color: var(--dark);
      color: var(--white);
      font-size: var(--text-xxsm);
      font-weight: 300;
      padding: 16px 0;
      cursor: pointer;
    }
  }
`;
