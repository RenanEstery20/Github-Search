import { Section, Title, ListOfReposContainer, Repo } from './styles'

const StarredContainer = props => {
  return (
    <Section>
      <Title>Starred</Title>
      <ListOfReposContainer>
        {(props?.repos).map(repo => (
          <Repo key={repo?.id}>
            <a href={repo?.html_url}>
              <h2>{repo?.name}</h2>
              <p>{repo?.description}</p>
            </a>
          </Repo>
        ))}
      </ListOfReposContainer>
    </Section>
  )
}

export default StarredContainer
