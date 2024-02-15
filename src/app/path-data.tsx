// paths: String representation of array paths
export const paths2 = [
  "M66.35,30.81c-18.21,2.15-36.54,4.33-54.01,9.89-4.22,1.34-8.69,3.1-10.42,7.61-.86,2.24-.41,4.85,1.38,6.45,2.85,2.54,6.66.97,9.76-.59,11.7-5.89,23.53-11.87,33.43-20.45,8.71-7.55,15.88-17.44,18.48-28.58.54-2.31-1.73-4.25-3.97-3.47-5.14,1.78-9.74,5.19-13.41,9.26-4.78,5.3-8.16,11.69-11.21,18.13-3.03,6.39-5.86,13.35-4.74,20.33s7.79,13.51,14.67,11.91",
  "M90.94,37.92l-12.17,18.38c-.16.24.02.58.31.56,9.34-.34,18.35-5.91,22.78-14.16,2.73-3.68-6.6,7.82-3.18,11.05,2.07,1.95,5.31,1.93,7.56.2,7.98-6.13,23.23-23.59,21.5-21.09-3.1,3.89-6.23,9.63-2.58,13.29,1.86,1.87,4.75,2.25,7.18,1.21,6.37-2.73,14.93-15.49,12.87-13.76-2.43,2.1-4.98,4.38-5.24,7.8-.12,1.54.45,3.12,1.68,4.07,2.1,1.63,4.45.62,6.41-.5,8.98-5.14,15.97-13.63,19.41-23.37.51-1.44-1.18-2.69-2.39-1.76-5.88,4.51-10.42,10.78-12.78,17.82-.46,1.36-.56,2.85-.05,4.2,1.57,4.18,6.73,3.48,10.38,1.94,11.68-4.93,21.37-14.37,26.7-25.86.56-1.21-.75-2.45-1.91-1.79-5.34,3.07-9.87,7.56-12.93,12.91-1.91,3.34-3.28,7.15-2.94,10.98s2.72,7.65,6.38,8.85",
  "M146.95,21.14c1.25.28,2.65-.42,3.17-1.59",
  "M196.03,51.51c5.92-5.52,11.84-11.05,17.77-16.57,1.11-1.04,2.28-2.11,3.72-2.6s3.26-.23,4.15,1.01c1.22,1.71.12,4.05-.98,5.84-2.79,4.53-5.57,9.06-8.36,13.59,5.4-6.49,11.45-12.44,18.03-17.72,1.6-1.29,3.33-2.58,5.36-2.9s4.42.66,4.98,2.64c.58,2.05-.91,4.03-1.75,5.98s-.35,5.04,1.78,5.1c.92.03,1.72-.58,2.43-1.15,6.43-5.13,12.86-10.26,19.29-15.4-3.4,1.83-6.97,3.83-8.87,7.18s-1.24,8.47,2.3,9.99c2.28.98,4.91.21,7.15-.85,2.96-1.41,5.8-3.47,7.16-6.46s.78-7.02-1.95-8.83-7.31-.05-7.42,3.23c-.08,2.37,2.04,4.37,4.34,4.94s4.73.03,7.02-.59c16.39-4.45,32.4-15.01,44.49-26.94,3.43-5.76-19.29,22.49-22.6,35.84",
  "M281.45,24.93c13.62,3.03,27.84,3.32,41.56.85",
  "M334.64,53.33c8.18-6.59,14.2-21.65,24.53-19.77,6.44,1.17.47,13.94-5.62,16.34,8.7-4.78,18.24-20.41,26.11-14.35,3.96,3.05-3.87,9.33-7.57,12.68,5.39-4.45,11.05-8.58,16.93-12.35,2.27-1.45,5.18-2.88,7.5-1.51,1.91,1.12,2.45,3.76,1.83,5.88s-2.14,3.85-3.61,5.5c12.38-3.52,24.38-8.35,35.74-14.4-1.81,2.95-5.78,3.46-8.98,4.78s-6.12,5.48-3.71,7.97c1.35,1.4,3.62,1.29,5.51.82,6.67-1.66,20.92-9.71,14.93-13.07-2.55-1.43-3.56,4.76-4.25,7.6s.04,6.24,2.49,7.84c3.57,2.33,8.23-.18,11.66-2.73,13.78-10.24,47.74-37.77,38.04-34.59-15.87,5.2-23.82,23.66-31.47,38.5,7.43-10.5,18.14-20.21,30.89-21.9,8.58-1.14-12.45,13.29-21.2,12.7,5.97,5.4,15.34,5.46,22.74,2.28s21.91-11.76,18.96-14.71-7.99,1.68-11.35,3.89-5.91,6.14-5.31,10.12c.88,5.79,7.6,8.73,13.45,9.06,5.85.33,11.98-.82,17.42,1.37",
  "M553.8,34.29c-5.17,0-10.29,2.36-13.65,6.28-1.47,1.71-2.66,3.85-2.11,6.19.23,1,.86,1.9,1.76,2.38,2.01,1.07,3.96-.22,5.45-1.56,3.75-3.37,6.7-7.63,8.51-12.34-1.29,2.43-2.61,4.95-2.45,7.81.09,1.55.7,3.07,1.87,4.08,3.06,2.63,7.46.46,10.59-1.84,5.53-4.08,11.86-12.01,16.86-15.62.11-.08.25.06.17.18-4.68,6.46-8.96,13.77-15.63,20.98-1.56,1.69,13.44-10.45,20.17-15.68,2.39-1.86,5.01-3.81,8.21-3.29,1.93.31,3.54,1.83,3.56,3.78.03,2.44-2.37,3.81-4.12,5.35s-2.82,4.67-.64,5.76c.81.41,1.79.36,2.62,0,7.06-3.14,15.81-9.04,18.37-13.82,1.84-3.44-6.13,5.07-7.17,9.05-.47,1.81-.32,3.77.63,5.38,2.59,4.39,8.53,3.52,12.79,1.45,6.1-2.95,11.33-7.66,14.9-13.42.06-.09-.04-.21-.14-.17-8.27,2.98-13.95,10.67-17.93,18.52-4.31,8.51-7.31,17.79-13.42,25.19-.93,1.12-2.35,1.81-3.78,1.56-2.71-.46-2.97-3.67-2-5.85,2.4-5.36,9.03-6.98,14.66-8.69,9.9-3,19.12-8.21,26.78-15.15",
  "M653.45,51.24c7.49-6.87,16.67-11.88,26.5-14.47l-6.89,10.43c-.24.36.22.78.56.5l11.99-10.06c1.65-1.38,3.55-2.85,5.76-2.31s3.44,2.6,3.39,4.78c-.09,3.89-3.01,6.46-5.77,8.79,5.49-4.36,11.31-8.29,17.4-11.76,1.49-.85,3.09-1.69,4.88-1.37.83.15,1.61.62,2.03,1.35,1.58,2.74-2.71,5.47-1.01,8.3.46.77,1.29,1.26,2.18,1.43,2,.36,3.77-.6,5.45-1.53,8.32-4.64,17.79-7.66,24.97-13.93,4.74-4.14-8.12,5.08-10.06,9.85-.81,1.99-.41,4.35,1.28,5.68,2.22,1.74,5.08.53,7.34-.78,2.16-1.25,4.31-2.67,5.75-4.71,1.8-2.55,3.28-7.04.71-9.35-1.09-.98-2.93-1.84-4.31-1.36-3.69,1.29-3.55,7.66-.62,9.38,2.6,1.53,5.92,1.03,8.76,0,7.06-2.55,12.94-8.17,15.81-15.11,2.21.96,4.55,1.63,6.93,2,2.17.33,2.89,3.09,1.16,4.45-.71.56-1.45,1.08-2.15,1.62-2.55,1.95-5.02,5.08-2.92,8.24.59.89,1.47,1.55,2.43,2.04,11.24,5.75,26.65-.36,31.01-12.16.36-.98.45-2.07.07-3.05-.63-1.61-1.95-1.72-3.17-1.64-6.56.44-12.3,6.3-12.61,12.87s4.85,12.94,11.33,14.01",
  "M825.15,31.37c13.08-4.17,24.59-13.11,31.87-24.76-7.77,11.78-14.14,24.49-18.92,37.77-.14.4.3.76.66.53l15.62-9.72c.13-.08.26.1.14.2-4,3.35-7.6,7.18-10.68,11.4,5.94,2.52,13.69-1.77,14.71-8.15-1.98-1.38-4.56-1.84-6.89-1.25,9.72-1.15,19.22-4.06,27.91-8.55-3.51,2.16-7.19,4.49-8.42,8.7-.59,2.02-.29,4.27,1.07,5.88,2.76,3.27,7.38,1.9,10.32-.55,2.2-1.84,3.98-4.35,4.33-7.2.44-3.47-1.63-7.39-5.44-7.75-1.93-.18-3.88.75-4.78,2.47-2,3.82,2.45,7.73,6.38,7.3,3.64-.39,6.54-3.17,8.87-6,1.86-2.27,3.61-5.33,2.91-8.01-.13-.51.33-.97.85-.86,3.89.81,7.92.96,11.86.43.74-.1,1.11.85.51,1.28-2.64,1.87-4.98,4.08-5.91,7.26-.72,2.49-.21,5.25,1.72,6.98,2.32,2.09,5.17,1.43,7.62.43,4.82-1.96,13.06-9.37,12.65-10-2.57,1.79-5.89,4.35-6.09,7.73-.06,1.09.29,2.2,1.02,3.02,1.79,1.99,4.46,1.29,6.65.41,5.32-2.13,10.29-5.12,14.66-8.82-3.05,3.51-4.73,8.17-4.62,12.82,4.66-4.4,9.85-8.25,15.41-11.43,2.13-1.22,4.8-2.36,6.88-.75,1.23.95,1.74,2.56,1.51,4.1-.43,2.96-2.68,4.91-4.83,6.72,7.27.8,14.85-2.44,19.29-8.24",
  "M992.47,28.07c-4.76,1.42-9.09,4.28-12.25,8.11-1.27,1.54-2.41,3.58-1.71,5.45.73,1.95,3.15,2.72,5.23,2.59,3.39-.22,6.61-2.23,8.29-5.19s1.75-6.76.19-9.77c2.26,4.86,2.56,10.47,1.63,15.75s-3.03,10.29-5.39,15.1c-4.91,10-11.03,19.4-18.2,27.93-1.83,2.18-4.31,4.5-7.09,3.91-2.97-.64-4.25-4.49-3.28-7.37s3.41-4.97,5.74-6.92c18.5-15.49,36.09-32.08,52.64-49.65",
  "M932.42,19.34l1.08-1.01",
  "M1050.37,29.29c-4.88.86-9.33,3.94-11.85,8.21-1.34,2.27-2.19,5.03-.46,7.58l.44.46c2.76,2.06,5.22.05,6.77-2.02,2.89-3.88,4.72-16.94,4.24-13.59-1.71,3.72-3.47,7.63-2.07,11.9.13.39.31.76.53,1.1,2.74,4.21,6.66,3.32,9.88,1.88,4.8-2.15,9.02-5.57,12.11-9.82,1.3-1.78,2.42-3.72,3.95-5.31,2.25-2.32,5.66-3.89,8.92-1.58.23.16.43.38.56.63,1.86,3.5-.87,5.51-2.95,7.44-1.93,1.8-3.63,4.94-.49,6.78.18.1.38.18.58.23,9.23,2.23,18.86-1.93,25.76-8.31,6.53-6.04,11.06-13.89,15.48-21.6,1.86-3.32-6.59,11.37-10.36,16.77-1.49,2.14-2.93,4.38-4.15,6.71-1.12,2.14,1.88,4.01,3.29,2.04l4.43-6.18c1.3-1.82,2.7-4.11.02-6.24-.22-.18-.48-.31-.75-.4-.06-.02-.12-.04-.19-.06-1.98-.68-1.64-3.58.44-3.75,6.44-.55,12.9-.92,19.36-1.11",
];

