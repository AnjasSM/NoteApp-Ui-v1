import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import HomeNote from '../screens/HomeNote';
import AddNote from '../screens/AddNote';
import EditNote from '../screens/EditNote';
import AppDrawer from '../components/AppDrawer';

const AppNavigator = createDrawerNavigator({
    HomeNote: {
        screen: HomeNote
    },
    AddNote: {
        screen: AddNote
    },
    EditNote: {
        screen: EditNote
    }
}, {
    contentComponent: AppDrawer,
    drawerWidth: 235
});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;


