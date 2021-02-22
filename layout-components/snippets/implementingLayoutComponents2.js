/* eslint-disable */
const HorizontalList = styled.div`
  display: flex;

  & > * {
    margin-right: 16px;
  }
`

const App = () => {
  return (
    <HorizontalList>
      <Button>Cancel</Button>
      <Button>Done</Button>
    </HorizontalList>
  )
}

render(App);
