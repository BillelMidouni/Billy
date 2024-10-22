import { useEffect, useState } from "react";
import auth from '@react-native-firebase/auth';
import { set } from "react-hook-form";

// get and return status of authenfication and user data
export function useAuth(){

    const [initializing, setInitializing] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<any>();

    const onAuthStateChanged = (user: any) => {
        setUser(user);
        setIsAuthenticated(user ? true : false);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    return {isAuthenticated, user, initializing};
}