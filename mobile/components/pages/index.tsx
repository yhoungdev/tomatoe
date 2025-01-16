import {View, Text, StyleSheet, Image} from 'react-native'
import Button from "@/components/ui/button/button";
import ContainerLayout from "@/layouts/containerLayout";
import PrimaryButton from "@/components/ui/button";

const style = StyleSheet.create({
    textStyle: {
        fontSize: 25,
        textAlign: "center",
    }
});

function IndexHomePage() {
    return (
        <ContainerLayout>
            <View style={
                {
                    flex: 1,
                    justifyContent: "space-between"
                }
            }>

                <Text style={
                    {
                        fontSize: 50,
                        textAlign: 'center'
                    }
                }>🍅 </Text>

                <Image
                    source={
                    {
                        uri: "/assets/images/svg/tv_image.svg"
                    }
                    }/>

                <Text style={style.textStyle}>
                    Transform your TV into a chatty superstar!
                </Text>

                <PrimaryButton title={'Contiue with Google'}
                    onPress={() => {}}>Continue with Google.</PrimaryButton>
            </View>
        </ContainerLayout>
    );
}

export default IndexHomePage;
