import react, { useContext } from 'react';
import { BookingContext } from '../context/BookingContext';
import { View, StyleSheet, Text, FlatList, Alert } from 'react-native';
import { spacing } from '../theme/index';
import CardBooking from '../components/CardBooking';

export default function BookingScreen() {
    const { booking, removeBooking } = useContext(BookingContext);

    const noBooking = booking.length === 0;

    const deleteBooking = (id) => {
        Alert.alert(
            "Confirmación",
            "¿Estás seguro de que deseas cancelar esta reserva?",
            [
                { text: "No", onPress: () => {Alert.alert("Operacion cancelada", "No se ha cancelado ninguna clase.")} },
                { text: "Sí", onPress: () => removeBooking(id) }
            ]
        );
    }

    return(
        <View style={style.container}>
            {
                noBooking && (
                    <Text style={style.message}>No tienes reservas disponibles.</Text>
                )
            }
            <FlatList
                data={booking}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (                    
                    <CardBooking booking={item} onPress={ () => deleteBooking(item.id)} />
                )}
            />            
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        textItems:'center',     
        margin: spacing.xxl,        
    },
    message: {
        textAlign: 'center'
    }
});
