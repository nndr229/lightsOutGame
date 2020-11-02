import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {
	static defaultProps = {
		top: null,
		left: null,
		right: null,
		bottom: null,
		id: null
	};
	constructor(props) {
		super(props);
		this.state = {
			active: false,
			enabled:false
		};
		this.init = this.init.bind(this)
		this.handleClick = this.handleClick.bind(this);
		this.enableCells = this.enableCells.bind(this)
	}
	componentDidMount() {
		this.props.onRef(this);
	}

	componentWillUnmount() {
		this.props.onRef(undefined);
	}

	setActive() {
		this.setState((st) => ({
			active: !st.active
		}));
	}

	init(e){
		this.props.init()
	}
	
	enableCells(e){
		this.setState((st) => ({
			enabled: true
		}));
	
	}

	handleClick(e) {
		if(this.state.enabled){
			this.setState((st) => ({
				active: !st.active
			}));
			this.props.clickCell(this.props.id);
		}
	}
	render() {
		return <div  className={this.state.active ? 'Cell active' : 'Cell'} onClick={this.handleClick} />;
	}
}

export default Cell;
