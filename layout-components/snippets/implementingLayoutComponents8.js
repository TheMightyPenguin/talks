/* eslint-disable */
const spacingScale = {
  small: 8,
  medium: 16,
  large: 32,
};

const HorizontalList = styled.div`
  display: flex;

  & > *:not(:last-child) {
    margin-right: ${(props) => spacingScale[props.space]}px;
  }
`

const App = () => {
  return (
    <div>
      <HorizontalList space="medium">
        <Button>Cancel</Button>
        <Button>Done</Button>
      </HorizontalList>

      <HorizontalList space="large">
        <Button>Cancel</Button>
        <Button>Done</Button>
      </HorizontalList>
    </div>
  )
}

render(App);
