import useUserStore from "@/src/stores/user/useUserStore";

const useUser = (() => {
    const user = useUserStore((state: any) => state.user);
    const setUser = useUserStore((state: any) => state.setUser);

    return { user, setUser }
});

export default useUser;