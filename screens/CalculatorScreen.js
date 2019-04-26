require('./../lib/swisscalc.lib.format.js');
require('./../lib/swisscalc.lib.operator.js');
require('./../lib/swisscalc.lib.operatorCache.js');
require('./../lib/swisscalc.lib.shuntingYard.js');
require('./../lib/swisscalc.display.numericDisplay.js');
require('./../lib/swisscalc.display.memoryDisplay.js');
require('./../lib/swisscalc.calc.calculator.js');

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CalcButton } from './../components';

export default class CalculatorScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {};

		// Initialize calculator...
		this.oc = global.swisscalc.lib.operatorCache;
		this.calc = new global.swisscalc.calc.calculator();
	}

	render() {
		return (
			<View style={{ paddingTop: 50 }}>
				<CalcButton title="+" color="red" backgroundColor="yellow"/>
			</View>
		);
	}
}
