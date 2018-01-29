export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: 'Hello, World!'
		}
	}

	render() {
		return(
			<div className="box">
				<p>{this.state.value}</p>
			</div>
		)
	}
}