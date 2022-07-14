// classnames library to help compose the list of classes for the button element
// import classNames from 'classnames';
import './DayListItem.scss';
import React from 'react';
import DayListItem from './DayListItem';

export default function DayList(props) {
  /* Props of DayList
    days:Array an array of objects (each object represents a day and includes an id, name, and spots)
    day:String the currently selected day
    setDay:Function sets the currently selected day and accepts the name of the day eg. "Monday", "Tuesday"   */

  const dayListItem = props.days.map((dayInAWeek) => {
    return (
      <DayListItem
        key={dayInAWeek.id}
        name={dayInAWeek.name}
        spots={dayInAWeek.spots}
        selected={dayInAWeek.name === props.day}
        setDay={props.setDay}
      />
    );
  });

  return <ul>{dayListItem}</ul>; //return func from line 13
}
