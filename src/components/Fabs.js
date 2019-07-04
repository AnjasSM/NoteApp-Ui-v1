import React, { Component } from 'react';
import { View, Fab } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

class Fabs extends Component {
    render() {
        return(
            <View style={{ flex: 1 }}>
                <Fab
                    active={fabPress}
                    containerStyle={{ }}
                    style={{ backgroundColor: '#FFFCFC' }}
                    position="bottomRight"
                    onPress={() => navigate('AddNote')}>
                    <Icon name="plus" style={{color: 'black'}} />
                </Fab>
            </View>
        )
    }
}

export default Fabs;