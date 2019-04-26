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

	// Occurs when a digit is pressed
	onDigitPress = digit => {
		this.calc.addDigit(digit);
		this.setState({
			display: this.calc.getMainDisplay()
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.displayContainer}>
					<CalcDisplay display={this.state.display} />
				</View>
				<View style={styles.buttonContainer}>
					<View style={styles.buttonRow}>
						<CalcButton title="C" color="#1C1C1C" backgroundColor="#D4D4D2" />
						<CalcButton title="+/-" color="#1C1C1C" backgroundColor="#D4D4D2" />
						<CalcButton title="%" color="#1C1C1C" backgroundColor="#D4D4D2" />
						<CalcButton title="/" color="white" backgroundColor="#FF9500" />
					</View>
					<View style={styles.buttonRow}>
						<CalcButton
							onPress={() => {
								this.onDigitPress('7');
							}}
							title="7"
							color="white"
							backgroundColor="#555555"
						/>
						<CalcButton title="8" color="white" backgroundColor="#555555" />
						<CalcButton title="9" color="white" backgroundColor="#555555" />
						<CalcButton title="x" color="white" backgroundColor="#FF9500" />
					</View>
					<View style={styles.buttonRow}>
						<CalcButton title="4" color="white" backgroundColor="#555555" />
						<CalcButton title="5" color="white" backgroundColor="#555555" />
						<CalcButton title="6" color="white" backgroundColor="#555555" />
						<CalcButton title="-" color="white" backgroundColor="#FF9500" />
					</View>
					<View style={styles.buttonRow}>
						<CalcButton title="1" color="white" backgroundColor="#555555" />
						<CalcButton title="2" color="white" backgroundColor="#555555" />
						<CalcButton title="3" color="white" backgroundColor="#555555" />
						<CalcButton title="+" color="white" backgroundColor="#FF9500" />
					</View>
					<View style={styles.buttonRow}>
						<CalcButton
							title="0"
							color="white"
							backgroundColor="#555555"
							style={{ flex: 2 }}
						/>
						<CalcButton title="." color="white" backgroundColor="#555555" />
						<CalcButton title="=" color="white" backgroundColor="#FF9500" />
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: 'black' },
	displayContainer: { flex: 1, justifyContent: 'flex-end' },
	buttonContainer: { paddingBottom: 20 },
	buttonRow: { flexDirection: 'row', justifyContent: 'space-between' }
});
