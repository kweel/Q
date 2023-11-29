import { Text, ScrollView, Button } from "react-native";
//you have to pass data as 'data' in the parent for it to get the variable
export default function ScrollData({ data, Element, name }) {
    const textStyle = {color:'white'}
    //assume data is a list
    console.log(data)
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#000000'}}>
            {
                data.length > 0 ? data.map(attributes => {
                    console.log('hey')
                    return <Element key = {attributes.id} {...attributes}/>
                })
                :
                <Text style={{fontSize: 28, fontWeight: 600}}>Congratulations, you have no {name}!</Text>
            }
        </ScrollView>
    )
}