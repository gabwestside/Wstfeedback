interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps) {
  return <button>{props.text ?? 'Default'}</button>
}

function App() {

  return (
    <>
      <Button text="Ok"/>
      <Button text="Send"/>
      <Button />
    </>
  );
}

export default App;
