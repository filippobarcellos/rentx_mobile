import React from "react";
import { Feather } from "@expo/vector-icons";
import {
  Calendar as CustomCalendar,
  LocaleConfig,
  DateCallbackHandler,
} from "react-native-calendars";
import { useTheme } from "styled-components";
import { EN_UK } from "./config/locales";

LocaleConfig.locales["en-UK"] = EN_UK;
LocaleConfig.defaultLocale = "en-UK";

export type MarkedDatesProps = {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disabledTouchEvent?: boolean;
  };
};

type CalendarProps = {
  markedDates: MarkedDatesProps;
  onDayPress: DateCallbackHandler;
};

const Calendar = ({ markedDates, onDayPress }: CalendarProps) => {
  const theme = useTheme();

  return (
    <CustomCalendar
      theme={{
        textDayFontFamily: theme.fonts.family.primary_400,
        textDayHeaderFontFamily: theme.fonts.family.primary_500,
        textDayHeaderFontWeight: "bold",
        textDayHeaderFontSize: 10,
        textMonthFontSize: 20,
        textMonthFontFamily: theme.fonts.family.secondary_600,
        textDisabledColor: "#AEAEB3",
        textSectionTitleColor: "#AEAEB3",
        todayTextColor: "#DC1637",
        monthTextColor: theme.colors.text.title,
        arrowStyle: {
          marginHorizontal: -15,
        },
        "stylesheet.calendar.header": {
          week: {
            paddingVertical: 20,
            textTransform: "uppercase",
          },
        },
      }}
      headerStyle={{
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.text.secondary,
        paddingBottom: 16,
        marginBottom: 12,
      }}
      renderArrow={(direction) => (
        <Feather
          size={24}
          color={theme.colors.text.text}
          name={direction === "right" ? "chevron-right" : "chevron-left"}
        />
      )}
      minDate={new Date()}
      markingType="period"
      markedDates={markedDates}
      onDayPress={onDayPress}
    />
  );
};

export default Calendar;