export const paths = [
  "M65.85,30.31c-18.21,2.15-36.54,4.33-54.01,9.89-4.22,1.34-8.69,3.1-10.42,7.61-.86,2.24-.41,4.85,1.38,6.45,2.85,2.54,6.66.97,9.76-.59,11.7-5.89,23.53-11.87,33.43-20.45,8.71-7.55,15.88-17.44,18.48-28.58.54-2.31-1.73-4.25-3.97-3.47-5.14,1.78-9.74,5.19-13.41,9.26-4.78,5.3-8.16,11.69-11.21,18.13-3.03,6.39-5.86,13.35-4.74,20.33s7.79,13.51,14.67,11.91",
  "M90.44,37.42l-12.17,18.38c-.16.24.02.58.31.56,9.34-.34,18.35-5.91,22.78-14.16,2.73-3.68-6.6,7.82-3.18,11.05,2.07,1.95,5.31,1.93,7.56.2,7.98-6.13,23.23-23.59,21.5-21.09-3.1,3.89-6.23,9.63-2.58,13.29,1.86,1.87,4.75,2.25,7.18,1.21,6.37-2.73,14.93-15.49,12.87-13.76-2.43,2.1-4.98,4.38-5.24,7.8-.12,1.54.45,3.12,1.68,4.07,2.1,1.63,4.45.62,6.41-.5,8.98-5.14,15.97-13.63,19.41-23.37.51-1.44-1.18-2.69-2.39-1.76-5.88,4.51-10.42,10.78-12.78,17.82-.46,1.36-.56,2.85-.05,4.2,1.57,4.18,6.73,3.48,10.38,1.94,11.68-4.93,21.37-14.37,26.7-25.86.56-1.21-.75-2.45-1.91-1.79-5.34,3.07-9.87,7.56-12.93,12.91-1.91,3.34-3.28,7.15-2.94,10.98s2.72,7.65,6.38,8.85",
  "M146.45,20.64c1.25.28,2.65-.42,3.17-1.59",
  "M195.53,51.01c5.92-5.52,11.84-11.05,17.77-16.57,1.41-1.31,2.89-2.67,4.93-2.85.96-.08,1.96.21,2.64.9,1.68,1.73.51,4.29-.67,6.2-2.79,4.53-5.57,9.06-8.36,13.59-.8,1.5,11.45-12.44,18.03-17.72,1.98-1.59,4.14-3.18,6.84-2.96,1.33.11,2.6.8,3.22,1.98,1.44,2.72-1.25,5.3-1.86,7.87s2.51,4.46,4.58,2.81c0,0,.02-.02.03-.02,6.43-5.13,12.86-10.26,19.29-15.4.9-.52-8.42,4.64-9.81,9.39-.65,2.24-.25,4.73,1.35,6.43,2.58,2.74,6.15,1.86,9.04.49,2.96-1.41,5.8-3.47,7.16-6.46,1.46-3.21.69-7.61-2.59-9.2-2.88-1.39-6.03-.22-6.7,2.91-.57,2.67,1.73,5.01,4.26,5.63,2.31.57,4.73.03,7.02-.59,16.39-4.45,32.4-15.01,44.49-26.94,3.43-5.76-19.29,22.49-22.6,35.84",
  "M280.95,24.43c13.62,3.03,27.84,3.32,41.56.85",
  "M329.53,49.22c8.18-6.59,14.2-21.65,24.53-19.77,6.44,1.17-7.14,17.39-5.62,16.34,8.7-4.78,18.24-20.41,26.11-14.35,3.96,3.05-3.87,9.33-7.57,12.68-1.85,1.31,11.05-8.58,16.93-12.35,2.47-1.58,5.69-3.12,8.1-1.09,1.1.93,1.6,2.39,1.52,3.83-.15,2.63-1.73,4.66-3.39,6.55-.15.17.02.42.23.36,12.12-3.5,23.87-8.26,35-14.19-3.01,4.9-11.94,3.07-13.49,9.36-.24.97-.16,2.02.38,2.86,1.26,1.94,3.83,1.86,5.93,1.34,6.67-1.66,20.92-9.71,14.93-13.07-2.55-1.43-3.56,4.76-4.25,7.6s.04,6.24,2.49,7.84c3.57,2.33,8.23-.18,11.66-2.73,13.78-10.24,47.74-37.77,38.04-34.59-15.51,5.08-23.46,22.82-30.95,37.48-.05.1.08.17.15.09,7.4-10.14,17.85-19.33,30.22-20.97,8.58-1.14-12.45,13.29-21.2,12.7,5.97,5.4,15.34,5.46,22.74,2.28s21.91-11.76,18.96-14.71-8.54,2.18-11.86,4.22c-2.3,1.42-4.04,3.62-4.63,6.26-1.81,8.14,6.36,12.2,13.3,12.59,5.85.33,11.98-.82,17.42,1.37",
  "M556.15,32.06c-5.17,0-10.29,2.36-13.65,6.28-1.47,1.71-2.66,3.85-2.11,6.19.23,1,.86,1.9,1.76,2.38,2.01,1.07,3.96-.22,5.45-1.56,3.75-3.37,9.05-13.67,8.51-12.34-1.29,2.43-2.61,4.95-2.45,7.81.09,1.55.7,3.07,1.87,4.08,3.06,2.63,7.46.46,10.59-1.84,5.53-4.08,11.86-12.01,16.86-15.62.11-.08.25.06.17.18-4.68,6.46-8.96,13.77-15.63,20.98-1.56,1.69,13.44-10.45,20.17-15.68,2.39-1.86,5.01-3.81,8.21-3.29,1.93.31,3.54,1.83,3.56,3.78.03,2.44-2.37,3.81-4.12,5.35s-2.82,4.67-.64,5.76c.81.41,1.79.36,2.62,0,7.06-3.14,15.81-9.04,18.37-13.82,1.84-3.44-6.13,5.07-7.17,9.05-.47,1.81-.32,3.77.63,5.38,2.59,4.39,8.53,3.52,12.79,1.45,6.1-2.95,11.33-7.66,14.9-13.42.06-.09-.04-.21-.14-.17-8.27,2.98-13.95,10.67-17.93,18.52-4.31,8.51-7.31,17.79-13.42,25.19-.93,1.12-2.35,1.81-3.78,1.56-2.71-.46-2.97-3.67-2-5.85,2.4-5.36,9.03-6.98,14.66-8.69,9.9-3,19.12-8.21,26.78-15.15",
  "M655.76,46.44c7.49-6.87,16.67-11.88,26.5-14.47l-6.89,10.43c-.24.36.22.78.56.5l11.99-10.06c1.65-1.38,3.55-2.85,5.76-2.31s3.44,2.6,3.39,4.78c-.09,3.89-3.01,6.46-5.77,8.79-1.13,1.03,11.31-8.29,17.4-11.76,1.49-.85,3.09-1.69,4.88-1.37.83.15,1.61.62,2.03,1.35,1.58,2.74-2.71,5.47-1.01,8.3.46.77,1.29,1.26,2.18,1.43,2,.36,3.77-.6,5.45-1.53,8.32-4.64,17.79-7.66,24.97-13.93,4.74-4.14-8.12,5.08-10.06,9.85-.81,1.99-.41,4.35,1.28,5.68,2.22,1.74,5.08.53,7.34-.78,2.16-1.25,4.31-2.67,5.75-4.71,1.8-2.55,3.28-7.04.71-9.35-1.09-.98-2.93-1.84-4.31-1.36-3.69,1.29-3.55,7.66-.62,9.38,2.6,1.53,5.92,1.03,8.76,0,7.06-2.55,12.94-8.17,15.81-15.11,2.21.96,4.55,1.63,6.93,2,2.17.33,2.89,3.09,1.16,4.45-.71.56-1.45,1.08-2.15,1.62-2.55,1.95-5.02,5.08-2.92,8.24.59.89,1.47,1.55,2.43,2.04,11.24,5.75,26.65-.36,31.01-12.16.36-.98.45-2.07.07-3.05-.63-1.61-1.95-1.72-3.17-1.64-6.56.44-12.3,6.3-12.61,12.87s4.85,12.94,11.33,14.01",
  "M824.65,30.87c13.08-4.17,24.59-13.11,31.87-24.76,2.31-4.83-14.14,24.49-18.92,37.77-.14.4.3.76.66.53l15.62-9.72c.13-.08.26.1.14.2-4,3.35-7.6,7.18-10.68,11.4,5.94,2.52,13.69-1.77,14.71-8.15-1.98-1.38-4.56-1.84-6.89-1.25,9.72-1.15,19.22-4.06,27.91-8.55-3.51,2.16-7.19,4.49-8.42,8.7-.59,2.02-.29,4.27,1.07,5.88,2.76,3.27,7.38,1.9,10.32-.55,2.2-1.84,3.98-4.35,4.33-7.2.44-3.47-1.63-7.39-5.44-7.75-1.93-.18-3.88.75-4.78,2.47-2,3.82,2.45,7.73,6.38,7.3,3.64-.39,6.54-3.17,8.87-6,1.86-2.27,3.61-5.33,2.91-8.01-.13-.51.33-.97.85-.86,3.89.81,7.92.96,11.86.43.74-.1,1.11.85.51,1.28-2.64,1.87-4.98,4.08-5.91,7.26-.72,2.49-.21,5.25,1.72,6.98,2.32,2.09,5.17,1.43,7.62.43,4.82-1.96,13.06-9.37,12.65-10-2.57,1.79-5.89,4.35-6.09,7.73-.06,1.09.29,2.2,1.02,3.02,1.79,1.99,4.46,1.29,6.65.41,5.32-2.13,10.29-5.12,14.66-8.82-3.05,3.51-4.73,8.17-4.62,12.82,4.66-4.4,9.85-8.25,15.41-11.43,2.13-1.22,4.8-2.36,6.88-.75,1.23.95,1.74,2.56,1.51,4.1-.43,2.96-2.68,4.91-4.83,6.72,7.27.8,14.85-2.44,19.29-8.24",
  "M990.63,27.57c-4.76,1.42-9.09,4.28-12.25,8.11-1.27,1.54-2.41,3.58-1.71,5.45.73,1.95,3.15,2.72,5.23,2.59,3.39-.22,6.61-2.23,8.29-5.19s1.75-6.76.19-9.77c2.26,4.86,2.56,10.47,1.63,15.75s-3.03,10.29-5.39,15.1c-4.91,10-11.03,19.4-18.2,27.93-1.83,2.18-4.31,4.5-7.09,3.91-2.97-.64-4.25-4.49-3.28-7.37s3.41-4.97,5.74-6.92c18.5-15.49,36.09-32.08,52.64-49.65",
  "M931.92,18.84l1.08-1.01",
  "M1049.87,28.79c-4.88.86-9.33,3.94-11.85,8.21-1.34,2.27-2.19,5.03-.46,7.58l.44.46c2.76,2.06,5.22.05,6.77-2.02,2.89-3.88,4.72-16.94,4.24-13.59-1.71,3.72-3.47,7.63-2.07,11.9.13.39.31.76.53,1.1,2.74,4.21,6.66,3.32,9.88,1.88,4.8-2.15,9.02-5.57,12.11-9.82,1.3-1.78,2.42-3.72,3.95-5.31,2.25-2.32,5.66-3.89,8.92-1.58.23.16.43.38.56.63,1.86,3.5-.87,5.51-2.95,7.44-1.93,1.8-3.63,4.94-.49,6.78.18.1.38.18.58.23,9.23,2.23,18.86-1.93,25.76-8.31,6.53-6.04,11.06-13.89,15.48-21.6,1.86-3.32-6.59,11.37-10.36,16.77-1.49,2.14-2.93,4.38-4.15,6.71-1.12,2.14,1.88,4.01,3.29,2.04l4.43-6.18c1.3-1.82,2.7-4.11.02-6.24-.22-.18-.48-.31-.75-.4-.06-.02-.12-.04-.19-.06-1.98-.68-1.64-3.58.44-3.75,6.44-.55,12.9-.92,19.36-1.11",
];

