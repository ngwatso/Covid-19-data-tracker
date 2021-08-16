import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCovidData } from '../utils/actions'


const FilterData = (props) => {
  const { getCovidData, setCovidData } = props
  const history = History()

  const initialState = {
    country: "",
    state: "",
    min_date: new Date(),
    max_date: new Date(),
  }
} 




const mapStateToProps = (state) => {
  return {
    data: state.data,
    isLoading: state.isLoading,
    error: state.error
  }
}



export default connect(mapStateToProps, { getCovidData })(FilterData)