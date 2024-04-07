import { PropsWithChildren } from 'react';
import Realm from 'realm';
import { RealmProvider, AppProvider, UserProvider } from '@realm/react';
import { Task } from '../modals/Task';
import { Text } from 'react-native';
import Login from '../components/Login';

const appId = 'application-0-tkejc';

export default function RealmCustomProvider({ children }: PropsWithChildren) {
  return (
    <AppProvider id={appId}>
      <UserProvider fallback={Login}>
        <RealmProvider schema={[Task]}>{children}</RealmProvider>
      </UserProvider>
    </AppProvider>
  );
}
