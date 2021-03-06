import React from 'react'
import TableRow from './TableRow'

class ScreenTwo extends React.Component {

	state = {
		calorieTotal: 0,
		proteinTotal: 0,
		fatTotal: 0,
		carbTotal: 0
	}

	setTotal = (selectedState, calories, protein, fat, carbs, servings) => {
			if(selectedState) {
				this.setState({
					calorieTotal: this.state.calorieTotal + (!parseInt(calories, 10) ? 0 : calories * servings), 
					proteinTotal: this.state.proteinTotal + (!parseInt(protein, 10) ? 0 : protein * servings), 
					fatTotal: this.state.fatTotal + (!parseInt(fat, 10) ? 0 : fat * servings), 
					carbTotal: this.state.carbTotal + (!parseInt(carbs, 10) ? 0 : carbs * servings)			
				})
			}
			else {
				this.setState({
					calorieTotal: this.state.calorieTotal - (!parseInt(calories, 10) ? 0 : calories * servings), 
					proteinTotal: this.state.proteinTotal - (!parseInt(protein, 10) ? 0 : protein * servings), 
					fatTotal: this.state.fatTotal - (!parseInt(fat, 10) ? 0 : fat * servings), 
					carbTotal: this.state.carbTotal - (!parseInt(carbs, 10) ? 0 : carbs * servings)			
				})
			}
	}


	render(){
		console.log(this.props.data)
		const nutrientRows = this.props.concepts.map((concept, index) => <TableRow key={index} concept={concept} setTotal={this.setTotal} />)
		return(
			<div>
				<table className="ui red table">
				  <thead>
				    <tr>
					    <th>Food</th>
					    <th>Select</th>
					    <th>Serving size</th>
					    <th>No. of servings</th>
					    <th>Calories (calories)</th>
					    <th>Protein (g)</th>
					    <th>Fat (g)</th>
					    <th>Carbs (g)</th>
					    <th>Include?</th>
				  	</tr>
				  </thead>
				  <tbody>
				    {nutrientRows}
						<tr>
						 <td className="food name"><strong>Total</strong></td>
						 <td className="select-food"></td>
						 <td className="serving-size"></td>
						 <td className="serving-number"></td>
						 <td className="calories">{Math.round(this.state.calorieTotal, 2)}</td>
						 <td className="protein">{Math.round(this.state.proteinTotal, 2)}</td>
						 <td className="fat">{Math.round(this.state.fatTotal, 2)}</td>
						 <td className="carbs">{Math.round(this.state.carbTotal, 2)}</td>
						 <td></td>
					  </tr>
				  </tbody>
				</table>
				<button className="ui button" onClick={() => {this.props.handleLog(this.state.calorieTotal, this.state.proteinTotal, this.state.fatTotal, this.state.carbTotal)} }>Log Meal</button>
			</div>		
		)
	}


}

export default ScreenTwo;