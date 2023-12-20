import styled from 'styled-components'

const Container = styled.div`
  background-color: 
  height: 100vh;
  width: 100%;
`

const UserInfoContainer = async () => {
  // Fetch user info from the backend here

  return (
    <Container>
      <div>
        <div>Search bar</div>
        <div>User notification</div>
      </div>
    </Container>
  )
}

export default UserInfoContainer
