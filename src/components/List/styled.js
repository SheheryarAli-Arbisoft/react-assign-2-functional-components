import styled from 'styled-components';

const List = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 100px;
  margin-top: ${({ theme, small }) => (small ? '0' : theme.spacing.xlarge)};
  padding: 0 ${({ theme }) => theme.spacing.large};
  padding-top: ${({ theme }) => theme.spacing.xlarge};
  border-style: solid;
  border-width: 1px;
  border-color: ${({ theme }) => theme.color.card.border};
  border-radius: 5px;
  box-shadow: 0 0 10px 1px ${({ theme }) => theme.color.card.border};
`;

const ListItem = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.large};
  margin-bottom: ${({ theme, small }) =>
    small ? theme.spacing.medium : theme.spacing.xlarge};
  border-style: solid;
  border-width: 1px;
  border-color: ${({ theme }) => theme.color.card.border};
  border-radius: 5px;
  box-shadow: 0 0 10px 1px ${({ theme }) => theme.color.card.border};
`;

export { List, ListItem };
