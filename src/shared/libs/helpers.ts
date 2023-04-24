/* eslint-disable no-unused-vars */
import moment, { Moment } from "moment";
import { ParsedUrlQuery } from "querystring";



/**
 * Compose a number of styles together easily
 * @param {String} styles Classes/styles to be applied
 * @return {String} Combined classes
 */
export const composeClasses = (...styles: string[]): string => {
  let classes = "";

  styles.forEach((arg) => {
    if (arg) classes += `${arg} `;
  });

  return classes.trim();
};

// CURRENCIES
export const CURRENCIES = {
  NAIRA: "₦",
};

/**
 * Slide Left method
 * This is used to slide an element to the left of its current position
 * @param {string} idOfElement
 * @param {number} distance
 */
export const slideLeft = (idOfElement: string, distance: number) => {
  const slider: any = document.getElementById(idOfElement);
  slider.scrollLeft = slider?.scrollLeft - distance;
};

/**
 * Format time to this format DD MMMM YYYY h:mm a
 * @param {string} time
 * @return {string}
 */
export const formatTime = (time: string | Moment) => {
  const date = moment(time).format("DD MMMM YYYY h:mm a");
  return date;
};

/**
 * Add naira symbol to price
 * @param {string} price
 * @return {string}
 */
export const addNairaToPrice = (price: string) => {
  return `${CURRENCIES.NAIRA} ${price}`;
};

/**
 * Slide Right method
 * This is used to slide an element to the right of its current position
 * @param {string} idOfElement
 * @param {number} distance
 */
export const slideRight = (idOfElement: string, distance: number) => {
  const slider: any = document.getElementById(idOfElement);
  slider.scrollLeft = slider?.scrollLeft + distance;
};

/**
 * Button properties for the custom button
 */
export const ButtonProperties = {
  SIZES: {
    small: "small",
    medium: "medium",
    big: "big",
  },
  ICON_POSITION: {
    start: "start",
    end: "end",
  },
  VARIANT: {
    primary: {
      name: "primary",
      background: "",
      hover: "",
      disabled: "",
      focused: "",
    },
    secondary: {
      name: "secondary",
      background: "",
      hover: "",
      disabled: "",
      focused: "",
    },
  },
};

export const CheckBoxProperties = {
  LABEL_POSITION: {
    start: "start",
    end: "end",
  },
  SHAPE: {
    square: "square",
    rounded: "rounded",
  },
  SIZES: {
    small: "small",
    big: "big",
  },
};

export const RadioButtonProperties = {
  LABEL_POSITION: {
    start: "start",
    end: "end",
  },
  SIZES: {
    small: "small",
    big: "big",
  },
};

/**
 * Truncate text with ellipses method
 * This is used to cut short the length of a text and attach ellipses to the
 * end of the text to signify that some part of the text is missing.
 * @param {string} text
 * @param {number} limit
 * @return {string} truncated text
 */
export const truncateText = (text: string, limit: number = 20): string => {
  return text.length > limit ? `${text.slice(0, limit)}...` : text;
};

/**
 * Separate classes with space between
 * This is used to separate a list of classes that are separated by commas to a list
 * classes that are separated by space
 * @param {string[]} classes
 * @return {string} classNames
 */
export const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(" ");
};

export const externalDocs = {
 
};

export const socialMedia = {
 
};

/**
 * @namespace
 * @description              - The regular expressions used for various input fields.
 * @property {RegExp}  email - It ensures an email starts with a small letter,
 *                             and proceeds with any character/(s) of choice before the "@" symbol,
 *                             then accepts at least one small letter after the "@" symbol but
 *                             before the "." and finally ends with more than two letters but
 *                             less than four letters.
 * @property {RegExp}  name  - It accepts only letters and hyphen.
 * @property {RegExp}  password    - It ensures at least both letters and numbers.
 * @property {RegExp}  phoneNumber - It ensures the field starts with a number in
 */
export const REGEX = {
  email: /^[a-zA-z]+[a-zA-z.-_\d\W]*@([a-z]+\.)+[a-z]{2,4}$/g,
  name: /^[\sa-zA-Z]+( [a-zA-Z]+)*(-[a-zA-Z\s]+)?$/,
  password: /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]*)(?!.*\s).{8,50}$/,
  phoneNumber: /^[7-9][0-1][0-9]+$/,
  specialCharacter: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
  numbers: /[0-9]/,
  capsCheck: /[A-Z]/,
};

export const errorMessages = {
  email: "Email is not valid",
  maxChar: (num: number) =>
    `This field cannot have more than ${num} characters`,
  minChar: (num: number) => `This field must be at least ${num} characters`,
  minLowerCase: (num: number) =>
    `This field must be at least ${num} lower case character`,
  minUpperCase: (num: number) =>
    `This field must be at least ${num} upper case character`,
  minNumber: (num: number) => `This field must be at least ${num} number`,
  minSymbol: (num: number) =>
    `This field must be at least ${num} special character`,
  required: "This field is compulsory",
  passwordMatch: "Passwords dont match",
  positiveInteger: "The number must be greater than 0",
  integer: "No decimals allowed",
};

/**
 * Check if all keys in object is empty
 * @param {Object} obj
 * @return {boolean}
 */
export const checkProperties = (obj: any) => {
  for (const key in obj) {
    if (obj[key] !== null && obj[key] != "") return false;
  }
  return true;
};

/**
 * Status for various responses
 */
export const Status = {
  FAILED: "failed",
  SUCCESS: "success",
  ERROR: "error",
};

/**
 * Notification Types
 */
export enum NotificationTypes {
  ERROR = "error",
  SUCCESS = "success",
  INFO = "info",
}


export const changeDateFormat = (
  date: string | Date | undefined,
  timeFormat: string
) => {
  if (date) {
    return moment(date).format(timeFormat);
  }
};
