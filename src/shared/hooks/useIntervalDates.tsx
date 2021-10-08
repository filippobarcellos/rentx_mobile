import React, { useState } from "react";
import { DateObject } from "react-native-calendars";
import { MarkedDatesProps } from "../components/Calendar";
import { eachDayOfInterval, format } from "date-fns";
import theme from "../styles/theme";

type RentalDate = {
  date: number;
  formatted: string;
};

type RentalPeriod = {
  start_date: RentalDate;
  end_date: RentalDate;
};

const useIntervalDate = () => {
  const [lastSelectedDate, setLastSelectedDate] = useState({} as DateObject);
  const [datesInterval, setDatesInterval] = useState({} as MarkedDatesProps);
  const [rentalPeriod, setRentalPeriod] = useState({} as RentalPeriod);

  const generateInterval = (startDate: DateObject, endDate: DateObject) => {
    let interval: MarkedDatesProps = {};

    eachDayOfInterval({
      start: new Date(startDate.timestamp),
      end: new Date(endDate.timestamp),
    }).forEach((item) => {
      const date = format(item, "yyyy-MM-dd");

      interval = {
        ...interval,
        [date]: {
          color:
            startDate.dateString === date || endDate.dateString === date
              ? theme.colors.primary
              : theme.colors.primary_light,
          textColor:
            startDate.dateString === date || endDate.dateString === date
              ? theme.colors.white
              : theme.colors.primary,
        },
      };
    });
    return interval;
  };

  const onDateChange = (date: DateObject) => {
    let startDate = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let endDate = date;

    if (startDate.timestamp > endDate.timestamp) {
      startDate = endDate;
      endDate = startDate;
    }

    setLastSelectedDate(endDate);

    const intervalOfDates = generateInterval(startDate, endDate);

    const firstDate = Object.keys(intervalOfDates)[0];
    const lastDate =
      Object.keys(intervalOfDates)[Object.keys(intervalOfDates).length - 1];

    setDatesInterval(intervalOfDates);

    const rentalPeriod = {
      start_date: {
        date: startDate.timestamp,
        formatted: format(new Date(firstDate), "dd/MM/yyyy"),
      },
      end_date: {
        date: endDate.timestamp,
        formatted: format(new Date(lastDate), "dd/MM/yyy"),
      },
    };

    setRentalPeriod(rentalPeriod);
  };

  return { datesInterval, onDateChange, rentalPeriod };
};

export default useIntervalDate;
