import React from 'react'
import LoadingOverlay from 'react-loading-overlay'
import './App.css';
import {connect, useDispatch} from 'react-redux'
import {setLoader} from './store';
function App(props) {
  console.log(props.isActive)
  const dispatch = useDispatch()
  return (
        <LoadingOverlay
            active={props.isActive}
            spinner
            text='Loading...'
        >
          <div className="App">
            <button onClick={()=> {
              dispatch(setLoader(true))
              setTimeout(()=>{
                dispatch(setLoader(false))
              },2000)
            }}>Load Spinner</button>
          </div>
        </LoadingOverlay>
  );
}

const mapStateToProps = state => {
  return {
      isActive:  state.isLoading
  }
}

export default connect(mapStateToProps)(App);