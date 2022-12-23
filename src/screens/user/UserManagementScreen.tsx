
import UserManagement from "@/src/components/user/UserManagement";

import useUser from "@/src/hooks/user/useUser"
import { View } from "react-native";

export default function UserManagementScreen() {
    const { user, setUser } = useUser();

    return (
        <View>
            <UserManagement
                user={user}
                setUser={setUser}
            />
        </View>
    );
}