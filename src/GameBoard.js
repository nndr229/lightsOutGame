import React, { Component } from 'react';
import Cell from './Cell';
import './GameBoard.css';
var check;
class GameBoard extends Component {
	constructor(props) {
		super(props);
		
		this.state = { active_arr: Array.from({ length: this.props.sideLength ** 2 }).map(() => false) ,one:null,two:null,three:null,four:null,five:null,six:null,seven:null,eight:null,nine:null,ten:null,btn:false,gameStart:false};
        this.pickRandomStartCells = this.pickRandomStartCells.bind(this);
		this.clickCell = this.clickCell.bind(this);
		this.enableCells = this.enableCells.bind(this);
		this.start = this.start.bind(this);
		this.disableButton =false;
		this.randomStartCells={one:null,two:null,three:null,four:null,five:null,six:null,seven:null,eight:null,nine:null,ten:null}
		this.cells = Array.from({ length: this.props.sideLength }).map((n, index) => {
			if (index === 0) {
				return Array.from({ length: 5 }).map((num, idx) => {
					if (index === 0 && idx === 0) {
						return (
							<Cell
								onRef={(ref) => (this.[`child${idx}`] = ref)}
								id={idx}
								key={idx}
								top={null}
								right={idx + 1}
								left={null}
								bottom={idx + 5}
                                clickCell={this.clickCell}
								init = {this.pickRandomStartCells}

							/>
						);
					} else if (idx === this.props.sideLength - 1) {
						return (
							<Cell
								onRef={(ref) => (this.[`child${idx}`] = ref)}
								id={idx}
								key={idx}
								top={null}
								right={null}
								left={idx - 1}
								bottom={idx + 5}
                                clickCell={this.clickCell}
								init = {this.pickRandomStartCells}

                                
							/>
						);
					} else {
						return (
							<Cell
								onRef={(ref) => (this.[`child${idx}`] = ref)}
								id={idx}
								key={idx}
								top={null}
								right={idx + 1}
								left={idx - 1}
								bottom={idx + 5}
                                clickCell={this.clickCell}
								init = {this.pickRandomStartCells}

                                
							/>
						);
					}
				});
			} else if (index === 1) {
				return Array.from({ length: 5 }).map((num, idx) => {
					if (index === 1 && idx === 0) {
						return (
							<Cell
								onRef={(ref) => (this.[`child${idx+ this.props.sideLength * 1}`] = ref)}
								id={idx + this.props.sideLength * 1}
								key={idx + this.props.sideLength * 1}
								top={idx + this.props.sideLength * 1 - 5}
								right={idx + this.props.sideLength * 1 + 1}
								left={null}
								bottom={idx + this.props.sideLength * 1 + 5}
                                clickCell={this.clickCell}
								init = {this.pickRandomStartCells}

                                
							/>
						);
					} else if (idx === this.props.sideLength - 1) {
						return (
							<Cell
								onRef={(ref) => (this.[`child${idx+ this.props.sideLength * 1}`] = ref)}
								id={idx + this.props.sideLength * 1}
								key={idx + this.props.sideLength * 1}
								top={idx + this.props.sideLength * 1 - 5}
								right={null}
								left={idx + this.props.sideLength * 1 - 1}
								bottom={idx + this.props.sideLength * 1 + 5}
                                clickCell={this.clickCell}
								init = {this.pickRandomStartCells}

                                
							/>
						);
					} else {
						return (
							<Cell
								onRef={(ref) => (this.[`child${idx+ this.props.sideLength * 1}`] = ref)}
								id={idx + this.props.sideLength * 1}
								key={idx + this.props.sideLength * 1}
								top={idx + this.props.sideLength * 1 - 5}
								right={idx + this.props.sideLength * 1 + 1}
								left={idx + this.props.sideLength * 1 - 1}
								bottom={idx + this.props.sideLength * 1 + 5}
                                clickCell={this.clickCell}
								init = {this.pickRandomStartCells}

                                
							/>
						);
					}
				});
			} else if (index === 2) {
				return Array.from({ length: 5 }).map((num, idx) => {
					if (index === 2 && idx === 0) {
						return (
							<Cell
								onRef={(ref) => (this.[`child${idx+ this.props.sideLength * 2}`] = ref)}
								id={idx + this.props.sideLength * 2}
								key={idx + this.props.sideLength * 2}
								top={idx + this.props.sideLength * 2 - 5}
								right={idx + this.props.sideLength * 2 + 1}
								left={null}
								bottom={idx + this.props.sideLength * 2 + 5}
                                clickCell={this.clickCell}
								init = {this.pickRandomStartCells}

                                
							/>
						);
					} else if (idx === this.props.sideLength - 1) {
						return (
							<Cell
								onRef={(ref) => (this.[`child${idx+ this.props.sideLength * 2}`] = ref)}
								id={idx + this.props.sideLength * 2}
								key={idx + this.props.sideLength * 2}
								top={idx + this.props.sideLength * 2 - 5}
								right={null}
								left={idx + this.props.sideLength * 2 - 1}
								bottom={idx + this.props.sideLength * 2 + 5}
                                clickCell={this.clickCell}
								init = {this.pickRandomStartCells}

                                
							/>
						);
					} else {
						return (
							<Cell
								onRef={(ref) => (this.[`child${idx+ this.props.sideLength * 2}`] = ref)}
								id={idx + this.props.sideLength * 2}
								key={idx + this.props.sideLength * 2}
								top={idx + this.props.sideLength * 2 - 5}
								right={idx + this.props.sideLength * 2 + 1}
								left={idx + this.props.sideLength * 2 - 1}
								bottom={idx + this.props.sideLength * 2 + 5}
                                clickCell={this.clickCell}
								init = {this.pickRandomStartCells}

                                
							/>
						);
					}
				});
			} else if (index === 3) {
				return Array.from({ length: 5 }).map((num, idx) => {
					if (index === 3 && idx === 0) {
						return (
							<Cell
								onRef={(ref) => (this.[`child${idx+ this.props.sideLength * 3}`] = ref)}
								id={idx + this.props.sideLength * 3}
								key={idx + this.props.sideLength * 3}
								top={idx + this.props.sideLength * 3 - 5}
								right={idx + this.props.sideLength * 3 + 1}
								left={null}
								bottom={idx + this.props.sideLength * 3 + 5}
                                clickCell={this.clickCell}
								init = {this.pickRandomStartCells}

                                
							/>
						);
					} else if (idx === this.props.sideLength - 1) {
						return (
							<Cell
								onRef={(ref) => (this.[`child${idx+ this.props.sideLength * 3}`] = ref)}
								id={idx + this.props.sideLength * 3}
								key={idx + this.props.sideLength * 3}
								top={idx + this.props.sideLength * 3 - 5}
								right={null}
								left={idx + this.props.sideLength * 3 - 1}
								bottom={idx + this.props.sideLength * 3 + 5}
                                clickCell={this.clickCell}
								init = {this.pickRandomStartCells}

                                
							/>
						);
					} else {
						return (
							<Cell
								onRef={(ref) => (this.[`child${idx+ this.props.sideLength * 3}`] = ref)}
								id={idx + this.props.sideLength * 3}
								key={idx + this.props.sideLength * 3}
								top={idx + this.props.sideLength * 3 - 5}
								right={idx + this.props.sideLength * 3 + 1}
								left={idx + this.props.sideLength * 3 - 1}
								bottom={idx + this.props.sideLength * 3 + 5}
                                clickCell={this.clickCell}
								init = {this.pickRandomStartCells}

                                
							/>
						);
					}
				});
			} else if (index === 4) {
				return Array.from({ length: 5 }).map((num, idx) => {
					if (index === 4 && idx === 0) {
						return (
							<Cell
								onRef={(ref) => (this.[`child${idx+ this.props.sideLength * 4}`] = ref)}
								id={idx + this.props.sideLength * 4}
								key={idx + this.props.sideLength * 4}
								top={idx + this.props.sideLength * 4 - 5}
								right={idx + this.props.sideLength * 4 + 1}
								left={null}
								bottom={null}
                                clickCell={this.clickCell}
								init = {this.pickRandomStartCells}

                                
							/>
						);
					} else if (idx === this.props.sideLength - 1) {
						return (
							<Cell
								onRef={(ref) => (this.[`child${idx+ this.props.sideLength * 4}`] = ref)}
								id={idx + this.props.sideLength * 4}
								key={idx + this.props.sideLength * 4}
								top={idx + this.props.sideLength * 4 - 5}
								right={null}
								left={idx + this.props.sideLength * 4 - 1}
								bottom={null}
                                clickCell={this.clickCell}
								init = {this.pickRandomStartCells}

                                
							/>
						);
					} else {
						return (
							<Cell
								onRef={(ref) => (this.[`child${idx+ this.props.sideLength * 4}`] = ref)}
								id={idx + this.props.sideLength * 4}
								key={idx + this.props.sideLength * 4}
								top={idx + this.props.sideLength * 4 - 5}
								right={idx + this.props.sideLength * 4 + 1}
								left={idx + this.props.sideLength * 4 - 1}
								bottom={null}
                                clickCell={this.clickCell}
								init = {this.pickRandomStartCells}

                                
							/>
						);
					}
				});
			}
		});
		this.cells = [ ...this.cells[0], ...this.cells[1], ...this.cells[2], ...this.cells[3], ...this.cells[4] ];
        this.start();
    }

