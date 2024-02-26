import styled from "styled-components";

export const TransactionContainer = styled.main`
  width: 100%;
    max-width: 1120px;
    margin: 4rem auto 0;
    padding: 0  1.5rem;
`;



export const TransactionTable = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;

    /* margin-top: 1.5rem; */
    
    th {
        color: ${props => props.theme["gray-300"]};
        font-weight: 400;
        padding: 1rem 2rem;
        text-align: left;
        line-height: 1.5rem;
    }
    
    td {
        padding: 1rem 2rem;
        border: 0;
        background-color: ${props => props.theme["gray-700"]};
        color: ${props => props.theme["gray-300"]};
    
        &:first-child {
        border-radius: 6px 0 0 6px;
        color: ${props => props.theme["gray-300"]};
        }
    
        &:last-child {
        border-radius: 0 6px 6px 0;
        color: ${props => props.theme["gray-300"]};
        }
    
        &.deposit {
        color: ${props => props.theme["green-500"]};
        }
    
        &.withdraw {
        color: ${props => props.theme["red-500"]};
        }
    }

`;

interface PriceHighlightProps {
    type: "deposit" | "withdraw";
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
    color: ${props => props.type === "deposit" ? props.theme["green-500"] : props.theme["red-500"]};
`;