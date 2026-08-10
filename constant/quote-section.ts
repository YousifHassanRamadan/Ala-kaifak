export const quoteInputs = [
  {
    name: "firstName",
    label: "quote.form.firstName.label",
    placeholder: "quote.form.firstName.placeholder",
    type: "text",
  },
  {
    name: "lastName",
    label: "quote.form.lastName.label",
    placeholder: "quote.form.lastName.placeholder",
    type: "text",
  },
  {
    name: "phone",
    label: "quote.form.phone.label",
    placeholder: "quote.form.phone.placeholder",
    type: "tel",
  },
  {
    name: "moveFrom",
    label: "quote.form.moveFrom.label",
    placeholder: "quote.form.moveFrom.placeholder",
    type: "text",
  },
  {
    name: "moveTo",
    label: "quote.form.moveTo.label",
    placeholder: "quote.form.moveTo.placeholder",
    type: "text",
  },
  {
    name: "movingDate",
    label: "quote.form.movingDate.label",
    placeholder: "",
    type: "date",
  },
] as const;

export const serviceTypes = [
  {
    value: "home-moving",
    label: "quote.form.services.homeMoving",
  },
  {
    value: "office-moving",
    label: "quote.form.services.officeMoving",
  },
  {
    value: "villa-moving",
    label: "quote.form.services.villaMoving",
  },
  {
    value: "packing",
    label: "quote.form.services.packing",
  },
  {
    value: "storage",
    label: "quote.form.services.storage",
  },
];
