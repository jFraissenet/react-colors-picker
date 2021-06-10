import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ColorsPicker  from '../src/ColorsPicker';

const pp=[{value: "#123456", label: "bla"}]

const App = () => {
  return (
    <div>
      <ColorsPicker colors={pp}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
