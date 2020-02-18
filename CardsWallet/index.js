import React, { Component } from 'react';
import * as Animatable from 'react-native-animatable';
import { ScrollView, SafeAreaView, TouchableWithoutFeedback, Platform, View } from 'react-native';
import PropTypes from 'prop-types';
import StylesComponent from './style';

export default class CardsWallet extends Component {

    static propTypes = {
        data: PropTypes.array.isRequired,
        cardHeight: PropTypes.number,
        cardBgColor: PropTypes.string,
        cardBorderRadius: PropTypes.number,
        cardShadowColor: PropTypes.string,
        showCardShadow: PropTypes.bool,
        cardSeparation: PropTypes.number,
        cardEasing: PropTypes.string,
        easingTime: PropTypes.number
    };

    static defaultProps = {
        data: [],
        cardHeight: 170,
        cardBgColor: 'white',
        cardBorderRadius: 10,
        cardShadowColor: '#000',
        showCardShadow: true,
        cardSeparation: 50,
        cardEasing: 'ease-in-out',
        easingTime: 300
    };

    state = {
        totalHeight: 0
    };

    constructor(props) {
        super(props);
        this.setProps();
        this.cards = this.renderCards();
    }
    shouldComponentUpdate(nextProps) {
        if (nextProps.data === this.props.data) return false;
        this.setProps();
        this.cards = this.renderCards();
        return true;
    }

    setProps() {
        // Get styles
        this.styles = StylesComponent.getSheet(this.props);
        // Set defaults
        this.cardSeparation = -this.props.cardHeight + this.props.cardSeparation;
        this.state.totalHeight = (this.props.data.length * this.props.cardSeparation) + this.props.cardHeight;
        this.cardsRef = [];
        this.isCardDisplay = [];
        // Warnings
        if (this.props.data.length === 0) {
            console.warn('prop data has 0 elements and must be an array of components');
        }
    }

    renderCards() {
        return this.props.data.map((item, index) =>
            <Animatable.View
                ref={(ref) => {
                    this.cardsRef[index] = ref;
                    this.isCardDisplay[index] = false;
                }}
                key={index}
                style={[
                    this.styles.card,
                    this.props.showCardShadow && this.styles.cardShadow,
                    { zIndex: index, top: index * this.cardSeparation, marginBottom: 0 }
                ]}>
                <View style={[this.styles.cardContent, Platform.OS === 'android' && this.styles.cardAndroid]}>
                    <TouchableWithoutFeedback onPress={() => this.animateCard(index)}>
                        {item}
                    </TouchableWithoutFeedback>
                </View>
            </Animatable.View>
        );
    }

    animateCard(index) {
        let marginBottomStart = 0;
        let marginBottomEnd = this.props.cardHeight - 60;
        if (index === this.props.data.length - 1) {
            marginBottomStart = 0;
            marginBottomEnd = 0;
        } else if (this.isCardDisplay[index]) {
            marginBottomStart = marginBottomEnd;
            marginBottomEnd = 0;
        }
        this.isCardDisplay[index] = !this.isCardDisplay[index];
        let totalActive = 1;
        let totalInactive = 0;
        if (this.isCardDisplay.length !== (index + 1)) {
            for (let index in this.isCardDisplay) {
                totalActive+= this.isCardDisplay[index] ? 1 : 0;
                totalInactive+= !this.isCardDisplay[index] ? 1 : 0;
            }
            const newTotalHeight = totalActive * this.props.cardHeight + (this.props.cardSeparation * totalInactive);
            this.setState({ totalHeight: newTotalHeight });
        }
        this.cardsRef[index].transition(
            { marginBottom: marginBottomStart },
            { marginBottom: marginBottomEnd },
            this.props.easingTime,
            this.props.cardEasing
        );
        this.forceUpdate();
    }

    render() {
        return (
            <SafeAreaView style={this.styles.safeArea}>
                <ScrollView
                    style={this.styles.scrollView}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={[this.styles.container, { height: this.state.totalHeight }]}>
                    <View style={this.styles.scrollContainer}>
                        {
                            this.cards
                        }
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }

}