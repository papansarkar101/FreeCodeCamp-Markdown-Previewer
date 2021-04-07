import react, {useState, useEffect} from 'react';
import './App.css';
import Badge from "react-bootstrap/Badge";

function App() {

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

  const [markdown, setMarkdown] = useState(placeholder);

  let marked = require("marked");

  marked.setOptions({
    breaks: true
  });

  const updateMarkdown = (e) => {
    setMarkdown(e.target.value);
  };

  var inputStyle = {
    width: "500px",
    height: "500px",
    marginLeft: "auto",
    marginRight: "auto",
    padding:"10px"
  };

  var outputStyle = {
    width: "500px",
    height: "auto",
    backgroundColor: "#DCDCDC",
    marginLeft: "auto",
    marginRight: "auto",
    padding:"10px"
  };

  return (
    <div className="App">
        <div className="container">
          <div className="row mt-4">
            <div className="col text-center">
              <h1>
                <Badge className="text-align-center" variant="light">
                  Markdown Previewer
                </Badge>
              </h1>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-6">
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variant="secondary">
                    Markdown Input
                  </Badge>
                </h4>
                <div className="mark-input">
                  <textarea className="input" style={inputStyle} id="editor" value={markdown}
                  onChange={updateMarkdown}> 
                  </textarea>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variant="secondary">
                    Preview
                  </Badge>
                </h4>
              </div>
              <div style={outputStyle} id="preview" 
                dangerouslySetInnerHTML={{ __html: marked(markdown) }}>
              </div>
            </div>

          </div>
        </div>
      </div>
  );
}

export default App;
