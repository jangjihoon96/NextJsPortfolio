"use client";
import styled from "styled-components";
import { PortfolioFilterType } from "./data";
import { useEffect, useState } from "react";

export default function WorksNav({
  portfolioFilter,
  activeFilter,
  onFilterChange,
}: {
  portfolioFilter: PortfolioFilterType[];
  activeFilter: string;
  onFilterChange: (filterName: string) => void;
}) {
  return (
    <WorksNavContainer>
      {portfolioFilter.map((item) => {
        return (
          <li key={item.id}>
            <button
              className={activeFilter === item.name ? "active" : ""}
              onClick={() => onFilterChange(item.name)}
            >
              {item.name.replace(/^[a-z]/, (char) => char.toUpperCase())}
            </button>
          </li>
        );
      })}
    </WorksNavContainer>
  );
}

const WorksNavContainer = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
  li {
    button {
      background-color: #efefef;
      padding: 0.5rem 1.25rem;
      border-radius: 0.75rem;
      border: none;
      font-weight: 500;
      font-size: var(--text-md);
      cursor: pointer;
      &:hover {
        background-color: #dcdcdc;
      }
      &.active {
        background-color: var(--dark);
        color: var(--white);
      }
    }
  }
  @media screen and (max-width: 540px) {
    box-sizing: border-box;
    padding: 0 1.5rem;
    li {
      button {
        padding: 0.5rem 1.25rem;
        border-radius: 0.5rem;
        font-size: var(--text-sm);
      }
    }
  }
  @media screen and (max-width: 414px) {
    flex-flow: row wrap;
    gap: 0.5rem;
    li {
      button {
        font-size: var(--text-xsm);
      }
    }
  }
`;
