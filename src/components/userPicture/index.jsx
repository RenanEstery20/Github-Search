import { Container, ProfilePicture } from './styles'

const UserPicture = props => (
  <Container>
    <ProfilePicture src={props.url} />
  </Container>
)

export default UserPicture
