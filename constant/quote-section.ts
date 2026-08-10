export const quoteInputs = [
  {
    name: "firstName",
    label: "First Name",
    placeholder: "Ahmed",
    type: "text",
  },
  {
    name: "lastName",
    label: "Last Name",
    placeholder: "Al Mansoori",
    type: "text",
  },
  {
    name: "phone",
    label: "Phone Number",
    placeholder: "+971 50 000 0000",
    type: "tel",
  },
  {
    name: "moveFrom",
    label: "Move From",
    placeholder: "Abu Dhabi, Al Reem",
    type: "text",
  },
  {
    name: "moveTo",
    label: "Move To",
    placeholder: "Dubai, Marina",
    type: "text",
  },
  {
    name: "movingDate",
    label: "Moving Date",
    placeholder: "",
    type: "date",
  },
] as const;

export const serviceTypes = [
  {
    value: "home-moving",
    label: "Home Moving",
  },
  {
    value: "office-moving",
    label: "Office Moving",
  },
  {
    value: "villa-moving",
    label: "Villa Moving",
  },
  {
    value: "packing",
    label: "Packing Services",
  },
  {
    value: "storage",
    label: "Storage",
  },
];
