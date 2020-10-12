import styled from 'styled-components';

const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.size.text.heading};
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryTextColor};

  & > i {
    margin-right: ${({ theme }) => theme.spacing.default};
  }
`;

const Title = styled.div`
  color: ${({ theme }) => theme.colors.primaryTextColor};
  font-size: ${({ theme, small }) =>
    small ? theme.size.text.default : theme.size.text.large};
  font-weight: bold;
  margin-bottom: ${({ theme, small }) =>
    small ? theme.spacing.small : theme.spacing.medium};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SubTitle = styled.div`
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  font-size: ${({ theme, small }) =>
    small ? theme.size.text.small : theme.size.text.medium};
  margin-bottom: ${({ theme, small }) =>
    small ? theme.spacing.small : theme.spacing.medium};
`;

export { Heading, Title, SubTitle };
