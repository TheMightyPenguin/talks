/* eslint-disable */
const HorizontalList = styled.div`
  display: flex;

  & > *:not(:last-child) {
    margin-right: ${props => props.space}px;
  }
`

const App = () => {
  return (
    <div>
      <HorizontalList space={16}>
        <Button>Cancel</Button>
        <Button>Done</Button>
      </HorizontalList>

      <HorizontalList space={32}>
        <Button>Cancel</Button>
        <Button>Done</Button>
      </HorizontalList>
    </div>
  )
}

render(App);