export const calligraphicPaths = [
  "M65.88,30.98c-10.12,1.74-20.27,3.26-30.29,5.21-5.01.99-9.99,2.09-14.91,3.39-1.23.32-2.46.67-3.68,1.01-1.23.33-2.44.7-3.66,1.07-2.44.74-4.82,1.47-6.85,2.67-1.01.6-1.93,1.3-2.66,2.16-.72.83-1.33,1.9-1.62,2.91-.28,1.04-.24,2.17.15,3.16.37.99,1.14,1.83,2.1,2.32.95.49,2.11.58,3.28.39,1.17-.18,2.35-.61,3.5-1.1,2.3-1.06,4.62-2.2,6.91-3.33,9.15-4.57,18.1-9.73,25.79-16.41,7.63-6.65,14.03-14.83,17.52-24.18.44-1.16.8-2.35,1.14-3.54l.45-1.8c.1-.4.05-.66-.08-.96-.24-.58-.96-.98-1.58-.88-.08.01-.16.02-.24.05l-.12.03-.21.08c-.28.11-.57.21-.84.33-.56.23-1.11.48-1.65.75-4.35,2.17-8.18,5.4-11.3,9.22-3.19,3.8-5.73,8.16-8.09,12.65-2.31,4.53-4.65,9.07-6,13.84-1.31,4.72-1.65,9.93.8,14.25.58,1.08,1.33,2.06,2.12,3,.83.9,1.77,1.72,2.8,2.39,1.05.64,2.19,1.14,3.4,1.43,1.22.25,2.48.28,3.73.09h0c.08-.01.16.04.17.12.01.08-.04.15-.11.17-1.26.32-2.59.44-3.91.27-1.31-.21-2.58-.64-3.77-1.25-1.17-.64-2.25-1.43-3.23-2.34-.95-.94-1.81-1.97-2.52-3.12-1.43-2.26-2.29-4.97-2.46-7.64-.23-2.68.06-5.38.68-7.96,1.22-5.19,3.48-9.91,5.69-14.57,2.25-4.66,4.88-9.24,8.21-13.38,3.36-4.1,7.51-7.7,12.42-10.01.61-.28,1.24-.55,1.87-.8.31-.13.64-.23.96-.35l.24-.09.34-.09c.23-.07.47-.1.7-.12,1.93-.2,3.88.93,4.62,2.74.39.88.44,1.96.2,2.81l-.52,1.92c-.39,1.27-.81,2.52-1.3,3.75-3.89,9.88-10.96,18.09-19.11,24.44-8.17,6.41-17.32,11.23-26.39,16.01l-6.83,3.59c-1.17.58-2.4,1.12-3.75,1.41-1.33.3-2.87.31-4.25-.3-1.36-.6-2.51-1.7-3.13-3.09-.62-1.37-.76-2.93-.45-4.38.66-2.87,2.65-5.24,5.01-6.71,2.36-1.47,4.91-2.35,7.37-3.09,2.47-.77,4.95-1.5,7.47-2.1,5.01-1.26,10.08-2.29,15.16-3.1,10.18-1.65,20.42-2.55,30.67-3.22.08,0,.15.06.16.14,0,.08-.05.14-.12.16Z",
  "M90.58,38.02c-2.18,3.64-4.43,7.24-6.65,10.85l-3.36,5.4-.85,1.35-.42.67-.21.34-.09.15c.04-.07.08-.16.08-.25,0-.18-.08-.33-.25-.43-.07-.05-.21-.07-.25-.07l.19-.02.76-.07c.51-.04,1.02-.11,1.52-.2,8.08-1.27,15.43-6.5,19.2-13.61l.06-.12.1-.11.71-.82.39-.43.17-.17c-.65.73.92-1.88,2.14,1.29-.09.28-.13.3-.15.34l-.19.3-1.17,1.79c-.75,1.18-1.46,2.38-2.07,3.6-.6,1.21-1.13,2.48-1.31,3.63-.14,1.29,0,1.35,1.13,2.05.95.49,2.13.59,3.21.29.54-.15,1.06-.39,1.52-.71.49-.35,1.07-.83,1.6-1.25,2.16-1.77,4.23-3.72,6.29-5.67,4.13-3.91,8.12-7.99,12.13-12.07l1.53-1.53c.14-.13.26-.25.46-.41.02-.01.06-.05.13-.09-.27.27.9-.98,1.22.87-.09.24-.13.26-.16.33-.08.12-.14.2-.2.26l-.66.83c-.85,1.1-1.63,2.26-2.25,3.49-.62,1.22-1.12,2.52-1.24,3.84-.13,1.31.16,2.63.96,3.67,1.55,2.17,4.73,2.74,7.16,1.63,2.49-1.14,4.59-3.16,6.54-5.18,1.94-2.06,3.72-4.29,5.27-6.64.19-.29.38-.59.55-.89l.24-.44.09-.21s.03-.06.03-.07c0,0,0-.02,0,0,0,0,0,.01,0,.1-.03,0,.13.42.39.42.23.03.22-.01.27-.02.03-.01.01,0,0,0l-.17.14-.4.35-.78.72c-1.01.97-1.96,1.99-2.63,3.14-.67,1.14-1.03,2.46-.97,3.7.08,1.23.7,2.39,1.7,2.98.98.64,2.18.57,3.37.09,1.19-.46,2.37-1.28,3.54-2.02,4.63-3.13,8.63-7.14,11.76-11.73,1.57-2.3,2.88-4.75,3.97-7.3.27-.64.54-1.27.77-1.93l.36-.97c.02-.09.01-.08,0-.11-.02-.06-.18-.14-.18-.11,0,0,0,0-.03.02-.02.02,0,0-.06.04l-.2.16-.8.65c-4.21,3.54-7.61,8.04-9.83,13.05-.28.62-.53,1.26-.78,1.9-.12.32-.23.64-.34.97l-.17.48c-.04.14-.08.28-.12.41-.27,1.12-.22,2.19.24,3.07.44.88,1.15,1.39,2.21,1.61,1.05.22,2.32.1,3.55-.19,1.25-.28,2.43-.81,3.71-1.39.64-.27,1.25-.59,1.87-.9.62-.3,1.23-.63,1.83-.98,2.42-1.35,4.72-2.91,6.89-4.64,4.31-3.49,8.13-7.63,11.15-12.31.76-1.16,1.46-2.37,2.13-3.6l.95-1.86c.03-.07.02-.07.02-.11,0-.04-.05-.09-.09-.12-.04-.02-.05-.02-.09-.02-.02.01-.02,0-.06.02l-.22.13-.45.26c-.59.35-1.18.71-1.75,1.1-1.14.78-2.25,1.61-3.31,2.5-2.11,1.79-4.01,3.85-5.63,6.12-1.61,2.27-3,4.73-3.82,7.36-.83,2.61-1.08,5.47-.2,8.09.85,2.59,2.71,5,5.37,5.99.08.03.12.11.09.19-.03.08-.11.12-.19.09-.7-.21-1.37-.51-2-.89-.62-.39-1.2-.85-1.72-1.37-1.03-1.06-1.83-2.33-2.38-3.71-1.12-2.78-1.04-5.92-.3-8.77.76-2.87,2.11-5.52,3.69-7.97,1.6-2.46,3.5-4.72,5.66-6.73,1.08-1,2.22-1.94,3.42-2.8.6-.43,1.22-.84,1.84-1.23l.47-.29.24-.14c.12-.07.28-.15.43-.2.63-.24,1.39-.19,1.99.11.59.3,1.06.81,1.3,1.45.24.63.2,1.39-.08,1.97l-.95,1.99c-.67,1.3-1.36,2.59-2.14,3.84-3.07,4.99-6.91,9.54-11.47,13.27-2.27,1.87-4.7,3.55-7.25,5.02-.63.38-1.28.73-1.94,1.06-.65.34-1.31.69-1.98.98-1.3.62-2.76,1.25-4.3,1.6-1.54.36-3.18.56-4.95.21-.87-.18-1.78-.53-2.57-1.11-.8-.57-1.44-1.37-1.85-2.2-.87-1.68-.9-3.66-.45-5.29.06-.21.12-.41.18-.61l.19-.53c.13-.35.25-.7.39-1.05.28-.69.56-1.38.88-2.05,2.5-5.41,6.24-10.21,10.84-13.96l.88-.69.22-.17c.08-.06.26-.18.39-.26.29-.17.63-.28.98-.34,1.43-.2,2.74.65,3.22,1.93.25.64.21,1.41,0,1.99l-.4,1.03c-.25.69-.55,1.37-.85,2.04-1.21,2.69-2.69,5.25-4.41,7.63-3.42,4.77-7.77,8.88-12.76,11.94-1.27.73-2.48,1.52-3.98,2.05-.75.25-1.56.44-2.42.4-.86-.04-1.73-.32-2.43-.8-1.45-.94-2.24-2.64-2.28-4.25-.02-1.63.49-3.15,1.3-4.45.82-1.29,1.88-2.35,2.97-3.32l.82-.71.41-.35c.06-.06.14-.12.24-.2.06-.04.11-.08.22-.13.09-.02.12-.08.4-.04.31,0,.49.48.46.52.01.14,0,.19-.01.24-.01.06-.02.09-.03.12-.02.07-.04.12-.07.18-.04.1-.09.19-.14.28-.09.17-.19.33-.28.49-.19.32-.39.62-.6.92-1.65,2.38-3.49,4.6-5.47,6.7-1,1.04-2.04,2.05-3.16,2.97-1.13.91-2.31,1.79-3.68,2.41-1.39.63-2.97.82-4.48.52-1.51-.29-2.92-1.13-3.89-2.36-1-1.21-1.41-2.87-1.29-4.4.11-1.54.59-2.98,1.2-4.33.62-1.35,1.39-2.61,2.23-3.81l.64-.87c.06-.08.1-.14.12-.17.01-.01.02-.06-.03.09.34,1.79,1.43.58,1.13.87.03-.02.04-.03.02-.01l-.32.32-1.44,1.56c-3.82,4.25-7.66,8.51-11.66,12.63-2.01,2.06-4.08,4.06-6.29,5.97-.57.49-1.08.93-1.76,1.41-.71.5-1.5.88-2.34,1.11-1.67.47-3.53.35-5.14-.47-.4-.21-.78-.45-1.13-.72-.18-.16-.32-.26-.53-.46-.22-.22-.4-.47-.54-.74-.56-1.09-.47-2.1-.35-2.94.29-1.69.94-3.06,1.6-4.4.68-1.33,1.44-2.59,2.24-3.81l1.19-1.79.1-.15s-.01-.02-.09.22c1.23,3.1,2.72.58,2.05,1.32.02-.02,0,0-.02.02l-.33.36-.7.8.16-.23c-2.16,3.91-5.29,7.2-8.94,9.66-3.66,2.46-7.89,4.04-12.25,4.57-.54.07-1.09.13-1.64.14l-.82.04h-.21c-.17.02-.44-.03-.63-.14-.4-.23-.63-.64-.63-1.09,0-.22.07-.45.19-.63l.12-.18.23-.33.45-.65.91-1.3,3.66-5.2c2.45-3.46,4.89-6.93,7.39-10.36.05-.07.14-.08.21-.03.06.05.08.13.04.2Z",
  "M195.44,51.42c3.89-3.99,7.87-7.89,11.82-11.83l5.98-5.85c1.04-.97,2.24-2.01,3.91-2.47.83-.22,1.7-.24,2.57-.04.86.2,1.75.69,2.35,1.5.58.78.83,1.8.77,2.68-.04.9-.3,1.68-.58,2.4-.3.72-.66,1.38-1.03,2.01l-1.09,1.8-4.41,7.1c-.73,1.18-1.47,2.36-2.17,3.53l-.49.86-.09.17s-.02.04,0,0l.02-.06c.02-.07.05-.22.04-.34.07-.98-1.22-1.55-1.81-1.19-.1.03-.22.12-.27.15-.07.05-.1.09-.09.08l.08-.1.16-.2,1.34-1.59c1.82-2.15,3.75-4.2,5.73-6.2,1.98-2,4.05-3.91,6.18-5.75,1.06-.92,2.14-1.82,3.25-2.69,1.11-.86,2.18-1.75,3.43-2.56,1.24-.8,2.68-1.52,4.33-1.68,1.66-.13,3.35.35,4.61,1.57.62.6,1.05,1.47,1.18,2.33.12.87-.03,1.72-.28,2.45-.51,1.46-1.34,2.65-1.82,3.8-.41,1.08-.41,2.52.17,3.41.29.43.72.65,1.24.6.5-.04,1.05-.36,1.58-.76,2.19-1.69,4.4-3.41,6.58-5.14,4.38-3.44,8.72-6.94,13.04-10.45l.56.85c-2.29,1.27-4.58,2.56-6.4,4.34-.9.88-1.69,1.88-2.23,2.96-.52,1.07-.78,2.29-.76,3.49.02,1.2.31,2.39.91,3.35.6.96,1.5,1.65,2.56,1.91,1.06.27,2.24.16,3.39-.18,1.15-.34,2.29-.88,3.38-1.5,2.17-1.22,4.13-2.83,5.22-4.87,1.1-1.95,1.12-4.52.08-6.33-.52-.88-1.31-1.6-2.17-1.82-.89-.25-1.97-.12-2.84.33-.88.44-1.49,1.18-1.57,1.93-.11.79.23,1.67.92,2.37.7.71,1.63,1.21,2.64,1.38,1.05.19,2.21.12,3.39-.09,1.18-.21,2.42-.56,3.66-.95l1.85-.56,1.83-.64c4.88-1.68,9.6-3.86,14.14-6.37,4.55-2.49,8.94-5.3,13.11-8.41,4.19-3.08,8.2-6.43,11.97-10.03l-.2.25.15-.26c.04-.07.09-.17.08-.15,0,0-.02.04-.03.12,0,.05-.02.1-.02.15v.07c0,.05,0,.16.02.23.06.17.04.27.35.62.13.13.33.24.45.27.1.04.21.06.33.07.1.01.26,0,.29-.02l.1-.02c.06-.01.15-.05.17-.06.04-.01.08-.04.1-.06.02-.01.04-.03.03-.02-.01,0-.09.07-.15.14-.28.27-.59.61-.88.94-.59.67-1.18,1.37-1.76,2.08-1.16,1.41-2.28,2.87-3.42,4.31-2.25,2.9-4.44,5.87-6.53,8.89-2.09,3.03-4.1,6.11-5.97,9.27-1.84,3.17-3.6,6.43-4.68,9.94-.02.08-.11.13-.18.1-.08-.02-.12-.1-.11-.18.79-3.65,2.39-7.06,4.04-10.38,1.67-3.32,3.55-6.53,5.52-9.68,1.97-3.15,4.03-6.24,6.17-9.28,1.06-1.52,2.18-3.01,3.32-4.49.57-.74,1.15-1.47,1.76-2.2.31-.37.61-.72.99-1.11.1-.1.19-.19.36-.33.04-.03.1-.08.17-.12.04-.03.12-.07.18-.1.03-.02.14-.06.21-.08l.12-.03s.21-.03.32-.02c.12,0,.24.03.35.07.12.04.33.15.46.29.32.36.3.48.36.66.02.08.03.19.03.25v.1c0,.06-.01.13-.03.19-.03.13-.06.23-.08.28-.17.43-.28.58-.41.82l-.06.12-.13.14c-3.75,3.78-7.74,7.33-11.95,10.61-4.22,3.26-8.7,6.2-13.36,8.83-4.67,2.61-9.56,4.85-14.65,6.58l-1.91.63-1.94.56c-1.29.38-2.59.73-4.01.96-1.41.23-2.93.32-4.47.01-1.58-.31-3.07-1.11-4.2-2.3-1.13-1.18-1.92-2.97-1.62-4.82.14-.93.58-1.79,1.14-2.46.57-.68,1.28-1.18,2.02-1.55,1.49-.71,3.19-.92,4.85-.45,1.71.5,2.96,1.76,3.72,3.15,1.49,2.83,1.25,6.2-.27,8.81-1.5,2.59-3.87,4.37-6.31,5.62-1.22.62-2.51,1.18-3.9,1.52-1.38.34-2.93.46-4.42.01-1.49-.42-2.79-1.52-3.51-2.83-.74-1.32-1.03-2.79-1-4.22.03-1.43.38-2.85,1.06-4.12.68-1.25,1.6-2.31,2.61-3.23,2.05-1.83,4.44-3.1,6.76-4.33l.56.85c-4.39,3.43-8.75,6.89-13.08,10.39-2.18,1.74-4.32,3.5-6.49,5.28-.57.44-1.23.92-2.13,1.04-.87.13-1.88-.31-2.38-1.04-.52-.71-.72-1.51-.79-2.29-.06-.78.02-1.57.27-2.34.53-1.45,1.27-2.61,1.62-3.81.37-1.18.18-2.27-.61-2.96-.77-.71-2.02-1.03-3.11-.88-1.13.16-2.26.75-3.31,1.5-1.05.75-2.1,1.69-3.15,2.58l-3.1,2.74c-2.04,1.85-4.01,3.78-5.95,5.74-1.93,1.97-3.79,4-5.61,6.07l-1.37,1.59-.17.2-.09.1c-.05.05-.14.15-.27.26-.07.05-.21.14-.32.19-.61.37-1.92-.2-1.85-1.21,0-.14.03-.31.05-.4l.04-.12c.05-.13.08-.18.11-.24l.15-.29c.19-.34.37-.64.56-.95.74-1.21,1.49-2.38,2.24-3.56l4.54-7.01,1.12-1.75c.35-.56.67-1.12.92-1.68.51-1.13.64-2.22.16-2.9-.42-.68-1.6-1.01-2.65-.76-1.06.23-2.12,1-3.12,1.88l-6.24,5.54c-4.2,3.66-8.37,7.36-12.62,10.96-.06.05-.16.05-.21-.02-.05-.06-.05-.15,0-.2Z",
  "M334.15,53.35c6.69-5.63,10.14-14.5,17.82-19.05,1.96-1.08,4.31-1.62,6.58-1.25,5.67.95.31,9.19-1.26,11.88-1.07,1.71-2.26,3.44-3.4,5.1,0,0-.09.15-.09.15,0,0-.03.05-.03.05.06-.08.08-.27.06-.42-.05-.17-.02-.17-.19-.4-.18-.27-.74-.32-.89-.19,4.74-2.81,8.96-7.98,13.5-11.67,2.4-1.96,5.2-4,8.48-4.3,1.43-.14,2.95.24,4.2.97.81.51,1.55,1.02,2.01,1.96,1.36,3.46-2.16,6.56-4.18,8.74-1.46,1.44-3.01,2.77-4.48,4.09l.26-.38c.22-.38-.05-.99-.42-1.2-.22-.15-.53-.16-.74-.11-.09.02-.16.06-.14.05-.02.01-.02,0,0,0,.48-.31,1.43-1.04,1.91-1.4,4.88-3.66,9.88-7.67,15.01-10.99,1.55-.95,3.23-1.91,5.32-2.1,3.44-.41,6.17,2.95,5.64,6.24-.26,2.9-2.33,5.37-4.11,7.33,0,0-1.02-1.63-1.02-1.63,13.49-3.8,26.5-9.29,38.78-16.04,0,0-1.92,3.13-1.92,3.13-1.6,2.59-4.6,3.51-7.21,4.38-2.47.8-4.93,1.7-5.81,3.74-1.02,2.04-.21,4.17,2.33,4.23,2.39.07,4.9-1.04,7.13-1.98,2.01-.75,14.18-7.19,9.98-9.52-.11-.03-.19-.09-.28-.08-.94.63-1.29,2.25-1.65,3.38-.52,2.33-1.5,4.87-.87,7.28,1.52,5.87,7.76,3.96,11.42,1.26,4.21-3.03,8.4-6.34,12.53-9.6,4.13-3.28,8.23-6.61,12.28-10,4.03-3.4,8.05-6.83,11.82-10.46,1.37-1.4,2.96-2.79,3.88-4.47,0,0,0-.02,0,.06.02.14.05.3.16.41.27.29.4.18.3.21-15.37,4.51-23.04,21.25-29.9,34.45-.42.82-1.16,2.29-1.57,3.1.3-.64-.56-1.84-1.56-.96,6.77-9.31,16.68-18.65,28.68-21.3,0,0,2.02-.36,2.02-.36.33-.06.68-.12,1.07-.14.72-.02,1.69-.06,2.28.78,1.71,2.78-6.71,7.44-8.65,8.68-4.76,2.58-9.8,5.32-15.38,5.29,0,0,.74-1.74.74-1.74,6.73,5.99,17.1,4.82,24.6.74,4.98-2.55,9.93-5.35,14.13-9.01.72-.73,1.76-1.63,1.76-2.62-.21-.42-.84-.74-1.32-.81-.83-.16-1.87.14-2.83.57-2.83,1.44-5.77,3.51-8.42,5.43-2.23,1.93-3.41,5-2.99,7.92.63,4.86,5.65,7.5,10.04,8.44,6.64,1.36,13.85-.63,20.27,2.07-2.14-.81-4.42-1.14-6.69-1.21-4.57-.2-9.16.62-13.72-.21-7.59-1.24-13.76-7.25-10.01-15.11,1.06-2.18,3.02-3.72,5.01-4.98,2.88-1.87,5.73-4.87,9.59-4.63,1.14.17,2.32.81,2.76,1.93.54,1.84-1.01,3.4-2.13,4.57-4.25,4.01-9.45,6.79-14.57,9.43-9.61,5.06-20.97,5.47-28.9-2.92,0,0,2.81.13,2.81.13,2.33.1,4.88-.71,7.26-1.62,4.73-1.93,9.44-4.52,13.34-7.8.6-.52,1.26-1.15,1.55-1.76.01-.04-.03.14.08.31.11.16.19.15.14.14-.08-.03-.37-.05-.64-.03-11.34,1.36-20.81,9.19-27.83,17.81-.89,1.08-1.72,2.21-2.57,3.33-.9.96-2.33-.21-1.72-1.24,1.73-3.39,3.45-6.84,5.23-10.21,5.88-11,13.11-23.04,25.34-27.7.84-.31,1.7-.75,2.72-.77.23.01.71-.03,1.22.49.34.37.37.98.23,1.41-.96,2.18-2.83,3.66-4.4,5.32-7.71,7.34-15.96,13.96-24.25,20.6-4.17,3.29-8.28,6.54-12.65,9.69-3.4,2.36-8.47,4.52-12.16,1.44-2.38-2.03-2.98-5.36-2.36-8.26.76-2.62,1.48-10.34,5.76-8.43,6.87,4.59-6.41,11.46-10.15,13.09-3.63,1.52-9.44,4.12-12.19-.2-.85-1.52-.53-3.27.11-4.72,1.26-2.83,4.37-3.93,7-4.79,2.49-.81,4.99-1.63,6.14-3.53l1.32,1.41c-12.43,6.64-25.66,11.74-39.25,15.42,0,0,2.29-2.57,2.29-2.57,2.05-2.26,4.52-5.26,3.35-8.32-1.44-3.25-5.28-1.73-7.64-.13-5.57,3.61-11.12,8.15-16.49,12.1,0,0-.3.21-.3.21l-.18.12-.15.08s-.1.05-.22.08c-.26.07-.52.04-.78-.1-.42-.2-.6-.85-.43-1.23,0,0,.1-.24.1-.24l.16-.15c1.79-1.82,10.99-8.74,7.52-11.23-5.18-3.74-11.46,3.47-15.4,6.74-3.01,2.68-5.94,5.59-9.66,7.62-.16.12-.73.08-.92-.19-.19-.23-.15-.25-.2-.42-.06-.35.15-.62.33-.88,0,0,.24-.34.24-.34l.48-.66c1.3-1.9,10.18-13.36,5.07-14.09-2.04-.39-4.16.03-6.03.98-7.62,4.29-11.41,12.99-18.21,18.31h0Z",
  "M553.31,34.46c-6.13.24-13.66,4.26-15.11,10.51-.22,1.56.51,3.33,2.1,3.67,1.64.33,3.07-1.02,4.25-2.14,3.38-3.25,5.99-7.31,7.64-11.67,0,0,.06-.16.06-.16l.11-.14c.2-.21.11-.23.59-.51,2.85.43,1.24,1.8,1.64,1.4-.08.3-.12.34-.17.47-.92,2.29-2.32,4.73-2.34,7.21.11,1.63,1.11,3.26,2.63,3.74,4.43.99,8.5-3.19,11.76-6.03,4.26-3.97,8.16-8.59,12.91-12.1,1.14-.91,2.79.49,1.98,1.79-4.94,6.72-10.33,14.92-16.16,20.87-.22-.24.5.57-.29-1.03-.8-.15-.52.04-.59-.02l.07-.04c3.17-2.15,9.65-7.31,12.79-9.7,2.66-2.08,5.29-4.18,7.98-6.23,1.35-1.02,2.77-2.06,4.47-2.64,2.55-.93,6.01-.34,7.18,2.39,1.3,2.85-1.29,5.28-3.35,6.82-1.45,1.05-3.36,4.05-1.29,5.25.56.27,1.28.25,1.9-.01,2.96-1.37,5.91-3.05,8.64-4.93,3.55-2.55,7.33-5.28,9.32-9.16-.03.12-.05.26.07.58.22.54.94.72,1.3.53-1.29,1.07-2.45,2.56-3.54,3.97-1.74,2.4-3.79,5.09-2.98,8.15.7,2.91,3.54,4.14,6.41,3.78,6.29-.9,11.77-5.28,15.96-9.86,1.26-1.44,2.39-3,3.4-4.62.1-.17-.21.31-.2.64-.03.36.08.67.24.91.31.53,1.13.79,1.69.56-4.1,1.54-7.62,4.32-10.45,7.65-8.88,10.33-11.24,24.3-19.98,34.92-1.26,1.76-3.4,2.97-5.62,2.45-4.96-1.26-3.64-7.73-.76-10.43,3.73-3.92,9.38-4.94,14.19-6.39,9.64-2.82,18.6-7.71,26.31-14.2.13-.13.35.1.2.22-4.87,4.7-10.47,8.66-16.54,11.76-5.84,3.25-12.86,4.55-18.74,7.41-2.57,1.35-5.25,3.65-5.53,6.57-.08,1.15.2,2.34,1.4,2.56,1.19.26,2.36-.64,2.99-1.62,10.12-13.22,12.14-33.3,27.78-42.16,1.15-.66,2.45-1.21,3.69-1.68,1.08-.42,2.38.51,2.25,1.71,0,.39-.33.9-.26.78,0,0-.18.28-.18.28-4.72,7.18-12.81,14.22-21.6,15.33-6.81.87-11.52-5.5-8.48-11.71,1.89-3.41,4.1-6.31,7.09-8.82.57-.44,1.58-.46,1.98.37.21.47.1.75.03,1.05-2.21,4.44-6.56,7.29-10.49,9.94-2.9,1.83-5.87,3.44-9.08,4.8-.94.35-2.06.38-3.01-.11-3.08-1.64-.96-5.97,1.18-7.32,1.3-1.06,2.71-2.06,3.18-3.44.5-1.42-.23-2.99-1.52-3.73-2.92-1.65-6.31.27-8.71,2.18-6.94,5.35-13.6,11.08-20.53,16.44-.05.04-.1.07-.2.12-.12-.04.11.19-.74.03-.8-1.65-.03-.89-.23-1.17,5.48-6.03,10.8-14.74,15.27-21.29-.38.59-.07,1.47.65,1.65.24.07.54.04.75-.06.28-.15.14-.08.14-.07l-.12.09c-1.87,1.43-3.55,3.09-5.23,4.78-3.58,3.57-7.02,7.46-11.11,10.58-2.15,1.6-4.65,3.1-7.44,3.44-3.74.64-7.31-2.61-7.34-6.3-.08-2.39,1-4.51,1.89-6.6.17-.42.73-1.55.84-1.82.41-.44-1.17.83,1.61,1.28.37-.21.26-.2.3-.21.01-.02-.02.02-.04.04,0,0,.17-.3.17-.3-1.48,3.74-3.68,7.18-6.39,10.11-1.44,1.49-2.78,2.92-4.65,3.97-2,1.26-5.09.62-6.13-1.68-1.93-4.37,1.8-8.17,4.96-10.51,3.25-2.31,7.22-3.55,11.15-3.4.2,0,.18.3,0,.3h0Z",
  "M652.86,51.14c7.85-7.81,17.95-13.2,28.68-15.92-.97,1.45-3.86,6.12-4.85,7.63-.74,1.21-2.35,3.66-3.1,4.87-.17.27.12-.12.04-.43-.05-.6-.84-.81-1.22-.48.16-.13.76-.66.94-.8,2.21-1.88,6.5-5.58,8.77-7.51,1.74-1.41,3.47-3.23,5.62-4.14,2.61-1.24,6.08.18,7.23,2.81,2.34,4.8-2.18,9.24-5.28,12.37,0,0-.12.12-.12.12,0,0-.05.06-.01.01,0,0,.08-.12.08-.12.71-1.28-.82-2.57-1.96-1.7,5.67-4.44,11.71-8.36,18.05-11.78,2.49-1.62,7.15-2.25,8.19,1.43.83,2.72-2.69,5.34-1.52,7.5,2.26,3,6.07.04,8.68-1.19,8.14-4.14,17.12-7.21,23.83-13.6,0,0,.07-.08.07-.08,0,0,0,0,0,0-.01.04,0-.05-.05.15-.3-.02.52.79.49.58.12,0,.16-.03.14-.02-3.8,2.7-7.65,5.98-10.19,9.9-1.22,1.98-.82,4.88,1.34,5.89,3.07,1.39,8.48-2.78,10.52-4.99,1.72-2.06,3.44-6.07,1.72-8.35-4.52-4.47-7,2.48-4.02,5.45,1.18.83,2.66,1.01,4.11.9,8.83-1.24,16.26-8.51,19.17-16.72,2.54,1.15,5.25,2.1,8.03,2.5,3.54.48,4.74,5.24,1.85,7.34-2.11,1.68-6.05,3.96-4.99,7.1.46,1.23,1.79,1.99,3.05,2.54,2.47,1.1,5.18,1.64,7.89,1.62,7.65.02,15.43-4.08,19.24-10.81.66-1.29,1.57-2.74,1.39-4.18-.17-.78-.4-1.3-1.26-1.43-1.5-.14-3.17.23-4.6.78-12.33,5.22-10.3,21.76,2.37,24.84.18.03.14.33-.05.3-7.18-.92-13-8.41-11.87-15.7.93-6.18,6.19-11.43,12.4-12.32,1.39-.21,3.15-.25,4.25,1,2.09,2.51.73,5.47-.52,7.86-3.51,6.59-10.33,11.03-17.63,12.3-5.18.98-14.98-.02-17.57-5.59-1.61-3.62,1.09-7.26,3.83-9.29,0,0,1.39-1.05,1.39-1.05,0,0,.7-.52.7-.52.71-.44.44-1.55-.35-1.66-2.52-.39-4.99-1.09-7.32-2.13,0,0,2.09-.84,2.09-.84-2.95,6.97-8.71,12.6-15.69,15.43-3.66,1.45-8.02,2.44-11.65-.18-3.34-2.98-2.94-9.67,1.53-11.31,2.54-.62,4.44.53,6.08,2.26,1.41,1.77,1.37,4.16.8,6.15-.98,3.76-3.99,6.72-7.27,8.49-1.56.89-3.23,1.86-5.25,2.13-4.79.72-7.36-4.81-4.87-8.51,2.6-3.82,6.18-6.6,9.77-9.39.42-.25.92-.77,1.48-.84,0-.22.84.62.53.63-.06.23-.07.16-.09.23-6.81,6.63-16.1,9.62-24.28,14.1-1.43.76-3.29,1.96-4.86,2.47-2.4.94-5.93-.14-6.06-3.13-.21-2.18,1.99-4.16,1.58-6.14-.95-2.22-3.66-1.27-5.52-.12-6.08,3.6-11.89,7.66-17.39,12.08-1.07.88-2.78-.39-1.98-1.75.11-.19.28-.35.44-.52.15-.16.71-.7.87-.87,1.65-1.74,3.59-3.82,4.18-6.12.62-2.32-1.75-5.03-4.13-3.89-.8.31-1.61.9-2.43,1.57-3.61,3.02-8.46,6.97-12.08,9.96,0,0-.32.26-.32.26-1.09,1.02-3.06-.24-2.39-1.75.37-.63,1.17-1.76,1.6-2.39,1.16-1.65,4.4-6.42,5.6-8.16,0,0,1,1.4,1,1.4-4.87,1.18-9.57,3.01-14.07,5.28-4.49,2.28-8.69,5.14-12.57,8.41-.13.12-.34-.1-.2-.22h0Z",
  "M280.99,24.8c.92-.11,1.8-.12,2.68-.1.88-.01,1.75.04,2.61.1.87.05,1.73.13,2.58.24.86.08,1.71.21,2.55.42.84.19,1.68.44,2.53.7.85.22,1.7.44,2.56.56.86.1,1.73.14,2.6.12.87-.02,1.74-.13,2.61-.23,1.74-.27,3.46-.49,5.17-.62.86-.1,1.71-.18,2.57-.26.85-.11,1.71-.16,2.57-.2,3.44-.13,6.87-.22,10.47.12.09,0,.15.08.14.17,0,.06-.04.1-.09.13-3.27,1.57-6.76,2.36-10.27,2.78-1.76.18-3.54.15-5.31.1-.88-.04-1.77-.08-2.65-.17-.88-.1-1.76-.27-2.64-.4-.88-.16-1.75-.32-2.62-.4-.87-.12-1.74-.18-2.62-.18-1.75-.04-3.54.28-5.32.27-1.77-.03-3.51-.4-5.22-.84-1.7-.5-3.39-1.08-4.97-2.01-.08-.04-.1-.14-.06-.22.03-.04.07-.07.12-.08Z",
  "M146.38,21.03c-.16-.56-.13-.89-.08-1.12.07-.21.17-.39.39-.29.23.11.57.48.74.49.18.03.24-.18.26-.5,0-.33.04-.6.14-.73.08-.17.16-.34.31-.35.15-.02.34.04.57.18.23.13.5.35.86.72.07.08.12.17.14.27.09.5.11.86.07,1.12-.03.28-.11.46-.22.58-.12.11-.31.07-.49.04-.17,0-.4-.14-.66-.34-.26-.19-.46-.27-.55-.11-.09.15-.02.64-.06.88-.04.23-.22.18-.4.11-.2-.1-.44-.28-.85-.69h0c-.07-.08-.12-.17-.15-.26Z",
  "M824.61,31.25c12.83-4.57,24.01-13.51,31.07-25.15,0,0,1.69,1.08,1.69,1.08-6.91,10.89-12.78,22.43-17.33,34.5-.17.49-.98,2.62-1.15,3.12,0,0-.03.09-.01.03.05-.14.06-.3.03-.46-.12-.59-.77-.88-1.29-.61-.06.04-.04.03-.01,0,0,0,.26-.16.26-.16,4.1-2.55,11.13-6.92,15.27-9.43,1.58-1.04,3.14,1.18,1.63,2.32-3.9,3.24-7.45,6.91-10.52,10.96,0,0-.45-1.64-.45-1.64,5.28,2.38,12.53-1.52,13.51-7.27,0,0,.32.76.32.76-1.76-1.28-4.13-1.76-6.28-1.25,0,0-.24-1.3-.24-1.3,9.66-.98,19.15-3.83,27.78-8.3,0,0,.45.8.45.8-2.51,1.57-5.06,3.18-6.73,5.52-2.61,3.23-2.31,9.11,2.42,9.94,2.77.38,5.53-1.19,7.44-3.13,2.94-2.76,4.49-7.69,1.65-10.99-1.55-1.96-4.8-2.36-6.49-.48-.77.83-1.1,2.04-.74,3.13.76,2.21,3.64,3.74,5.94,3.24,2.67-.48,4.84-2.42,6.63-4.44,1.84-2.17,4.02-4.89,3.59-7.78-.51-1.43.72-3.01,2.25-2.78.38.07,1.3.23,1.69.3,3.23.5,6.54.53,9.77.08.91-.18,1.95.36,2.31,1.2.48.92.11,2.21-.8,2.75-1.38,1-2.78,2.19-3.74,3.51-2.22,2.66-2.57,7.64,1.07,9.07,4.78,1.46,13.41-6.16,16.55-9.65-.22.39-.13,1,.13,1.38,0,0,2.26.44,2.26.44-1.71,1.19-3.32,2.45-4.39,3.91-2.43,3.33-.33,6.34,3.43,4.9,5.47-1.97,10.68-5,15.2-8.68,0,0,.15-.13.15-.13.08-.07.18-.14.27-.19.52-.32,1.37-.28,1.84.36.2.3.19.34.25.55.09.61-.03.73-.16,1.08-1.83,3.87-4.34,7.73-4.64,12.01,0,0-2.11-.88-2.11-.88,4.94-4.56,10.38-8.51,16.31-11.7,3.5-2.1,8.4-1.86,9.18,2.96.45,3.86-2.56,6.69-5.22,8.79,0,0-.36-1.19-.36-1.19,7.02.95,14.51-2.04,19.1-7.66.11-.15.36.04.24.18-4.62,6.47-13.06,9.83-21.04,8.69,0,0,1.2-1.05,1.2-1.05,2.26-1.92,4.87-4.42,4.43-7.51-.21-1.36-1.24-2.44-2.48-2.62-1.26-.19-2.73.41-4.08,1.17-5.59,3.28-10.87,7.25-15.55,11.75,0,0-2.05,1.97-2.05,1.97l-.06-2.85c.13-4.6,2.49-8.68,4.36-12.68,0,0,.16-.34.16-.34l.06-.14s.03-.11,0,.02l-.02.13c0,.09-.04.01.02.45.06.2.05.23.24.53.21.38.93.61,1.14.55.25,0,.63-.13.77-.27.05-.04,0,0,0,0,0,0-.04.03-.04.03-4.81,4.1-10.22,7.42-16.18,9.58-4.42,1.78-9.22-.98-8.49-6.05.58-3.77,3.93-6.4,6.68-8.31,0,0,1.36-.96,1.36-.96,0,0,.9,1.39.9,1.39.9,1.45-.62,2.81-1.53,3.76-4.01,3.7-8.22,7.44-13.52,9.17-6.03,2.11-11.26-3.02-9.92-9.13.7-3.35,3.04-6.05,5.64-8.01.35-.26.7-.52,1.05-.77-.59.43-.23,1.38.48,1.33-3.7.48-7.95.36-11.77-.42,0,0-.47-.1-.47-.1.43.08.83-.41.71-.82,1.09,5.37-3.95,10.56-7.85,13.52-2.68,1.96-6.69,2.82-9.66.96-3.28-1.68-4.93-6.28-1.99-9.14,2.56-2.68,7.18-2.09,9.32.76,3.3,4.05,1.56,9.92-2.04,13.11-3.16,3.32-9.7,5.24-12.58.58-3.59-6.25,3.01-12,8-14.68,0,0,.45.8.45.8-8.76,4.51-18.28,7.49-28.05,8.8,0,0-.24-1.3-.24-1.3,2.68-.73,5.64-.14,7.9,1.52-.54,5.44-5.48,9.64-10.78,10.21-2.18.3-4.45-.27-6.45-1.2,0,0,.8-1.13.8-1.13,2.95-4.23,6.97-8.59,10.66-11.68-.98,1,.27,2.53,1.41,1.84,0,0-.06.04-.06.04,0,0-.26.16-.26.16-.72.45-1.91,1.22-2.57,1.63-2.59,1.63-9.84,6.15-12.38,7.74,0,0-.26.16-.26.16l-.14.08c-1.33.77-3.09-.66-2.54-2.13.18-.58,1.01-2.64,1.23-3.27,4.7-12.19,10.77-23.86,18.13-34.66,0,0,1.69,1.08,1.69,1.08-7.51,11.66-19.34,20.59-32.67,24.37-.17.06-.27-.23-.09-.29h0Z",
  "M987.04,28.24c-5.28,2.04-10.6,5.8-12.99,10.9-1.36,3.91,3.84,4.64,6.56,3.37,2.02-.77,3.82-2.28,4.84-4.17.75-2.02.36-4.48.19-6.65-.08-.61-.24-1.9-.33-2.52-.09-.76.44-1.74,1.59-1.55,1.27.63.78.71.91.68.08.15.08.18.12.29,5.9,13.01-2.09,27.77-8.77,39.7-3.4,5.98-7.09,11.81-11.23,17.35-2.29,2.83-4.08,6.17-7.89,7.42-4.73,1.4-8.11-3.68-7.19-7.95.8-3.92,3.88-6.45,6.62-8.82,0,0,7.74-6.74,7.74-6.74,15.44-13.42,30.64-27.48,45.46-41.62.12-.13.34.07.22.21-2.2,2.64-4.48,5.2-6.76,7.78-6.91,7.65-14.09,15.06-21.55,22.19-4.98,4.74-10.06,9.38-15.28,13.86-2.6,2.26-5.26,4.43-7.91,6.62-2.37,1.98-5.14,4.07-5.84,7.05-.37,1.85.23,4.26,2.06,5.02,2.11.71,3.91-.82,5.52-2.37,5.76-6.24,10.92-13.11,15.21-20.46,6.56-11.33,13.02-25.58,7.05-38.4,0-.01,0,0,0,.02,0-.02.02.07.06.13.13-.04-.36.04.9.66,1.05.13,1.5-.53,1.59-1.24,0,0,0-.09,0-.09v-.02s0,0,0,0c.08.58.27,1.89.34,2.49.31,3.18.79,6.93-1.48,9.59-3.11,4.29-11.84,6.94-14.72,1.13-2.12-6.29,9.72-13.28,14.85-14.15.17-.03.26.22.09.29h0Z",
  "M1049.91,29.45c-5.42,1.29-10.23,5.23-12.08,10.44-.67,1.53-.09,3.91.46,4.52,0,0,.45.45.45.45l-.13-.11c5.64,3.6,9-11.12,9.49-14.88.15.97,1.42,1.32,2.05.7.05-.05.06-.06.09-.1-.01.03-.02.03-.05.1-.71,1.58-1.43,3.22-1.9,4.8-1.26,3.74-.34,9.18,4.34,9.48,1.33.06,2.79-.34,4.2-.92,4.3-1.77,8.22-4.6,11.25-8.16,2.1-2.42,3.56-5.44,6.18-7.46,3.32-2.91,10.06-2.32,9.69,3.15-.28,3.9-6.62,5.67-5.4,9.68.46.88,1.31,1.39,2.37,1.48,1.9.37,3.85.41,5.77.24,16.43-1.79,25.93-17.02,33.2-30.36,0,0,.04-.07.04-.07l.04-.06s.22-.3.22-.3c0,0,.09-.12.09-.12,0,0,.07-.08.07-.08.05-.05.1-.1.16-.15.21-.12-.22.07.51-.29,2.27-.08,2.07,1.37,2.11,1.29.04.69-.05.61-.12.89-.14.29-.25.54-.39.75-1.03,1.82-3.13,5.26-4.24,7.08-3.15,5.32-7.04,10.28-10.14,15.61-.04.11-.18.31-.23.42-.26.38.21.83.57.8.21-.03.25,0,.83-.82l1.39-1.88s2.78-3.75,2.78-3.75c1.5-1.91,1.95-3.55-.01-4.82-.65-.22-1.45-.66-1.83-1.34-1.18-1.8.17-4.38,2.29-4.38,0,0,.59-.03.59-.03,6.24-.36,12.5-.47,18.74-.37.17,0,.2.29,0,.3-6.22.48-12.43,1.07-18.61,1.74-.27.04-.74.06-.95.15-.82.28-.82,1.62.02,1.84,1.35.42,2.55,1.45,3.1,2.94.7,1.96-.4,3.87-1.41,5.33-.9,1.31-3.13,4.52-3.99,5.78-1.35,2.52-4.47,2.72-6,.28-.67-1.1-.48-2.51.16-3.57,2.97-5.57,6.78-10.51,9.94-15.95,1.18-1.96,3.34-5.37,4.42-7.37-.03.11-.14.22-.09.79.04-.1-.17,1.35,2.09,1.28.73-.36.29-.16.49-.27.05-.04.11-.1.15-.15.02-.03,0,0,0,0l-.13.17.08-.13c-4.86,8.29-9.99,17.06-17.67,23.23-6.42,5.16-14.85,8.44-23.14,7.03-1.83-.28-3.72-.76-4.53-2.67-.74-1.85.27-3.7,1.42-5.04,1.92-2.08,5.53-4.11,3.87-7.37-.55-1.27-2.38-1.78-3.65-1.81-3.14.06-5.52,2.61-7.15,5.12-1.73,2.69-3.64,5.45-6.03,7.66-3.69,3.28-8.04,6.57-13.19,6.95-6.51-.06-8.68-7.22-6.89-12.54.62-2.03,1.38-3.86,2.35-5.66.33-.51,1-.94,1.81-.62.81.34.94,1.25.84,1.95-.71,4.36-2.01,8.42-4.04,12.43-.4.74-.94,1.53-1.52,2.18-1.82,2.32-5.24,3.59-7.74,1.46-1.07-.96-1.62-2.44-1.71-3.86.15-7,7.67-12.55,14.15-13.34.19-.03.22.26.05.3h0Z",
  "M931.83,19.25c-.29-.37-.87-1.23-.49-1.05.29.16,1.04.85.56.06-.87-1.45.27-.62,1-.02.56.6,1.7,2.31.13,1.21-.76-.52-.12.27.03.57.17.45-1.01-.47-1.23-.77h0Z",
];

// ttds: Array containing the approximate 'time to draw' for each path.
// Computed as ttd = pathLength / 100 with some slight manual alterations for visual appeal
export const ttds = [
  2.4623478698730468, 3.2364520263671874, 0.0382356333732605, 3.041324462890625,
  0.4184152603149414, 5.470719604492188, 3.6990542602539063, 3.666595153808594,
  4.313413391113281, 2.12094482421875, 0.014786944389343262, 2.5254975891113283,
  2.4623478698730468, 3.2364520263671874, 0.0382356333732605, 3.041324462890625,
  0.4184152603149414, 4.470719604492188, 3.6990542602539063, 3.666595153808594,
  4.313413391113281, 2.12094482421875, 0.014786944389343262, 2.5254975891113283,
];