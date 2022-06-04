import styled from "styled-components";

export const StyledCountrySearch = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 1.25rem 2.5rem;
  gap: 0.875rem;
  svg {
    display: block;
  }
`;

export const StyledCountrySearchInput = styled.input`
  flex-grow: 1;
  border: none;
  font-size: 0.75rem;
  color: hsl(0, 0%, 52%);
`;
