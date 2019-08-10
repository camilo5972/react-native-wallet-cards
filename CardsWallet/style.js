import { StyleSheet } from 'react-native';

export default class StylesComponent {
    static getSheet(props) {
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
                shadowColor: props.cardShadowColor,
                shadowOffset: {
                    width: 0,
                    height: 2
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5
            }
        })
    }
}