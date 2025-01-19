import PropTypes from "prop-types";
import styled from "styled-components";

const StyledDataItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 0.8rem 0;
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 500;

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-brand-600);
  }
`;

function DataItem({ icon, label, children }) {
  return (
    <StyledDataItem>
      <Label>
        {icon}
        <span>{label}</span>
      </Label>
      {children}
    </StyledDataItem>
  );
}

DataItem.propTypes = {
  icon: PropTypes.element.isRequired, // React element for the icon
  label: PropTypes.string.isRequired, // String for the label text
  children: PropTypes.node, // Can be any renderable React content
};

export default DataItem;
