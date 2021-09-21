import React from 'react';
import style from './style.css';
import { RouteComponentProps } from 'react-router';
import { useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/reducers';
import { Header, Grid, AddItemPanel } from 'app/components';


export namespace App {
  export interface Props extends RouteComponentProps<void> {}
}

export const App = ({ history, location }: App.Props) => {
  // const dispatch = useDispatch();
  
  const {  } = useSelector((state: RootState) => {
    return {
    };
  });

  return (
    <div className={style.normal}>
      <Header />
      <Grid>
        <Grid.Column size='col-3'>
          <AddItemPanel /> 
        </Grid.Column>
        <Grid.Column size='col-9'>
          {/* Table goes here */}
        </Grid.Column>
      </Grid>
    </div>
  );
};
