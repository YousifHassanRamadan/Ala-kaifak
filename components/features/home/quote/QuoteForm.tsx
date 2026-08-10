"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShieldCheck } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { submitQuote } from "@/app/actions/quote";

import { quoteSchema, type QuoteFormData } from "@/lib/validations";

import { quoteInputs, serviceTypes } from "@/constant/quote-section";
export function QuoteForm() {
  const { t } = useTranslation();

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),

    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      moveFrom: "",
      moveTo: "",
      movingDate: "",
      service: "",
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    try {
      const result = await submitQuote(data);

      if (!result.success) {
        toast.error(result.message);
        return;
      }

      toast.success(t("quote.toast.success"), {
        description: t("quote.toast.successDescription"),
      });

      reset();
    } catch (error) {
      console.error(error);

      toast.error(t("quote.toast.error"), {
        description: t("quote.toast.errorDescription"),
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-11"
    >
      {/* Inputs */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {quoteInputs.map((input) => (
          <div key={input.name} className="space-y-2">
            <Label htmlFor={input.name}>{t(input.label)}</Label>

            <Input
              id={input.name}
              type={input.type}
              placeholder={input.placeholder ? t(input.placeholder) : undefined}
              className="h-[52px] rounded-xl bg-card"
              {...register(input.name)}
            />

            {errors[input.name] && (
              <p className="text-sm text-destructive">
                {errors[input.name]?.message}
              </p>
            )}
          </div>
        ))}

        {/* Service */}
        <div className="space-y-2 md:col-span-2 lg:col-span-3">
          <Label htmlFor="service">{t("quote.form.service.label")}</Label>

          <Controller
            name="service"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger
                  id="service"
                  className="h-[52px] w-full rounded-xl bg-card"
                >
                  <SelectValue
                    placeholder={t("quote.form.service.placeholder")}
                  />
                </SelectTrigger>

                <SelectContent>
                  {serviceTypes.map((service) => (
                    <SelectItem key={service.value} value={service.value}>
                      {t(service.label)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />

          {errors.service && (
            <p className="text-sm text-destructive">{errors.service.message}</p>
          )}
        </div>
      </div>

      {/* Submit */}
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="
            h-14
            rounded-xl
            bg-primary
            px-8
            text-base
            font-semibold
            text-primary-foreground
            shadow-[0_10px_25px_rgba(247,144,0,0.25)]
            hover:bg-brand-orange-dark
          "
        >
          {isSubmitting
            ? t("quote.form.submit.loading")
            : t("quote.form.submit.default")}
        </Button>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <ShieldCheck className="h-[18px] w-[18px] shrink-0 text-brand-blue" />

          <span>{t("quote.form.privacy")}</span>
        </div>
      </div>
    </form>
  );
}
