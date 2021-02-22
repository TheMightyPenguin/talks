/* eslint-disable */
const HorizontalList = styled.div`
  display: flex;
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
