import { StyleSheet } from 'react-native';

export default class StylesComponent {
    static getSheet(props) {
        const elevation = 4;
        return StyleSheet.create({
            safeArea: {
                flex: 1
            },
            container: {
                margin: 5
            },
            scrollView: {
                flexGrow: 1
            },
            card: {
                height: props.cardHeight,
                borderRadius: props.cardBorderRadius,
                backgroundColor: props.cardBgColor,
            },
            cardShadow: {
                elevation,
                shadowOffset: { width: 0, height: 0.5 * elevation },
                shadowOpacity: 0.3,
                shadowRadius: 0.8 * elevation,
                shadowColor: props.cardShadowColor
            }
        })
    }
}