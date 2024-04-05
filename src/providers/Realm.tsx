import { PropsWithChildren } from 'react';
import Realm from 'realm';
import { RealmProvider } from '@realm/react';
import { Task } from '../modals/Task';

export default function RealmCustomProvider({ children }: PropsWithChildren) {
  return <RealmProvider schema={[Task]}>{children}</RealmProvider>;
}
