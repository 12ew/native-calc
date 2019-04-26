require('./../lib/swisscalc.lib.format.js');
require('./../lib/swisscalc.lib.operator.js');
require('./../lib/swisscalc.lib.operatorCache.js');
require('./../lib/swisscalc.lib.shuntingYard.js');
require('./../lib/swisscalc.display.numericDisplay.js');
require('./../lib/swisscalc.display.memoryDisplay.js');
require('./../lib/swisscalc.calc.calculator.js');

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CalcButton, CalcDisplay } from './../components';

export default class CalculatorScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			display: '0'
		};

		// Initialize calculator...
		this.oc = global.swisscalc.lib.operatorCache;
		this.calc = new global.swisscalc.calc.calculator();
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.displayContainer}>
					<CalcDisplay display={this.state.display} />
				</View>
				<View>
					<View style={styles.buttonRow}>
						<CalcButton title="C" color="red" backgroundColor="yellow" />
						<CalcButton title="+/-" color="red" backgroundColor="yellow" />
						<CalcButton title="%" color="red" backgroundColor="yellow" />
						<CalcButton title="/" color="red" backgroundColor="yellow" />
					</View>
					<View style={styles.buttonRow}>
						<CalcButton title="7" color="red" backgroundColor="yellow" />
						<CalcButton title="8" color="red" backgroundColor="yellow" />
						<CalcButton title="9" color="red" backgroundColor="yellow" />
						<CalcButton title="x" color="red" backgroundColor="yellow" />
					</View>
					<View style={styles.buttonRow}>
						<CalcButton title="4" color="red" backgroundColor="yellow" />
						<CalcButton title="5" color="red" backgroundColor="yellow" />
						<CalcButton title="6" color="red" backgroundColor="yellow" />
						<CalcButton title="-" color="red" backgroundColor="yellow" />
					</View>
					<View style={styles.buttonRow}>
						<CalcButton title="1" color="red" backgroundColor="yellow" />
						<CalcButton title="2/-" color="red" backgroundColor="yellow" />
						<CalcButton title="3" color="red" backgroundColor="yellow" />
						<CalcButton title="+" color="red" backgroundColor="yellow" />
					</View>
					<View style={styles.buttonRow}>
						<CalcButton title="0" color="red" backgroundColor="yellow" />
						<CalcButton title="." color="red" backgroundColor="yellow" />
						<CalcButton title="=" color="red" backgroundColor="yellow" />
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: { flex: 1 },
	displayContainer: { flex: 1, justifyContent: 'flex-end' },
	buttonRow: { flexDirection: 'row', justifyContent: 'space-between' }
});
