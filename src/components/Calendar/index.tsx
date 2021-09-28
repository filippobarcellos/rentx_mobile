import React from "react";
import { Feather } from "@expo/vector-icons";
import { Calendar as CustomCalendar } from "react-native-calendars";
import { useTheme } from "styled-components";

const Calendar = () => {
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
    />
  );
};

export default Calendar;
