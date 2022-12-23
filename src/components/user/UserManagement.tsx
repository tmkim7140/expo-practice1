import { useState, useEffect } from "react"
import { Button, Pressable, Text, View } from "react-native";

interface UserManagementProps {
    user: any;
    setUser: (user: any) => void;
}

export default function UserManagement(props: UserManagementProps) {

    useEffect(() => {
        console.log("---- UserManagement.useEffect");

        return (() => {
            console.log("----  UserManagement.cleanUp")
        });
    });

    return (
        <View>
            <Text ># store</Text>

            <Text >- User info : {JSON.stringify(props.user)}</Text>

            <Text >- Next info : {JSON.stringify({ id: `${(Number(props.user.id) + 1)}`, name: `name_${(Number(props.user.id) + 1)}` })}</Text>

            <Button
                title="Modify User"
                onPress={
                    () => {
                        props.setUser({ id: `${(Number(props.user.id) + 1)}`, name: `name_${(Number(props.user.id) + 1)}` });
                    }
                }
            />
        </View>
    );
}