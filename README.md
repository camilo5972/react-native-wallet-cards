# React Native Wallet Cards

React Native component for displaying cards with a wallet style.

### Usage

```bash
$ npm install --save react-native-wallet-cards
```

Compact view             |  Expand view
:-------------------------:|:-------------------------:
![](http://ipfs-gw.everis.id/ipfs/QmPNzQmrrgVVuuYomKNQhLB8Y76DW7PCPaSN1Rc7DSmH88?v=4&s=300)  |  ![](http://ipfs-gw.everis.id/ipfs/Qme7rR4x4H1SHUWmQ22qNLS867LDaonwtRvTHRRm3Lmop9?v=4&s=300)


```javascript
import CardsWallet from 'react-native-wallet-cards';
import { View, Text } from 'react-native';

export class Wallet extends Component {

    data = [
        <View style={{flex: 1}}><Text>Content Card 1</Text></View>,
        <View style={{flex: 1}}><Text>Content Card 2</Text></View>,
        <View style={{flex: 1}}><Text>Content Card 3</Text></View>,
        <View style={{flex: 1}}><Text>Content Card 4</Text></View>,
        <View style={{flex: 1}}><Text>Content Card 5</Text></View>,
        <View style={{flex: 1}}><Text>Content Card 6</Text></View>
    ]

    render () {
        return (
            <CardsWallet 
                data={this.data}
            />
        );
    }
}
```

#### Properties
*Note: Data is the only property required by the component.*

| Prop | Description | Default |
|---|---|---|
|**`cardHeight`**|Height of each card. |170|
|**`cardBgColor`**|Background color of each card. |white|
|**`cardBorderRadius`**|Border radius for the card. |10|
|**`cardShadowColor`**|Card shadow color. |`#000`|
|**`showCardShadow`**|enable / disable card shadow. |true|
|**`cardSeparation`**|Separation distance between each card. |50|
|**`cardEasing`**|Timing function for the animation: `linear`, `ease`, `ease-in`, `ease-out`, `ease-in-out`, `ease-in-cubic`, `ease-out-cubic`, `ease-in-out-cubic`, `ease-in-circ`, `ease-out-circ`, `ease-in-out-circ`, `ease-in-expo`, `ease-out-expo`, `ease-in-out-expo`, `ease-in-quad`, `ease-out-quad`, `ease-in-out-quad`, `ease-in-quart`, `ease-out-quart`, `ease-in-out-quart`, `ease-in-quint`, `ease-out-quint`, `ease-in-out-quint`, `ease-in-sine`, `ease-out-sine`, `ease-in-out-sine`, `ease-in-back`, `ease-out-back`, `ease-in-out-back`. |`ease-in-out`|
|**`easingTime`**|Animation duration time (milliseconds). |300|