	static defaultProps = {
		sideLength: 5
	};
	enableCells(){
		this.cells.map((n,index)=>{
			eval('this.child' + index + '.enableCells()');
				
        })
	}
	puzzles(){
		
	}
    picker(){
        let cell_1,cell_2,cell_3,cell_4,cell_5,cell_6,cell_7,cell_8,cell_9,cell_10;

        cell_1 = Math.floor(Math.random()*25);
        cell_2 = Math.floor(Math.random()*25);
        cell_3 = Math.floor(Math.random()*25);
        cell_4 = Math.floor(Math.random()*25);
		cell_5 = Math.floor(Math.random()*25);
        cell_6 = Math.floor(Math.random()*25);
        cell_7 = Math.floor(Math.random()*25);
        cell_8 = Math.floor(Math.random()*25);
        cell_9 = Math.floor(Math.random()*25);
        cell_10 = Math.floor(Math.random()*25);
		
        
        if(this.hasDuplicates([cell_1,cell_2,cell_3,cell_4,cell_5,cell_6,cell_7,cell_8,cell_9,cell_10])){
            this.picker()
        }else{
    	 	this.randomStartCells={one:cell_1,two:cell_2,three:cell_3,four:cell_4,five:cell_5,six:cell_6,seven:cell_7,eight:cell_8,nine:cell_9,ten:cell_10}
			this.isDone = true;
        }
        
    }
        
        
         
        
     hasDuplicates(array) {
        return (new Set(array)).size !== array.length;
    }
        async start(){
		await this.picker();
		console.log(this.randomStartCells)
		this.state.active_arr[this.randomStartCells.one] = true; 
        this.state.active_arr[this.randomStartCells.two] = true; 
        this.state.active_arr[this.randomStartCells.three] = true; 
        this.state.active_arr[this.randomStartCells.four] = true; 
		this.state.active_arr[this.randomStartCells.five] = true;
        this.state.active_arr[this.randomStartCells.six] = true; 
        this.state.active_arr[this.randomStartCells.seven] = true; 
        this.state.active_arr[this.randomStartCells.eight] = true; 
        this.state.active_arr[this.randomStartCells.nine] = true; 
        this.state.active_arr[this.randomStartCells.ten] = true; 
		 

        this.state.one = this.randomStartCells.one;
        this.state.two = this.randomStartCells.two;
        this.state.three = this.randomStartCells.three;
        this.state.four= this.randomStartCells.four;
		this.state.five= this.randomStartCells.five;
        this.state.six= this.randomStartCells.six;
        this.state.seven= this.randomStartCells.seven;
        this.state.eight= this.randomStartCells.eight;
        this.state.nine= this.randomStartCells.nine;
        this.state.ten= this.randomStartCells.ten;
		
        
    }
    pickRandomStartCells(){
		this.enableCells();
		this.gameStart = true;
		this.setState((st) => ({
			btn:true
		}));
		this.setState((st) => ({
			gameStart:true
		}));
        this.cells.map((n,index)=>{
            if(index===this.state.one){
               
                // console.log(JSON.parse(JSON.stringify(this)));
                eval('this.child' + index + '.setActive()');
            }
            if(index===this.state.two){
               
                // console.log(JSON.parse(JSON.stringify(this)));
                eval('this.child' + index + '.setActive()');
            }
            if(index===this.state.three){
               
                // console.log(JSON.parse(JSON.stringify(this)));
                eval('this.child' + index + '.setActive()');
            }
            if(index===this.state.four){
               
                // console.log(JSON.parse(JSON.stringify(this)));
                eval('this.child' + index + '.setActive()');
            }
            if(index===this.state.five){
               
                // console.log(JSON.parse(JSON.stringify(this)));
                eval('this.child' + index + '.setActive()');
			}
			if(index===this.state.six){
                eval('this.child' + index + '.setActive()');
            }
			if(index===this.state.seven){
                eval('this.child' + index + '.setActive()');
			}
			if(index===this.state.eight){
                eval('this.child' + index + '.setActive()');
			}
			if(index===this.state.nine){
                eval('this.child' + index + '.setActive()');
			}
			if(index===this.state.ten){
                eval('this.child' + index + '.setActive()');
            }
        })
    }
    


