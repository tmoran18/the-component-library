import SyntaxHighlighter from 'react-syntax-highlighter';
import { githubGist } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import CopyToClipboard from '../components/CopyToClipboard';

export default function Code({ codeString }) {
	return (
		<div>
			<SyntaxHighlighter
				language='javascript'
				style={githubGist}
				codeTagProps={{
					style: {
						fontFamily: 'Fira Code',
						fontSize: '16px',
					},
				}}
				customStyle={{ background: 'none', padding: '120px' }}>
				{codeString}
			</SyntaxHighlighter>
			<div>
				<CopyToClipboard itemToCopy={codeString} />
			</div>
		</div>
	);
}
{
	/* <Code
				codeString={`
				class DidItWork {
					constructor(props) {
					  super(props);
					  this.state = {
						squares: Array(9).fill(null),
						xIsNext: true,
					  };
					}
				  
					handleClick(i) {
					  const squares = this.state.squares.slice();
					  squares[i] = this.state.xIsNext ? 'X' : 'O';
					  this.setState({
						squares: squares,
						xIsNext: !this.state.xIsNext,
					  });
					}
				  
					renderSquare(i) {
					  return (
						<Square
						  value={this.state.squares[i]}
						  onClick={() => this.handleClick(i)}
						/>
					  );
					}
				  
					render() {
					  const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
				  
					  return (
						<div>
						  <div className="status">{status}</div>
						  <div className="board-row">
							{this.renderSquare(0)}
							{this.renderSquare(1)}
							{this.renderSquare(2)}
						  </div>
						  <div className="board-row">
							{this.renderSquare(3)}
							{this.renderSquare(4)}
							{this.renderSquare(5)}
						  </div>
						  <div className="board-row">
							{this.renderSquare(6)}
							{this.renderSquare(7)}
							{this.renderSquare(8)}
						  </div>
						</div>
					  );
					}
				  }
				  `}
			/> */
}
