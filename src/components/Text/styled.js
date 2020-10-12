import styled from 'styled-components';

export const Text = styled.div`
  display: ${({ theme, variant }) => theme.text.getDisplay(variant)};
  justify-content: ${({ variant }) =>
    variant === 'heading' || variant === 'subtitle' ? 'center' : 'none'};
  align-items: ${({ variant }) =>
    variant === 'heading' || variant === 'subtitle' ? 'center' : 'none'};
  color: ${({ theme, variant }) => theme.text.getColor(variant)};
  font-size: ${({ theme, variant }) => theme.text.getSize(variant)};
  font-weight: ${({ theme, variant }) => theme.text.getWeight(variant)};
  margin-bottom: ${({ theme }) => theme.spacing.medium};

  & > i {
    margin-right: ${({ theme }) => theme.spacing.default};
  }
`;
