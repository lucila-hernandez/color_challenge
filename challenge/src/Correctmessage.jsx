function CorrectMessage({ message }) {
  return (
    <div style={{
      width: '330px',
      height: '30px',
      backgroundColor: 'light grey',
      border: '2px solid black',
      textAlign: 'center',
      lineHeight: '30px'
    }}>
      {message}
    </div>
  );
}

export default CorrectMessage;
