function App() {
  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
  const appName = import.meta.env.VITE_APP_NAME || 'EcommerceApp';

  return (
    <div style={{ fontFamily: 'system-ui, Arial, sans-serif', padding: 24 }}>
      <h1>{appName}</h1>
      <p>API URL: {apiUrl}</p>
      <p>
        Try the server health endpoint:
        <a href={`${apiUrl}/health`} target="_blank" rel="noreferrer">
          {' '}
          {`${apiUrl}/health`}
        </a>
      </p>
    </div>
  );
}

export default App;
