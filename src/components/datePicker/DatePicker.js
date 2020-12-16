import DatePicker from 'react-native-datepicker'
import React from 'react'
import { colors } from '../../app/styles/colors'

const MyDatePicker = (props) => {
  const {date, onDateChange} = props;
  return (
    <DatePicker
        style={{width: '100%'}}
        date={date}
        // date={this.state.date}
        mode="date"
        placeholder="select date"
        format="DD-MM-YYYY"
        minDate="2016-05-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'relative',
            alignItems: 'flex-end'
          },
          dateInput: {
            borderWidth: 0,
            alignItems: 'flex-start',
            color: colors.greySecondary
          }
        }}
        // onDateChange={(date) => {this.setState({date: date})}}
        onDateChange={onDateChange}
      />
  )
}

export default MyDatePicker
