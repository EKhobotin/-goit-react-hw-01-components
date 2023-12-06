import { Paragraph } from "./test";
import { Ul } from "./test";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <p>
      React homework template
      </p>
      <Paragraph color="blue" />
      <Ul/>   
    </div>
  );
};
