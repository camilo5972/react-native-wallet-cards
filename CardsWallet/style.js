import { StyleSheet } from 'react-native';

export default class StylesComponent {
    static getSheet(props, totalHeight) {
        const elevation = 4;
        return StyleSheet.create({
            safeArea: {
                flex: 1
            },
            container: {
                height: totalHeight,
                padding: 5
            },
            scrollView: {
                flex: 1
            },
            scrollContainer: {
                flex: 1
            },
            card: {
                height: props.cardHeight
            },
            cardContent: {
                backgroundColor: props.cardBgColor,
                borderRadius: props.cardBorderRadius,
                flex: 1
            },
            cardAndroid: {
                elevation
            },
            cardShadow: {
                shadowOffset: { width: 0, height: 0.5 * elevation },
                shadowOpacity: 0.2,
                shadowRadius: 0.8 * elevation,
                shadowColor: props.cardShadowColor
            }
        })
    }
}