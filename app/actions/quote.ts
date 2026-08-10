"use server";

import { Resend } from "resend";

import { quoteSchema, type QuoteFormData } from "@/lib/validations";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitQuote(data: QuoteFormData) {
  // Validate again on the server
  const result = quoteSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      message: "Invalid form data.",
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { firstName, lastName, phone, moveFrom, moveTo, movingDate, service } =
    result.data;

  try {
    await resend.emails.send({
      from: "Ala kaifak <onboarding@resend.dev>",
      to: process.env.ADMIN_EMAIL!,
      subject: `New Moving Quote - ${firstName} ${lastName}`,
      html: `
        <h2>New Quote Request</h2>

        <p>
          A new customer has submitted a moving quote request.
        </p>

        <hr />

        <h3>Customer Details</h3>

        <p>
          <strong>First Name:</strong> ${firstName}
        </p>

        <p>
          <strong>Last Name:</strong> ${lastName}
        </p>

        <p>
          <strong>Phone:</strong> ${phone}
        </p>

        <p>
          <strong>Move From:</strong> ${moveFrom}
        </p>

        <p>
          <strong>Move To:</strong> ${moveTo}
        </p>

        <p>
          <strong>Moving Date:</strong> ${movingDate}
        </p>

        <p>
          <strong>Service:</strong> ${service}
        </p>
      `,
    });

    return {
      success: true,
      message: "Your quote request has been sent successfully.",
    };
  } catch (error) {
    console.error("QUOTE_EMAIL_ERROR:", error);

    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
