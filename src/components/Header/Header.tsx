import styled from 'styled-components'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import SearchBar from '../../elements/SearchBar'
import { Typography, colors } from '@mui/material'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;

  @media (max-width: 500px) {
    flex-direction: column-reverse;
    width: 100%;
  }
`

const UserAccountContainer = styled.div`
  display: flex;
  gap: 16px;
`

const UserAccountInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export interface HeaderProps {
  userName: string
  joinedDate: string
  onSubmitSearch: (searchText: string) => void
}

const Header = (props: HeaderProps) => {
  const { userName, joinedDate, onSubmitSearch } = props
  const customerSinceYear = new Date(joinedDate).getFullYear()

  return (
    <StyledHeader aria-label="page-header">
      <SearchBar name="products" onSubmitSearch={onSubmitSearch} />
      <UserAccountContainer>
        <AccountCircleRoundedIcon />
        <UserAccountInfo>
          <Typography>{userName}</Typography>
          <Typography color={colors.grey[700]} variant="body2">
            Customer since {customerSinceYear}
          </Typography>
        </UserAccountInfo>
      </UserAccountContainer>
    </StyledHeader>
  )
}

export default Header
