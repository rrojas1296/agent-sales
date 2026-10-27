import z from "zod";

const isPostgresUrl = (value: string): boolean => {
  try {
    const url = new URL(value);
    return (
      ["postgres:", "postgresql:"].includes(url.protocol) &&
      Boolean(url.hostname) &&
      url.pathname.length > 1
    );
  } catch {
    return false;
  }
};

export const validationSchema = z.object({
  PORT: z.coerce.number().int().min(1).max(9999).default(8000),
  DATABASE_URL: z.string().refine(isPostgresUrl),
});

export type EnvironmentSchema = z.infer<typeof validationSchema>;
