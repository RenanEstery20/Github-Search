import { Section, Title, ListOfReposContainer, Repo } from './styles'

const ReposContainer = props => {
  return (
    <Section>
      <Title>Repositories</Title>
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

export default ReposContainer
