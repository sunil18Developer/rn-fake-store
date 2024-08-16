import React from 'react';
import {FlatList, FlatListProps} from 'react-native';

interface IProps extends FlatListProps<any> {}

const FlatListComponent: React.FC<IProps> = (props: any) => {
  return <FlatList {...props} />;
};

export default FlatListComponent;