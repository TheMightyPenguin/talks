/* eslint-disable */
const HorizontalList = styled.div`
  display: flex;

  & > *:not(:last-child) {
    margin-right: 16px;
  }
`

const App = () => {
  return (
    <div>
      <HorizontalList>
        <Button>Cancel</Button>
        <Button>Done</Button>
      </HorizontalList>
    </div>
  )
}

render(App);
