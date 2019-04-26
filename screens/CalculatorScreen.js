require('./../lib/swisscalc.lib.format.js');
require('./../lib/swisscalc.lib.operator.js');
require('./../lib/swisscalc.lib.operatorCache.js');
require('./../lib/swisscalc.lib.shuntingYard.js');
require('./../lib/swisscalc.display.numericDisplay.js');
require('./../lib/swisscalc.display.memoryDisplay.js');
require('./../lib/swisscalc.calc.calculator.js');

import React, { Component } from 'react';
import { View, Text, StyleSheet, PanResponder, Dimensions } from 'react-native';
import { CalcButton, CalcDisplay } from './../components';

export default class CalculatorScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			display: '0',
			orientation: 'portrait'
		};

		// Initialize calculator...
		this.oc = global.swisscalc.lib.operatorCache;
		this.calc = new global.swisscalc.calc.calculator();

		// Listen for orientation changes
		Dimensions.addEventListener('change', () => {
			const { width, height } = Dimensions.get('window');
			const orientation = width > height ? 'landscape' : 'portrait';
			this.setState({
				orientation: orientation
			});
		});

		// Initialize PanResponder...
		this.panResponder = PanResponder.create({
			onStartShouldSetPanResponder: (evt, gestureState) => true,
			onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
			onMoveShouldSetPanResponder: (evt, gestureState) => true,
			onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
			onPanResponderRelease: (evt, gestureState) => {
				if (Math.abs(gestureState.dx) >= 50) {
					this.onBackSpacePress();
				}
			}
		});
	}

	// Occurs when a digit is pressed
	onDigitPress = digit => {
		this.calc.addDigit(digit);
		this.setState({
			display: this.calc.getMainDisplay() // Updates display
		});
	};

	// Occurs when clear is pressed
	onClearPress = () => {
		this.calc.clear();
		this.setState({
			display: this.calc.getMainDisplay() // Updates display
		});
	};

	// Occurs when backspace is pressed
	onBackSpacePress = () => {
		this.calc.backspace();
		this.setState({
			display: this.calc.getMainDisplay() // Updates display
		});
	};

	// Occurs when plus/minus is pressed
	onPlusMinusPress = () => {
		this.calc.negate();
		this.setState({
			display: this.calc.getMainDisplay() // Updates display
		});
	};

	// Occurs when a binary operator is pressed
	onBinaryOperatorPress = operator => {
		// Pass in the operator
		this.calc.addBinaryOperator(operator);
		this.setState({
			display: this.calc.getMainDisplay() // Updates display
		});
	};

	// Occurs when percent operator sign is pressed
	onUnaryOperatorPress = operator => {
		// Pass in the operator
		this.calc.addUnaryOperator(operator);
		this.setState({
			display: this.calc.getMainDisplay() // Updates display
		});
	};

	// Occurs when equals is pressed
	onEqualsPress = operator => {
		this.calc.equalsPressed();
		this.setState({
			display: this.calc.getMainDisplay() // Updates display
		});
	};

	renderPortrait() {
		return (
			<View style={{ flex: 1 }}>
				<View
					style={styles.displayContainer}
					{...this.panResponder.panHandlers}>
					<CalcDisplay display={this.state.display} />
				</View>
				<View style={styles.buttonContainer}>
					<View style={styles.buttonRow}>
						<CalcButton
							onPress={this.onClearPress}
							title="C"
							color="#1C1C1C"
							backgroundColor="#D4D4D2"
						/>
						<CalcButton
							onPress={this.onPlusMinusPress}
							title="+/-"
							color="#1C1C1C"
							backgroundColor="#D4D4D2"
						/>
						<CalcButton
							onPress={() => this.onUnaryOperatorPress(this.oc.PercentOperator)}
							title="%"
							color="#1C1C1C"
							backgroundColor="#D4D4D2"
						/>
						<CalcButton
							onPress={() =>
								this.onBinaryOperatorPress(this.oc.DivisionOperator)
							}
							title="/"
							color="white"
							backgroundColor="#FF9500"
						/>
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
						<CalcButton
							onPress={() => {
								this.onDigitPress('8');
							}}
							title="8"
							color="white"
							backgroundColor="#555555"
						/>
						<CalcButton
							onPress={() => {
								this.onDigitPress('9');
							}}
							title="9"
							color="white"
							backgroundColor="#555555"
						/>
						<CalcButton
							onPress={() =>
								this.onBinaryOperatorPress(this.oc.MultiplicationOperator)
							}
							title="x"
							color="white"
							backgroundColor="#FF9500"
						/>
					</View>
					<View style={styles.buttonRow}>
						<CalcButton
							onPress={() => {
								this.onDigitPress('4');
							}}
							title="4"
							color="white"
							backgroundColor="#555555"
						/>
						<CalcButton
							onPress={() => {
								this.onDigitPress('5');
							}}
							title="5"
							color="white"
							backgroundColor="#555555"
						/>
						<CalcButton
							onPress={() => {
								this.onDigitPress('6');
							}}
							title="6"
							color="white"
							backgroundColor="#555555"
						/>
						<CalcButton
							onPress={() =>
								this.onBinaryOperatorPress(this.oc.SubtractionOperator)
							}
							title="-"
							color="white"
							backgroundColor="#FF9500"
						/>
					</View>
					<View style={styles.buttonRow}>
						<CalcButton
							onPress={() => {
								this.onDigitPress('1');
							}}
							title="1"
							color="white"
							backgroundColor="#555555"
						/>
						<CalcButton
							onPress={() => {
								this.onDigitPress('2');
							}}
							title="2"
							color="white"
							backgroundColor="#555555"
						/>
						<CalcButton
							onPress={() => {
								this.onDigitPress('3');
							}}
							title="3"
							color="white"
							backgroundColor="#555555"
						/>
						<CalcButton
							onPress={() =>
								this.onBinaryOperatorPress(this.oc.AdditionOperator)
							}
							title="+"
							color="white"
							backgroundColor="#FF9500"
						/>
					</View>
					<View style={styles.buttonRow}>
						<CalcButton
							onPress={() => {
								this.onDigitPress('0');
							}}
							title="0"
							color="white"
							backgroundColor="#555555"
							style={{ flex: 2 }}
						/>
						<CalcButton
							onPress={() => {
								this.onDigitPress('.');
							}}
							title="."
							color="white"
							backgroundColor="#555555"
						/>
						<CalcButton
							onPress={this.onEqualsPress}
							title="="
							color="white"
							backgroundColor="#FF9500"
						/>
					</View>
				</View>
			</View>
		);
	}

	renderLandscape() {
		return (
			<View style={{ flex: 1, paddingTop: 50 }}>
				<Text style={{ color: '#ffffff' }}>Landscape Mode</Text>
			</View>
		);
	}

	// TODO: Implement landscape mode
	render() {
		const view =
			this.state.orientation == 'portrait'
				? this.renderPortrait()
				: this.renderLandscape();

		return <View style={styles.container}>{view}</View>;
	}
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: 'black' },
	displayContainer: { flex: 1, justifyContent: 'flex-end', padding: 20 },
	buttonContainer: { padding: 20 },
	buttonRow: { flexDirection: 'row', justifyContent: 'space-between' }
});