	clickCell(cell_id) {
		this.setState((st) => ({
			active_arr: st.active_arr.map(
				(n, index) => (index === cell_id ? (n === true ? (n = false) : (n = true)) : (n = n))
			)
		}));
		this.cells.map((n, index) => {
			if (index === cell_id) {
				if (n.props.right) {
					this.cells.map((div, idx) => {
						if (idx === n.props.right) {
							console.log(div);
							eval('this.child' + idx + '.setActive()');
							this.setState((st) => ({
								active_arr: st.active_arr.map(
									(num, ind) =>
										ind === n.props.right
											? num === true ? (num = false) : (num = true)
											: (num = num)
								)
							}));
						}
					});
                }
                if (n.props.left || n.props.left===0) {
					console.log(n.props.left)
					this.cells.map((div, idx) => {
						if (idx === n.props.left) {
                            console.log(div);
                           
							eval('this.child' + idx + '.setActive()');
							this.setState((st) => ({
								active_arr: st.active_arr.map(
									(num, ind) =>
										ind === n.props.left
											? num === true ? (num = false) : (num = true)
											: (num = num)
								)
							}));
						}
					});
                }
                if (n.props.bottom) {
					this.cells.map((div, idx) => {
						if (idx === n.props.bottom) {
							console.log(div);
							eval('this.child' + idx + '.setActive()');
							this.setState((st) => ({
								active_arr: st.active_arr.map(
									(num, ind) =>
										ind === n.props.bottom
											? num === true ? (num = false) : (num = true)
											: (num = num)
								)
							}));
						}
					});
                }
                if (n.props.top || n.props.top===0) {
					this.cells.map((div, idx) => {
						if (idx === n.props.top) {
							console.log(div);
							eval('this.child' + idx + '.setActive()');
							this.setState((st) => ({
								active_arr: st.active_arr.map(
									(num, ind) =>
										ind === n.props.top
											? num === true ? (num = false) : (num = true)
											: (num = num)
								)
							}));
						}
					});
				}
			}
		});
	}


	render() {
		let toShow,toShow2;
		if(this.state.active_arr.every(val=> val===false
			&& this.state.gameStart)){
			
			 toShow =  <div>
			<h2 className="Outro">You Won!</h2>
			<button className="GameBoard-Button" onClick={this.start()}><a href="/"> Play Agian?</a></button>
		</div>	
		}else if(this.isDone){
			toShow2 = <div>
			<div className="GameBoard-Board">{this.cells}</div>
			<button className="GameBoard-Button" disabled={this.state.btn}  onClick={this.pickRandomStartCells}>Start Game</button></div>}
		 
				
		return (
			<div>
			{toShow}
			{toShow2}
			</div>
	
		)
	}

}

export default GameBoard;
