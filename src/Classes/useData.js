import React from "react";
import DataContext from '../State/DataProvider';
class useData extends React.Component{
    static contextType=DataContext;
}
export default useData;